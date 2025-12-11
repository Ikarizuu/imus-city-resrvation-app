import React, { useState, useEffect } from 'react';
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
    }

    .modal input,
    .modal select {
        width: 100%;
        padding: 8px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    .modal button[type="submit"] {
        background-color: #28a745;
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
    }

    .modal button[type="submit"]:hover:not(:disabled) {
        background-color: #218838;
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

const ReservationModal = ({ isOpen, onClose, selectedForm }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [minDate, setMinDate] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        //Reset form
        if (isOpen) {
            setFullName('');
            setEmail('');
            setError('');
            
            const today = new Date();
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const day = String(today.getDate()).padStart(2, '0');
            const todayStr = `${year}-${month}-${day}`;
            setMinDate(todayStr);
            setDate(todayStr);
            setTime('08:00');
            setIsLoading(false);
        }
    }, [isOpen, selectedForm]);

    //Checks if selected time is in the past
    const isPastDateTime = (selectedDate, selectedTime) => {
        const now = new Date();
        const selectedDateTime = new Date(`${selectedDate}T${selectedTime}`);
        return selectedDateTime < now;
    };

    //Prevents Users to reserve during the weekends (Saturday & Sunday)
    const isWeekend = (selectedDate) => {
        const date = new Date(selectedDate);
        const dayOfWeek = date.getDay(); 
        return dayOfWeek === 0 || dayOfWeek === 6; //0 = Sunday | 6 = Saturday
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        //Prevent double submission
        if (isLoading) return;
        
        setIsLoading(true);
        setError('');

        //Alert if date/time is in the past
        if (isPastDateTime(date, time)) {
            setError("Cannot reserve a slot in the past. Please select a future date and time.");
            setIsLoading(false);
            return;
        }

        //Check if selected date is a weekend
        if (isWeekend(date)) {
            setError("City Hall is closed during Saturdays and Sundays. Please select a weekday (Monday to Friday).");
            setIsLoading(false);
            return;
        }

        //Saves today's date to see when did user used the reservation system
        const actionDate = new Date().toISOString().split("T")[0];

        try {
            // First check if slot is available
            try {
                const checkResponse = await api.get(`/reservations.php?date=${date}&form=${encodeURIComponent(selectedForm)}`);
                const existingReservations = checkResponse.data;
                
                const slotTaken = existingReservations.some(reservation => 
                    reservation.reservation_time.substring(0, 5) === time
                );
                
                if (slotTaken) {
                    setError(`This time slot is already taken for "${selectedForm}". Please choose another time.`);
                    setIsLoading(false);
                    return;
                }
            } catch (checkError) {
                console.error("Error checking slot availability:", checkError);
            }

            //Generate Queue ID
            let queueId;
            try {
                const queueResponse = await api.post('/generate_queue_id.php', { date: date });
                if (queueResponse.data.success) {
                    queueId = queueResponse.data.queueId;
                } else {
                    throw new Error("Failed to generate queue ID");
                }
            } catch (queueError) {
                console.error("Queue ID generation error:", queueError);
                // Fallback queue ID generation
                const reservationDate = new Date(date);
                const year = String(reservationDate.getFullYear()).slice(-2);
                const month = String(reservationDate.getMonth() + 1).padStart(2, '0');
                const day = String(reservationDate.getDate()).padStart(2, '0');
                const randomNum = Math.floor(Math.random() * 900) + 100;
                queueId = year + month + day + randomNum;
            }

            // Save user details to PHP backend
            const reservationData = {
                queueId: queueId,
                form: selectedForm,
                fullName: fullName,
                email: email,
                date: date,
                time: time,
                actionDate: actionDate,
                status: "Pending"
            };

            const response = await api.post('/reservations.php', reservationData);
            
            if (response.data.success) {
                //Redirect to ReservationResult with data in URL
                window.location.href = `/ReservationResult?queueId=${queueId}&form=${encodeURIComponent(selectedForm)}&fullName=${encodeURIComponent(fullName)}&email=${encodeURIComponent(email)}&date=${date}&time=${time}&actionDate=${actionDate}`;
            } else {
                setError(response.data.message || "Failed to create reservation");
                setIsLoading(false);
            }

        } catch (error) {
            console.error("Reservation submission error:", error);
            setError("An error occurred during reservation. Please try again.");
            setIsLoading(false);
        }
    };

    return (
        <>
            <style>{modalStyles}</style>
            <div id="reservationModal" className={`modal ${isOpen ? 'show' : ''}`} onClick={(e) => e.target.id === 'reservationModal' && onClose()}>
                <div className="modal-content">
                    <span className="close" onClick={onClose}>&times;</span>
                    <h3>Reserve a Slot</h3>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="formName">Form Selected</label>
                        <input type="text" id="formName" value={selectedForm} readOnly />

                        <label htmlFor="fullName">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                            disabled={isLoading}
                        />

                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            disabled={isLoading}
                        />

                        <label htmlFor="date">Preferred Date</label>
                        <input
                            type="date"
                            id="date"
                            value={date}
                            min={minDate}
                            onChange={(e) => setDate(e.target.value)}
                            required
                            disabled={isLoading}
                        />

                        <label htmlFor="time">Preferred Time</label>
                        <input
                            type="time"
                            id="time"
                            step="1800" //30-minute intervals
                            min="08:00" //Minimum Time
                            max="16:30" //Cut-off Time
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            required
                            disabled={isLoading}
                        />
                        
                        {error && <div className="error-message">{error}</div>}
                        
                        <button type="submit" disabled={isLoading}>
                            {isLoading ? (
                                <>
                                    <div className="loading-spinner"></div>
                                    Processing...
                                </>
                            ) : (
                                'Submit Reservation'
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ReservationModal;