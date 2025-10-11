import React, { useState, useEffect } from 'react';

//Import Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

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

//SheetDB API LINK
const SHEETDB_API = "https://sheetdb.io/api/v1/qmacfljmu6hht"; //Curently Using Backup link1
//main link = https://sheetdb.io/api/v1/z8baj0q36a3pl || Backup link1 = https://sheetdb.io/api/v1/qmacfljmu6hht || Backup link2 = https://sheetdb.io/api/v1/ustk92tozp65t

const RescheduleModal = ({ isOpen, onClose, reservation, onReschedule }) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [minDate, setMinDate] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    //Generate new Queue ID function
    const generateQueueId = async (selectedDate) => {
        try {
            //Get ALL reservations to find the highest queueId for the selected date
            let res = await fetch(SHEETDB_API);
            let allReservations = await res.json();

            if (!allReservations || allReservations.length === 0) {
                //If no reservations exist, start with 001
                const reservationDate = new Date(selectedDate);
                const year = String(reservationDate.getFullYear()).slice(-2);
                const month = String(reservationDate.getMonth() + 1).padStart(2, '0');
                const day = String(reservationDate.getDate()).padStart(2, '0');
                const dateStr = year + month + day;
                return dateStr + '001';
            }

            //Filter reservations for the same date and find the highest queueId
            const reservationDate = new Date(selectedDate);
            const year = String(reservationDate.getFullYear()).slice(-2);
            const month = String(reservationDate.getMonth() + 1).padStart(2, '0');
            const day = String(reservationDate.getDate()).padStart(2, '0');
            const datePrefix = year + month + day;

            //Find all queueIds that start with the same date prefix
            const sameDayQueueIds = allReservations
                .filter(reservation => reservation.queueId && reservation.queueId.startsWith(datePrefix))
                .map(reservation => reservation.queueId);

            if (sameDayQueueIds.length === 0) {
                //No reservations for this date yet
                return datePrefix + '001';
            }

            //Find the highest sequence number
            const sequenceNumbers = sameDayQueueIds.map(queueId => {
                const sequence = parseInt(queueId.slice(-3), 10);
                return isNaN(sequence) ? 0 : sequence;
            });

            const maxSequence = Math.max(...sequenceNumbers);
            const nextSequence = maxSequence + 1;

            //Format with leading zeros (3 digits)
            const sequenceStr = String(nextSequence).padStart(3, "0");
            return datePrefix + sequenceStr;

        } catch (error) {
            console.error("Error generating queue ID:", error);
            //Fallback: use timestamp-based ID
            const reservationDate = new Date(selectedDate);
            const year = String(reservationDate.getFullYear()).slice(-2);
            const month = String(reservationDate.getMonth() + 1).padStart(2, '0');
            const day = String(reservationDate.getDate()).padStart(2, '0');
            const dateStr = year + month + day;
            const fallbackSequence = Math.floor(Math.random() * 900) + 100;
            return dateStr + fallbackSequence;
        }
    };

    //Prevents Users to reserve during the weekends (Saturday & Sunday)
    const isWeekend = (selectedDate) => {
        const date = new Date(selectedDate);
        const dayOfWeek = date.getDay(); //0 = Sunday | 6 = Saturday
        return dayOfWeek === 0 || dayOfWeek === 6;
    };

    useEffect(() => {
        if (isOpen && reservation) {
            //Set initial date and time from the reservation, removing single quotes
            setDate(reservation.date ? reservation.date.replace(/'/g, '') : '');
            setTime(reservation.time ? reservation.time.replace(/'/g, '') : '07:00');

            const today = new Date();
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const day = String(today.getDate()).padStart(2, '0');
            setMinDate(`${year}-${month}-${day}`);
            setIsLoading(false);
            setErrorMessage('');
        }
    }, [isOpen, reservation]);

    const isPastDateTime = (selectedDate, selectedTime) => {
        const now = new Date();
        const selectedDateTime = new Date(`${selectedDate}T${selectedTime}`);
        return selectedDateTime < now;
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

        //Check if selected date is a weekend
        if (isWeekend(date)) {
            setErrorMessage("City Hall is closed during Saturdays and Sundays. Please select a weekday (Monday to Friday).");
            setIsLoading(false);
            return;
        }

        try {
            //Generate new QueueID here in the modal
            const newQueueId = await generateQueueId(date);
            
            //Call the parent's onReschedule function with the new QueueID
            if (onReschedule) {
                await onReschedule(date, time, newQueueId);
            }
        } catch (error) {
            console.error("Error generating Queue ID:", error);
            setErrorMessage("Error generating reservation ID. Please try again.");
        }
        
        setIsLoading(false);
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
                            Rescheduling for: <strong>{reservation.fullName}</strong><br/>
                            Current slot: {reservation.date ? reservation.date.replace(/'/g, '') : ''} at {reservation.time ? reservation.time.replace(/'/g, '') : ''}<br/>
                            Queue ID: {reservation.queueId}
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
                            step="1800"
                            min="07:00"
                            max="17:00"
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