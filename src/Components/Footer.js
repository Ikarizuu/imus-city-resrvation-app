import React from 'react';

//Import Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const FooterComponent = () => {
    return (
        <footer className="page-footer font-small blue pt-4" style={{backgroundColor: '#053774'}}>
            <div className="container-fluid text-md-left" style={{padding: '3em'}}>
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3 pb-4">
                        <img src={require('../Media/imus_logo.png')} alt="Imus Logo" />
                    <p className="text-white">The Official Website of the City of Imus is <br /> maintained and operated by <br />the City Information Office.</p>
                    <a href="https://www.facebook.com/CityofImus" className="fab fa-facebook" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
                </div>

                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase text-white"><strong>Site Maps</strong></h5>
                    <ul className="list-unstyled">
                        <li><a href="full-disclosure.html">Full Disclosure</a></li>
                        <li><a href="bids-and-awards.html">Bids and Awards</a></li>
                        <li><a href="city_mayor.html">City Mayor</a></li>
                        <li><a href="city_council.html">City Council</a></li>
                        <li><a href="news.html">News</a></li>
                    </ul>
                </div>

                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase text-white"><strong>Government Links</strong></h5>
                    <ul className="list-unstyled">
                        <li><a href="https://www.officialgazette.gov.ph/" target="_blank" rel="noopener noreferrer">Official Gazette</a></li>
                        <li><a href="https://www.gov.ph/the-government/directory-of-departments-and-agencies/" target="_blank" rel="noopener noreferrer">Official Directory</a></li>
                        <li><a href="https://www.officialgazette.gov.ph/calendar/" target="_blank" rel="noopener noreferrer">Official Calendar</a></li>
                        <li><a href="https://op-proper.gov.ph/" target="_blank" rel="noopener noreferrer">Office of the President</a></li>
                        <li><a href="http://legacy.senate.gov.ph/" target="_blank" rel="noopener noreferrer">Senate of the Philippines</a></li>
                        <li><a href="https://www.congress.gov.ph/" target="_blank" rel="noopener noreferrer">House of Representatives</a></li>
                    </ul>
                </div>
            </div>
        </div>

            <div className="footer-copyright text-center py-3 text-white" style={{backgroundColor: '#2c2b7b'}}>
                City of Imus © 2022 All Rights Reserved Terms of Use and Privacy Policy
            </div>
    </footer>
    );
};

export default FooterComponent;