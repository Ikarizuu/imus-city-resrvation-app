import React, { useState, useEffect } from 'react';
import api from '../api/axiosConfig';

const pageSpecificStyles = `
    .employee-admin-container {
        padding: 30px;
        max-width: 1400px;
        margin: 0 auto;
        min-height: 80vh;
    }
    
    .admin-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
        padding-bottom: 20px;
        border-bottom: 2px solid #053774;
    }
    
    .admin-header h2 {
        color: #053774;
        margin: 0;
        font-size: 2em;
    }
    
    .admin-badge {
        background-color: #ffc107;
        color: #212529;
        padding: 5px 12px;
        border-radius: 20px;
        font-weight: bold;
        font-size: 0.9em;
        display: inline-flex;
        align-items: center;
        gap: 5px;
    }
    
    .add-employee-btn {
        background-color: #28a745;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 500;
        font-size: 1em;
        display: flex;
        align-items: center;
        gap: 8px;
        transition: background-color 0.3s ease;
    }
    
    .add-employee-btn:hover {
        background-color: #218838;
    }
    
    .employee-table-container {
        background: white;
        border-radius: 10px;
        box-shadow: 0 2px 15px rgba(0,0,0,0.1);
        overflow: hidden;
        margin-bottom: 30px;
    }
    
    .employee-table {
        width: 100%;
        border-collapse: collapse;
    }
    
    .employee-table thead {
        background-color: #053774;
    }
    
    .employee-table th {
        color: white;
        padding: 15px;
        text-align: left;
        font-weight: 600;
        font-size: 0.95em;
        border-right: 1px solid rgba(255,255,255,0.1);
    }
    
    .employee-table th:last-child {
        border-right: none;
    }
    
    .employee-table td {
        padding: 15px;
        border-bottom: 1px solid #e0e0e0;
        color: #333;
        font-size: 0.95em;
    }
    
    .employee-table tr:last-child td {
        border-bottom: none;
    }
    
    .employee-table tr:hover {
        background-color: #f8f9fa;
    }
    
    .role-badge {
        padding: 4px 12px;
        border-radius: 12px;
        font-size: 0.85em;
        font-weight: 500;
        display: inline-block;
    }
    
    .role-admin {
        background-color: #ffc107;
        color: #212529;
    }
    
    .role-employee {
        background-color: #6c757d;
        color: white;
    }
    
    .action-buttons {
        display: flex;
        gap: 10px;
    }
    
    .action-btn {
        padding: 6px 12px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 0.9em;
        font-weight: 500;
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        gap: 5px;
        min-width: 80px;
        justify-content: center;
    }
    
    .edit-btn {
        background-color: #06428A;
        color: white;
    }
    
    .edit-btn:hover {
        background-color: #053774;
    }
    
    .delete-btn {
        background-color: #dc3545;
        color: white;
    }
    
    .delete-btn:hover {
        background-color: #c82333;
    }
    
    /* Modal Styles */
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        padding: 20px;
    }
    
    .modal-content {
        background-color: white;
        border-radius: 10px;
        width: 100%;
        max-width: 500px;
        max-height: 90vh;
        overflow-y: auto;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
    }
    
    .modal-header {
        padding: 20px;
        border-bottom: 1px solid #e0e0e0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .modal-header h3 {
        margin: 0;
        color: #053774;
        font-size: 1.5em;
    }
    
    .close-btn {
        background: none;
        border: none;
        font-size: 1.5em;
        cursor: pointer;
        color: #666;
        padding: 0;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }
    
    .close-btn:hover {
        background-color: #f8f9fa;
        color: #333;
    }
    
    .modal-body {
        padding: 20px;
    }
    
    .form-group {
        margin-bottom: 20px;
    }
    
    .form-group label {
        display: block;
        margin-bottom: 8px;
        font-weight: 500;
        color: #333;
    }
    
    .form-group input,
    .form-group select {
        width: 100%;
        padding: 10px 12px;
        border: 1px solid #ccc;
        border-radius: 6px;
        font-size: 1em;
        box-sizing: border-box;
        transition: border-color 0.2s ease;
    }
    
    .form-group input:focus,
    .form-group select:focus {
        outline: none;
        border-color: #06428A;
        box-shadow: 0 0 0 2px rgba(6, 66, 138, 0.1);
    }
    
    .required-star {
        color: #dc3545;
        margin-left: 4px;
    }
    
    .password-note {
        font-size: 0.85em;
        color: #666;
        margin-top: 5px;
        font-style: italic;
    }
    
    .modal-footer {
        padding: 20px;
        border-top: 1px solid #e0e0e0;
        display: flex;
        justify-content: flex-end;
        gap: 10px;
    }
    
    .modal-btn {
        padding: 10px 20px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 1em;
        font-weight: 500;
        min-width: 100px;
    }
    
    .modal-btn-cancel {
        background-color: #6c757d;
        color: white;
    }
    
    .modal-btn-cancel:hover {
        background-color: #5a6268;
    }
    
    .modal-btn-save {
        background-color: #28a745;
        color: white;
    }
    
    .modal-btn-save:hover {
        background-color: #218838;
    }
    
    .modal-btn-save:disabled {
        background-color: #6c757d;
        cursor: not-allowed;
    }
    
    /* Loading and Empty States */
    .loading-container,
    .empty-state {
        text-align: center;
        padding: 50px;
        color: #666;
    }
    
    .loading-spinner {
        border: 3px solid #f3f3f3;
        border-top: 3px solid #053774;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        animation: spin 1s linear infinite;
        margin: 0 auto 20px;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    .access-denied {
        text-align: center;
        padding: 100px 20px;
        color: #dc3545;
    }
    
    .access-denied h2 {
        margin-bottom: 20px;
    }
    
    .back-btn {
        background-color: #06428A;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 1em;
        margin-top: 20px;
    }
    
    .back-btn:hover {
        background-color: #053774;
    }
    
    /* Responsive Design */
    @media (max-width: 768px) {
        .employee-admin-container {
            padding: 15px;
        }
        
        .admin-header {
            flex-direction: column;
            gap: 15px;
            align-items: flex-start;
        }
        
        .employee-table-container {
            overflow-x: auto;
        }
        
        .employee-table {
            min-width: 800px;
        }
        
        .action-buttons {
            flex-direction: column;
            gap: 5px;
        }
        
        .action-btn {
            min-width: 70px;
            font-size: 0.85em;
        }
        
        .modal-overlay {
            padding: 10px;
        }
        
        .modal-content {
            max-height: 95vh;
        }
    }
`;

const EmployeeAdmin = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentEmployee, setCurrentEmployee] = useState({
        id: '',
        employeeid: '',
        password: '',
        first_name: '',
        last_name: '',
        isAdmin: 'notAdmin'
    });
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        // Check if user is admin
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
            alert("Failed to load employees. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleAddEmployee = () => {
        setCurrentEmployee({
            id: '',
            employeeid: '',
            password: '',
            first_name: '',
            last_name: '',
            isAdmin: 'notAdmin'
        });
        setIsEditMode(false);
        setShowModal(true);
    };

    const handleEditEmployee = (employee) => {
        setCurrentEmployee({
            id: employee.id,
            employeeid: employee.employeeid,
            password: '', // Don't show current password
            first_name: employee.first_name,
            last_name: employee.last_name,
            isAdmin: employee.isAdmin || 'notAdmin'
        });
        setIsEditMode(true);
        setShowModal(true);
    };

    const handleDeleteEmployee = async (id, employeeid) => {
        if (window.confirm(`Are you sure you want to delete employee ${employeeid}? This action cannot be undone.`)) {
            try {
                await api.delete('/employees.php', {
                    data: { id: id }
                });
                fetchEmployees();
                alert("Employee deleted successfully.");
            } catch (error) {
                console.error("Error deleting employee:", error);
                alert("Failed to delete employee. Please try again.");
            }
        }
    };

    const handleSaveEmployee = async () => {
        // Validate form
        if (!currentEmployee.employeeid.trim()) {
            alert("Please enter Employee ID");
            return;
        }
        if (!currentEmployee.first_name.trim()) {
            alert("Please enter First Name");
            return;
        }
        if (!currentEmployee.last_name.trim()) {
            alert("Please enter Last Name");
            return;
        }
        if (!isEditMode && !currentEmployee.password.trim()) {
            alert("Please enter Password for new employee");
            return;
        }

        try {
            const employeeData = {
                employeeid: currentEmployee.employeeid,
                first_name: currentEmployee.first_name,
                last_name: currentEmployee.last_name,
                isAdmin: currentEmployee.isAdmin
            };

            if (isEditMode) {
                // Add the ID for updates
                employeeData.id = currentEmployee.id;
                
                // Only include password if a new one was provided
                if (currentEmployee.password.trim()) {
                    employeeData.password = currentEmployee.password;
                }
                
                await api.put('/employees.php', employeeData);
                alert("Employee updated successfully.");
            } else {
                // For new employees, password is required
                if (!currentEmployee.password.trim()) {
                    alert("Please enter Password for new employee");
                    return;
                }
                employeeData.password = currentEmployee.password;
                
                await api.post('/employees.php', employeeData);
                alert("Employee added successfully.");
            }
            
            setShowModal(false);
            fetchEmployees();
        } catch (error) {
            console.error("Error saving employee:", error);
            const errorMsg = error.response?.data?.message || "Failed to save employee. Please try again.";
            alert(errorMsg);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentEmployee(prev => ({
            ...prev,
            [name]: value
        }));
    };

    if (!isAdmin) {
        return (
            <div className="access-denied">
                <h2>Access Denied</h2>
                <p>You do not have permission to access this page.</p>
                <button className="back-btn" onClick={() => window.location.href = "/EmployeeHome"}>
                    Go to Home
                </button>
            </div>
        );
    }

    return (
        <>
            <style>{pageSpecificStyles}</style>
            <div className="employee-admin-container">
                <div className="admin-header">
                    <div>
                        <h2>Employee Administration</h2>
                        <span className="admin-badge">Administrator Access</span>
                    </div>
                    <button className="add-employee-btn" onClick={handleAddEmployee}>
                        <span>+</span> Add New Employee
                    </button>
                </div>

                {loading ? (
                    <div className="loading-container">
                        <div className="loading-spinner"></div>
                        <p>Loading employees...</p>
                    </div>
                ) : employees.length === 0 ? (
                    <div className="empty-state">
                        <p>No employees found. Add your first employee.</p>
                    </div>
                ) : (
                    <div className="employee-table-container">
                        <table className="employee-table">
                            <thead>
                                <tr>
                                    <th>Employee ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Role</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employees.map(employee => (
                                    <tr key={employee.id}>
                                        <td>{employee.employeeid}</td>
                                        <td>{employee.first_name}</td>
                                        <td>{employee.last_name}</td>
                                        <td>
                                            <span className={`role-badge ${employee.isAdmin === 'admin' ? 'role-admin' : 'role-employee'}`}>
                                                {employee.isAdmin === 'admin' ? 'Administrator' : 'Employee'}
                                            </span>
                                        </td>
                                        <td>
                                            <div className="action-buttons">
                                                <button 
                                                    className="action-btn edit-btn"
                                                    onClick={() => handleEditEmployee(employee)}
                                                >
                                                    Edit
                                                </button>
                                                <button 
                                                    className="action-btn delete-btn"
                                                    onClick={() => handleDeleteEmployee(employee.id, employee.employeeid)}
                                                    disabled={employee.employeeid === sessionStorage.getItem("loggedInUser")}
                                                    title={employee.employeeid === sessionStorage.getItem("loggedInUser") ? "Cannot delete your own account" : ""}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Add/Edit Employee Modal */}
                {showModal && (
                    <div className="modal-overlay" onClick={(e) => e.target.className === 'modal-overlay' && handleCloseModal()}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3>{isEditMode ? 'Edit Employee' : 'Add New Employee'}</h3>
                                <button className="close-btn" onClick={handleCloseModal}>×</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>
                                        Employee ID <span className="required-star">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="employeeid"
                                        value={currentEmployee.employeeid}
                                        onChange={handleInputChange}
                                        disabled={isEditMode}
                                        placeholder="e.g., EMP001"
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label>
                                        First Name <span className="required-star">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="first_name"
                                        value={currentEmployee.first_name}
                                        onChange={handleInputChange}
                                        placeholder="Enter first name"
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label>
                                        Last Name <span className="required-star">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="last_name"
                                        value={currentEmployee.last_name}
                                        onChange={handleInputChange}
                                        placeholder="Enter last name"
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label>
                                        {isEditMode ? 'New Password (leave blank to keep current)' : 'Password'} 
                                        {!isEditMode && <span className="required-star">*</span>}
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={currentEmployee.password}
                                        onChange={handleInputChange}
                                        placeholder={isEditMode ? "Enter new password or leave blank" : "Enter password"}
                                    />
                                    {isEditMode && (
                                        <p className="password-note">Leave password field empty to keep the current password</p>
                                    )}
                                </div>
                                
                                <div className="form-group">
                                    <label>Role</label>
                                    <select
                                        name="isAdmin"
                                        value={currentEmployee.isAdmin}
                                        onChange={handleInputChange}
                                    >
                                        <option value="notAdmin">Employee</option>
                                        <option value="admin">Administrator</option>
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="modal-btn modal-btn-cancel" onClick={handleCloseModal}>
                                    Cancel
                                </button>
                                <button className="modal-btn modal-btn-save" onClick={handleSaveEmployee}>
                                    {isEditMode ? 'Update' : 'Save'}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default EmployeeAdmin;