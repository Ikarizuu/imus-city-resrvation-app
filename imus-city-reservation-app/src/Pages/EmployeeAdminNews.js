import React, { useState, useEffect } from 'react';
import api from '../api/axiosConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faChartBar, faNewspaper, faPlus, faEdit, faTrash, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const pageSpecificStyles = `
    /* Main Container with padding like EmployeeTableView */
    .admin-main-container {
        display: flex;
        min-height: calc(100vh - 150px);
        background-color: var(--light-bg);
    }
    
    /* Content Area with padding */
    .admin-content-container {
        flex: 1;
        padding: 30px;
        max-width: calc(100% - 300px);
        background-color: var(--light-bg);
    }
    
    /* Sidebar Styles */
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
    
    /* Header Section */
    .admin-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
        padding-bottom: 20px;
        border-bottom: 2px solid var(--primary);
        background-color: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
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
        margin-top: 5px;
    }
    
    .add-news-btn {
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
        white-space: nowrap;
    }
    
    .add-news-btn:hover {
        background-color: #218838;
    }
    
    /* News Table Styles */
    .news-table-container {
        background: white;
        border-radius: 10px;
        box-shadow: 0 2px 15px rgba(0,0,0,0.1);
        overflow: hidden;
        margin-bottom: 30px;
        padding: 20px;
    }
    
    .news-table {
        width: 100%;
        border-collapse: collapse;
    }
    
    .news-table thead {
        background-color: var(--primary);
    }
    
    .news-table th {
        color: white;
        padding: 15px;
        text-align: left;
        font-weight: 600;
        font-size: 0.95em;
        border-right: 1px solid rgba(255,255,255,0.1);
    }
    
    .news-table th:last-child {
        border-right: none;
    }
    
    .news-table td {
        padding: 15px;
        border-bottom: 1px solid #e0e0e0;
        color: #333;
        font-size: 0.95em;
        vertical-align: middle;
    }
    
    .news-table tr:last-child td {
        border-bottom: none;
    }
    
    .news-table tr:hover {
        background-color: #f8f9fa;
    }
    
    .news-image-thumb {
        width: 80px;
        height: 60px;
        object-fit: cover;
        border-radius: 4px;
        border: 1px solid #ddd;
        background-color: #f8f9fa;
    }
    
    /* Status Badges */
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
    
    .status-archived {
        background-color: #dc3545;
        color: white;
    }
    
    /* Action Buttons */
    .action-buttons {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
    }
    
    .action-btn {
        padding: 6px 12px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 0.85em;
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
    
    .toggle-btn {
        background-color: #6c757d;
        color: white;
    }
    
    .toggle-btn:hover {
        background-color: #5a6268;
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
        max-width: 700px;
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
    .form-group select,
    .form-group textarea {
        width: 100%;
        padding: 10px 12px;
        border: 1px solid #ccc;
        border-radius: 6px;
        font-size: 1em;
        box-sizing: border-box;
        transition: border-color 0.2s ease;
    }
    
    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
        outline: none;
        border-color: var(--primary);
        box-shadow: 0 0 0 2px rgba(5, 55, 116, 0.1);
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
    
    .required-star {
        color: #dc3545;
        margin-left: 4px;
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
        display: flex;
        align-items: center;
        gap: 8px;
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
    
    .modal-btn-save:disabled {
        background-color: #6c757d;
        cursor: not-allowed;
        opacity: 0.7;
    }
    
    /* Loading and Empty States */
    .loading-container,
    .empty-state {
        text-align: center;
        padding: 50px;
        color: #666;
        background-color: white;
        border-radius: 8px;
        margin: 20px 0;
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
        background-color: white;
        border-radius: 8px;
        margin: 20px;
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
    
    /* Filter Section */
    .filter-section {
        background: white;
        padding: 15px 20px;
        border-radius: 8px;
        margin-bottom: 20px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        display: flex;
        align-items: center;
        gap: 15px;
        flex-wrap: wrap;
    }
    
    .filter-section label {
        margin: 0;
        font-weight: 500;
        color: #333;
        white-space: nowrap;
    }
    
    .filter-section select {
        padding: 8px 12px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: white;
        min-width: 150px;
    }
    
    /* Text truncation */
    .truncate-text {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 200px;
        display: block;
    }
    
    .no-image-placeholder {
        width: 80px;
        height: 60px;
        background-color: #f8f9fa;
        border: 1px solid #dee2e6;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #6c757d;
        font-size: 0.8em;
        text-align: center;
        padding: 5px;
    }
    
    /* Image preview in modal */
    .image-preview {
        max-width: 200px;
        max-height: 150px;
        object-fit: cover;
        border-radius: 4px;
        border: 1px solid #ddd;
        margin-top: 10px;
        display: block;
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
        
        .news-table-container {
            overflow-x: auto;
            padding: 10px;
        }
        
        .news-table {
            min-width: 800px;
        }
        
        .action-buttons {
            flex-direction: column;
            gap: 5px;
        }
        
        .form-row {
            flex-direction: column;
            gap: 15px;
        }
        
        .modal-overlay {
            padding: 10px;
        }
        
        .modal-content {
            max-height: 95vh;
        }
    }
    
    @media (max-width: 768px) {
        .admin-content-container {
            padding: 15px;
        }
        
        .action-btn {
            min-width: 60px;
            font-size: 0.8em;
            padding: 5px 8px;
        }
        
        .add-news-btn {
            width: 100%;
            justify-content: center;
        }
    }
`;

const EmployeeAdminNews = () => {
    const [newsItems, setNewsItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editingItem, setEditingItem] = useState(null);
    const [filterStatus, setFilterStatus] = useState('all');
    const [isAdmin, setIsAdmin] = useState(false);

    // Admin panel navigation items
    const adminNavItems = [
        { href: "/EmployeeAdmin", icon: faUsers, label: "Employee Management" },
        { href: "/EmployeeAdminStats", icon: faChartBar, label: "Statistics Management" },
        { href: "/EmployeeAdminNews", icon: faNewspaper, label: "News Carousel Management", active: true }
    ];

    // LIFECYCLE & AUTHENTICATION
    useEffect(() => {
        // Check if user is admin
        const adminStatus = sessionStorage.getItem("isAdmin");

        if (adminStatus !== 'admin') {
            window.location.href = "/EmployeeHome";
            return;
        }

        setIsAdmin(true);
        fetchNewsItems();
    }, []);

    // Refetch when filter changes
    useEffect(() => {
        if (isAdmin) {
            fetchNewsItems();
        }
    }, [filterStatus]);

    // DATA FETCHING
    const fetchNewsItems = async () => {
        setLoading(true);
        try {
            // Build URL with status filter
            let url = '/news_handler.php?admin=true';
            if (filterStatus !== 'all') {
                url += `&status=${filterStatus}`;
            }

            const response = await api.get(url);

            if (response.data.success) {
                setNewsItems(response.data.news || []);
            } else {
                console.error("Error fetching news:", response.data.message);
                setNewsItems([]);
                alert("Failed to load news items: " + response.data.message);
            }
        } catch (error) {
            console.error("Error fetching news:", error);
            setNewsItems([]);
            alert("Failed to load news items. Please check your connection.");
        } finally {
            setLoading(false);
        }
    };

    // CRUD OPERATIONS
    const handleCreate = () => {
        setEditingItem({
            id: '',
            title: '',
            excerpt: '',
            image_path: '',
            image_alt: '',
            link: 'http://localhost:3000/Home', // Default URL
            display_order: newsItems.length + 1,
            status: 'active',
            news_date: ''
        });
        setShowModal(true);
    };

    const handleEdit = (item) => {
        setEditingItem({
            ...item,
            link: item.link || 'http://localhost:3000/Home' // Default URL if empty
        });
        setShowModal(true);
    };

    const handleDelete = async (itemId, itemTitle) => {
        if (!window.confirm(`Are you sure you want to delete "${itemTitle}"? This action cannot be undone.`)) {
            return;
        }

        try {
            const response = await api.delete('/news_handler.php', {
                data: { id: itemId }
            });

            if (response.data.success) {
                alert('News card deleted successfully');
                fetchNewsItems();
            } else {
                alert('Failed to delete: ' + response.data.message);
            }
        } catch (error) {
            console.error("Delete error:", error);
            alert('Failed to delete news card');
        }
    };

    const handleStatusToggle = async (itemId, currentStatus) => {
        const newStatus = currentStatus === 'active' ? 'inactive' : 'active';

        try {
            const response = await api.put('/news_handler.php', {
                id: itemId,
                status: newStatus
            });

            if (response.data.success) {
                fetchNewsItems();
            } else {
                alert('Failed to update status: ' + response.data.message);
            }
        } catch (error) {
            console.error("Status update error:", error);
            alert('Failed to update status');
        }
    };

    // UTILITY FUNCTIONS
    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    // ACCESS CONTROL
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
                {/* Sidebar */}
                <div className="admin-sidebar">
                    <div className="admin-sidebar-header">
                        <h3>Admin Panel</h3>
                    </div>

                    <ul className="admin-sidebar-menu">
                        {adminNavItems.map((item, index) => (
                            <li key={index} className={item.active ? 'active' : ''}>
                                <a href={item.href}>
                                    <FontAwesomeIcon icon={item.icon} className="icon" />
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Main Content Area */}
                <div className="admin-content-container">
                    <div className="admin-header">
                        <div>
                            <h2>News Carousel Management</h2>
                            <span className="admin-badge">Administrator Access</span>
                            <p style={{ color: '#666', marginTop: '10px', fontSize: '0.95em' }}>
                                Manage news cards displayed in the Home page carousel
                            </p>
                        </div>
                        <button className="add-news-btn" onClick={handleCreate}>
                            <FontAwesomeIcon icon={faPlus} />
                            Add News Card
                        </button>
                    </div>

                    {/* Status Filter Section */}
                    <div className="filter-section">
                        <label>Filter by status:</label>
                        <select
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                        >
                            <option value="all">All Cards</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                            <option value="archived">Archived</option>
                        </select>
                        <span style={{ color: '#666', fontSize: '0.9em' }}>
                            Total: {newsItems.length} item(s)
                        </span>
                    </div>

                    {/* Loading State */}
                    {loading ? (
                        <div className="loading-container">
                            <div className="loading-spinner"></div>
                            <p>Loading news cards...</p>
                        </div>
                    ) : newsItems.length === 0 ? (
                        <div className="empty-state">
                            <p>No news cards found. Add your first news card.</p>
                        </div>
                    ) : (
                        /* News Cards Table */
                        <div className="news-table-container">
                            <table className="news-table">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Title</th>
                                        <th>Excerpt</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                        <th>Order</th>
                                        <th>Updated</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {newsItems.map((item) => (
                                        <tr key={item.id}>
                                            <td>
                                                {item.image_path ? (
                                                    <img
                                                        src={`http://localhost/imus-city-reservation-app/php-backend/uploads/news-carousel/${item.image_path}`}
                                                        alt={item.image_alt || item.title}
                                                        className="news-image-thumb"
                                                        onError={(e) => {
                                                            e.target.onerror = null;
                                                            e.target.style.display = 'none';
                                                            e.target.parentElement.innerHTML = '<div class="no-image-placeholder">No Image</div>';
                                                        }}
                                                    />
                                                ) : (
                                                    <div className="no-image-placeholder">
                                                        No Image
                                                    </div>
                                                )}
                                            </td>
                                            <td>
                                                <strong>{item.title}</strong>
                                                {item.link && item.link !== 'http://localhost:3000/Home' && (
                                                    <div className="small text-muted mt-1">
                                                        Link: <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8em' }}>
                                                            {item.link.length > 30 ? item.link.substring(0, 30) + '...' : item.link}
                                                        </a>
                                                    </div>
                                                )}
                                            </td>
                                            <td>
                                                <div className="truncate-text" title={item.excerpt}>
                                                    {item.excerpt}
                                                </div>
                                            </td>
                                            <td>
                                                {item.news_date || 'Not set'}
                                            </td>
                                            <td>
                                                <span className={`status-badge status-${item.status}`}>
                                                    {item.status}
                                                </span>
                                            </td>
                                            <td>{item.display_order}</td>
                                            <td>{formatDate(item.updated_at)}</td>
                                            <td>
                                                <div className="action-buttons">
                                                    <button
                                                        className="action-btn edit-btn"
                                                        onClick={() => handleEdit(item)}
                                                        title="Edit"
                                                    >
                                                        <FontAwesomeIcon icon={faEdit} />
                                                        Edit
                                                    </button>
                                                    <button
                                                        className="action-btn toggle-btn"
                                                        onClick={() => handleStatusToggle(item.id, item.status)}
                                                        title={item.status === 'active' ? 'Deactivate' : 'Activate'}
                                                    >
                                                        <FontAwesomeIcon icon={item.status === 'active' ? faEyeSlash : faEye} />
                                                        {item.status === 'active' ? 'Deactivate' : 'Activate'}
                                                    </button>
                                                    <button
                                                        className="action-btn delete-btn"
                                                        onClick={() => handleDelete(item.id, item.title)}
                                                        title="Delete"
                                                    >
                                                        <FontAwesomeIcon icon={faTrash} />
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

                    {/* News Editor Modal */}
                    {showModal && (
                        <NewsEditorModal
                            item={editingItem}
                            onClose={() => setShowModal(false)}
                            onSave={() => {
                                setShowModal(false);
                                fetchNewsItems();
                            }}
                        />
                    )}
                </div>
            </div>
        </>
    );
};

// News Editor Modal Component
const NewsEditorModal = ({ item, onClose, onSave }) => {
    const [formData, setFormData] = useState({
        id: item?.id || '',
        title: item?.title || '',
        excerpt: item?.excerpt || '',
        image_path: item?.image_path || '',
        image_alt: item?.image_alt || '',
        link: item?.link || 'http://localhost:3000/Home', // Default URL
        display_order: item?.display_order || 1,
        status: item?.status || 'active',
        news_date: item?.news_date || ''
    });
    const [uploading, setUploading] = useState(false);
    const [saving, setSaving] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Check file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            alert('Image size should be less than 5MB');
            return;
        }

        // Check file type
        if (!file.type.match('image.*')) {
            alert('Please select an image file (JPG, PNG, GIF, etc.)');
            return;
        }

        const formDataUpload = new FormData();
        formDataUpload.append('image', file);
        formDataUpload.append('type', 'news-carousel');

        setUploading(true);
        try {
            // Use the upload endpoint with correct path
            const response = await api.post('/upload.php', formDataUpload, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.data.success) {
                // The backend should save to php-backend/uploads/news-carousel/
                setFormData(prev => ({
                    ...prev,
                    image_path: response.data.filePath,
                    image_alt: prev.image_alt || prev.title
                }));
                alert('Image uploaded successfully!');
            } else {
                alert('Image upload failed: ' + response.data.message);
            }
        } catch (error) {
            console.error("Upload error:", error);
            alert('Failed to upload image. Please try again.');
        } finally {
            setUploading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate required fields
        if (!formData.title.trim()) {
            alert('Please enter a title');
            return;
        }
        if (!formData.excerpt.trim()) {
            alert('Please enter an excerpt');
            return;
        }

        setSaving(true);

        try {
            let response;
            const payload = {
                ...formData,
                // Ensure link is not empty
                link: formData.link.trim() || 'http://localhost:3000/Home'
            };

            if (formData.id) {
                // Update existing
                response = await api.put('/news_handler.php', payload);
            } else {
                // Create new - remove id for new items
                const { id, ...createData } = payload;
                response = await api.post('/news_handler.php', createData);
            }

            if (response.data.success) {
                alert(formData.id ? 'News card updated successfully!' : 'News card created successfully!');
                onSave();
            } else {
                alert('Save failed: ' + response.data.message);
            }
        } catch (error) {
            console.error("Save error:", error);
            alert('Failed to save news card. Please try again.');
        } finally {
            setSaving(false);
        }
    };

    const getImageUrl = () => {
        if (!formData.image_path) return null;

        // Check if it's already a full URL
        if (formData.image_path.startsWith('http')) {
            return formData.image_path;
        }

        // Otherwise, construct the path to the uploads folder
        return `http://localhost/imus-city-reservation-app/php-backend/uploads/news-carousel/${formData.image_path}`;
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h3>{formData.id ? 'Edit News Card' : 'Create News Card'}</h3>
                    <button className="close-btn" onClick={onClose}>×</button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="modal-body">
                        <div className="form-group">
                            <label>
                                Title <span className="required-star">*</span>
                            </label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Enter news title"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>
                                Excerpt <span className="required-star">*</span>
                            </label>
                            <textarea
                                name="excerpt"
                                value={formData.excerpt}
                                onChange={handleChange}
                                rows="3"
                                placeholder="Enter news excerpt (short description)"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Date Display (optional)</label>
                            <input
                                type="text"
                                name="news_date"
                                value={formData.news_date}
                                onChange={handleChange}
                                placeholder="e.g., July, 2024, July 2024, Ongoing, Recent"
                            />
                            <small style={{ color: '#666', display: 'block', marginTop: '5px' }}>
                                Enter text like "July", "2024", "July 2024", "Ongoing", or "Recent"
                            </small>
                        </div>

                        <div className="form-group">
                            <label>Link</label>
                            <input
                                type="url"
                                name="link"
                                value={formData.link}
                                onChange={handleChange}
                                placeholder="http://localhost:3000/Home"
                            />
                            <small style={{ color: '#666', display: 'block', marginTop: '5px' }}>
                                Default: Home page. Enter full URL including https://
                            </small>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Display Order</label>
                                <input
                                    type="number"
                                    name="display_order"
                                    value={formData.display_order}
                                    onChange={handleChange}
                                    min="1"
                                />
                            </div>

                            <div className="form-group">
                                <label>Status</label>
                                <select
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                >
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                    <option value="archived">Archived</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Featured Image (optional)</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                disabled={uploading}
                                id="imageUpload"
                            />
                            {uploading && (
                                <small style={{ color: '#666', display: 'block', marginTop: '5px' }}>
                                    Uploading image...
                                </small>
                            )}

                            {/* Debug info */}
                            <div style={{ marginTop: '10px', padding: '10px', background: '#f8f9fa', borderRadius: '4px', fontSize: '0.8em' }}>
                                <strong>Upload info:</strong><br />
                                - Files go to: php-backend/uploads/news-carousel/<br />
                                - Max size: 5MB<br />
                                - Allowed: JPG, PNG, GIF, WebP
                            </div>

                            {getImageUrl() && (
                                <div style={{ marginTop: '10px' }}>
                                    <strong>Preview:</strong><br />
                                    <img
                                        src={getImageUrl()}
                                        alt="Preview"
                                        className="image-preview"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.parentElement.innerHTML +=
                                                '<div style="padding: 10px; background: #fff3cd; border-radius: 4px; color: #856404; margin-top: 5px;">Image not found. Please re-upload.</div>';
                                        }}
                                    />
                                    {formData.image_path && (
                                        <small style={{ display: 'block', marginTop: '5px', color: '#666' }}>
                                            Image path: {formData.image_path}
                                        </small>
                                    )}
                                </div>
                            )}
                        </div>

                        <div className="form-group">
                            <label>Image Alt Text (for accessibility)</label>
                            <input
                                type="text"
                                name="image_alt"
                                value={formData.image_alt}
                                onChange={handleChange}
                                placeholder="Descriptive text for screen readers"
                            />
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button
                            type="button"
                            className="modal-btn modal-btn-cancel"
                            onClick={onClose}
                            disabled={saving}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="modal-btn modal-btn-save"
                            disabled={saving}
                        >
                            {saving ? 'Saving...' : (formData.id ? 'Update' : 'Create')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EmployeeAdminNews;