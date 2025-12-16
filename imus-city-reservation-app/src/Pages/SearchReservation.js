import React, { useState } from 'react';
import api from '../api/axiosConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faEye, faUser, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const pageSpecificStyles = `
    /*Main Layout*/
    .search-reservation-container {
        padding: 20px;
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        border: 1px solid #e0e0e0;
    }
    
    .search-header {
        margin-bottom: 30px;
        border-bottom: 2px solid #053774;
        padding-bottom: 10px;
    }
    
    .search-header h2 {
        color: #053774;
        font-size: 2em;
        margin: 0;
        font-weight: bold;
    }

    /*Search Form*/
    .search-form {
        background-color: #f8f9fa;
        padding: 25px;
        border-radius: 10px;
        border: 1px solid #e0e0e0;
        margin-bottom: 30px;
    }
    
    .form-row {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        margin-bottom: 20px;
    }
    
    .form-group {
        flex: 1;
        min-width: 250px;
    }
    
    .form-group label {
        display: block;
        margin-bottom: 8px;
        font-weight: bold;
        color: #333;
        font-size: 0.9em;
    }
    
    .form-input {
        width: 100%;
        padding: 10px 12px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 1em;
        transition: border-color 0.3s ease;
    }
    
    .form-input:focus {
        outline: none;
        border-color: #053774;
        box-shadow: 0 0 0 2px rgba(5, 55, 116, 0.2);
    }
    
    .search-button {
        background-color: #06428A;
        color: white;
        border: none;
        padding: 10px 25px;
        border-radius: 5px;
        font-size: 1em;
        font-weight: 500;
        cursor: pointer;
        transition: background-color 0.3s ease;
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 0 auto;
    }
    
    .search-button:hover {
        background-color: #053774;
    }
    
    .search-button:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }

    /*TABLE*/
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
        margin-top: 20px;
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

    /*Status*/
    .status-badge {
        padding: 6px 8px;
        border-radius: 5px;
        border: 1px solid #ccc;
        background-color: #fff;
        font-weight: 500;
        font-size: 0.85em;
        display: inline-block;
        min-width: 100px;
    }

    .status-complete { 
        color: #06402B; 
        border-color: #06402B; 
        background-color: #d4edda;
    }
    
    .status-pending { 
        color: #BA8E23; 
        border-color: #BA8E23; 
        background-color: #fff3cd;
    }
    
    .status-cancelled { 
        color: #f70d1a; 
        border-color: #f70d1a; 
        background-color: #f8d7da;
    }
    
    .status-rescheduled { 
        color: #04285c; 
        border-color: #04285c; 
        background-color: #d1ecf1;
    }

    /*Action Buttons*/
    .actions-buttons {
        display: flex;
        gap: 6px;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
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
        color: white;
        background-color: #06428A;
    }

    .action-button:hover {
        background-color: #053774;
    }

    /*Messages*/
    .error-message {
        color: #dc3545;
        background-color: #f8d7da;
        border: 1px solid #f5c6cb;
        padding: 10px;
        border-radius: 5px;
        margin-top: 10px;
        text-align: center;
    }

    /*Table*/
    @media (max-width: 768px) {
        table {
            font-size: 0.85em;
        }

        table thead {
            display: none;
        }

        table tr {
            display: block;
            margin-bottom: 15px;
            border: 1px solid #ddd;
        }

        table td {
            display: block;
            text-align: right;
            padding: 10px;
            border-bottom: 1px solid #ddd;
            position: relative;
            padding-left: 50%;
        }

        table td:before {
            content: attr(data-label);
            position: absolute;
            left: 10px;
            font-weight: bold;
            text-transform: uppercase;
            font-size: 0.75em;
        }

        table td:last-child {
            border-bottom: none;
        }

        .actions-buttons {
            justify-content: flex-end;
        }
    }
`;

const SearchReservation = () => {
    const [searchParams, setSearchParams] = useState({
        fullName: '',
        date: ''
    });
    const [reservations, setReservations] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSearchParams(prev => ({ ...prev, [name]: value }));
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        
        if (!searchParams.fullName.trim()) {
            setError('Please enter a name to search');
            setReservations([]);
            return;
        }
        if (!searchParams.date) {
            setError('Please select a date');
            return;
        }
        
        setLoading(true);
        setError('');
        setReservations([]);
        
        try {
            const response = await api.get(`/reservations.php?date=${searchParams.date}`);
            
            if (response.data && Array.isArray(response.data)) {
                //EXACT MATCH LOGIC - Changed here
                const searchName = searchParams.fullName.trim().toLowerCase();
                
                const filtered = response.data.filter(res => {
                    const reservationName = res.full_name.trim().toLowerCase();
                    //Exact match comparison (case-insensitive)
                    return reservationName === searchName;
                });
                
                if (filtered.length === 0) {
                    setError(`No reservations found for "${searchParams.fullName}" on ${searchParams.date}`);
                } else {
                    setReservations(filtered);
                }
            } else {
                setError('No data found.');
            }
        } catch (err) {
            console.error(err);
            setError('Failed to search. Please check your connection.');
        } finally {
            setLoading(false);
        }
    };

    const handleViewTicket = (reservation) => {
        const params = new URLSearchParams({
            queueId: reservation.queue_id,
            form: reservation.form_name,
            fullName: reservation.full_name,
            email: reservation.email,
            date: reservation.reservation_date,
            time: reservation.reservation_time,
            actionDate: new Date().toISOString().split('T')[0]
        });

        //Open ReservationResult page in a new tab
        window.open(`/ReservationResult?${params.toString()}`, '_blank');
    };

    const formatTime = (time) => time ? time.substring(0, 5) : 'N/A';

    return (
        <div className="container no-animations">
            <style>{pageSpecificStyles}</style>
            
            <div className="row p-3">
                {/*SIDEBAR*/}
                <div className="col-md-2 col-sm-6">
                    <div className="text-center">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item" style={{ backgroundColor: "white", color: "#053774" }}>
                                <h3>Services</h3>
                            </li>
                            <li className="list-group-item"><a href="/Services">City Public Library</a></li>
                            <li className="list-group-item"><a href="/Assistance">Assistance</a></li>
                            <li className="list-group-item"><a href="/CitizensCharcter">Citizen's Charter</a></li>
                            <li className="list-group-item"><a href="/EBoss">EBoss</a></li>
                            <li className="list-group-item"><a href="/ReservationSlot">Slot Reservation</a></li>
                            <li className="list-group-item active"><a href="/SearchReservation" style={{color: 'white'}}>Search Reservation</a></li> 
                        </ul>
                    </div>
                </div>

                {/*MAIN CONTENT*/}
                <div className="col-md-10 col-sm-12">
                    <div className="search-reservation-container">
                        <div className="search-header">
                            <h2>Search Reservation</h2>
                            <p style={{color: '#666'}}>Retrieve your reservation details and print your ticket.</p>
                        </div>

                        <form className="search-form" onSubmit={handleSearch}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label><FontAwesomeIcon icon={faUser} /> Full Name</label>
                                    <input 
                                        type="text" 
                                        name="fullName" 
                                        className="form-input" 
                                        placeholder="Enter full name used in reservation"
                                        value={searchParams.fullName}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label><FontAwesomeIcon icon={faCalendarAlt} /> Date</label>
                                    <input 
                                        type="date" 
                                        name="date" 
                                        className="form-input" 
                                        value={searchParams.date}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>
                            
                            {error && <div className="error-message">{error}</div>}
                            
                            <button type="submit" className="search-button" disabled={loading}>
                                <FontAwesomeIcon icon={faSearch} /> {loading ? 'Searching...' : 'Search'}
                            </button>
                        </form>

                        {reservations.length > 0 && (
                            <table>
                                <thead>
                                    <tr>
                                        <th>Queue ID</th>
                                        <th>Name</th>
                                        <th>Form / Service</th>
                                        <th>Time</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {reservations.map(res => (
                                        <tr key={res.queue_id}>
                                            <td data-label="Queue ID" style={{color: '#06428A', fontWeight: 'bold'}}>{res.queue_id}</td>
                                            <td data-label="Name">{res.full_name}</td>
                                            <td data-label="Service">{res.form_name}</td>
                                            <td data-label="Time">{formatTime(res.reservation_time)}</td>
                                            <td data-label="Status">
                                                <span className={`status-badge status-${(res.status || 'pending').toLowerCase()}`}>
                                                    {res.status || 'Pending'}
                                                </span>
                                            </td>
                                            <td data-label="Action">
                                                <div className="actions-buttons">
                                                    <button className="action-button" onClick={() => handleViewTicket(res)}>
                                                        <FontAwesomeIcon icon={faEye} /> View Ticket
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchReservation;