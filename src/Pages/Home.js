import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';

//Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

//Import Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

//Import Modal
import AnnouncementModal from '../Components/AnnouncementModal';

const HomePage = () => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        //Initialize AOS
        AOS.init({ duration: 1000 });

        //Show modal on load
        const timer = setTimeout(() => {
            setShowModal(true);
        }, 1000);


        return () => {
            clearTimeout(timer);
            window.onscroll = null;
        };
    }, []);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            {/*Modal*/}
            <AnnouncementModal showModal={showModal} handleCloseModal={handleCloseModal} />

            {/*Carousel*/}
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={require('../Media/newcityhall.jpg')} className="d-block w-100" alt="City Government Center" />
                        <div className="carousel-caption">
                            <h1 style={{ fontSize: '3vw' }}>Imus City Government Center</h1>
                            <p style={{ fontSize: '2vw', textAlign: 'center' }}>
                                Imus Boulevard, Brgy. Malagasang I-G City of Imus, Cavite </p>
                            <a className="btn btn-primary" href="https://www.facebook.com/CityofImus" target="_blank" rel="noopener noreferrer">Visit us</a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={require('../Media/Carousel_BattleOfImus.jpg')} className="d-block w-100" alt="Battle of Imus Monument" />
                        <div className="carousel-caption text-end">
                            <h1 style={{ fontSize: '3vw' }}>Battle of Imus</h1>
                            <p style={{ fontSize: '2vw' }} className="text-end">Poblacion 1-A, City of Imus, Cavite</p>
                            <p style={{ fontSize: '1vw' }} className="text-start">Photo by: Conrad P. Panelo</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={require('../Media/slider_oni.png')} className="d-block w-100" alt="Ospital ng Imus" />
                        <div className="carousel-caption text-end">
                            <h1 style={{ fontSize: '3vw', backgroundColor: '#00000006' }}>Ospital ng Imus</h1>
                            <p style={{ fontSize: '2vw', textAlign: 'right', backgroundColor: '#00000006' }}>Imus Boulevard, Malagasang I-G, City of Imus, Cavite</p>
                            <p><a className="btn btn-primary" href="https://www.facebook.com/ospitalngimus/" target="_blank" rel="noopener noreferrer">Visit us</a></p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={require('../Media/LTO_resized.jpg')} className="d-block w-100" alt="LTO Office" />
                        <div className="carousel-caption text-start">
                            <h1 style={{ fontSize: '3vw' }}>Land Transportation Office</h1>
                            <p style={{ fontSize: '2vw' }}>Open Canal Road, Malagasang II-C, City of Imus, Cavite</p>
                            <p><a className="btn btn-primary" href="https://www.facebook.com/LTOImusOffice" target="_blank" rel="noopener noreferrer">Visit Us</a></p>
                        </div>
                    </div>
                </div>
                {/*Carousel Controls*/}
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/*Banner*/}
            <div className="d-xs-block p-1 text-white" style={{ backgroundColor: '#18a54a' }}>
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col">
                                    <h1 id="bannerhome">539,743<br />
                                        <p id="bannerhome2" className="text-center">population</p>
                                    </h1>
                                </div>
                                <div className="col">
                                    <h1 id="bannerhome">101.56<br />
                                        <p id="bannerhome2" className="text-center">persons/sq.km.</p>
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col">
                                    <h1 id="bannerhome">130,814<br />
                                        <p id="bannerhome2" className="text-center">estimated number of households</p>
                                    </h1>
                                </div>
                                <div className="col">
                                    <h1 id="bannerhome">4.24%<br />
                                        <p id="bannerhome2" className="text-center">population growth rate</p>
                                    </h1>
                                </div>
                                <div className="col">
                                    <h1 id="bannerhome">97<br />
                                        <p id="bannerhome2" className="text-center">barangays</p>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*Message from the Mayor*/}
            <div data-aos="fade-up" data-aos-delay="400">
                <section style={{ backgroundColor: 'white', padding: '50px 0' }}>
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-md-7">
                                <h2><strong>Message from the Mayor</strong></h2>
                                <p>
                                    Welcome to the City of Imus!<br /><br /> Explore the official website of the City Government of Imus, where we showcase our commitment to good governance and transparency. Here, you'll find essential information about our programs,
                                    services, and projects aligned with our mission, AAngat ang Imus.
                                    <br /><br /> We warmly invite you to dive into our City's rich history and vibrant culture, taste our local flavors, visit our must-see attractions, and feel the genuine hospitality that makes Imuseños proud.
                                    <br /><br /> Start planning your visit today, and experience the charm of Imus—proudly known as the Flag Capital of the Philippines!
                                </p>
                            </div>
                            <div className="col-md">
                                <img src={require('../Media/MayorStanding.png')} alt="Mayor of Imus" className="img-fluid" id="mayorpicture" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/*News*/}
            <div className="container" style={{ padding: '50px 0' }}>
                <div className="text-center pb-5">
                    <h1><strong>CITY NEWS</strong></h1>
                </div>
                <div id="myCarousel2" className="carousel slide" data-bs-ride="carousel">
                    {/*News Carousel*/}
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row row-cols-1 row-cols-md-3 g-4 p-3">
                                {/*Card 1*/}
                                <div className="col">
                                    <div className="card h-100 shadow-sm text-center">
                                        <img src={require('../Media/News/2025_July_ImusPride.jpg')} className="card-img-top img-fluid" alt="Imus Pride" />
                                        <div className="card-body">
                                            <p className="card-text">Imus Pride 2025: Makulay ang Ating Layunin</p><br />
                                            <small className="text-muted">July</small>
                                            <div className="btn-group mt-2">
                                                <a href="News/2025_July.html#Up_news426" className="btn btn-sm btn-success">View</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/*Card 2*/}
                                <div className="col">
                                    <div className="card h-100 shadow-sm text-center">
                                        <img src={require('../Media/News/2025_July_ProstheticLegs.jpg')} className="card-img-top img-fluid" alt="Prosthetic Legs" />
                                        <div className="card-body">
                                            <p className="card-text">4 na Imuseño, hinandugan ni Mayor AA ng prosthetic legs</p><br />
                                            <small className="text-muted">July</small>
                                            <div className="btn-group mt-2">
                                                <a href="News/2025_July.html#Up_news425" className="btn btn-sm btn-success">View</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/*Card 3*/}
                                <div className="col">
                                    <div className="card h-100 shadow-sm text-center">
                                        <img src={require('../Media/News/2025_July_MayorNakatanggapNgPagkilalaSaBJMPCALABARZON.jpg')} className="card-img-top img-fluid" alt="Mayor Award" />
                                        <div className="card-body">
                                            <p className="card-text">Mayor AA, nakatanggap ng pagkilala mula BJMP CALABARZON</p><br />
                                            <small className="text-muted">July 25</small>
                                            <div className="btn-group mt-2">
                                                <a href="News/2025_July.html#Up_news421" className="btn btn-sm btn-success">View</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="row row-cols-1 row-cols-md-3 g-4 p-3">
                                {/*Card 4*/}
                                <div className="col">
                                    <div className="card h-100 shadow-sm text-center">
                                        <img src={require('../Media/News/2025_July_CardinalTagleBumisitasaImusLGU.jpg')} className="card-img-top img-fluid" alt="Cardinal Tagle" />
                                        <div className="card-body">
                                            <p className="card-text">Cardinal Tagle bumisita sa Imus LGU</p><br /><br />
                                            <small className="text-muted">July 21</small>
                                            <div className="btn-group mt-2">
                                                <a href="News/2025_July.html#Up_news420" className="btn btn-sm btn-success">View</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/*Card 5*/}
                                <div className="col">
                                    <div className="card h-100 shadow-sm text-center">
                                        <img src={require('../Media/News/2025_July_BagongHalalnaOpisyalngHOA.jpg')} className="card-img-top img-fluid" alt="HOA Officials" />
                                        <div className="card-body">
                                            <p className="card-text">25 bagong halal na opisyal ng HOA sa Imus, nanumpa</p><br />
                                            <small className="text-muted">July 14</small>
                                            <div className="btn-group mt-2">
                                                <a href="News/2025_July.html#Up_news418" className="btn btn-sm btn-success">View</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/*Card 6*/}
                                <div className="col">
                                    <div className="card h-100 shadow-sm text-center">
                                        <img src={require('../Media/News/2025_July_ImusCentenarianSevillaAncheta.jpg')} className="card-img-top img-fluid" alt="Centenarian" />
                                        <div className="card-body">
                                            <p className="card-text">Mayor AA, binisita si Imuseño centenarian Sevilla Ancheta</p><br />
                                            <small className="text-muted">July 9</small>
                                            <div className="btn-group mt-2">
                                                <a href="News/2025_July.html#Up_news414" className="btn btn-sm btn-success">View</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*News Carousel controls*/}
                    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel2" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel2" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                {/*View more btn*/}
                <div className="text-center pt-5">
                    <a href="news.html"><button id="ViewMore" type="button" className="btn btn-success">View more</button></a>
                </div>
            </div>

            {/*Mission Vision*/}
            <section style={{ backgroundColor: 'white', padding: '50px 0' }}>
                <div className="container p-3" style={{ fontStyle: 'italic' }}>
                    <div className="section" data-aos="fade-right" data-aos-delay="400">
                        <div className="container text-center">
                            <h1 style={{ color: '#06428A', fontWeight: 900 }}>Vision</h1>
                            <h3>The model city in the region, with secured and healthy citizenry, living in a smart, green and sustainable environment in a technology-driven economy, governed with integrity and transparency.
                            </h3>
                        </div>
                    </div>

                    <div className="section pt-5" data-aos="fade-left" data-aos-delay="400">
                        <div className="container text-center">
                            <h1 style={{ color: '#06428A', fontWeight: 900 }}>Mission</h1>
                            <h3>The City Government of Imus is committed to delivering a transparent, reliable, and efficient public service that is proactive to the needs of its people while actively pursuing development for a dynamic and unified Imus.</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/*Socials*/}
            <section style={{ padding: '50px 0' }}>
                {/*Facebook SDK*/}
                <div id="fb-root"></div>
                <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v14.0" nonce="lvt8jSpP"></script>

                <div className="container">
                    <div className="text-center pb-5">
                        <h1><strong>Stay Connected!</strong></h1>
                    </div>
                    <div className="row p-2">
                        <div className="col-md-6 p-2 text-center">
                            <div className="ratio ratio-16x9">
                                <iframe src="https://www.youtube.com/embed/xGNOCWXM9pM" title="AAngat ang Imus" allowFullScreen></iframe>
                            </div>
                        </div>
                        <div className="col-md-3 text-center">
                            <div className="fb-page" data-href="https://www.facebook.com/alexladvincula" data-tabs="timeline" data-width="" data-height="300" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                                <blockquote cite="https://www.facebook.com/alexladvincula" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/alexladvincula">Alex Advincula</a></blockquote>
                            </div>
                            <br />
                            <p>Mayor Alex Advincula FB Page <i className="fab fa-facebook"><FontAwesomeIcon icon={faFacebook} /></i></p>
                        </div>

                        <div className="col-md-3 text-center">
                            <div className="fb-page" data-href="https://www.facebook.com/CityofImus/" data-tabs="timeline" data-width="" data-height="300" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                                <blockquote cite="https://www.facebook.com/CityofImus/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/CityofImus/">City Government of Imus</a></blockquote>
                            </div>
                            <br />
                            <p>City Government of Imus FB Page <i className="fab fa-facebook"><FontAwesomeIcon icon={faFacebook} /></i></p>
                        </div>
                    </div>
                </div>
            </section>

            {/*Imus City Hall Map Embed*/}
            <section style={{ backgroundColor: 'white', padding: '50px 0' }}>
                <div className="container text-center">
                    <div className="row p-3">
                        <div className="col-lg-8">
                            <div className="ratio ratio-16x9">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15458.59370753627!2d120.90208883955074!3d14.389741800000023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d31670229361%3A0x92deb97a2f2bb219!2sNew%20Imus%20City%20Hall!5e0!3m2!1sen!2sus!4v1658285201747!5m2!1sen!2sus" style={{ border: '2px solid #18a54a', borderRadius: '10px' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        <div className="col-lg-4 d-flex align-items-center">
                            <div>
                                <h3 style={{ color: '#053774' }}>Imus Boulevard, Brgy. Malagasang I-G<br /> City of Imus, Cavite
                                </h3>
                                <br />
                                <h3 style={{ color: '#053774' }}>Open Monday to Friday <br /> 08:00 am - 05:00 pm</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*Hotlines*/}
            <section style={{ color: 'white', padding: '50px 0' }}>
                <div className="container p-5" style={{ backgroundColor: '#053774', width: '75%' }}>
                    <div className="row ">
                        <div className="col">City Government of Imus Landline</div>
                    </div>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col text-end">(046) 888 9910</div>
                    </div>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col text-end">(046) 888 9912</div>
                    </div>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col text-end">(For Emergency) - (046) 888 9911</div>
                    </div>
                    <hr />
                    <div className="row ">
                        <div className="col">City Disaster Risk Reduction Management Office (CDRRMO)</div>
                    </div>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col text-end">(046)472-2618</div>
                    </div>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col text-end">(046)472-2623</div>
                    </div>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col text-end">(046)472-2625</div>
                    </div>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col text-end">0919-069-1703</div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col">Bureau of Fire Protection</div>
                        <div className="col text-end">970-5161</div>
                    </div>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col text-end">416-3032</div>
                    </div>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col text-end">0915-528-3256</div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col">Ospital ng Imus</div>
                        <div className="col text-end">419-8300 to 07</div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col">City of Imus Molecular Laboratory</div>
                        <div className="col text-end">853-3364</div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default HomePage;