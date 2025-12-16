import React, { useState, useEffect } from 'react';
import api from '../api/axiosConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faChartBar, faNewspaper, faPlus, faEdit, faTrash, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const pageSpecificStyles = `
    .admin-view-container {
        padding: 20px;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        margin-bottom: 20px;
        border: 1px solid #e0e0e0;
    }

    .table-header-section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        flex-wrap: wrap;
        gap: 15px;
        border-bottom: 2px solid #053774;
        padding-bottom: 15px;
    }

    .table-title-section h2 {
        color: #053774;
        font-size: 2em;
        margin: 0;
    }

    .admin-badge {
        background-color: #ffc107;
        color: #212529;
        padding: 5px 12px;
        border-radius: 20px;
        font-weight: bold;
        font-size: 0.9em;
        margin-left: 10px;
    }

    /*TABLE STYLES*/
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

    /*BUTTON STYLES*/
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
        color: white;
    }

    .add-button {
        background-color: #18a54a;
        color: white;
        padding: 8px 15px;
        font-size: 1em;
    }
    .add-button:hover { background-color: #128c3d; }

    .edit-button {
        background-color: #053774;
    }
    .edit-button:hover { background-color: #04285c; }

    .delete-button {
        background-color: #dc3545;
    }
    .delete-button:hover { background-color: #c82333; }
    .delete-button:disabled { background-color: #6c757d; cursor: not-allowed; }

    .role-badge {
        padding: 4px 12px;
        border-radius: 12px;
        font-size: 0.85em;
        font-weight: 500;
        display: inline-block;
    }
    .role-admin { background-color: #ffc107; color: #212529; }
    .role-employee { background-color: #6c757d; color: white; }

    /*Modal Styles*/
    .modal-overlay {
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        background-color: rgba(0,0,0,0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
        padding: 20px;
    }
    .modal-content {
        background-color: white;
        border-radius: 10px;
        width: 100%;
        max-width: 500px;
        max-height: 90vh;
        overflow-y: auto;
        box-shadow: 0 5px 20px rgba(0,0,0,0.3);
    }
    .modal-header {
        padding: 20px;
        border-bottom: 1px solid #e0e0e0;
        display: flex; justify-content: space-between; align-items: center;
    }
    .modal-header h3 { margin: 0; color: #053774; font-size: 1.5em; }
    .modal-body { padding: 20px; }
    .form-group { margin-bottom: 20px; }
    .form-group label { display: block; margin-bottom: 8px; font-weight: bold; color: #333; }
    .form-group input, .form-group select { width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 5px; }
    .modal-footer { padding: 20px; border-top: 1px solid #e0e0e0; display: flex; justify-content: flex-end; gap: 10px; }

    /*Password Toggle Styles*/
    .password-wrapper {
        position: relative;
        width: 100%;
    }
    .password-wrapper input {
        width: 100%;
        padding-right: 40px;
    }
    .toggle-password {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        cursor: pointer;
        color: #666;
        padding: 0;
    }
    .toggle-password:hover {
        color: #053774;
    }

    @media (max-width: 768px) {
        table { font-size: 0.85em; }
        table thead { display: none; }
        table tr { display: block; margin-bottom: 15px; border: 1px solid #ddd; }
        table td { display: block; text-align: right; padding: 10px; border-bottom: 1px solid #ddd; position: relative; padding-left: 50%; }
        table td:before { content: attr(data-label); position: absolute; left: 10px; font-weight: bold; text-transform: uppercase; font-size: 0.75em; }
        table td:last-child { border-bottom: none; }
        .actions-buttons { justify-content: flex-end; }
    }
`;

const EmployeeAdmin = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [currentEmployee, setCurrentEmployee] = useState({
        id: '', employeeid: '', password: '', first_name: '', last_name: '', isAdmin: 'notAdmin'
    });
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const adminStatus = sessionStorage.getItem("isAdmin");
        if (adminStatus !== 'admin') {
            window.location.href = "/EmployeeHome";
            return;
        }
        setIsAdmin(true);
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        setLoading(true);
        try {
            const response = await api.get('/employees.php');
            setEmployees(response.data);
        } catch (error) {
            console.error("Error fetching employees:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleAddEmployee = () => {
        setCurrentEmployee({ id: '', employeeid: '', password: '', first_name: '', last_name: '', isAdmin: 'notAdmin' });
        setIsEditMode(false);
        setShowPassword(false);
        setShowModal(true);
    };

    const handleEditEmployee = (employee) => {
        setCurrentEmployee(employee); 
        setIsEditMode(true);
        setShowPassword(false);
        setShowModal(true);
    };

    const handleSaveEmployee = async () => {
        try {
            if (isEditMode) await api.put('/employees.php', currentEmployee);
            else await api.post('/employees.php', currentEmployee);
            setShowModal(false);
            fetchEmployees();
        } catch (error) {
            alert("Operation failed");
        }
    };

    const handleDeleteEmployee = async (id) => {
        if(window.confirm("Delete Employee?")) {
            await api.delete('/employees.php', {data: {id}});
            fetchEmployees();
        }
    }

    if (!isAdmin) return null;

    return (
        <>
            <style>{pageSpecificStyles}</style>
            <div className="container no-animations">
                <div className="row p-3">
                    {/*Sidebar*/}
                    <div className="col-md-2 col-sm-12">
                        <div className="text-center">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item" style={{ backgroundColor: 'white', color: '#053774' }}>
                                    <h3>Admin Panel</h3>
                                </li>
                                <li className="list-group-item active">
                                    <a href="/EmployeeAdmin"><FontAwesomeIcon icon={faUsers} className="me-2"/> Employee Mgmt</a>
                                </li>
                                <li className="list-group-item">
                                    <a href="/EmployeeAdminStats"><FontAwesomeIcon icon={faChartBar} className="me-2"/> Statistics Mgmt</a>
                                </li>
                                <li className="list-group-item">
                                    <a href="/EmployeeAdminNews"><FontAwesomeIcon icon={faNewspaper} className="me-2"/> News Mgmt</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/*Content*/}
                    <div className="col-md-10 col-sm-12">
                        <div className="admin-view-container">
                            <div className="table-header-section">
                                <div className="table-title-section">
                                    <h2>Employee Administration</h2>
                                    <span className="admin-badge">Administrator Access</span>
                                </div>
                                <button className="action-button add-button" onClick={handleAddEmployee}>
                                    <FontAwesomeIcon icon={faPlus} /> Add Employee
                                </button>
                            </div>

                            {loading ? <p>Loading...</p> : (
                                <table>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Role</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {employees.map(employee => (
                                            <tr key={employee.id}>
                                                <td data-label="ID">{employee.employeeid}</td>
                                                <td data-label="First Name">{employee.first_name}</td>
                                                <td data-label="Last Name">{employee.last_name}</td>
                                                <td data-label="Role">
                                                    <span className={`role-badge ${employee.isAdmin === 'admin' ? 'role-admin' : 'role-employee'}`}>
                                                        {employee.isAdmin === 'admin' ? 'Administrator' : 'Employee'}
                                                    </span>
                                                </td>
                                                <td data-label="Actions">
                                                    <div className="actions-buttons">
                                                        <button className="action-button edit-button" onClick={() => handleEditEmployee(employee)}>
                                                            <FontAwesomeIcon icon={faEdit} /> Edit
                                                        </button>
                                                        <button 
                                                            className="action-button delete-button" 
                                                            onClick={() => handleDeleteEmployee(employee.id)}
                                                            disabled={employee.employeeid === sessionStorage.getItem("loggedInUser")}
                                                        >
                                                            <FontAwesomeIcon icon={faTrash} /> Delete
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                        {employees.length === 0 && <tr><td colSpan="5">No employees found.</td></tr>}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                </div>

                {/*Modal*/}
                {showModal && (
                    <div className="modal-overlay" onClick={(e) => e.target.className === 'modal-overlay' && setShowModal(false)}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3>{isEditMode ? 'Edit Employee' : 'Add Employee'}</h3>
                                <button style={{background:'none', border:'none', fontSize:'1.5rem', cursor:'pointer'}} onClick={() => setShowModal(false)}>×</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Employee ID</label>
                                    <input 
                                        value={currentEmployee.employeeid} 
                                        onChange={e => setCurrentEmployee({...currentEmployee, employeeid: e.target.value})} 
                                        disabled={isEditMode} 
                                        placeholder="e.g. EMP01"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input 
                                        value={currentEmployee.first_name} 
                                        onChange={e => setCurrentEmployee({...currentEmployee, first_name: e.target.value})} 
                                        placeholder="e.g. Juan"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input 
                                        value={currentEmployee.last_name} 
                                        onChange={e => setCurrentEmployee({...currentEmployee, last_name: e.target.value})} 
                                        placeholder="e.g. Dela Cruz"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <div className="password-wrapper">
                                        <input 
                                            type={showPassword ? "text" : "password"} 
                                            value={currentEmployee.password} 
                                            onChange={e => setCurrentEmployee({...currentEmployee, password: e.target.value})} 
                                            placeholder={isEditMode ? "Leave blank to keep current" : "Enter password"} 
                                        />
                                        <button 
                                            type="button" 
                                            className="toggle-password" 
                                            onClick={() => setShowPassword(!showPassword)}
                                            title={showPassword ? "Hide Password" : "Show Password"}
                                        >
                                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                        </button>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Role</label>
                                    <select value={currentEmployee.isAdmin} onChange={e => setCurrentEmployee({...currentEmployee, isAdmin: e.target.value})}>
                                        <option value="notAdmin">Employee</option>
                                        <option value="admin">Administrator</option>
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="action-button" style={{backgroundColor:'#6c757d'}} onClick={() => setShowModal(false)}>Cancel</button>
                                <button className="action-button add-button" onClick={handleSaveEmployee}>Save</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default EmployeeAdmin;