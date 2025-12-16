import React, { useState, useEffect } from 'react';
import api from '../api/axiosConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faChartBar, faNewspaper, faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

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

    .table-title-section h2 { color: #053774; font-size: 2em; margin: 0; }

    /*TABLE STYLES*/
    table {
        border: 1px solid #ccc;
        border-collapse: collapse;
        margin: 0; padding: 0; width: 100%;
        table-layout: auto;
        background-color: white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        border-radius: 8px;
        overflow: hidden;
    }
    table tr { background-color: #f8f8f8; border: 1px solid #ddd; padding: .35em; }
    table th, table td { padding: 12px 8px; text-align: center; border: 1px solid #e0e0e0; word-wrap: break-word; overflow-wrap: break-word; }
    table th { background-color: #053774; color: white; font-size: 0.8em; letter-spacing: .1em; text-transform: uppercase; font-weight: bold; white-space: nowrap; }
    tr:nth-child(even) { background-color: #f8f8f8; }

    /*BUTTON STYLES*/
    .actions-buttons { display: flex; gap: 6px; justify-content: center; align-items: center; flex-wrap: wrap; min-height: 50px; }
    .action-button { padding: 6px 10px; border: none; border-radius: 5px; cursor: pointer; font-size: 0.8em; display: flex; align-items: center; justify-content: center; gap: 4px; transition: background-color 0.2s ease; white-space: nowrap; min-width: 90px; color: white; }
    .add-button { background-color: #18a54a; padding: 8px 15px; font-size: 1em; }
    .add-button:hover { background-color: #128c3d; }
    .edit-button { background-color: #053774; }
    .edit-button:hover { background-color: #04285c; }
    .delete-button { background-color: #dc3545; }
    .delete-button:hover { background-color: #c82333; }

    .status-badge { padding: 4px 12px; border-radius: 12px; font-size: 0.85em; font-weight: 500; display: inline-block; color: white; }
    .status-active { background-color: #18a54a; }
    .status-inactive { background-color: #6c757d; }
    .stat-value { font-weight: bold; color: #053774; font-size: 1.1em; }

    .preview-section { background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px; border: 1px solid #e0e0e0; }
    .preview-grid { display: flex; gap: 15px; flex-wrap: wrap; }
    
    .preview-card {
        background: var(--secondary, #18a54a);
        padding: 15px;
        border-radius: 8px;
        min-width: 140px;
        text-align: center;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        color: white !important; 
    }
    .preview-card h4, .preview-card p { color: white !important; }

    /*Modal*/
    .modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0,0,0,0.7); display: flex; justify-content: center; align-items: center; z-index: 2000; padding: 20px; }
    .modal-content { background-color: white; border-radius: 10px; width: 100%; max-width: 500px; max-height: 90vh; overflow-y: auto; }
    .modal-header { padding: 20px; border-bottom: 1px solid #e0e0e0; display: flex; justify-content: space-between; }
    .modal-header h3 { margin: 0; color: #053774; }
    .modal-body { padding: 20px; }
    .modal-footer { padding: 20px; border-top: 1px solid #e0e0e0; display: flex; justify-content: flex-end; gap: 10px; }
    .form-group { margin-bottom: 15px; }
    .form-group label { display: block; margin-bottom: 5px; font-weight: bold; }
    .form-group input, .form-group select { width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; }

    @media (max-width: 768px) {
        table thead { display: none; }
        table tr { display: block; margin-bottom: 15px; border: 1px solid #ddd; }
        table td { display: block; text-align: right; padding: 10px; position: relative; padding-left: 50%; }
        table td:before { content: attr(data-label); position: absolute; left: 10px; font-weight: bold; text-transform: uppercase; font-size: 0.75em; }
        .actions-buttons { justify-content: flex-end; }
    }
`;

const EmployeeAdminStats = () => {
    const [statistics, setStatistics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentStat, setCurrentStat] = useState({
        id: '', stat_name: '', stat_value: '', stat_label: '', display_order: 0, is_active: true
    });
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        if (sessionStorage.getItem("isAdmin") !== 'admin') {
            window.location.href = "/EmployeeHome";
            return;
        }
        setIsAdmin(true);
        fetchStatistics();
    }, []);

    const fetchStatistics = async () => {
        setLoading(true);
        try {
            const response = await api.get('/statistics.php');
            setStatistics(response.data.success ? response.data.statistics : []);
        } catch (error) { console.error(error); } finally { setLoading(false); }
    };

    const handleSaveStat = async () => {
        try {
            if (isEditMode) await api.put('/statistics.php', currentStat);
            else await api.post('/statistics.php', currentStat);
            setShowModal(false);
            fetchStatistics();
        } catch (error) { alert("Failed to save."); }
    };

    const handleDeleteStat = async (id) => {
        if (window.confirm("Delete this statistic?")) {
            await api.delete('/statistics.php', { data: { id } });
            fetchStatistics();
        }
    };

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
                                <li className="list-group-item"><a href="/EmployeeAdmin"><FontAwesomeIcon icon={faUsers} className="me-2"/> Employee Mgmt</a></li>
                                <li className="list-group-item active"><a href="/EmployeeAdminStats"><FontAwesomeIcon icon={faChartBar} className="me-2"/> Statistics Mgmt</a></li>
                                <li className="list-group-item"><a href="/EmployeeAdminNews"><FontAwesomeIcon icon={faNewspaper} className="me-2"/> News Mgmt</a></li>
                            </ul>
                        </div>
                    </div>

                    {/*Content*/}
                    <div className="col-md-10 col-sm-12">
                        <div className="admin-view-container">
                            <div className="table-header-section">
                                <div className="table-title-section">
                                    <h2>Statistics Management</h2>
                                </div>
                                <button className="action-button add-button" onClick={() => {
                                    setCurrentStat({ id: '', stat_name: '', stat_value: '', stat_label: '', display_order: statistics.length + 1, is_active: true });
                                    setIsEditMode(false);
                                    setShowModal(true);
                                }}>
                                    <FontAwesomeIcon icon={faPlus} /> Add Statistic
                                </button>
                            </div>

                            <div className="preview-section">
                                <h5 style={{color: '#053774', marginBottom: '15px'}}>Preview (Home Page Style)</h5>
                                <div className="preview-grid">
                                    {statistics.filter(s => s.is_active).slice(0, 5).map(stat => (
                                        <div key={stat.id} className="preview-card">
                                            <h4 style={{margin:0, fontWeight:'bold', fontSize:'1.5rem'}}>{stat.stat_value}</h4>
                                            <p style={{margin:0, fontSize:'0.9rem', opacity:0.9}}>{stat.stat_label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {loading ? <p>Loading...</p> : (
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Name (ID)</th>
                                            <th>Value</th>
                                            <th>Label</th>
                                            <th>Order</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {statistics.sort((a,b) => a.display_order - b.display_order).map(stat => (
                                            <tr key={stat.id}>
                                                <td data-label="Name">{stat.stat_name}</td>
                                                <td data-label="Value" className="stat-value">{stat.stat_value}</td>
                                                <td data-label="Label">{stat.stat_label}</td>
                                                <td data-label="Order">{stat.display_order}</td>
                                                <td data-label="Status"><span className={`status-badge ${stat.is_active ? 'status-active' : 'status-inactive'}`}>{stat.is_active ? 'Active' : 'Inactive'}</span></td>
                                                <td data-label="Actions">
                                                    <div className="actions-buttons">
                                                        <button className="action-button edit-button" onClick={() => { setCurrentStat(stat); setIsEditMode(true); setShowModal(true); }}>
                                                            <FontAwesomeIcon icon={faEdit} /> Edit
                                                        </button>
                                                        <button className="action-button delete-button" onClick={() => handleDeleteStat(stat.id)}>
                                                            <FontAwesomeIcon icon={faTrash} /> Delete
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

                {/*Modal*/}
                {showModal && (
                    <div className="modal-overlay" onClick={(e) => e.target.className === 'modal-overlay' && setShowModal(false)}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3>{isEditMode ? 'Edit Statistic' : 'Add Statistic'}</h3>
                                <button onClick={() => setShowModal(false)} style={{border:'none', background:'none', fontSize:'1.5rem'}}>×</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group"><label>Unique Name/ID</label><input value={currentStat.stat_name} onChange={e => setCurrentStat({...currentStat, stat_name: e.target.value})} disabled={isEditMode}/></div>
                                <div className="form-group"><label>Value</label><input value={currentStat.stat_value} onChange={e => setCurrentStat({...currentStat, stat_value: e.target.value})} /></div>
                                <div className="form-group"><label>Label</label><input value={currentStat.stat_label} onChange={e => setCurrentStat({...currentStat, stat_label: e.target.value})} /></div>
                                <div className="form-group"><label>Order</label><input type="number" value={currentStat.display_order} onChange={e => setCurrentStat({...currentStat, display_order: parseInt(e.target.value)})} /></div>
                                <div className="form-group"><label>Status</label>
                                    <select value={currentStat.is_active} onChange={e => setCurrentStat({...currentStat, is_active: e.target.value === 'true'})}>
                                        <option value="true">Active</option>
                                        <option value="false">Inactive</option>
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="action-button" style={{backgroundColor:'#6c757d'}} onClick={() => setShowModal(false)}>Cancel</button>
                                <button className="action-button add-button" onClick={handleSaveStat}>Save</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default EmployeeAdminStats;