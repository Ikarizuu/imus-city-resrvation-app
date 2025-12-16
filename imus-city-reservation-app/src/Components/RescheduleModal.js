import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import api from '../api/axiosConfig';

const modalStyles = `
    .modal {
        display: none;
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0,0,0,0.6);
    }

    .modal.show {
        display: block;
    }

    .modal-content {
        background-color: #fff;
        margin: 8% auto;
        padding: 20px;
        border-radius: 5px;
        width: 100%;
        max-width: 500px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        position: relative;
    }

    .modal h3 {
        margin-top: 0;
        color: #003366;
    }

    .modal label {
        display: block;
        margin: 10px 0 5px;
        font-weight: bold;
        color: #333;
    }

    .modal input[type="date"],
    .modal input[type="time"] {
        width: calc(100% - 16px);
        padding: 8px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 1em;
    }

    .modal button[type="submit"] {
        background-color: #06428A;
        color: #fff;
        padding: 10px 15px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        transition: background-color 0.2s ease;
    }

    .modal button[type="submit"]:hover:not(:disabled) {
        background-color: #053774;
    }

    .modal button[type="submit"]:disabled {
        background-color: #6c757d;
        cursor: not-allowed;
        opacity: 0.7;
    }

    .close {
        position: absolute;
        right: 15px;
        top: 10px;
        font-size: 20px;
        cursor: pointer;
        color: #666;
    }

    .close:hover {
        color: red;
    }

    .error-message {
        color: #d9534f;
        font-size: 14px;
        margin-top: 5px;
        margin-bottom: 10px;
    }

    .loading-spinner {
        width: 16px;
        height: 16px;
        border: 2px solid transparent;
        border-top: 2px solid #ffffff;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

const RescheduleModal = ({ isOpen, onClose, reservation, onReschedule }) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [minDate, setMinDate] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (isOpen && reservation) {
            setDate(reservation.reservation_date || '');
            setTime(reservation.reservation_time ? reservation.reservation_time.substring(0, 5) : '08:00');
            const today = new Date();
            const todayStr = today.toISOString().split('T')[0];
            setMinDate(todayStr);
            setIsLoading(false);
            setErrorMessage('');
        }
    }, [isOpen, reservation]);

    const isWeekend = (selectedDate) => {
        const date = new Date(selectedDate);
        const dayOfWeek = date.getDay(); //0 = Sunday | 6 = Saturday
        return dayOfWeek === 0 || dayOfWeek === 6;
    };

    const isPastDateTime = (selectedDate, selectedTime) => {
        const now = new Date();
        const selectedDateTime = new Date(`${selectedDate}T${selectedTime}`);
        return selectedDateTime < now;
    };

    const generateQueueId = async (selectedDate) => {
        try {
            //Use the new reschedule.php endpoint
            const response = await api.get(`/reschedule.php?date=${selectedDate}`);
            
            if (response.data.success) {
                return response.data.queueId;
            } else {
                throw new Error(response.data.message || "Failed to generate queue ID");
            }
        } catch (error) {
            console.error("Error generating queue ID:", error);
            //Fallback: generate locally
            const year = String(new Date(selectedDate).getFullYear()).slice(-2);
            const month = String(new Date(selectedDate).getMonth() + 1).padStart(2, '0');
            const day = String(new Date(selectedDate).getDate()).padStart(2, '0');
            const randomNum = Math.floor(Math.random() * 900) + 100;
            return year + month + day + randomNum;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isLoading) return;

        setErrorMessage('');
        setIsLoading(true);

        if (isPastDateTime(date, time)) {
            setErrorMessage("Cannot reschedule to a past date and time. Please select a future date and time.");
            setIsLoading(false);
            return;
        }

        if (isWeekend(date)) {
            setErrorMessage("City Hall is closed during Saturdays and Sundays. Please select a weekday (Monday to Friday).");
            setIsLoading(false);
            return;
        }

        try {
            //Generate new Queue ID using the new endpoint
            const newQueueId = await generateQueueId(date);
            
            if (onReschedule) {
                await onReschedule(date, time, newQueueId);
            }
        } catch (error) {
            console.error("Error in reschedule:", error);
            setErrorMessage(error.message || "Error processing reschedule. Please try again.");
            setIsLoading(false);
        }
    };

    return (
        <>
            <style>{modalStyles}</style>
            <div id="rescheduleModal" className={`modal ${isOpen ? 'show' : ''}`} onClick={(e) => e.target.id === 'rescheduleModal' && onClose()}>
                <div className="modal-content">
                    <span className="close" onClick={onClose}>&times;</span>
                    <h3>Reschedule Slot</h3>
                    {reservation && (
                        <p style={{marginBottom: '15px', color: '#555'}}>
                            Rescheduling for: <strong>{reservation.full_name}</strong><br/>
                            Current slot: {reservation.reservation_date} at {reservation.reservation_time ? reservation.reservation_time.substring(0, 5) : ''}<br/>
                            Queue ID: {reservation.queue_id}
                        </p>
                    )}
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="rescheduleDate">New Preferred Date</label>
                        <input
                            type="date"
                            id="rescheduleDate"
                            value={date}
                            min={minDate}
                            onChange={(e) => setDate(e.target.value)}
                            required
                            disabled={isLoading}
                        />

                        <label htmlFor="rescheduleTime">New Preferred Time</label>
                        <input
                            type="time"
                            id="rescheduleTime"
                            step="1800" //30-minute intervals
                            min="08:00" //Minimum Time
                            max="16:30" //Cut-off Time
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            required
                            disabled={isLoading}
                        />
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        <button type="submit" disabled={isLoading}>
                            {isLoading ? (
                                <>
                                    <FontAwesomeIcon icon={faSpinner} spin className="loading-spinner" />
                                    Rescheduling...
                                </>
                            ) : (
                                'Confirm Reschedule'
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default RescheduleModal;