/*eslint-disable react-hooks/exhaustive-deps*/
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

    .table-title-section h2 { color: #053774; font-size: 2em; margin: 0; }

    /*TABLE STYLES FROM EmployeeTableView*/
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
    .toggle-button { background-color: #6c757d; }

    .news-thumb { width: 80px; height: 60px; object-fit: cover; border-radius: 4px; border: 1px solid #ddd; }
    .status-badge { padding: 3px 10px; border-radius: 12px; color: white; font-size: 0.8em; text-transform: capitalize; }
    .status-active { background-color: #18a54a; }
    .status-inactive { background-color: #6c757d; }
    
    .filter-section { margin-bottom: 15px; padding: 10px; background: #f1f1f1; border-radius: 5px; display: flex; align-items: center; gap: 10px; }
    .filter-section select { padding: 5px; border-radius: 4px; border: 1px solid #ccc; min-width: 150px; background-color: white; }

    /*Modal*/
    .modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0,0,0,0.7); display: flex; justify-content: center; align-items: center; z-index: 2000; padding: 20px; }
    .modal-content { background-color: white; border-radius: 10px; width: 100%; max-width: 600px; max-height: 90vh; overflow-y: auto; }
    .modal-header { padding: 20px; border-bottom: 1px solid #e0e0e0; display: flex; justify-content: space-between; }
    .modal-header h3 { margin: 0; color: #053774; }
    .modal-body { padding: 20px; }
    .modal-footer { padding: 20px; border-top: 1px solid #e0e0e0; display: flex; justify-content: flex-end; gap: 10px; }
    .form-group { margin-bottom: 15px; }
    .form-group label { display: block; margin-bottom: 5px; font-weight: bold; }
    .form-group input, .form-group textarea, .form-group select { width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; }

    @media (max-width: 768px) {
        table thead { display: none; }
        table tr { display: block; margin-bottom: 15px; border: 1px solid #ddd; }
        table td { display: block; text-align: right; padding: 10px; position: relative; padding-left: 50%; }
        table td:before { content: attr(data-label); position: absolute; left: 10px; font-weight: bold; text-transform: uppercase; font-size: 0.75em; }
        .actions-buttons { justify-content: flex-end; }
    }
`;

const EmployeeAdminNews = () => {
    const [newsItems, setNewsItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editingItem, setEditingItem] = useState(null);
    const [filterStatus, setFilterStatus] = useState('Active');
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        if (sessionStorage.getItem("isAdmin") !== 'admin') {
            window.location.href = "/EmployeeHome";
            return;
        }
        setIsAdmin(true);
        fetchNewsItems();
    }, [filterStatus]);

    const fetchNewsItems = async () => {
        setLoading(true);
        try {
            let url = '/news_handler.php?admin=true';
            if (filterStatus !== 'all') url += `&status=${filterStatus}`;
            const response = await api.get(url);
            setNewsItems(response.data.success ? response.data.news : []);
        } catch (error) { console.error(error); } finally { setLoading(false); }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Delete news item?")) {
            await api.delete('/news_handler.php', { data: { id } });
            fetchNewsItems();
        }
    };

    const handleToggleStatus = async (item) => {
        await api.put('/news_handler.php', { id: item.id, status: item.status === 'active' ? 'inactive' : 'active' });
        fetchNewsItems();
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
                                <li className="list-group-item"><a href="/EmployeeAdmin"><FontAwesomeIcon icon={faUsers} className="me-2" /> Employee Management</a></li>
                                <li className="list-group-item"><a href="/EmployeeAdminStats"><FontAwesomeIcon icon={faChartBar} className="me-2" /> Statistics Management</a></li>
                                <li className="list-group-item active"><a href="/EmployeeAdminNews"><FontAwesomeIcon icon={faNewspaper} className="me-2" /> News Management</a></li>
                            </ul>
                        </div>
                    </div>

                    {/*Content*/}
                    <div className="col-md-10 col-sm-12">
                        <div className="admin-view-container">
                            <div className="table-header-section">
                                <div className="table-title-section">
                                    <h2>News Carousel Management</h2>
                                </div>
                                <button className="action-button add-button" onClick={() => { setEditingItem(null); setShowModal(true); }}>
                                    <FontAwesomeIcon icon={faPlus} /> Add News Card
                                </button>
                            </div>

                            <div className="filter-section">
                                <label>Filter Status:</label>
                                <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                    <option value="all">All</option>
                                </select>
                            </div>

                            {loading ? <p>Loading...</p> : (
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Title</th>
                                            <th>Date Display</th>
                                            <th>Status</th>
                                            <th>Order</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {newsItems.map(item => (
                                            <tr key={item.id}>
                                                <td data-label="Image">
                                                    {item.image_path ?
                                                        <img src={`http://localhost/imus-city-reservation-app/php-backend/uploads/news-carousel/${item.image_path}`} alt="Thumb" className="news-thumb" /> :
                                                        <span style={{ color: '#999', fontSize: '0.8em' }}>No Image</span>
                                                    }
                                                </td>
                                                <td data-label="Title">
                                                    <strong>{item.title}</strong>
                                                    <div style={{ fontSize: '0.8em', color: '#666' }}>{item.excerpt?.substring(0, 50)}...</div>
                                                </td>
                                                <td data-label="Date">{item.news_date}</td>
                                                <td data-label="Status"><span className={`status-badge status-${item.status}`}>{item.status}</span></td>
                                                <td data-label="Order">{item.display_order}</td>
                                                <td data-label="Actions">
                                                    <div className="actions-buttons">
                                                        <button className="action-button edit-button" onClick={() => { setEditingItem(item); setShowModal(true); }}>
                                                            <FontAwesomeIcon icon={faEdit} /> Edit
                                                        </button>
                                                        <button className="action-button toggle-button" onClick={() => handleToggleStatus(item)} title="Toggle Status">
                                                            <FontAwesomeIcon icon={item.status === 'active' ? faEyeSlash : faEye} />
                                                        </button>
                                                        <button className="action-button delete-button" onClick={() => handleDelete(item.id)}>
                                                            <FontAwesomeIcon icon={faTrash} />
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

                {/*News Modal*/}
                {showModal && (
                    <NewsEditorModal
                        item={editingItem}
                        onClose={() => setShowModal(false)}
                        onSave={() => { setShowModal(false); fetchNewsItems(); }}
                    />
                )}
            </div>
        </>
    );
};

const NewsEditorModal = ({ item, onClose, onSave }) => {
    const [formData, setFormData] = useState({
        id: item?.id || '',
        title: item?.title || '',
        excerpt: item?.excerpt || '',
        image_path: item?.image_path || '',
        link: item?.link || 'http://localhost:3000/Home',
        display_order: item?.display_order || 1,
        status: item?.status || 'active',
        news_date: item?.news_date || ''
    });

    const [isUploading, setIsUploading] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);

    useEffect(() => {
        if (formData.image_path) {
            setImagePreview(`http://localhost/imus-city-reservation-app/php-backend/uploads/news-carousel/${formData.image_path}`);
        } else {
            setImagePreview(null);
        }
    }, [formData.image_path]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (formData.id) {
                await api.put('/news_handler.php', formData);
            } else {
                const { id, ...data } = formData;
                await api.post('/news_handler.php', data);
            }
            onSave();
        } catch (error) {
            alert("Failed to save.");
        }
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        //Validate file type
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
        if (!validTypes.includes(file.type)) {
            alert('Invalid file type. Please upload an image (JPEG, PNG, GIF, WebP).');
            return;
        }

        //Validate file size (5MB max)
        if (file.size > 5 * 1024 * 1024) {
            alert('File size too large. Maximum size is 5MB.');
            return;
        }

        setIsUploading(true);
        const form = new FormData();
        form.append('image', file);
        form.append('type', 'news-carousel');

        try {
            const res = await api.post('/upload.php', form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (res.data.success) {
                setFormData({ ...formData, image_path: res.data.filePath });
                alert("Image uploaded successfully!");
            } else {
                alert(res.data.message || "Upload failed");
            }
        } catch (err) {
            alert("Upload failed: " + (err.response?.data?.message || err.message));
        } finally {
            setIsUploading(false);
            e.target.value = '';
        }
    };

    const removeImage = () => {
        if (window.confirm("Remove current image?")) {
            setFormData({ ...formData, image_path: '' });
            setImagePreview(null);
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h3 style={{ color: '#053774', margin: 0 }}>{formData.id ? 'Edit' : 'Add'} News</h3>
                    <button
                        onClick={onClose}
                        style={{ border: 'none', background: 'none', fontSize: '1.5rem', cursor: 'pointer' }}
                    >
                        ×
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="modal-body">
                        <div className="form-group">
                            <label>Title *</label>
                            <input
                                required
                                value={formData.title}
                                onChange={e => setFormData({ ...formData, title: e.target.value })}
                                placeholder="Enter news title"
                            />
                        </div>
                        <div className="form-group">
                            <label>Excerpt *</label>
                            <textarea
                                required
                                value={formData.excerpt}
                                onChange={e => setFormData({ ...formData, excerpt: e.target.value })}
                                rows="3"
                                placeholder="Enter short description"
                            />
                        </div>
                        <div className="form-group">
                            <label>Date Text</label>
                            <input
                                value={formData.news_date}
                                onChange={e => setFormData({ ...formData, news_date: e.target.value })}
                                placeholder="e.g. January 2024"
                            />
                        </div>

                        {/*Image Upload Section*/}
                        <div className="form-group">
                            <label>Image</label>
                            <input
                                type="file"
                                onChange={handleImageUpload}
                                accept=".jpg,.jpeg,.png,.gif,.webp"
                                disabled={isUploading}
                                style={{ padding: '5px' }}
                            />
                            <small style={{ display: 'block', marginTop: '5px', color: '#666' }}>
                                Supported formats: JPG, PNG, GIF, WebP (Max 5MB)
                            </small>
                            {isUploading && (
                                <div style={{ marginTop: '10px', color: '#053774' }}>
                                    <small>Uploading image...</small>
                                </div>
                            )}
                        </div>

                        {/*Current Image Display*/}
                        {formData.image_path && (
                            <div className="form-group" style={{
                                border: '1px solid #ddd',
                                padding: '15px',
                                borderRadius: '5px',
                                marginBottom: '15px',
                                backgroundColor: '#f9f9f9'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                    <strong style={{ color: '#053774' }}>Current Image:</strong>
                                    <button
                                        type="button"
                                        onClick={removeImage}
                                        className="action-button delete-button"
                                        style={{ padding: '5px 10px', fontSize: '0.8em' }}
                                        disabled={isUploading}
                                    >
                                        Remove Image
                                    </button>
                                </div>
                                <div>
                                    <div style={{ marginBottom: '10px' }}>
                                        <small>File: {formData.image_path}</small>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '10px',
                                        backgroundColor: 'white',
                                        borderRadius: '4px',
                                        border: '1px solid #eee'
                                    }}>
                                        {imagePreview ? (
                                            <img
                                                src={imagePreview}
                                                alt="Current news"
                                                style={{
                                                    maxWidth: '100%',
                                                    maxHeight: '200px',
                                                    objectFit: 'contain',
                                                    border: '1px solid #ddd',
                                                    borderRadius: '4px'
                                                }}
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.parentElement.innerHTML =
                                                        '<div style="color:#dc3545; text-align:center; padding:20px;">' +
                                                        '<strong>Image not found</strong><br/>' +
                                                        '<small>The image file may have been moved or deleted.</small>' +
                                                        '</div>';
                                                }}
                                            />
                                        ) : (
                                            <div style={{ color: '#999', textAlign: 'center', padding: '20px' }}>
                                                No image preview available
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="form-group">
                            <label>Link URL</label>
                            <input
                                value={formData.link}
                                onChange={e => setFormData({ ...formData, link: e.target.value })}
                                placeholder="https://example.com/news"
                            />
                        </div>
                        <div className="form-group">
                            <label>Display Order</label>
                            <input
                                type="number"
                                value={formData.display_order}
                                onChange={e => setFormData({ ...formData, display_order: parseInt(e.target.value) || 0 })}
                                min="0"
                                step="1"
                                style={{ width: '100px' }}
                            />
                            <small style={{ display: 'block', marginTop: '5px', color: '#666' }}>
                                Lower numbers appear first
                            </small>
                        </div>
                        <div className="form-group">
                            <label>Status</label>
                            <select
                                value={formData.status}
                                onChange={e => setFormData({ ...formData, status: e.target.value })}
                                style={{ width: '150px' }}
                            >
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="action-button"
                            style={{ backgroundColor: '#6c757d' }}
                            onClick={onClose}
                            disabled={isUploading}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="action-button add-button"
                            disabled={isUploading}
                        >
                            {isUploading ? 'Uploading...' : 'Save Changes'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EmployeeAdminNews;