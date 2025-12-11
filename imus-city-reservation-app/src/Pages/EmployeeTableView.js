/*eslint-disable jsx-a11y/iframe-has-title*/
import React, { useState, useEffect, useRef } from 'react';
import RescheduleModal from '../Components/RescheduleModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faPen, faTrash, faQrcode, faSearch, faCamera, faTimes } from '@fortawesome/free-solid-svg-icons';
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
        justify-content: center;
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

    .warning-message {
        color: #856404;
        background-color: #fff3cd;
        border: 1px solid #ffeeba;
        padding: 10px;
        border-radius: 5px;
        margin-top: 10px;
        font-size: 0.9em;
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
    const [scannedReservation, setScannedReservation] = useState(null);
    const [qrError, setQrError] = useState('');
    const [qrSuccess, setQrSuccess] = useState('');
    const [manualQueueId, setManualQueueId] = useState('');
    const [isScanning, setIsScanning] = useState(false);
    const [availableCameras, setAvailableCameras] = useState([]);
    const [currentCamera, setCurrentCamera] = useState(null);
    
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const streamRef = useRef(null);
    const scanIntervalRef = useRef(null);
    const videoReadyRef = useRef(false);

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
        setScannedReservation(null);
        setQrError('');
        setQrSuccess('');
        setManualQueueId('');
    };

    const startScanner = async () => {
    if (!currentCamera) { setQrError('No camera selected'); return; }
    setQrError(''); //clear old message
    setIsScanning(true);

    try {
        const constraints = {
            video: { deviceId: currentCamera.deviceId, facingMode: 'environment', width: { ideal: 1280 }, height: { ideal: 720 } },
            audio: false
        };
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        attachStream(stream);
    } catch (err) {
        console.error('Preferred camera failed', err);
        setQrError(err.message);

        try {
            const fallback = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
            attachStream(fallback);
        } catch (fbErr) {
            console.error('Any camera also failed', fbErr);
            setQrError('Camera blocked or no permission – use HTTPS and allow camera.');
            setIsScanning(false);
        }
    }

    function attachStream(stream) {
        streamRef.current = stream;
        const vid = videoRef.current;
        if (!vid) return;
        vid.srcObject = stream;
        vid.setAttribute('playsinline', '');
        vid.muted = true;
        vid.autoplay = true;
        vid.onloadedmetadata = () => {
            vid.play();
            startQRCodeDetection();       // start scanning loop
        };
        vid.onerror = () => {
            setQrError('Video element error');
            stopScanner();
        };
    }
    };

    const stopScanner = () => {
    if (scanIntervalRef.current) { clearInterval(scanIntervalRef.current); scanIntervalRef.current = null; }
    if (streamRef.current) { streamRef.current.getTracks().forEach(t => t.stop()); streamRef.current = null; }
    if (videoRef.current) { videoRef.current.srcObject = null; }
    setIsScanning(false);
    };

    const switchCamera = () => {
        if (availableCameras.length < 2) return;
        
        stopScanner();
        const currentIndex = availableCameras.findIndex(cam => cam.deviceId === currentCamera.deviceId);
        const nextIndex = (currentIndex + 1) % availableCameras.length;
        setCurrentCamera(availableCameras[nextIndex]);
        
        setTimeout(startScanner, 100);
    };

    const startQRCodeDetection = () => {
    scanIntervalRef.current = setInterval(async () => {
        const vid = videoRef.current;
        const canvas = canvasRef.current;
        if (!vid || !canvas || !vid.videoWidth || !vid.videoHeight) return;

        const w = vid.videoWidth;
        const h = vid.videoHeight;
        const ctx = canvas.getContext('2d');
        canvas.width = w;
        canvas.height = h;
        ctx.drawImage(vid, 0, 0, w, h);

        try {
            const jsQR = (await import('jsqr')).default;
            const code = jsQR(ctx.getImageData(0, 0, w, h).data, w, h);
            if (code) {
                stopScanner();
                processScannedQRCode(code.data);
            }
        } catch (e) { /* ignore */ }
    }, 500);
    };

    const processScannedQRCode = (decodedText) => {
        let queueId = decodedText;
        
        const queueIdMatch = decodedText.match(/Queue ID:\s*(\d{9})/i);
        if (queueIdMatch) {
            queueId = queueIdMatch[1];
        } else {
            const nineDigitMatch = decodedText.match(/(\d{9})/);
            if (nineDigitMatch) {
                queueId = nineDigitMatch[1];
            }
        }
        
        if (/^\d{9}$/.test(queueId)) {
            fetchReservationByQueueId(queueId);
        } else {
            setQrError("❌ Invalid QR code format. Please scan a valid reservation QR code with a 9-digit Queue ID.");
        }
    };

    const fetchReservationByQueueId = async (queueId) => {
        try {
            const response = await api.get(`/get_reservation.php?queue_id=${queueId}`);
            
            if (response.data.success) {
                const reservation = response.data.reservation;
                setScannedReservation(reservation);
                setQrError('');
                setQrSuccess(`✅ Found reservation for ${reservation.full_name}`);
                
                if (formTitle !== 'All Reservations' && reservation.form_name !== formTitle) {
                    setQrError(`⚠️ Form Mismatch: This Queue ID belongs to "${reservation.form_name}" but you are viewing "${formTitle}". Click "View in Table" to navigate to the correct form and date.`);
                }
            } else {
                setQrError(response.data.message || "❌ Reservation not found");
                setScannedReservation(null);
                setQrSuccess('');
            }
        } catch (error) {
            console.error("Error fetching reservation:", error);
            setQrError("❌ Failed to fetch reservation data. Please check your connection.");
            setScannedReservation(null);
            setQrSuccess('');
        }
    };

    const handleManualSearch = () => {
        if (manualQueueId.trim()) {
            if (/^\d{9}$/.test(manualQueueId)) {
                fetchReservationByQueueId(manualQueueId);
            } else {
                setQrError("Queue ID must be exactly 9 digits");
            }
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
                setQrSuccess(`✅ Status updated to ${newStatus}`);
                fetchReservationByQueueId(scannedReservation.queue_id);
                
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
        if (!scannedReservation) return;
        
        const reservationDate = scannedReservation.reservation_date;
        const reservationForm = scannedReservation.form_name;
        
        if (reservationForm !== formTitle && formTitle !== 'All Reservations') {
            alert(`⚠️ Form Mismatch!\n\nThis Queue ID belongs to: "${reservationForm}"\nYou are currently viewing: "${formTitle}"\n\nYou will be redirected to the correct form.`);
        }
        
        handleCloseQRScanner();
        
        if (reservationForm !== formTitle) {
            setFormTitle(reservationForm);
            const newUrl = `/EmployeeTableView?formName=${encodeURIComponent(reservationForm)}`;
            window.history.pushState({}, '', newUrl);
        }
        
        if (reservationDate !== selectedDate) {
            setSelectedDate(reservationDate);
        }
        
        setTimeout(() => {
            const element = document.querySelector(`[data-queue-id="${scannedReservation.queue_id}"]`);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                element.classList.add('highlight');
                setTimeout(() => element.classList.remove('highlight'), 5000);
            }
        }, 500);
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

            const response = await api.post('/reschedule.php', rescheduleData);
            
            if (response.data.success) {
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

                                            {formTitle !== 'All Reservations' && scannedReservation.form_name !== formTitle && (
                                                <div className="warning-message" style={{ marginTop: '15px' }}>
                                                    ⚠️ <strong>Form Mismatch:</strong> This reservation is for "{scannedReservation.form_name}" but you are currently viewing "{formTitle}"
                                                </div>
                                            )}

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
            </div>
        </>
    );
};

export default EmployeeTableView;