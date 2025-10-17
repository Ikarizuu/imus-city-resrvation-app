/*eslint-disable jsx-a11y/anchor-is-valid*/
import React, { useEffect } from 'react';

//Import Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const EmployeeHeaderComponent = () => {
    useEffect(() => {
        const date_time = (id) => {
            const date = new Date();
            const year = date.getFullYear();
            const month = date.getMonth();
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            const d = date.getDate();
            const day = date.getDay();
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            let h = date.getHours();
            if (h < 10) { h = "0" + h; }
            let m = date.getMinutes();
            if (m < 10) { m = "0" + m; }
            let s = date.getSeconds();
            if (s < 10) { s = "0" + s; }
            const result = ` ${months[month]} ${d}, ${year} | ${days[day]} \u00A0 \u00A0\u00A0 ${h} : ${m} : ${s}`;
            document.getElementById(id).innerHTML = result;
            setTimeout(() => date_time(id), 1000);
        };
        date_time('date_time');

        //Logout functionality
        const logoutBtn = document.getElementById('logoutBtn');
        const handleLogout = (e) => {
            e.preventDefault();
            sessionStorage.removeItem('loggedInUser'); //Remove the logged-in user from session storage
            window.location.href = '/EmployeeLogIn'; //Redirect back to Employee Log In Page
        };
        if (logoutBtn) {
            logoutBtn.addEventListener('click', handleLogout);
        }

        return () => {
            if (logoutBtn) {
                logoutBtn.removeEventListener('click', handleLogout);
            }
        };
    }, []);

    return (
        <header>
            {/*Top bar*/}
            <div className="top-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6" style={{ paddingTop: '4px' }}>
                            <span id="date_time"></span>
                        </div>
                    </div>
                </div>
            </div>

            {/*Nav Bar*/}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="/EmployeeHome">
                        <img src={require('../Media/Logo_City_Government_of_Imus.png')} alt="City of Imus Logo" />
                    </a>

                    <div className="navbar-collapse">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item" style={{ color: 'black', display: 'flex', alignItems: 'center' }}>
                                City Government of Imus Employee Portal
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle user-dropdown" href="#" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <FontAwesomeIcon icon={faUserCircle} className="user-icon" style={{ color: 'black' }} />
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><a className="dropdown-item" href="#" id="logoutBtn"><FontAwesomeIcon icon={faSignOutAlt} className="me-2" />Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default EmployeeHeaderComponent;