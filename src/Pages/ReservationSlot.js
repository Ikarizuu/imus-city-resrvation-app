import React, { useState } from 'react';

//Import Reservation Modal
import ReservationModal from '../Components/ReservationModal';

const pageSpecificStyles = `
    h2 {
        color: #28a745;
        font-size: 30px;
        margin-bottom: 20px;
        padding-top: 10px;
        font-weight:bold;
    }
    .section {
        margin-bottom: 30px;
    }
    .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: white;
        padding: 12px 15px;
        margin: 8px 0;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    .item p {
        margin: 0;
        font-size: 15px;
        color: #333;
        padding-right: 10px;
    }
    .item button {
        background: #28a745;
        color: white;
        border: none;
        padding: 8px 14px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 14px;
        transition: 0.3s;
    }
    .item button:hover {
        background: #218838;
    }
`;

const ReservationSlot = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedForm, setSelectedForm] = useState('');

    const handleReserveClick = (formName) => {
        setSelectedForm(formName);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
    <div className="container">
      <div className="row p-3">
        {/*Sidebar*/}
        <div className="col-md-2 col-sm-6">
          <div className="text-center">
            <ul className="list-group list-group-flush">
              <li
                className="list-group-item"
                style={{ backgroundColor: "white", color: "#053774" }}
              >
                <h3>Services</h3>
              </li>
              <li className="list-group-item">
                <a href="/Services">City Public Library</a>
              </li>
              <li className="list-group-item">
                <a href="/Assistance">Assistance</a>
              </li>
              <li className="list-group-item">
                <a href="/CitizensCharcter">Citizen's Charter</a>
              </li>
              <li className="list-group-item">
                <a href="/EBoss">EBoss</a>
              </li>
              <li className="list-group-item">
                <a href="/ReservationSlot">Slot Reservation</a>
              </li>
            </ul>
          </div>
        </div>
            <style>{pageSpecificStyles}</style>
            <div className="col-md-9 col-sm-12">
                <h2>Slot Reservation</h2>

                <div className="section">
                    <h3>Bureau of Fire Protection (BFP)</h3>
                    <div className="item">
                        <p>Fire Station Application Form with Claim Stub</p>
                        <button className="reserveBtn" onClick={() => handleReserveClick("Fire Station Application")}>Reserve</button>
                    </div>
                </div>

                <div className="section">
                    <h3>Business Permits and Licensing Office (BPLO)</h3>
                    <div className="item">
                        <p>Amendment of Business Permit</p>
                        <button className="reserveBtn" onClick={() => handleReserveClick("Amendment of Business Permit")}>Reserve</button>
                    </div>
                    <div className="item">
                        <p>Application for New Business Permit</p>
                        <button className="reserveBtn" onClick={() => handleReserveClick("New Business Permit")}>Reserve</button>
                    </div>
                    <div className="item">
                        <p>Application for Renewal of Business Permit</p>
                        <button className="reserveBtn" onClick={() => handleReserveClick("Renew Business Permit")}>Reserve</button>
                    </div>
                    <div className="item">
                        <p>Unified Application for New Business Permit</p>
                        <button className="reserveBtn" onClick={() => handleReserveClick("Unified Application Permit")}>Reserve</button>
                    </div>
                </div>

                <div className="section">
                    <h3>City Civil Registry (CCR)</h3>
                    <div className="item">
                        <p>Application for Late Registration</p>
                        <button className="reserveBtn" onClick={() => handleReserveClick("Late Registration")}>Reserve</button>
                    </div>
                    <div className="item">
                        <p>Application for Marriage License</p>
                        <button className="reserveBtn" onClick={() => handleReserveClick("Marriage License")}>Reserve</button>
                    </div>
                    <div className="item">
                        <p>NSO Application for CENOMAR</p>
                        <button className="reserveBtn" onClick={() => handleReserveClick("CENOMAR")}>Reserve</button>
                    </div>
                    <div className="item">
                        <p>NSO Application for Death</p>
                        <button className="reserveBtn" onClick={() => handleReserveClick("Death Application")}>Reserve</button>
                    </div>
                </div>

                <div className="section">
                    <h3>City Legal Office (CLO)</h3>
                    <div className="item">
                        <p>Affidavit of Denial</p>
                        <button className="reserveBtn" onClick={() => handleReserveClick("Affidavit of Denial")}>Reserve</button>
                    </div>
                    <div className="item">
                        <p>Affidavit of Dissistance</p>
                        <button className="reserveBtn" onClick={() => handleReserveClick("Affidavit of Dissistance")}>Reserve</button>
                    </div>
                    <div className="item">
                        <p>Affidavit of Free State</p>
                        <button className="reserveBtn" onClick={() => handleReserveClick("Affidavit of Free State")}>Reserve</button>
                    </div>
                    <div className="item">
                        <p>Affidavit of Loss</p>
                        <button className="reserveBtn" onClick={() => handleReserveClick("Affidavit of Loss")}>Reserve</button>
                    </div>
                    <div className="item">
                        <p>Affidavit of No Income</p>
                        <button className="reserveBtn" onClick={() => handleReserveClick("Affidavit of No Income")}>Reserve</button>
                    </div>
                    <div className="item">
                        <p>Affidavit of Non-Operation</p>
                        <button className="reserveBtn" onClick={() => handleReserveClick("Affidavit of Non-Operation")}>Reserve</button>
                    </div>
                    <div className="item">
                        <p>Affidavit of Publication</p>
                        <button className="reserveBtn" onClick={() => handleReserveClick("Affidavit of Publication")}>Reserve</button>
                    </div>
                    <div className="item">
                        <p>Affidavit of Quitclaim</p>
                        <button className="reserveBtn" onClick={() => handleReserveClick("Affidavit of Quitclaim")}>Reserve</button>
                    </div>
                    <div className="item">
                        <p>Affidavit of Reconciliation of Birth Data</p>
                        <button className="reserveBtn" onClick={() => handleReserveClick("Affidavit of Reconciliation of Birth Data")}>Reserve</button>
                    </div>
                    <div className="item">
                        <p>Affidavit of Support</p>
                        <button className="reserveBtn" onClick={() => handleReserveClick("Affidavit of Support")}>Reserve</button>
                    </div>
                    <div className="item">
                        <p>Affidavit of Vehicular Accident</p>
                        <button className="reserveBtn" onClick={() => handleReserveClick("Affidavit of Vehicular Accident")}>Reserve</button>
                    </div>
                    <div className="item">
                        <p>Contract of Lease</p>
                        <button className="reserveBtn" onClick={() => handleReserveClick("Contract of Lease")}>Reserve</button>
                    </div>
                    <div className="item">
                        <p>Deed of Sale of Motor Vehicle</p>
                        <button className="reserveBtn" onClick={() => handleReserveClick("Deed of Sale of Motor Vehicle")}>Reserve</button>
                    </div>
                    <div className="item">
                        <p>Secretary's Certificate</p>
                        <button className="reserveBtn" onClick={() => handleReserveClick("Secretary's Certificate")}>Reserve</button>
                    </div>
                </div>

                <div className="section">
                    <h3>City Planning and Development Office (CPDO)</h3>
                    <div className="item">
                        <p>Affidavit of Parking</p>
                        <button className="reserveBtn" onClick={() => handleReserveClick("Affidavit of Parking Form")}>Reserve</button>
                    </div>
                    <div className="item">
                        <p>Application for Final Approval of Subdivision</p>
                        <button className="reserveBtn" onClick={() => handleReserveClick("Final Approval of Subdivision")}>Reserve</button>
                    </div>
                    <div className="item">
                        <p>Application for Zoning Certification</p>
                        <button className="reserveBtn" onClick={() => handleReserveClick("Zoning Certification")}>Reserve</button>
                    </div>
                </div>

                <div className="section">
                    <h3>Office of the Building Official (OBO)</h3>
                    <div className="item">
                        <p>Unified Application for Building Permit Imus</p>
                        <button className="reserveBtn" onClick={() => handleReserveClick("Building Permit")}>Reserve</button>
                    </div>
                    <div className="item">
                        <p>Affidavit of Estimated Value of Building</p>
                        <button className="reserveBtn" onClick={() => handleReserveClick("Estimated Value of Building")}>Reserve</button>
                    </div>
                    <div className="item">
                        <p>Application for Certificate of Occupancy</p>
                        <button className="reserveBtn" onClick={() => handleReserveClick("Certificate of Occupancy")}>Reserve</button>
                    </div>
                    <div className="item">
                        <p>Certificate of Completion</p>
                        <button className="reserveBtn" onClick={() => handleReserveClick("Certificate of Completion")}>Reserve</button>
                    </div>
                    <div className="item">
                        <p>Electrical Permit</p>
                        <button className="reserveBtn" onClick={() => handleReserveClick("Electrical Permit")}>Reserve</button>
                    </div>
                    <div className="item">
                        <p>Evaluation Sheet</p>
                        <button className="reserveBtn" onClick={() => handleReserveClick("Evaluation Sheet")}>Reserve</button>
                    </div>
                    <div className="item">
                        <p>Fencing Permit</p>
                        <button className="reserveBtn" onClick={() => handleReserveClick("Fencing Permit")}>Reserve</button>
                    </div>
                    <div className="item">
                        <p>Plumbing Permit</p>
                        <button className="reserveBtn" onClick={() => handleReserveClick("Plumbing Permit")}>Reserve</button>
                    </div>
                    <div className="item">
                        <p>Mechanical Permit</p>
                        <button className="reserveBtn" onClick={() => handleReserveClick("Mechanical Permit")}>Reserve</button>
                    </div>
                    <div className="item">
                        <p>Sanitary Permit</p>
                        <button className="reserveBtn" onClick={() => handleReserveClick("Sanitary Permit")}>Reserve</button>
                    </div>
                    <div className="item">
                        <p>Sign Permit</p>
                        <button className="reserveBtn" onClick={() => handleReserveClick("Sign Permit")}>Reserve</button>
                    </div>
                    <div className="item">
                        <p>Electronics Permit</p>
                        <button className="reserveBtn" onClick={() => handleReserveClick("Electronics Permit")}>Reserve</button>
                    </div>
                    <div className="item">
                        <p>Architectural Permit</p>
                        <button className="reserveBtn" onClick={() => handleReserveClick("Architectural Permit")}>Reserve</button>
                    </div>
                    <div className="item">
                        <p>Civil Structural Permit</p>
                        <button className="reserveBtn" onClick={() => handleReserveClick("Civil Structural Permit")}>Reserve</button>
                    </div>
                </div>

                <div className="section">
                    <h3>Office of Senior Citizen Affairs (OSCA)</h3>
                    <div className="item">
                        <p>OSCA Application</p>
                        <button className="reserveBtn" onClick={() => handleReserveClick("OSCA Application")}>Reserve</button>
                    </div>
                </div>

                <div className="section">
                    <h3>Persons with Disability Affairs Office (PDAO)</h3>
                    <div className="item">
                        <p>PDAO Application</p>
                        <button className="reserveBtn" onClick={() => handleReserveClick("PDAO Application")}>Reserve</button>
                    </div>
                </div>
            </div>

            <ReservationModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                selectedForm={selectedForm}
            />
        </div>
    </div>
    );
};

export default ReservationSlot;
