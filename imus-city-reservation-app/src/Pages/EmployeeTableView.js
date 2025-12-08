import React, { useState, useEffect, useRef } from 'react';
import RescheduleModal from '../Components/RescheduleModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faPen, faTrash, faQrcode, faSearch, faCamera, faUpload, faFile, faTimes } from '@fortawesome/free-solid-svg-icons';
import api from '../api/axiosConfig';

const pageSpecificStyles = `
    .employee-table-view {
        padding: 20px;
        max-width: 1400px;
        margin: 0 auto;
    }

    .table-header-section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        flex-wrap: wrap;
        gap: 15px;
    }

    .table-title-section {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .table-title-section h2 {
        color: #053774;
        font-size: 2em;
        margin: 0;
    }

    .controls-section {
        display: flex;
        align-items: center;
        gap: 15px;
        flex-wrap: wrap;
        justify-content: flex-end;
        flex: 1;
    }

    .search-container {
        display: flex;
        align-items: center;
        gap: 8px;
        background: white;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 6px 12px;
        min-width: 250px;
    }

    .search-input {
        border: none;
        outline: none;
        padding: 6px;
        font-size: 0.95em;
        width: 100%;
    }

    .qr-scanner-btn {
        background-color: #28a745;
        color: white;
        border: none;
        padding: 8px 15px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 0.95em;
        display: flex;
        align-items: center;
        gap: 8px;
        transition: background-color 0.2s ease;
        white-space: nowrap;
    }

    .qr-scanner-btn:hover {
        background-color: #218838;
    }

    .file-upload-btn {
        background-color: #06428A;
        color: white;
        border: none;
        padding: 8px 15px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 0.95em;
        display: flex;
        align-items: center;
        gap: 8px;
        transition: background-color 0.2s ease;
        white-space: nowrap;
    }

    .file-upload-btn:hover {
        background-color: #053774;
    }

    .date-picker-container {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .date-picker-container label {
        font-weight: bold;
        color: #333;
        white-space: nowrap;
    }

    .date-picker-container input[type="date"] {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 1em;
        min-width: 150px;
    }

    /* QR Scanner Modal Styles */
    .qr-modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
        padding: 20px;
    }

    .qr-modal-content {
        background-color: white;
        border-radius: 10px;
        width: 100%;
        max-width: 600px;
        max-height: 90vh;
        overflow-y: auto;
        box-shadow: 0 5px 20px rgba(0,0,0,0.3);
    }

    .qr-modal-header {
        padding: 20px;
        border-bottom: 1px solid #e0e0e0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .qr-modal-header h3 {
        margin: 0;
        color: #053774;
        font-size: 1.5em;
    }

    .qr-close-btn {
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        color: #666;
        padding: 5px;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }

    .qr-close-btn:hover {
        background-color: #f8f9fa;
        color: #333;
    }

    .qr-scanner-container {
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .scanner-section {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .scanner-controls {
        display: flex;
        gap: 10px;
        justify-content: center;
        flex-wrap: wrap;
    }

    .scanner-btn {
        padding: 8px 16px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 0.9em;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 5px;
        min-width: 120px;
    }

    .start-scanner-btn {
        background-color: #28a745;
        color: white;
    }

    .start-scanner-btn:hover {
        background-color: #218838;
    }

    .stop-scanner-btn {
        background-color: #dc3545;
        color: white;
    }

    .stop-scanner-btn:hover {
        background-color: #c82333;
    }

    .switch-camera-btn {
        background-color: #6c757d;
        color: white;
    }

    .switch-camera-btn:hover {
        background-color: #5a6268;
    }

    .scanner-viewport {
        width: 100%;
        max-width: 500px;
        margin: 0 auto;
        background-color: #000;
        border: 2px solid #06428A;
        border-radius: 10px;
        overflow: hidden;
        position: relative;
        min-height: 300px;
    }

    .scanner-viewport video {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .scanner-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .scanner-frame {
        width: 250px;
        height: 250px;
        border: 2px solid #28a745;
        border-radius: 10px;
        box-shadow: 0 0 0 5000px rgba(0, 0, 0, 0.7);
    }

    .scanner-status {
        position: absolute;
        bottom: 20px;
        left: 0;
        right: 0;
        text-align: center;
        color: white;
        font-weight: bold;
        text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
    }

    .no-camera {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 300px;
        background-color: #f8f9fa;
        border-radius: 10px;
        color: #666;
        font-size: 1.1em;
    }

    .manual-input-section {
        padding: 20px 0;
        border-top: 1px solid #e0e0e0;
    }

    .manual-input-group {
        display: flex;
        gap: 10px;
    }

    .manual-input {
        flex: 1;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 1em;
    }

    .manual-submit-btn {
        background-color: #28a745;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 0.95em;
        white-space: nowrap;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .manual-submit-btn:hover {
        background-color: #218838;
    }

    .qr-result-section {
        padding: 20px 0;
        border-top: 1px solid #e0e0e0;
    }

    .qr-result {
        background-color: #f8f9fa;
        border-radius: 8px;
        padding: 20px;
        border-left: 4px solid #053774;
    }

    .qr-result h4 {
        margin-top: 0;
        color: #053774;
        margin-bottom: 15px;
    }

    .qr-result p {
        margin: 8px 0;
        font-size: 0.95em;
    }

    .qr-result strong {
        color: #333;
        min-width: 120px;
        display: inline-block;
    }

    .qr-actions {
        display: flex;
        gap: 10px;
        margin-top: 20px;
        flex-wrap: wrap;
    }

    .qr-action-btn {
        padding: 8px 16px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 0.9em;
        font-weight: 500;
        transition: all 0.2s;
        min-width: 120px;
        flex: 1;
    }

    .complete-btn {
        background-color: #28a745;
        color: white;
    }

    .complete-btn:hover {
        background-color: #218838;
    }

    .cancel-btn {
        background-color: #dc3545;
        color: white;
    }

    .cancel-btn:hover {
        background-color: #c82333;
    }

    .pending-btn {
        background-color: #ffc107;
        color: #212529;
    }

    .pending-btn:hover {
        background-color: #e0a800;
    }

    .goto-btn {
        background-color: #06428A;
        color: white;
    }

    .goto-btn:hover {
        background-color: #053774;
    }

    /* File Upload Modal */
    .upload-modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
        padding: 20px;
    }

    .upload-modal-content {
        background-color: white;
        border-radius: 10px;
        width: 100%;
        max-width: 500px;
        max-height: 90vh;
        overflow-y: auto;
        box-shadow: 0 5px 20px rgba(0,0,0,0.3);
    }

    .upload-section {
        padding: 20px;
    }

    .upload-area {
        border: 2px dashed #06428A;
        border-radius: 10px;
        padding: 40px 20px;
        text-align: center;
        cursor: pointer;
        transition: all 0.3s ease;
        margin-bottom: 20px;
    }

    .upload-area:hover {
        background-color: #f8f9fa;
        border-color: #053774;
    }

    .upload-area.dragover {
        background-color: #e8f4fe;
        border-color: #28a745;
    }

    .upload-area p {
        margin: 10px 0;
        color: #666;
    }

    .upload-area small {
        color: #999;
        font-size: 0.85em;
    }

    .file-list {
        margin-top: 20px;
    }

    .file-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        background-color: #f8f9fa;
        border-radius: 5px;
        margin-bottom: 10px;
    }

    .file-info {
        display: flex;
        align-items: center;
        gap: 10px;
        overflow: hidden;
        flex: 1;
    }

    .file-icon {
        color: #06428A;
    }

    .file-details {
        overflow: hidden;
    }

    .file-name {
        font-weight: 500;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .file-size {
        color: #666;
        font-size: 0.85em;
    }

    .remove-file-btn {
        background: none;
        border: none;
        color: #dc3545;
        cursor: pointer;
        padding: 5px;
    }

    .upload-actions {
        display: flex;
        gap: 10px;
        margin-top: 20px;
        justify-content: flex-end;
    }

    .upload-btn {
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 0.95em;
        font-weight: 500;
        min-width: 100px;
    }

    .upload-cancel-btn {
        background-color: #6c757d;
        color: white;
    }

    .upload-cancel-btn:hover {
        background-color: #5a6268;
    }

    .upload-submit-btn {
        background-color: #28a745;
        color: white;
    }

    .upload-submit-btn:hover {
        background-color: #218838;
    }

    .upload-submit-btn:disabled {
        background-color: #6c757d;
        cursor: not-allowed;
        opacity: 0.7;
    }

    /* Loading and error states */
    .loading-spinner {
        display: inline-block;
        border: 3px solid #f3f3f3;
        border-top: 3px solid #053774;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        animation: spin 1s linear infinite;
        margin-right: 8px;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    .error-message {
        color: #dc3545;
        background-color: #f8d7da;
        border: 1px solid #f5c6cb;
        padding: 10px;
        border-radius: 5px;
        margin-top: 10px;
        font-size: 0.9em;
    }

    .success-message {
        color: #155724;
        background-color: #d4edda;
        border: 1px solid #c3e6cb;
        padding: 10px;
        border-radius: 5px;
        margin-top: 10px;
        font-size: 0.9em;
    }

    .info-message {
        color: #0c5460;
        background-color: #d1ecf1;
        border: 1px solid #bee5eb;
        padding: 10px;
        border-radius: 5px;
        margin-top: 10px;
        font-size: 0.9em;
    }

    /* Table Styles */
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

    /* Search highlight */
    .highlight {
        background-color: #fff3cd !important;
        font-weight: bold;
        animation: pulse 2s infinite;
    }

    @keyframes pulse {
        0% { background-color: #fff3cd; }
        50% { background-color: #ffeaa7; }
        100% { background-color: #fff3cd; }
    }

    /* Responsive styles */
    @media (max-width: 768px) {
        .controls-section {
            flex-direction: column;
            align-items: stretch;
            gap: 10px;
        }
        
        .search-container {
            width: 100%;
        }
        
        .scanner-controls {
            flex-direction: column;
        }
        
        .scanner-btn {
            width: 100%;
        }
        
        .qr-actions {
            flex-direction: column;
        }
        
        .qr-action-btn {
            width: 100%;
        }
        
        .manual-input-group {
            flex-direction: column;
        }
        
        .upload-actions {
            flex-direction: column;
        }
        
        .upload-btn {
            width: 100%;
        }
    }
`;

const statusColors = {
    'Complete': '#06402B',
    'Pending': '#BA8E23',
    'Cancelled': '#f70d1a',
    'Rescheduled': '#04285c'
};

const EmployeeTableView = () => {
    const [reservations, setReservations] = useState([]);
    const [filteredReservations, setFilteredReservations] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');
    const [formTitle, setFormTitle] = useState('All Reservations');
    const [isRescheduleModalOpen, setIsRescheduleModalOpen] = useState(false);
    const [currentReservation, setCurrentReservation] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [showQRScanner, setShowQRScanner] = useState(false);
    const [showFileUpload, setShowFileUpload] = useState(false);
    const [scannedReservation, setScannedReservation] = useState(null);
    const [qrError, setQrError] = useState('');
    const [qrSuccess, setQrSuccess] = useState('');
    const [manualQueueId, setManualQueueId] = useState('');
    const [isScanning, setIsScanning] = useState(false);
    const [availableCameras, setAvailableCameras] = useState([]);
    const [currentCamera, setCurrentCamera] = useState(null);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [isUploading, setIsUploading] = useState(false);
    
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const streamRef = useRef(null);
    const fileInputRef = useRef(null);
    const scanIntervalRef = useRef(null);

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

        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        setSelectedDate(`${year}-${month}-${day}`);
    }, []);

    useEffect(() => {
        if (!selectedDate) return;

        const fetchReservations = async () => {
            try {
                let url = `/reservations.php?date=${selectedDate}`;
                if (formTitle !== 'All Reservations') {
                    url += `&form=${encodeURIComponent(formTitle)}`;
                }
                
                const response = await api.get(url);
                setReservations(response.data);
                setFilteredReservations(response.data);
            } catch (error) {
                console.error("Error fetching reservations:", error);
                setReservations([]);
                setFilteredReservations([]);
            }
        };

        fetchReservations();
    }, [selectedDate, formTitle]);

    useEffect(() => {
        if (searchTerm.trim() === '') {
            setFilteredReservations(reservations);
        } else {
            const term = searchTerm.toLowerCase();
            const filtered = reservations.filter(reservation => 
                reservation.queue_id.toLowerCase().includes(term) ||
                reservation.full_name.toLowerCase().includes(term) ||
                reservation.email.toLowerCase().includes(term) ||
                reservation.form_name.toLowerCase().includes(term)
            );
            setFilteredReservations(filtered);
        }
    }, [searchTerm, reservations]);

    // QR Code Scanner Functions
    const handleOpenQRScanner = async () => {
        setShowQRScanner(true);
        setScannedReservation(null);
        setQrError('');
        setQrSuccess('');
        setManualQueueId('');
        
        try {
            const devices = await navigator.mediaDevices.enumerateDevices();
            const videoDevices = devices.filter(device => device.kind === 'videoinput');
            setAvailableCameras(videoDevices);
            
            if (videoDevices.length > 0) {
                setCurrentCamera(videoDevices[0]);
            } else {
                setQrError("No camera found on this device.");
            }
        } catch (error) {
            console.error("Error getting cameras:", error);
            setQrError("Could not access camera. Please check permissions.");
        }
    };

    const handleCloseQRScanner = () => {
        stopScanner();
        setShowQRScanner(false);
    };

    const startScanner = async () => {
        if (!currentCamera) {
            setQrError("No camera selected");
            return;
        }

        try {
            const constraints = {
                video: {
                    deviceId: currentCamera.deviceId,
                    facingMode: currentCamera.label.toLowerCase().includes('back') ? 'environment' : 'user',
                    width: { ideal: 1280 },
                    height: { ideal: 720 }
                }
            };

            const stream = await navigator.mediaDevices.getUserMedia(constraints);
            streamRef.current = stream;
            
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                videoRef.current.play();
            }
            
            setIsScanning(true);
            startQRCodeDetection();
            
        } catch (error) {
            console.error("Error starting camera:", error);
            setQrError("Failed to start camera. Please check permissions.");
        }
    };

    const stopScanner = () => {
        if (scanIntervalRef.current) {
            clearInterval(scanIntervalRef.current);
            scanIntervalRef.current = null;
        }
        
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop());
            streamRef.current = null;
        }
        
        if (videoRef.current) {
            videoRef.current.srcObject = null;
        }
        
        setIsScanning(false);
    };

    const switchCamera = () => {
        if (availableCameras.length < 2) return;
        
        stopScanner();
        const currentIndex = availableCameras.findIndex(cam => cam.deviceId === currentCamera.deviceId);
        const nextIndex = (currentIndex + 1) % availableCameras.length;
        setCurrentCamera(availableCameras[nextIndex]);
        
        // Restart with new camera
        setTimeout(startScanner, 100);
    };

    const startQRCodeDetection = () => {
        scanIntervalRef.current = setInterval(async () => {
            if (!videoRef.current || !canvasRef.current) return;
            
            const video = videoRef.current;
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            
            // Set canvas dimensions to match video
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            
            // Draw video frame to canvas
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            
            // Get image data from canvas
            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            
            try {
                // Load jsQR dynamically
                const jsQR = (await import('jsqr')).default;
                
                // Attempt to decode QR code
                const code = jsQR(imageData.data, imageData.width, imageData.height);
                
                if (code) {
                    // QR code detected
                    stopScanner();
                    processScannedQRCode(code.data);
                }
            } catch (error) {
                console.error("QR detection error:", error);
            }
        }, 500); // Check every 500ms
    };

    const processScannedQRCode = (decodedText) => {
        // Extract queue ID from QR code data
        let queueId = decodedText;
        
        // Try to find queue ID in the text
        const queueIdMatch = decodedText.match(/(\d{9})/); // Look for 9-digit number
        if (queueIdMatch) {
            queueId = queueIdMatch[1];
        }
        
        // Validate queue ID format
        if (/^\d{9}$/.test(queueId)) {
            fetchReservationByQueueId(queueId);
        } else {
            setQrError("Invalid QR code format. Please scan a valid reservation QR code.");
        }
    };

    const fetchReservationByQueueId = async (queueId) => {
        try {
            const response = await api.get(`/get_reservation.php?queue_id=${queueId}`);
            
            if (response.data.success) {
                setScannedReservation(response.data.reservation);
                setQrError('');
                setQrSuccess(`Found reservation for ${response.data.reservation.full_name}`);
            } else {
                setQrError(response.data.message || "Reservation not found");
                setScannedReservation(null);
                setQrSuccess('');
            }
        } catch (error) {
            console.error("Error fetching reservation:", error);
            setQrError("Failed to fetch reservation data. Please check your connection.");
            setScannedReservation(null);
            setQrSuccess('');
        }
    };

    const handleManualSearch = () => {
        if (manualQueueId.trim()) {
            fetchReservationByQueueId(manualQueueId);
        } else {
            setQrError("Please enter a Queue ID");
        }
    };

    const handleUpdateStatus = async (newStatus) => {
        if (!scannedReservation) return;

        try {
            const response = await api.post('/update_status.php', {
                queue_id: scannedReservation.queue_id,
                status: newStatus
            });

            if (response.data.success) {
                setQrSuccess(`Status updated to ${newStatus}`);
                // Refresh the scanned reservation
                fetchReservationByQueueId(scannedReservation.queue_id);
                
                // Refresh the table data
                let url = `/reservations.php?date=${selectedDate}`;
                if (formTitle !== 'All Reservations') {
                    url += `&form=${encodeURIComponent(formTitle)}`;
                }
                const refreshResponse = await api.get(url);
                setReservations(refreshResponse.data);
                setFilteredReservations(refreshResponse.data);
                
            } else {
                setQrError(response.data.message || "Failed to update status");
            }
        } catch (error) {
            console.error("Error updating status:", error);
            setQrError("Failed to update status");
        }
    };

    const goToReservationInTable = () => {
        if (scannedReservation && scannedReservation.reservation_date) {
            const reservationDate = new Date(scannedReservation.reservation_date);
            const formattedDate = reservationDate.toISOString().split('T')[0];
            
            if (selectedDate === formattedDate) {
                const element = document.querySelector(`[data-queue-id="${scannedReservation.queue_id}"]`);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    element.classList.add('highlight');
                    setTimeout(() => element.classList.remove('highlight'), 3000);
                }
            } else {
                setSelectedDate(formattedDate);
                if (scannedReservation.form_name !== formTitle) {
                    setFormTitle(scannedReservation.form_name);
                }
                setShowQRScanner(false);
            }
        }
    };

    // File Upload Functions
    const handleOpenFileUpload = () => {
        setShowFileUpload(true);
        setUploadedFiles([]);
        setQrError('');
        setQrSuccess('');
    };

    const handleCloseFileUpload = () => {
        setShowFileUpload(false);
        setUploadedFiles([]);
        setIsUploading(false);
    };

    const handleFileSelect = (event) => {
        const files = Array.from(event.target.files);
        addFiles(files);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        event.currentTarget.classList.add('dragover');
    };

    const handleDragLeave = (event) => {
        event.preventDefault();
        event.currentTarget.classList.remove('dragover');
    };

    const handleDrop = (event) => {
        event.preventDefault();
        event.currentTarget.classList.remove('dragover');
        
        const files = Array.from(event.dataTransfer.files);
        addFiles(files);
    };

    const addFiles = (files) => {
        const validFiles = files.filter(file => {
            // Accept common image, document, and PDF formats
            const validTypes = [
                'image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/bmp',
                'application/pdf', 
                'application/msword', 
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'application/vnd.ms-excel',
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'text/plain',
                'application/zip',
                'application/x-rar-compressed'
            ];
            
            if (!validTypes.includes(file.type)) {
                alert(`File type not supported: ${file.name}. Please upload images, PDFs, or documents.`);
                return false;
            }
            
            if (file.size > 10 * 1024 * 1024) { // 10MB limit
                alert(`File too large: ${file.name}. Maximum size is 10MB.`);
                return false;
            }
            
            return true;
        });

        setUploadedFiles(prev => [...prev, ...validFiles]);
    };

    const removeFile = (index) => {
        setUploadedFiles(prev => prev.filter((_, i) => i !== index));
    };

    const handleFileUpload = async () => {
        if (uploadedFiles.length === 0) {
            setQrError("Please select files to upload");
            return;
        }

        setIsUploading(true);
        setQrError('');
        setQrSuccess('');

        try {
            const formData = new FormData();
            
            uploadedFiles.forEach((file, index) => {
                formData.append(`files[${index}]`, file);
            });

            // Add metadata to the form data
            formData.append('employeeId', sessionStorage.getItem("loggedInUser") || 'unknown');
            formData.append('formName', formTitle);
            formData.append('uploadDate', new Date().toISOString());
            formData.append('reservationDate', selectedDate);

            // For now, we'll simulate a successful upload since you don't want database changes
            // In a real implementation, you would send this to your server
            
            // Simulate upload delay
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            setQrSuccess(`Successfully processed ${uploadedFiles.length} file(s) locally`);
            
            // You can store files locally or send to server
            // For now, we'll just show success message
            console.log('Files to upload:', uploadedFiles);
            console.log('Form Data:', Object.fromEntries(formData));
            
            // Clear files after successful "upload"
            setTimeout(() => {
                setUploadedFiles([]);
                setShowFileUpload(false);
            }, 2000);
            
        } catch (error) {
            console.error("Upload error:", error);
            setQrError("Upload processing failed. Please try again.");
        } finally {
            setIsUploading(false);
        }
    };

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleStatusChange = async (index, newStatus) => {
        const reservationToUpdate = filteredReservations[index];
        if (!reservationToUpdate || !reservationToUpdate.queue_id) return;

        const updatedReservations = [...filteredReservations];
        updatedReservations[index].status = newStatus;
        setFilteredReservations(updatedReservations);

        try {
            await api.put('/reservations.php', {
                queueId: reservationToUpdate.queue_id,
                status: newStatus
            });
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };

    const handleRemarksChange = async (index, newRemarks) => {
        const reservationToUpdate = filteredReservations[index];
        if (!reservationToUpdate || !reservationToUpdate.queue_id) return;

        const updatedReservations = [...filteredReservations];
        updatedReservations[index].remarks = newRemarks;
        setFilteredReservations(updatedReservations);

        try {
            await api.put('/reservations.php', {
                queueId: reservationToUpdate.queue_id,
                remarks: newRemarks
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
        if (!reservationToDelete || !reservationToDelete.queue_id) return;

        if (window.confirm(`Are you sure you want to delete the reservation for ${reservationToDelete.full_name} (${reservationToDelete.queue_id})?`)) {
            try {
                await api.delete('/reservations.php', {
                    data: { queueId: reservationToDelete.queue_id }
                });

                setReservations(prevReservations => 
                    prevReservations.filter(res => res.queue_id !== reservationToDelete.queue_id)
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
            // Prepare reschedule data
            const rescheduleData = {
                originalQueueId: currentReservation.queue_id,
                queueId: newQueueId,
                form: currentReservation.form_name,
                fullName: currentReservation.full_name,
                email: currentReservation.email,
                date: newDate,
                time: newTime,
                originalRemarks: currentReservation.remarks || '',
                remarks: `Rescheduled from original appointment on ${currentReservation.reservation_date} at ${currentReservation.reservation_time}. Original Queue ID: ${currentReservation.queue_id}`,
                status: "Pending"
            };

            // Send to reschedule.php endpoint
            const response = await api.post('/reschedule.php', rescheduleData);
            
            if (response.data.success) {
                // Refresh table data
                let url = `/reservations.php?date=${selectedDate}`;
                if (formTitle !== 'All Reservations') {
                    url += `&form=${encodeURIComponent(formTitle)}`;
                }
                
                const refreshResponse = await api.get(url);
                setReservations(refreshResponse.data);
                setFilteredReservations(refreshResponse.data);

                setIsRescheduleModalOpen(false);
                setCurrentReservation(null);
                alert("Reservation successfully rescheduled!");

                // Open ReservationResult in new tab
                window.open(`/RescheduleResult?queueId=${newQueueId}&form=${encodeURIComponent(currentReservation.form_name)}&fullName=${encodeURIComponent(currentReservation.full_name)}&email=${encodeURIComponent(currentReservation.email)}&date=${newDate}&time=${newTime}&actionDate=${new Date().toISOString().split("T")[0]}`, '_blank');

            } else {
                throw new Error(response.data.message);
            }

        } catch (error) {
            console.error("Reschedule error:", error);
            alert(error.message || "An error occurred during rescheduling. Please try again.");
        }
    };

    const truncateText = (text, maxLength = 20) => {
        if (!text) return '';
        return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            if (showQRScanner && manualQueueId) {
                handleManualSearch();
            }
        }
    };

    return (
        <>
            <style>{pageSpecificStyles}</style>
            <div className="employee-table-view">
                <div className="table-header-section">
                    <div className="table-title-section">
                        <h2>{formTitle}</h2>
                        <small>Showing reservations for: {selectedDate}</small>
                    </div>
                    
                    <div className="controls-section">
                        <div className="search-container">
                            <FontAwesomeIcon icon={faSearch} />
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Search by Queue ID, Name, Email..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                        </div>

                        <button className="qr-scanner-btn" onClick={handleOpenQRScanner}>
                            <FontAwesomeIcon icon={faQrcode} /> QR Scanner
                        </button>

                        <button className="file-upload-btn" onClick={handleOpenFileUpload}>
                            <FontAwesomeIcon icon={faUpload} /> Upload Files
                        </button>

                        <div className="date-picker-container">
                            <label htmlFor="reservationDate">
                                <FontAwesomeIcon icon={faCalendarAlt} /> Date:
                            </label>
                            <input
                                type="date"
                                id="reservationDate"
                                value={selectedDate}
                                onChange={handleDateChange}
                            />
                        </div>
                    </div>
                </div>

                {/* Table */}
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
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
                        {filteredReservations.length > 0 ? (
                            filteredReservations.map((reservation, index) => (
                                <tr 
                                    key={reservation.queue_id || index} 
                                    data-queue-id={reservation.queue_id}
                                    className={scannedReservation?.queue_id === reservation.queue_id ? 'highlight' : ''}
                                >
                                    <td data-label="Position">{index + 1}</td>
                                    <td data-label="Time">{reservation.reservation_time ? reservation.reservation_time.substring(0, 5) : ''}</td>
                                    <td data-label="Queue ID">{reservation.queue_id || 'N/A'}</td>
                                    <td data-label="Name" className="name-cell" title={reservation.full_name}>
                                        {truncateText(reservation.full_name, 15)}
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
                                    {searchTerm ? 
                                        `No reservations found matching "${searchTerm}"` : 
                                        `No reservations found for ${selectedDate} ${formTitle !== 'All Reservations' ? `for "${formTitle}"` : ''}.`
                                    }
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <RescheduleModal
                    isOpen={isRescheduleModalOpen}
                    onClose={() => setIsRescheduleModalOpen(false)}
                    reservation={currentReservation}
                    onReschedule={handleRescheduleSubmit}
                />

                {/* QR Scanner Modal */}
                {showQRScanner && (
                    <div className="qr-modal-overlay" onClick={(e) => e.target.className === 'qr-modal-overlay' && handleCloseQRScanner()}>
                        <div className="qr-modal-content">
                            <div className="qr-modal-header">
                                <h3>QR Code Scanner</h3>
                                <button className="qr-close-btn" onClick={handleCloseQRScanner}>×</button>
                            </div>

                            <div className="qr-scanner-container">
                                <div className="scanner-section">
                                    <div className="scanner-controls">
                                        {!isScanning ? (
                                            <button className="scanner-btn start-scanner-btn" onClick={startScanner}>
                                                <FontAwesomeIcon icon={faCamera} /> Start Camera
                                            </button>
                                        ) : (
                                            <>
                                                <button className="scanner-btn stop-scanner-btn" onClick={stopScanner}>
                                                    Stop Camera
                                                </button>
                                                {availableCameras.length > 1 && (
                                                    <button className="scanner-btn switch-camera-btn" onClick={switchCamera}>
                                                        Switch Camera
                                                    </button>
                                                )}
                                            </>
                                        )}
                                    </div>
                                    
                                    <div className="scanner-viewport">
                                        {isScanning ? (
                                            <>
                                                <video ref={videoRef} autoPlay playsInline muted />
                                                <div className="scanner-overlay">
                                                    <div className="scanner-frame"></div>
                                                </div>
                                                <div className="scanner-status">Scanning QR Code...</div>
                                                <canvas ref={canvasRef} style={{ display: 'none' }} />
                                            </>
                                        ) : (
                                            <div className="no-camera">
                                                {availableCameras.length > 0 ? 
                                                    "Click 'Start Camera' to begin scanning" : 
                                                    "No camera available"}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="manual-input-section">
                                    <h4>Or Enter Queue ID Manually</h4>
                                    <div className="manual-input-group">
                                        <input
                                            type="text"
                                            className="manual-input"
                                            placeholder="Enter Queue ID (e.g., 241001001)"
                                            value={manualQueueId}
                                            onChange={(e) => setManualQueueId(e.target.value)}
                                            onKeyPress={(e) => e.key === 'Enter' && handleManualSearch()}
                                        />
                                        <button 
                                            className="manual-submit-btn"
                                            onClick={handleManualSearch}
                                        >
                                            <FontAwesomeIcon icon={faSearch} /> Search
                                        </button>
                                    </div>
                                </div>

                                {qrError && (
                                    <div className="error-message">
                                        {qrError}
                                    </div>
                                )}

                                {qrSuccess && !qrError && (
                                    <div className="success-message">
                                        {qrSuccess}
                                    </div>
                                )}

                                {scannedReservation && (
                                    <div className="qr-result-section">
                                        <div className="qr-result">
                                            <h4>Reservation Found</h4>
                                            <p><strong>Queue ID:</strong> {scannedReservation.queue_id}</p>
                                            <p><strong>Name:</strong> {scannedReservation.full_name}</p>
                                            <p><strong>Form:</strong> {scannedReservation.form_name}</p>
                                            <p><strong>Date:</strong> {scannedReservation.reservation_date}</p>
                                            <p><strong>Time:</strong> {scannedReservation.reservation_time ? scannedReservation.reservation_time.substring(0, 5) : ''}</p>
                                            <p><strong>Status:</strong> 
                                                <span style={{
                                                    color: scannedReservation.status === 'Complete' ? '#28a745' : 
                                                           scannedReservation.status === 'Cancelled' ? '#dc3545' : 
                                                           scannedReservation.status === 'Pending' ? '#ffc107' : '#06428A',
                                                    fontWeight: 'bold',
                                                    marginLeft: '8px'
                                                }}>
                                                    {scannedReservation.status}
                                                </span>
                                            </p>

                                            <div className="qr-actions">
                                                <button 
                                                    className="qr-action-btn complete-btn"
                                                    onClick={() => handleUpdateStatus('Complete')}
                                                >
                                                    Mark Complete
                                                </button>
                                                <button 
                                                    className="qr-action-btn pending-btn"
                                                    onClick={() => handleUpdateStatus('Pending')}
                                                >
                                                    Set Pending
                                                </button>
                                                <button 
                                                    className="qr-action-btn cancel-btn"
                                                    onClick={() => handleUpdateStatus('Cancelled')}
                                                >
                                                    Cancel
                                                </button>
                                                <button 
                                                    className="qr-action-btn goto-btn"
                                                    onClick={goToReservationInTable}
                                                >
                                                    View in Table
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* File Upload Modal */}
                {showFileUpload && (
                    <div className="upload-modal-overlay" onClick={(e) => e.target.className === 'upload-modal-overlay' && handleCloseFileUpload()}>
                        <div className="upload-modal-content">
                            <div className="qr-modal-header">
                                <h3>Upload Files</h3>
                                <button className="qr-close-btn" onClick={handleCloseFileUpload}>×</button>
                            </div>

                            <div className="upload-section">
                                <div 
                                    className="upload-area"
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    onDrop={handleDrop}
                                    onClick={() => fileInputRef.current.click()}
                                >
                                    <FontAwesomeIcon icon={faUpload} size="3x" color="#06428A" />
                                    <p><strong>Click or drag files to upload</strong></p>
                                    <p>Supports images, PDFs, and documents (JPG, PNG, PDF, DOC, XLS)</p>
                                    <small>Maximum file size: 10MB</small>
                                </div>

                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    style={{ display: 'none' }}
                                    multiple
                                    onChange={handleFileSelect}
                                    accept=".jpg,.jpeg,.png,.gif,.bmp,.pdf,.doc,.docx,.xls,.xlsx,.txt,.zip,.rar"
                                />

                                {uploadedFiles.length > 0 && (
                                    <div className="file-list">
                                        <h4>Selected Files ({uploadedFiles.length})</h4>
                                        {uploadedFiles.map((file, index) => (
                                            <div key={index} className="file-item">
                                                <div className="file-info">
                                                    <FontAwesomeIcon icon={faFile} className="file-icon" />
                                                    <div className="file-details">
                                                        <div className="file-name" title={file.name}>
                                                            {file.name}
                                                        </div>
                                                        <div className="file-size">
                                                            {(file.size / 1024).toFixed(2)} KB
                                                        </div>
                                                    </div>
                                                </div>
                                                <button 
                                                    className="remove-file-btn"
                                                    onClick={() => removeFile(index)}
                                                    title="Remove file"
                                                >
                                                    <FontAwesomeIcon icon={faTimes} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {qrError && (
                                    <div className="error-message">
                                        {qrError}
                                    </div>
                                )}

                                {qrSuccess && !qrError && (
                                    <div className="success-message">
                                        {qrSuccess}
                                    </div>
                                )}

                                <div className="upload-actions">
                                    <button 
                                        className="upload-btn upload-cancel-btn"
                                        onClick={handleCloseFileUpload}
                                    >
                                        Cancel
                                    </button>
                                    <button 
                                        className="upload-btn upload-submit-btn"
                                        onClick={handleFileUpload}
                                        disabled={uploadedFiles.length === 0 || isUploading}
                                    >
                                        {isUploading ? (
                                            <>
                                                <span className="loading-spinner"></span>
                                                Uploading...
                                            </>
                                        ) : (
                                            `Upload (${uploadedFiles.length})`
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default EmployeeTableView;