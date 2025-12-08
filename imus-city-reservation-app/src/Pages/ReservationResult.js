import React, { useEffect, useState } from 'react';

//Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

const pageSpecificStyles = `
    .confirmation-container {
        max-width: 900px;
        margin: 50px auto;
        padding: 30px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    }
    .confirmation-header {
        text-align: center;
        margin-bottom: 30px;
    }
    .confirmation-header h1 {
        color: #053774;
        font-weight: bold;
    }
    .details-box {
        border: 2px solid #18a54a;
        border-radius: 8px;
        padding: 20px;
        padding-right: 10px;
        margin-bottom: 50px;
        display: flex;
        text-align: left;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }
    .details-info {
        flex: 2;
        min-width: 300px;
    }
    .details-info p {
        margin-bottom: 15px;
        font-size: 1.1em;
    }
    .details-info strong {
        color: #053774;
        display: inline-block;
        min-width: 200px;
    }
    .details-info span {
        display: inline-flex;
        padding-right: 15px;
    }
    .qr-code {
        flex: 1;
        min-width: 150px;
        text-align: center;
    }
    .qr-code img {
        max-width: 200px;
        height: auto;
        border: 1px solid black;
    }
    .print-section {
        text-align: center;
        margin-top: 30px;
    }
    .print-section button {
        background-color: #06428A;
        color: white;
        border: none;
        padding: 10px 20px;
        margin-bottom: 30px;
        border-radius: 5px;
        font-size: 1.1em;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    .print-section button:hover {
        background-color: #053774;
    }
    .result_info{
        color: #18a54a;
        text-align: center;
    }
    @media (max-width: 768px) {
        .details-box {
            flex-direction: column;
            align-items: flex-start;
        }
        .details-info strong {
            width: 100px;
        }
        .qr-code {
            margin-top: 20px;
            width: 100%;
        }
    }
`;

const ReservationResult = () => {
    const [reservationDetails, setReservationDetails] = useState({
        queueId: '',
        form: '',
        fullName: '',
        email: '',
        date: '',
        time: '',
        actionDate: ''
    });

    useEffect(() => {
        AOS.init();

        const params = new URLSearchParams(window.location.search);
        setReservationDetails({
            queueId: params.get("queueId") || 'N/A',
            form: params.get("form") || 'N/A',
            fullName: params.get("fullName") || 'N/A',
            email: params.get("email") || 'N/A',
            date: params.get("date") || 'N/A',
            time: params.get("time") || 'N/A',
            actionDate: params.get("actionDate") || 'N/A'
        });

    }, []);

    const handlePrint = () => {
        window.print();
    };

    return (
        <>
            <style>{pageSpecificStyles}</style>

            {/*Reservation Details*/}
            <div className="container confirmation-container">
                <div className="confirmation-header">
                    <h1>Reservation Result</h1>
                    <br />
                    <h5 style={{ textAlign: 'left' }}><strong> Date of action: <span id="actionDate">{reservationDetails.actionDate}</span></strong></h5>
                </div>

                <div className="details-box">
                    <div className="details-info">
                        <p><strong>QueueID:</strong> <span id="queueId">{reservationDetails.queueId}</span></p>
                        <p><strong>Purpose:</strong> <span id="purpose">{reservationDetails.form}</span></p>
                        <p><strong>Applicant Name:</strong> <span id="applicantName">{reservationDetails.fullName}</span></p>
                        <p><strong>Applicant Email:</strong> <span id="applicantEmail">{reservationDetails.email}</span></p>
                        <p><strong>Date of Reservation:</strong> <span id="reservationDate">{reservationDetails.date}</span></p>
                        <p><strong>Time of Reservation:</strong> <span id="reservationTime" style={{ paddingRight: '35px' }}>{reservationDetails.time}</span></p>
                    </div>
                    <div className="qr-code">
                        {/* 
                            SOON TO COME. USING LARAVEL PHP
                            "QR CODE GENERATOR"
                        */}
                        <img src={require("../Media/qrcode_example.png")} alt="QR Code" id="qrCodeImage" />
                    </div>
                </div>

                <p className='result_info'>Kindly present a copy of this page with your valid I.D. in the Office</p>
                
                <div className="print-section">
                    <button onClick={handlePrint}>Print Reservation</button>
                </div>
            </div>
        </>
    );
};

export default ReservationResult;