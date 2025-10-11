import React, { useEffect, useState } from 'react';

//Import AOS for animation
import AOS from 'aos';
import 'aos/dist/aos.css';

//Import Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

//CSS
const pageSpecificStyles = `
    .login-container {
        background-color: white;
        border-radius: 10px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        padding: 30px;
        margin: 50px auto;
        max-width: 450px;
    }
    .login-header {
        text-align: center;
        margin-bottom: 30px;
    }
    .login-logo {
        max-width: 120px;
        margin-bottom: 20px;
    }
    .form-control:focus {
        border-color: #053774;
        box-shadow: 0 0 0 0.25rem rgba(5, 55, 116, 0.25);
    }
    .btn-imus-primary {
        background-color: #053774;
        color: white;
    }
    .btn-imus-primary:hover {
        background-color: #04285c;
        color: white;
    }
    .login-footer {
        text-align: center;
        margin-top: 20px;
        font-size: 0.9rem;
    }
    .alert {
        margin-top: 15px;
    }
    .btn-loading {
        position: relative;
        pointer-events: none;
    }
    .btn-loading:after {
        content: "";
        position: absolute;
        width: 16px;
        height: 16px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        border: 2px solid transparent;
        border-top-color: #ffffff;
        border-radius: 50%;
        animation: button-loading-spinner 1s ease infinite;
    }
    @keyframes button-loading-spinner {
        from {
            transform: rotate(0turn);
        }
        to {
            transform: rotate(1turn);
        }
    }
`;


const EmployeeLogInPage = () => {
    const [employeeid, setEmployeeid] = useState('');
    const [password, setPassword] = useState('');
    const [loginMessage, setLoginMessage] = useState({ text: '', type: '' });
    const [isLoading, setIsLoading] = useState(false);

    //SheetDB URL
    const sheetdbURL = "https://sheetdb.io/api/v1/7vpnlt3ni2ehp";

    useEffect(() => {
        AOS.init();

        //Check if employee is already logged in
        if (sessionStorage.getItem("loggedInUser")) {
            window.location.href = "/EmployeeHome";
        }
    }, []);

    const showMessage = (text, type) => {
        setLoginMessage({ text, type });
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        setLoginMessage({ text: '', type: '' }); //Clear previous messages

        if (!employeeid || !password) {
            showMessage("Please enter both Employee ID and Password.", "danger");
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch(sheetdbURL);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const user = data.find(entry =>
                entry.employeeid === employeeid && entry.password === password
            );

            if (user) {
                sessionStorage.setItem("loggedInUser", employeeid);
                showMessage("Login successful! Redirecting...", "success");
                setTimeout(() => {
                    window.location.href = "/EmployeeHome";
                }, 1000);
            } else {
                showMessage("Invalid Employee ID or Password. Please try again.", "danger");
            }
        } catch (error) {
            console.error("Login error:", error);
            showMessage("Login service is temporarily unavailable. Please try again later.", "danger");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <style>{pageSpecificStyles}</style>

            <section className="py-5" style={{ minHeight: '70vh' }}>
                <div className="container">
                    <div className="login-container" data-aos="fade-up" data-aos-delay="400">
                        <div className="login-header">
                            <img src={require('../Media/seal_imus_sm100.png')} alt="City of Imus Seal" className="login-logo" />
                            <h3 style={{ color: '#053774' }}>Employee Login</h3>
                        </div>

                        <form onSubmit={handleLogin}>
                            <div className="mb-3">
                                <label htmlFor="loginEmployeeID" className="form-label">Employee ID</label>
                                <div className="input-group">
                                    <span className="input-group-text"><i className="fas fa-user"><FontAwesomeIcon icon={faUser} /></i></span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="loginEmployeeID"
                                        placeholder="Enter your EmployeeID number"
                                        required
                                        value={employeeid}
                                        onChange={(e) => setEmployeeid(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="loginPassword" className="form-label">Password</label>
                                <div className="input-group">
                                    <span className="input-group-text"><i className="fas fa-lock"><FontAwesomeIcon icon={faLock} /></i></span>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="loginPassword"
                                        placeholder="Enter your password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="d-grid gap-2">
                                <button
                                    type="submit"
                                    id="submitBtn"
                                    className={`btn btn-imus-primary btn-lg ${isLoading ? 'btn-loading' : ''}`}
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Logging in...' : 'Login'}
                                </button>
                            </div>

                            {loginMessage.text && (
                                <div
                                    id="loginMessage"
                                    className={`alert alert-${loginMessage.type} mt-3`}
                                    role="alert"
                                >
                                    {loginMessage.text}
                                </div>
                            )}
                        </form>

                        <div className="login-footer">
                            <p className="small">For assistance, please contact the IT Department at <br /><a href="mailto:imuswebdevg10@gmail.com">it-support@imus.gov.ph</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EmployeeLogInPage;