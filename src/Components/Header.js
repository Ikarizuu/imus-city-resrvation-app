import React, { useEffect } from 'react';

//Import Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const HeaderComponent = () => {
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
                        <div className="col-md-6 text-end">
                            <a href="/" style={{ backgroundColor: '#18a54a', color: 'white', borderRadius: '2px', textDecoration: 'none', padding: '2px 5px', margin: '0 2px' }}>Full Disclosure</a>
                            <a href="/EmployeeLogIn" style={{ backgroundColor: '#18a54a', color: 'white', borderRadius: '2px', textDecoration: 'none', padding: '2px 5px', margin: '0 2px' }}>Employee</a>
                            <a href="/" style={{ backgroundColor: '#06428A', color: 'white', borderRadius: '2px', textDecoration: 'none', padding: '2px 5px', margin: '0 2px' }}>Downloadable Forms</a>
                            <a href="/" style={{ backgroundColor: '#06428A', color: 'white', borderRadius: '2px', textDecoration: 'none', padding: '2px 5px', margin: '0 2px' }}>Contact Us</a>
                            <a href="https://www.facebook.com/alexladvincula" className="fab fa-facebook" target="_blank" rel="noopener noreferrer" style={{ color: 'white', marginLeft: '5px', fontSize: '15px' }}><FontAwesomeIcon icon={faFacebook} /></a>
                        </div>
                    </div>
                </div>
            </div>

            {/*Nav bar*/}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src={require('../Media/Logo_City_Government_of_Imus.png')} alt="City of Imus Logo" />
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link" href="/">Home</a></li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">About Imus</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/CityProfile">City Profile</a></li>
                                    <li><a className="dropdown-item" href="/CityMayor">City Mayor</a></li>
                                    <li><a className="dropdown-item" href="/CityCouncil">City Council</a></li>
                                    <li><a className="dropdown-item" href="/BarangayOfficials">Barangay Officials</a></li>
                                    <li><a className="dropdown-item" href="/History">History</a></li>
                                    <li><a className="dropdown-item" href="/PastMayors">Past Mayors</a></li>
                                    <li><a className="dropdown-item" href="/DepartmentsandUnits">Departments and Units</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/Services">City Public Library</a></li>
                                    <li><a className="dropdown-item" href="/Assistance">Assistance</a></li>
                                    <li><a className="dropdown-item" href="/CitizensCharcter">Citizen's Charter</a></li>
                                    <li><a className="dropdown-item" href="/ReservationSlot">Slot Reservation</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Tourism</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/HistoryandCulture">History and Culture</a></li>
                                    <li><a className="dropdown-item" href="/VisitingImus">Visiting Imus</a></li>
                                    <li><a className="dropdown-item" href="/HeroesofImus">Heroes of Imus</a></li>
                                    <li><a className="dropdown-item" href="/NotablePerson">Notable Persons</a></li>
                                </ul>
                            </li>

                            <li className="nav-item"><a className="nav-link" href="/Business">Business</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default HeaderComponent;