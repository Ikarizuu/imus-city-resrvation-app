import React, { useState, useEffect } from 'react';
import api from '../api/axiosConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faChartBar, faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const pageSpecificStyles = `
    /* Main Container */
    .admin-main-container {
        display: flex;
        min-height: calc(100vh - 150px);
        background-color: var(--light-bg);
    }
    
    /* Sidebar Styles - Wider and matching App.css */
    .admin-sidebar {
        width: 280px;
        min-width: 280px;
        background-color: var(--primary);
        color: white;
        padding: 0;
        border-radius: 0 16px 16px 0;
        box-shadow: 4px 0 15px rgba(0,0,0,0.1);
        margin-right: 20px;
        position: sticky;
        top: 0;
        height: fit-content;
        overflow: hidden;
    }
    
    .admin-sidebar-header {
        padding: 20px 25px;
        border-bottom: 2px solid rgba(255,255,255,0.1);
        margin-bottom: 0;
        background-color: var(--primary);
        color: white;
        border-radius: 0 16px 0 0;
    }
    
    .admin-sidebar-header h3 {
        color: white;
        font-size: 1.4rem;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin: 0;
    }
    
    .admin-sidebar-menu {
        list-style: none;
        padding: 0;
        margin: 0;
        background-color: var(--primary);
        border-radius: 0 0 16px 16px;
    }
    
    .admin-sidebar-menu li {
        margin: 0;
        padding: 0;
        border-bottom: 1px solid rgba(255,255,255,0.1);
    }
    
    .admin-sidebar-menu li:last-child {
        border-bottom: none;
        border-radius: 0 0 16px 16px;
        overflow: hidden;
    }
    
    .admin-sidebar-menu li:last-child a {
        border-radius: 0 0 16px 16px;
    }
    
    .admin-sidebar-menu li:last-child a:hover,
    .admin-sidebar-menu li:last-child.active a {
        border-radius: 0 0 16px 16px;
        background-color: var(--secondary);
    }
    
    .admin-sidebar-menu li a {
        display: flex;
        align-items: center;
        padding: 15px 25px;
        color: #bbd2f0;
        font-weight: 500;
        font-size: 0.95rem;
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        position: relative;
        text-decoration: none;
        white-space: normal;
    }
    
    .admin-sidebar-menu li a:hover,
    .admin-sidebar-menu li.active a {
        background-color: var(--secondary);
        color: white;
        font-weight: 700;
        padding-left: 30px;
    }
    
    .admin-sidebar-menu li a .icon {
        margin-right: 12px;
        font-size: 1.2em;
        width: 20px;
        text-align: center;
        color: inherit;
    }
    
    .admin-sidebar-menu li.active a .icon {
        color: white;
    }
    
    /* Content Area */
    .admin-content-container {
        flex: 1;
        padding: 30px;
        max-width: calc(100% - 300px);
    }
    
    .admin-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
        padding-bottom: 20px;
        border-bottom: 2px solid var(--primary);
    }
    
    .admin-header h2 {
        color: var(--primary);
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
    
    .add-stat-btn {
        background-color: var(--secondary);
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
    
    .add-stat-btn:hover {
        background-color: #218838;
    }
    
    .stats-table-container {
        background: white;
        border-radius: 10px;
        box-shadow: 0 2px 15px rgba(0,0,0,0.1);
        overflow: hidden;
        margin-bottom: 30px;
    }
    
    .stats-table {
        width: 100%;
        border-collapse: collapse;
    }
    
    .stats-table thead {
        background-color: var(--primary);
    }
    
    .stats-table th {
        color: white;
        padding: 15px;
        text-align: left;
        font-weight: 600;
        font-size: 0.95em;
        border-right: 1px solid rgba(255,255,255,0.1);
    }
    
    .stats-table th:last-child {
        border-right: none;
    }
    
    .stats-table td {
        padding: 15px;
        border-bottom: 1px solid #e0e0e0;
        color: #333;
        font-size: 0.95em;
    }
    
    .stats-table tr:last-child td {
        border-bottom: none;
    }
    
    .stats-table tr:hover {
        background-color: #f8f9fa;
    }
    
    .stat-value {
        font-weight: bold;
        color: var(--primary);
        font-size: 1.1em;
    }
    
    .stat-label {
        color: #666;
        font-size: 0.9em;
    }
    
    .status-badge {
        padding: 4px 12px;
        border-radius: 12px;
        font-size: 0.85em;
        font-weight: 500;
        display: inline-block;
    }
    
    .status-active {
        background-color: var(--secondary);
        color: white;
    }
    
    .status-inactive {
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
        background-color: var(--primary);
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
        max-width: 600px;
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
        color: var(--primary);
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
        border-color: var(--primary);
        box-shadow: 0 0 0 2px rgba(5, 55, 116, 0.1);
    }
    
    .required-star {
        color: #dc3545;
        margin-left: 4px;
    }
    
    .form-row {
        display: flex;
        gap: 20px;
        margin-bottom: 20px;
    }
    
    .form-row .form-group {
        flex: 1;
        margin-bottom: 0;
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
        background-color: var(--secondary);
        color: white;
    }
    
    .modal-btn-save:hover {
        background-color: #218838;
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
        border-top: 3px solid var(--primary);
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
        background-color: var(--primary);
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
    @media (max-width: 992px) {
        .admin-main-container {
            flex-direction: column;
        }
        
        .admin-sidebar {
            width: 100%;
            min-width: 100%;
            margin-right: 0;
            margin-bottom: 20px;
            border-radius: 0 0 16px 16px;
            position: relative;
        }
        
        .admin-content-container {
            max-width: 100%;
            padding: 20px;
        }
        
        .admin-header {
            flex-direction: column;
            gap: 15px;
            align-items: flex-start;
        }
        
        .stats-table-container {
            overflow-x: auto;
        }
        
        .stats-table {
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
        
        .form-row {
            flex-direction: column;
            gap: 15px;
        }
    }
    
    @media (max-width: 768px) {
        .admin-content-container {
            padding: 15px;
        }
    }
    
    /* Statistics Preview */
    .statistics-preview {
        margin-top: 30px;
        padding: 20px;
        background: #f8f9fa;
        border-radius: 10px;
        border: 1px solid #e0e0e0;
    }
    
    .preview-title {
        margin-bottom: 20px;
        color: var(--primary);
        font-size: 1.2em;
        font-weight: 600;
    }
    
    .preview-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        gap: 15px;
        margin-top: 15px;
    }
    
    .preview-card {
        background: white;
        padding: 15px;
        border-radius: 8px;
        text-align: center;
        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        border: 1px solid #e0e0e0;
    }
    
    .preview-value {
        font-weight: bold;
        color: var(--primary);
        font-size: 1.2em;
        margin-bottom: 5px;
    }
    
    .preview-label {
        color: #666;
        font-size: 0.9em;
    }
`;

const EmployeeAdminStats = () => {
    const [statistics, setStatistics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentStat, setCurrentStat] = useState({
        id: '',
        stat_name: '',
        stat_value: '',
        stat_label: '',
        display_order: 0,
        is_active: true
    });
    const [isAdmin, setIsAdmin] = useState(false);
    const [previewStats, setPreviewStats] = useState([]);

    useEffect(() => {
        // Check if user is admin
        const adminStatus = sessionStorage.getItem("isAdmin");
        
        if (adminStatus !== 'admin') {
            window.location.href = "/EmployeeHome";
            return;
        }
        
        setIsAdmin(true);
        fetchStatistics();
    }, []);

    useEffect(() => {
        // Update preview when statistics change
        if (statistics.length > 0) {
            const preview = statistics
                .filter(stat => stat.is_active)
                .sort((a, b) => a.display_order - b.display_order)
                .slice(0, 5); // Show first 5 active stats in preview
            setPreviewStats(preview);
        }
    }, [statistics]);

    const fetchStatistics = async () => {
        setLoading(true);
        try {
            const response = await api.get('/statistics.php');
            if (response.data.success) {
                setStatistics(response.data.statistics || []);
            } else {
                console.error("Error fetching statistics:", response.data.message);
                setStatistics([]);
            }
        } catch (error) {
            console.error("Error fetching statistics:", error);
            alert("Failed to load statistics. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleAddStat = () => {
        setCurrentStat({
            id: '',
            stat_name: '',
            stat_value: '',
            stat_label: '',
            display_order: statistics.length + 1,
            is_active: true
        });
        setIsEditMode(false);
        setShowModal(true);
    };

    const handleEditStat = (stat) => {
        setCurrentStat({
            id: stat.id,
            stat_name: stat.stat_name,
            stat_value: stat.stat_value,
            stat_label: stat.stat_label,
            display_order: stat.display_order,
            is_active: stat.is_active
        });
        setIsEditMode(true);
        setShowModal(true);
    };

    const handleDeleteStat = async (id, statName) => {
        if (window.confirm(`Are you sure you want to deactivate statistic "${statName}"? This will hide it from public view.`)) {
            try {
                await api.delete('/statistics.php', {
                    data: { id: id }
                });
                fetchStatistics();
                alert("Statistic deactivated successfully.");
            } catch (error) {
                console.error("Error deleting statistic:", error);
                alert("Failed to deactivate statistic. Please try again.");
            }
        }
    };

    const handleSaveStat = async () => {
        // Validate form
        if (!currentStat.stat_name.trim()) {
            alert("Please enter Statistic Name (unique identifier)");
            return;
        }
        if (!currentStat.stat_value.trim()) {
            alert("Please enter Statistic Value");
            return;
        }
        if (!currentStat.stat_label.trim()) {
            alert("Please enter Display Label");
            return;
        }

        try {
            if (isEditMode) {
                await api.put('/statistics.php', currentStat);
                alert("Statistic updated successfully.");
            } else {
                await api.post('/statistics.php', currentStat);
                alert("Statistic added successfully.");
            }
            
            setShowModal(false);
            fetchStatistics();
        } catch (error) {
            console.error("Error saving statistic:", error);
            const errorMsg = error.response?.data?.message || "Failed to save statistic. Please try again.";
            alert(errorMsg);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleInputChange = (e) => {
        const { name, value, type } = e.target;
        setCurrentStat(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? e.target.checked : 
                    name === 'display_order' ? parseInt(value) || 0 : 
                    value
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
            <div className="admin-main-container">
                {/* Wider Sidebar with proper bottom styling */}
                <div className="admin-sidebar">
                    <div className="admin-sidebar-header">
                        <h3>Admin Panel</h3>
                    </div>
                    
                    <ul className="admin-sidebar-menu">
                        <li>
                            <a href="/EmployeeAdmin">
                                <FontAwesomeIcon icon={faUsers} className="icon" />
                                Employee Management
                            </a>
                        </li>
                        <li className="active">
                            <a href="/EmployeeAdminStats">
                                <FontAwesomeIcon icon={faChartBar} className="icon" />
                                Statistics Management
                            </a>
                        </li>
                        
                    </ul>
                </div>
                
                {/* Main Content */}
                <div className="admin-content-container">
                    <div className="admin-header">
                        <div>
                            <h2>Statistics Management</h2>
                            <span className="admin-badge">Administrator Access</span>
                            <p style={{color: '#666', marginTop: '10px', fontSize: '0.95em'}}>
                                Manage statistics displayed on Home page and City Profile
                            </p>
                        </div>
                        <button className="add-stat-btn" onClick={handleAddStat}>
                            <FontAwesomeIcon icon={faPlus} />
                            Add New Statistic
                        </button>
                    </div>

                    {/* Statistics Preview */}
                    <div className="statistics-preview">
                        <div className="preview-title">Preview (How it appears on Home page):</div>
                        <div className="preview-grid">
                            {previewStats.length > 0 ? (
                                previewStats.map(stat => (
                                    <div key={stat.id} className="preview-card">
                                        <div className="preview-value">{stat.stat_value}</div>
                                        <div className="preview-label">{stat.stat_label}</div>
                                    </div>
                                ))
                            ) : (
                                <div className="preview-card" style={{gridColumn: '1/-1'}}>
                                    <div className="preview-label">No active statistics to preview</div>
                                </div>
                            )}
                        </div>
                    </div>

                    {loading ? (
                        <div className="loading-container">
                            <div className="loading-spinner"></div>
                            <p>Loading statistics...</p>
                        </div>
                    ) : statistics.length === 0 ? (
                        <div className="empty-state">
                            <p>No statistics found. Add your first statistic.</p>
                        </div>
                    ) : (
                        <div className="stats-table-container">
                            <table className="stats-table">
                                <thead>
                                    <tr>
                                        <th>Statistic Name</th>
                                        <th>Value</th>
                                        <th>Label</th>
                                        <th>Order</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {statistics
                                        .sort((a, b) => a.display_order - b.display_order)
                                        .map(stat => (
                                        <tr key={stat.id}>
                                            <td>
                                                <strong>{stat.stat_name}</strong>
                                                <br />
                                                <small style={{color: '#666'}}>ID: {stat.id}</small>
                                            </td>
                                            <td className="stat-value">{stat.stat_value}</td>
                                            <td className="stat-label">{stat.stat_label}</td>
                                            <td>{stat.display_order}</td>
                                            <td>
                                                <span className={`status-badge ${stat.is_active ? 'status-active' : 'status-inactive'}`}>
                                                    {stat.is_active ? 'Active' : 'Inactive'}
                                                </span>
                                            </td>
                                            <td>
                                                <div className="action-buttons">
                                                    <button 
                                                        className="action-btn edit-btn"
                                                        onClick={() => handleEditStat(stat)}
                                                    >
                                                        <FontAwesomeIcon icon={faEdit} />
                                                        Edit
                                                    </button>
                                                    <button 
                                                        className="action-btn delete-btn"
                                                        onClick={() => handleDeleteStat(stat.id, stat.stat_name)}
                                                    >
                                                        <FontAwesomeIcon icon={faTrash} />
                                                        {stat.is_active ? 'Deactivate' : 'Delete'}
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* Add/Edit Statistic Modal */}
                    {showModal && (
                        <div className="modal-overlay" onClick={(e) => e.target.className === 'modal-overlay' && handleCloseModal()}>
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h3>{isEditMode ? 'Edit Statistic' : 'Add New Statistic'}</h3>
                                    <button className="close-btn" onClick={handleCloseModal}>×</button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label>
                                            Statistic Name (Unique ID) <span className="required-star">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="stat_name"
                                            value={currentStat.stat_name}
                                            onChange={handleInputChange}
                                            disabled={isEditMode}
                                            placeholder="e.g., population, density, barangays"
                                        />
                                        <small style={{color: '#666'}}>This is used as an identifier. Use lowercase with underscores.</small>
                                    </div>
                                    
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>
                                                Statistic Value <span className="required-star">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="stat_value"
                                                value={currentStat.stat_value}
                                                onChange={handleInputChange}
                                                placeholder="e.g., 539,743 or ₱1.2 Billion"
                                            />
                                        </div>
                                        
                                        <div className="form-group">
                                            <label>
                                                Display Label <span className="required-star">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="stat_label"
                                                value={currentStat.stat_label}
                                                onChange={handleInputChange}
                                                placeholder="e.g., Population, Annual Budget"
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Display Order</label>
                                            <input
                                                type="number"
                                                name="display_order"
                                                value={currentStat.display_order}
                                                onChange={handleInputChange}
                                                min="0"
                                                placeholder="0"
                                            />
                                            <small style={{color: '#666'}}>Lower numbers appear first</small>
                                        </div>
                                        
                                        <div className="form-group">
                                            <label>Status</label>
                                            <select
                                                name="is_active"
                                                value={currentStat.is_active ? 'true' : 'false'}
                                                onChange={(e) => setCurrentStat(prev => ({...prev, is_active: e.target.value === 'true'}))}
                                            >
                                                <option value="true">Active (Visible)</option>
                                                <option value="false">Inactive (Hidden)</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button className="modal-btn modal-btn-cancel" onClick={handleCloseModal}>
                                        Cancel
                                    </button>
                                    <button className="modal-btn modal-btn-save" onClick={handleSaveStat}>
                                        {isEditMode ? 'Update' : 'Save'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default EmployeeAdminStats;