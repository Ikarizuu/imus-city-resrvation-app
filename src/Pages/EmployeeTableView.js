import React, { useState, useEffect } from 'react';

//Import Reschedule Modal
import RescheduleModal from '../Components/RescheduleModal';

//Import Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

const pageSpecificStyles = `
    .employee-table-view {
        padding: 20px;
        max-width: 1400px;
        margin: 0 auto;
    }

    .header-section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }

    .header-section h2 {
        color: #053774;
        font-size: 2em;
        margin: 0;
    }

    .date-picker-container {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .date-picker-container label {
        font-weight: bold;
        color: #333;
    }

    .date-picker-container input[type="date"] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 1em;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
        background-color: white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        border-radius: 8px;
        overflow: hidden;
    }

    th, td {
        padding: 12px 15px;
        border: 1px solid #e0e0e0;
        text-align: center;
    }

    th {
        background-color: #053774;
        color: white;
        font-weight: bold;
        font-size: 0.9em;
        text-transform: uppercase;
    }

    tr:nth-child(even) {
        background-color: #f8f8f8;
    }

    .status-dropdown {
        padding: 6px 8px;
        border-radius: 5px;
        border: 1px solid #ccc;
        background-color: #fff;
        cursor: pointer;
        font-weight: 500;
        min-width: 100px;
    }

    .status-complete { color: #06402B; border-color: #06402B; }
    .status-pending { color: #BA8E23; border-color: #BA8E23; }
    .status-cancelled { color: #f70d1a; border-color: #f70d1a; }
    .status-rescheduled { color: #04285c; border-color: #04285c; }

    .remarks-textarea {
        width: 100%;
        min-height: 40px;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 5px;
        resize: vertical;
        font-size: 0.9em;
    }

    .actions-buttons {
        display: flex;
        gap: 8px;
    }

    .action-button {
        padding: 8px 12px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 0.9em;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        transition: background-color 0.2s ease;
    }

    .reschedule-button {
        background-color: #06428A;
        color: white;
    }

    .reschedule-button:hover {
        background-color: #053774;
    }

    .delete-button {
        background-color: #dc3545;
        color: white;
    }

    .delete-button:hover {
        background-color: #c82333;
    }
`;

//SheetDB API LINK
const SHEETDB_API = "https://sheetdb.io/api/v1/qmacfljmu6hht";

const statusColors = {
    'Complete': '#06402B',
    'Pending': '#BA8E23',
    'Cancelled': '#f70d1a',
    'Rescheduled': '#04285c'
};

const EmployeeTableView = () => {
    const [reservations, setReservations] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');
    const [formTitle, setFormTitle] = useState('All Reservations');
    const [isRescheduleModalOpen, setIsRescheduleModalOpen] = useState(false);
    const [currentReservation, setCurrentReservation] = useState(null);

    //Get form name from sessionStorage
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const form = urlParams.get('formName');
        if (form) {
            setFormTitle(form);
        } else {
            setFormTitle('All Reservations'); 
        }

        //Set default date to today
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        setSelectedDate(`${year}-${month}-${day}`);
    }, []);

    //Fetch reservations based on selected date and form title
    useEffect(() => {
        if (!selectedDate) return;

        const fetchReservations = async () => {
            try {
                //Get ALL data and filter client-side
                const allResponse = await fetch(SHEETDB_API);
                if (!allResponse.ok) {
                    throw new Error(`HTTP error! status: ${allResponse.status}`);
                }
                
                let allData = await allResponse.json();
                if (!Array.isArray(allData)) {
                    allData = [];
                }

                //Filter data based on selected date and form
                let filteredData = allData.filter(item => {
                    //Handle date filtering
                    const itemDate = item.date ? item.date.replace(/['=]/g, '') : '';
                    const matchesDate = itemDate.includes(selectedDate);
                    
                    //Handle form filtering
                    const matchesForm = formTitle === 'All Reservations' || item.form === formTitle;
                    
                    return matchesDate && matchesForm;
                });

                //Sort by time
                filteredData.sort((a, b) => {
                    const timeA = a.time ? a.time.replace(/['=]/g, '') : '00:00';
                    const timeB = b.time ? b.time.replace(/['=]/g, '') : '00:00';
                    return timeA.localeCompare(timeB);
                });

                setReservations(filteredData);
            } catch (error) {
                console.error("Error fetching reservations:", error);
                setReservations([]);
            }
        };

        fetchReservations();
    }, [selectedDate, formTitle]);

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    const handleStatusChange = async (index, newStatus) => {
        const reservationToUpdate = reservations[index];
        if (!reservationToUpdate || !reservationToUpdate.queueId) return;

        const updatedReservations = [...reservations];
        updatedReservations[index].status = newStatus;
        setReservations(updatedReservations);

        try {
            await fetch(`${SHEETDB_API}/queueId/${reservationToUpdate.queueId}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ data: { status: newStatus } })
            });
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };

    const handleRemarksChange = async (index, newRemarks) => {
        const reservationToUpdate = reservations[index];
        if (!reservationToUpdate || !reservationToUpdate.queueId) return;

        const updatedReservations = [...reservations];
        updatedReservations[index].remarks = newRemarks;
        setReservations(updatedReservations);

        try {
            await fetch(`${SHEETDB_API}/queueId/${reservationToUpdate.queueId}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ data: { remarks: newRemarks } })
            });
        } catch (error) {
            console.error("Error updating remarks:", error);
        }
    };

    const handleRescheduleClick = (reservation) => {
        setCurrentReservation(reservation);
        setIsRescheduleModalOpen(true);
    };

    const handleDeleteClick = async (reservationToDelete) => {
        if (!reservationToDelete || !reservationToDelete.queueId) return;

        if (window.confirm(`Are you sure you want to delete the reservation for ${reservationToDelete.fullName} (${reservationToDelete.queueId})?`)) {
            try {
                const response = await fetch(`${SHEETDB_API}/queueId/${reservationToDelete.queueId}`, {
                    method: "DELETE"
                });

                if (!response.ok) {
                    throw new Error(`Failed to delete reservation: ${response.statusText}`);
                }

                setReservations(prevReservations => 
                    prevReservations.filter(res => res.queueId !== reservationToDelete.queueId)
                );
                alert("Reservation deleted successfully!");

            } catch (error) {
                console.error("Error deleting reservation:", error);
                alert("An error occurred while deleting the reservation. Please try again.");
            }
        }
    };

    const handleRescheduleSubmit = async (newDate, newTime, newQueueId) => {
        if (!currentReservation) return;

        try {
            //Format for SheetDB with apostrophes
            const formattedNewDate = `'${newDate}`;
            const formattedNewTime = `'${newTime}`;
            const formattedActionDate = `'${new Date().toISOString().split("T")[0]}`;
            
            const newRemarks = `Rescheduled from original appointment on ${currentReservation.date ? currentReservation.date.replace(/['=]/g, '') : ''} at ${currentReservation.time ? currentReservation.time.replace(/['=]/g, '') : ''}. Original Queue ID: ${currentReservation.queueId}`;

            //Check if the new slot is already taken
            const allResponse = await fetch(SHEETDB_API);
            const allData = await allResponse.json();
            const existingReservation = Array.isArray(allData) ? allData.find(item => {
                const itemDate = item.date ? item.date.replace(/['=]/g, '') : '';
                const itemTime = item.time ? item.time.replace(/['=]/g, '') : '';
                return itemDate === newDate && itemTime === newTime && item.form === currentReservation.form;
            }) : null;

            if (existingReservation) {
                alert("This new time slot is already taken. Please choose another one.");
                return;
            }

            //Create NEW reservation entry for the reschedulee's
            const response = await fetch(SHEETDB_API, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    data: [{
                        queueId: newQueueId,
                        form: currentReservation.form,
                        fullName: currentReservation.fullName,
                        email: currentReservation.email,
                        date: formattedNewDate,
                        time: formattedNewTime,
                        actionDate: formattedActionDate,
                        status: "Pending",
                        remarks: newRemarks
                    }]
                })
            });

            if (!response.ok) {
                throw new Error('Failed to create rescheduled reservation');
            }

            //Change status to Rescheduled and add remark
            if (currentReservation.queueId) {
                const originalRemarks = `${currentReservation.remarks ? currentReservation.remarks + '\n' : ''}Rescheduled to ${newDate} at ${newTime}. New Queue ID is ${newQueueId}`;
                
                await fetch(`${SHEETDB_API}/queueId/${currentReservation.queueId}`, {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        data: {
                            status: "Rescheduled",
                            remarks: originalRemarks
                        }
                    })
                });
            }

            //Refresh the current view
            const allResponseRefresh = await fetch(SHEETDB_API);
            const allDataRefresh = await allResponseRefresh.json();
            
            if (Array.isArray(allDataRefresh)) {
                const refreshedData = allDataRefresh.filter(item => {
                    const itemDate = item.date ? item.date.replace(/['=]/g, '') : '';
                    const matchesDate = itemDate.includes(selectedDate);
                    const matchesForm = formTitle === 'All Reservations' || item.form === formTitle;
                    return matchesDate && matchesForm;
                });

                refreshedData.sort((a, b) => {
                    const timeA = a.time ? a.time.replace(/['=]/g, '') : '00:00';
                    const timeB = b.time ? b.time.replace(/['=]/g, '') : '00:00';
                    return timeA.localeCompare(timeB);
                });
                
                setReservations(refreshedData);
            }

            setIsRescheduleModalOpen(false);
            setCurrentReservation(null);
            alert("Reservation successfully rescheduled! The original reservation has been updated.");

            //Open ReservationResult in new tab
            window.open(`/RescheduleResult?queueId=${newQueueId}&form=${encodeURIComponent(currentReservation.form)}&fullName=${encodeURIComponent(currentReservation.fullName)}&email=${encodeURIComponent(currentReservation.email)}&date=${newDate}&time=${newTime}&actionDate=${new Date().toISOString().split("T")[0]}`, '_blank');

        } catch (error) {
            console.error("Reschedule error:", error);
            alert("An error occurred during rescheduling. Please try again.");
        }
    };

    return (
        <>
            <style>{pageSpecificStyles}</style>
            <div className="employee-table-view">
                <div className="header-section">
                    <h2>{formTitle}</h2>
                    <div className="date-picker-container">
                        <label htmlFor="reservationDate">
                            <FontAwesomeIcon icon={faCalendarAlt} /> Select Date:
                        </label>
                        <input
                            type="date"
                            id="reservationDate"
                            value={selectedDate}
                            onChange={handleDateChange}
                        />
                    </div>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Pos</th>
                            <th>Time</th>
                            <th>Queue ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Remarks</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reservations.length > 0 ? (
                            reservations.map((reservation, index) => (
                                <tr key={reservation.queueId || index}>
                                    <td>{index + 1}</td>
                                    <td>{reservation.time ? reservation.time.replace(/['=]/g, '') : ''}</td>
                                    <td>{reservation.queueId || 'N/A'}</td>
                                    <td>{reservation.fullName || 'N/A'}</td>
                                    <td>{reservation.email || 'N/A'}</td>
                                    <td>
                                        <select
                                            className="status-dropdown"
                                            style={{ color: statusColors[reservation.status] || '#333' }}
                                            value={reservation.status || 'Pending'}
                                            onChange={(e) => handleStatusChange(index, e.target.value)}
                                        >
                                            <option value="Pending">Pending</option>
                                            <option value="Complete">Complete</option>
                                            <option value="Rescheduled">Rescheduled</option>
                                            <option value="Cancelled">Cancelled</option>
                                        </select>
                                    </td>
                                    <td>
                                        <textarea
                                            className="remarks-textarea"
                                            value={reservation.remarks || ''}
                                            onChange={(e) => handleRemarksChange(index, e.target.value)}
                                            placeholder="Add remarks here..."
                                        />
                                    </td>
                                    <td>
                                        <div className="actions-buttons">
                                            <button 
                                                className="action-button reschedule-button"
                                                onClick={() => handleRescheduleClick(reservation)}
                                            >
                                                <FontAwesomeIcon icon={faPen} /> Reschedule
                                            </button>
                                            <button 
                                                className="action-button delete-button"
                                                onClick={() => handleDeleteClick(reservation)}
                                            >
                                                <FontAwesomeIcon icon={faTrash} /> Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8" style={{ textAlign: 'center', padding: '20px' }}>
                                    No reservations found for {selectedDate} {formTitle !== 'All Reservations' ? `for "${formTitle}"` : ''}.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <RescheduleModal
                isOpen={isRescheduleModalOpen}
                onClose={() => setIsRescheduleModalOpen(false)}
                reservation={currentReservation}
                onReschedule={handleRescheduleSubmit}
            />
        </>
    );
};

export default EmployeeTableView;