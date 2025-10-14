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
        border: 1px solid #ccc;
        border-collapse: collapse;
        margin: 0;
        padding: 0;
        width: 100%;
        table-layout: auto;
        background-color: white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        border-radius: 8px;
        overflow: hidden;
    }

    table caption {
        font-size: 1.5em;
        margin: .5em 0 .75em;
    }

    table tr {
        background-color: #f8f8f8;
        border: 1px solid #ddd;
        padding: .35em;
    }

    table th,
    table td {
        padding: 12px 8px;
        text-align: center;
        border: 1px solid #e0e0e0;
        word-wrap: break-word;
        overflow-wrap: break-word;
    }

    table th {
        background-color: #053774;
        color: white;
        font-size: 0.8em;
        letter-spacing: .1em;
        text-transform: uppercase;
        font-weight: bold;
        white-space: nowrap;
    }

    tr:nth-child(even) {
        background-color: #f8f8f8;
    }

    /* Flexible column widths */
    table th:nth-child(1), table td:nth-child(1) { /* POS */
        width: 60px;
        min-width: 60px;
    }

    table th:nth-child(2), table td:nth-child(2) { /* TIME */
        width: 80px;
        min-width: 80px;
    }

    table th:nth-child(3), table td:nth-child(3) { /* QUEUE ID */
        width: 120px;
        min-width: 120px;
    }

    table th:nth-child(4), table td:nth-child(4) { /* NAME */
        width: 150px;
        min-width: 150px;
        max-width: 200px;
    }

    table th:nth-child(5), table td:nth-child(5) { /* EMAIL */
        width: 200px;
        min-width: 150px;
        max-width: 250px;
    }

    table th:nth-child(6), table td:nth-child(6) { /* STATUS */
        width: 130px;
        min-width: 130px;
    }

    table th:nth-child(7), table td:nth-child(7) { /* REMARKS */
        width: auto;
        min-width: 150px;
        max-width: 300px;
    }

    table th:nth-child(8), table td:nth-child(8) { /* ACTIONS */
        width: 200px;
        min-width: 180px;
    }

    .status-dropdown {
        padding: 6px 8px;
        border-radius: 5px;
        border: 1px solid #ccc;
        background-color: #fff;
        cursor: pointer;
        font-weight: 500;
        width: 100%;
        max-width: 120px;
        font-size: 0.85em;
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
        font-size: 0.85em;
        box-sizing: border-box;
        font-family: inherit;
    }

    .actions-buttons {
        display: flex;
        gap: 6px;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        min-height: 50px;
    }

    .action-button {
        padding: 6px 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 0.8em;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        transition: background-color 0.2s ease;
        white-space: nowrap;
        min-width: 90px;
        flex: 1;
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

    /* Text truncation for long content */
    .truncate-text {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
        display: block;
    }

    .email-cell {
        font-size: 0.85em;
    }

    .name-cell {
        font-size: 0.9em;
    }

    @media screen and (max-width: 1024px) {
        table {
            font-size: 0.9em;
        }
        
        table th,
        table td {
            padding: 10px 6px;
        }

        table th:nth-child(4), table td:nth-child(4) { /* NAME */
            width: 120px;
            min-width: 120px;
            max-width: 150px;
        }

        table th:nth-child(5), table td:nth-child(5) { /* EMAIL */
            width: 150px;
            min-width: 120px;
            max-width: 180px;
        }

        .action-button {
            min-width: 80px;
            font-size: 0.75em;
            padding: 5px 8px;
        }
    }

    @media screen and (max-width: 768px) {
        .employee-table-view {
            padding: 10px;
        }

        .header-section {
            flex-direction: column;
            gap: 15px;
            align-items: flex-start;
        }

        .header-section h2 {
            font-size: 1.5em;
        }

        table {
            border: 0;
            font-size: 0.85em;
        }

        table caption {
            font-size: 1.3em;
        }
        
        table thead {
            border: none;
            clip: rect(0 0 0 0);
            height: 1px;
            margin: -1px;
            overflow: hidden;
            padding: 0;
            position: absolute;
            width: 1px;
        }
        
        table tr {
            border-bottom: 3px solid #ddd;
            display: block;
            margin-bottom: .625em;
            padding: 0;
        }
        
        table td {
            border-bottom: 1px solid #ddd;
            display: block;
            font-size: .8em;
            text-align: right;
            position: relative;
            padding-left: 45%;
            padding-right: 10px;
            padding-top: 12px;
            padding-bottom: 12px;
            box-sizing: border-box;
            width: 100%;
            max-width: none;
        }
        
        table td::before {
            content: attr(data-label);
            position: absolute;
            left: 10px;
            width: calc(45% - 20px);
            padding-right: 10px;
            white-space: nowrap;
            font-weight: bold;
            text-transform: uppercase;
            text-align: left;
            top: 50%;
            transform: translateY(-50%);
            font-size: 0.75em;
        }
        
        table td:last-child {
            border-bottom: 0;
            padding-top: 15px;
            padding-bottom: 15px;
        }

        .actions-buttons {
            justify-content: flex-end;
            padding: 8px 0;
            min-height: auto;
        }

        .action-button {
            padding: 6px 10px;
            font-size: 0.75em;
            min-width: 70px;
        }

        .status-dropdown {
            max-width: none;
            width: 100%;
            font-size: 0.8em;
        }

        .remarks-textarea {
            width: 100%;
            font-size: 0.8em;
        }

        /* Remove fixed widths for mobile */
        table th:nth-child(n),
        table td:nth-child(n) {
            width: auto;
            min-width: auto;
            max-width: none;
        }
    }

    /* Additional fixes for very small screens */
    @media screen and (max-width: 480px) {
        table td {
            padding-left: 40%;
        }
        
        table td::before {
            width: calc(40% - 15px);
            font-size: 0.7em;
        }

        .actions-buttons {
            flex-direction: column;
            gap: 5px;
            align-items: flex-end;
        }

        .action-button {
            width: 100%;
            max-width: 120px;
            min-width: auto;
        }
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
        if (!sessionStorage.getItem("loggedInUser")) {
            window.location.href = "/EmployeeLogIn";
            return;
        }   

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

    // Helper function to truncate long text
    const truncateText = (text, maxLength = 20) => {
        if (!text) return '';
        return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
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
                                    <td data-label="Position">{index + 1}</td>
                                    <td data-label="Time">{reservation.time ? reservation.time.replace(/['=]/g, '') : ''}</td>
                                    <td data-label="Queue ID">{reservation.queueId || 'N/A'}</td>
                                    <td data-label="Name" className="name-cell" title={reservation.fullName}>
                                        {truncateText(reservation.fullName, 15)}
                                    </td>
                                    <td data-label="Email" className="email-cell" title={reservation.email}>
                                        {truncateText(reservation.email, 20)}
                                    </td>
                                    <td data-label="Status">
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
                                    <td data-label="Remarks">
                                        <textarea
                                            className="remarks-textarea"
                                            value={reservation.remarks || ''}
                                            onChange={(e) => handleRemarksChange(index, e.target.value)}
                                            placeholder="Add remarks here..."
                                            title={reservation.remarks}
                                        />
                                    </td>
                                    <td data-label="Actions">
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