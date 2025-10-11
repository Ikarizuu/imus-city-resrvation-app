import React, { useEffect } from 'react';

const pageSpecificStyles = `
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f4f4f4;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
    }

    .navbar-brand img {
        height: 50px;
        margin-right: 15px;
    }

    .navbar-nav .nav-item .nav-link {
        color: #003366;
        font-weight: 500;
        margin-right: 15px;
    }

    .navbar-nav .nav-item .nav-link:hover {
        color: #28a745;
    }

    .navbar-nav .dropdown-menu {
        border: none;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .navbar-nav .dropdown-item:hover {
        background-color: #e9ecef;
        color: #28a745;
    }

    h2 {
        color: #28a745;
        font-size: 26px;
        margin-bottom: 20px;
        padding-top: 50px;
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

    .close {
        position: absolute;
        right: 15px;
        top: 10px;
        font-size: 20px;
        cursor: pointer;
        color: #666;
    }

    .close:hover {
        color: red;
    }

    .logout-btn {
        background: none;
        border: none;
        color: #6c757d;
        padding: 8px 12px;
        border-radius: 4px;
        transition: all 0.3s;
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .logout-btn:hover {
        background-color: #f8f9fa;
        color: #dc3545;
    }

    .user-dropdown {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .user-icon {
        font-size: 1.5rem;
        color: #053774;
    }

    .page-footer a {
        color: white;
        text-decoration: none;
    }

    .page-footer a:hover {
        color: #28a745;
    }
}
`;

const EmployeeHomePage = () => {
    useEffect(() => {
        if (!sessionStorage.getItem("loggedInUser")) {
            window.location.href = "adminlogin.html";
            return;
        }

        return () => {
            window.onscroll = null;
        };
    }, []);

    const handleViewClick = (formName) => {
        window.location.href = `/EmployeeTableView?formName=${encodeURIComponent(formName)}`;
    };

    return (
        <>
            <style>{pageSpecificStyles}</style>
            <div>

                <div className="container">
                    <div className="section">
                        <h3>Bureau of Fire Protection (BFP)</h3>
                        <div className="item">
                            <p>Fire Station Application Form with Claim Stub </p>
                            <button onClick={() => handleViewClick("Fire Station Application")}>View</button>
                        </div>
                    </div>

                    <div className="section">
                        <h3>Business Permits and Licensing Office (BPLO)</h3>
                        <div className="item">
                            <p>Amendment of Business Permit</p><button onClick={() => handleViewClick("Amendment of Business Permit")}>View</button>
                        </div>
                        <div className="item">
                            <p>Application for New Business Permit</p><button onClick={() => handleViewClick("New Business Permit")}>View</button>
                        </div>
                        <div className="item">
                            <p>Application for Renewal of Business Permit</p><button onClick={() => handleViewClick("Renew Business Permit")}>View</button>
                        </div>
                        <div className="item">
                            <p>Unified Application for New Business Permit</p><button onClick={() => handleViewClick("Unified Application Permit")}>View</button>
                        </div>
                    </div>

                    <div className="section">
                        <h3>City Civil Registry (CCR)</h3>
                        <div className="item">
                            <p>Application for Late Registration</p><button onClick={() => handleViewClick("Late Registration")}>View</button>
                        </div>
                        <div className="item">
                            <p>Application for Marriage License</p><button onClick={() => handleViewClick("Marriage License")}>View</button>
                        </div>
                        <div className="item">
                            <p>NSO Application for CENOMAR</p><button onClick={() => handleViewClick("CENOMAR")}>View</button>
                        </div>
                        <div className="item">
                            <p>NSO Application for Death</p><button onClick={() => handleViewClick("Death Application")}>View</button>
                        </div>
                    </div>

                    <div className="section">
                        <h3>City Legal Office (CLO)</h3>
                        <div className="item">
                            <p>Affidavit of Denial</p><button onClick={() => handleViewClick("Affidavit of Denial")}>View</button>
                        </div>
                        <div className="item">
                            <p>Affidavit of Dissistance</p><button onClick={() => handleViewClick("Affidavit of Dissistance")}>View</button>
                        </div>
                        <div className="item">
                            <p>Affidavit of Free State</p><button onClick={() => handleViewClick("Affidavit of Free State")}>View</button>
                        </div>
                        <div className="item">
                            <p>Affidavit of Loss</p><button onClick={() => handleViewClick("Affidavit of Loss")}>View</button>
                        </div>
                        <div className="item">
                            <p>Affidavit of No Income</p><button onClick={() => handleViewClick("Affidavit of No Income")}>View</button>
                        </div>
                        <div className="item">
                            <p>Affidavit of Non-Operation</p><button onClick={() => handleViewClick("Affidavit of Non-Operation")}>View</button>
                        </div>
                        <div className="item">
                            <p>Affidavit of Publication</p><button onClick={() => handleViewClick("Affidavit of Publication")}>View</button>
                        </div>
                        <div className="item">
                            <p>Affidavit of Quitclaim</p><button onClick={() => handleViewClick("Affidavit of Quitclaim")}>View</button>
                        </div>
                        <div className="item">
                            <p>Affidavit of Reconciliation of Birth Data</p><button onClick={() => handleViewClick("Affidavit of Reconciliation of Birth Data")}>View</button>
                        </div>
                        <div className="item">
                            <p>Affidavit of Support</p><button onClick={() => handleViewClick("Affidavit of Support")}>View</button>
                        </div>
                        <div className="item">
                            <p>Affidavit of Vehicular Accident</p><button onClick={() => handleViewClick("Affidavit of Vehicular Accident")}>View</button>
                        </div>
                        <div className="item">
                            <p>Contract of Lease</p><button onClick={() => handleViewClick("Contract of Lease")}>View</button>
                        </div>
                        <div className="item">
                            <p>Deed of Sale of Motor Vehicle</p><button onClick={() => handleViewClick("Deed of Sale of Motor Vehicle")}>View</button>
                        </div>
                        <div className="item">
                            <p>Secretary's Certificate</p><button onClick={() => handleViewClick("Secretary's Certificate")}>View</button>
                        </div>
                    </div>

                    <div className="section">
                        <h3>City Planning and Development Office (CPDO)</h3>
                        <div className="item">
                            <p>Affidavit of Parking</p><button onClick={() => handleViewClick("Affidavit of Parking Form")}>View</button>
                        </div>
                        <div className="item">
                            <p>Application for Final Approval of Subdivision</p><button onClick={() => handleViewClick("Final Approval of Subdivision")}>View</button>
                        </div>
                        <div className="item">
                            <p>Application for Zoning Certification</p><button onClick={() => handleViewClick("Zoning Certification")}>View</button>
                        </div>
                    </div>

                    <div className="section">
                        <h3>Office of the Building Official (OBO)</h3>
                        <div className="item">
                            <p>Unified Application for Building Permit Imus</p><button onClick={() => handleViewClick("Building Permit")}>View</button>
                        </div>
                        <div className="item">
                            <p>Affidavit of Estimated Value of Building</p><button onClick={() => handleViewClick("Estimated Value of Building")}>View</button>
                        </div>
                        <div className="item">
                            <p>Application for Certificate of Occupancy</p><button onClick={() => handleViewClick("Certificate of Occupancy")}>View</button>
                        </div>
                        <div className="item">
                            <p>Certificate of Completion</p><button onClick={() => handleViewClick("Certificate of Completion")}>View</button>
                        </div>
                        <div className="item">
                            <p>Electrical Permit</p><button onClick={() => handleViewClick("Electrical Permit")}>View</button>
                        </div>
                        <div className="item">
                            <p>Evaluation Sheet</p><button onClick={() => handleViewClick("Evaluation Sheet")}>View</button>
                        </div>
                        <div className="item">
                            <p>Fencing Permit</p><button onClick={() => handleViewClick("Fencing Permit")}>View</button>
                        </div>
                        <div className="item">
                            <p>Plumbing Permit</p><button onClick={() => handleViewClick("Plumbing Permit")}>View</button>
                        </div>
                        <div className="item">
                            <p>Mechanical Permit</p><button onClick={() => handleViewClick("Mechanical Permit")}>View</button>
                        </div>
                        <div className="item">
                            <p>Sanitary Permit</p><button onClick={() => handleViewClick("Sanitary Permit")}>View</button>
                        </div>
                        <div className="item">
                            <p>Sign Permit</p><button onClick={() => handleViewClick("Sign Permit")}>View</button>
                        </div>
                        <div className="item">
                            <p>Electronics Permit</p><button onClick={() => handleViewClick("Electronics Permit")}>View</button>
                        </div>
                        <div className="item">
                            <p>Architectural Permit</p><button onClick={() => handleViewClick("Architectural Permit")}>View</button>
                        </div>
                        <div className="item">
                            <p>Civil Structural Permit</p><button onClick={() => handleViewClick("Civil Structural Permit")}>View</button>
                        </div>
                    </div>

                    <div className="section">
                        <h3>Office of Senior Citizen Affairs (OSCA)</h3>
                        <div className="item">
                            <p>OSCA Application</p><button onClick={() => handleViewClick("OSCA Application")}>View</button>
                        </div>
                    </div>

                    <div className="section">
                        <h3>Persons with Disability Affairs Office (PDAO)</h3>
                        <div className="item">
                            <p>PDAO Application</p><button onClick={() => handleViewClick("PDAO Application")}>View</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EmployeeHomePage;