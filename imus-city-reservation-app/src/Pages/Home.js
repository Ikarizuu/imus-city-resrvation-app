import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import api from '../api/axiosConfig';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import AnnouncementModal from '../Components/AnnouncementModal';

const HomePage = () => {
    const [showModal, setShowModal] = useState(false);
    const [statistics, setStatistics] = useState([]);
    const [statsLoading, setStatsLoading] = useState(true);
    const [newsItems, setNewsItems] = useState([]);
    const [newsLoading, setNewsLoading] = useState(true);

    useEffect(() => {
        AOS.init({ duration: 1000 });
        const timer = setTimeout(() => setShowModal(true), 1000);
        fetchStatistics();
        fetchNewsItems();
        return () => {
            clearTimeout(timer);
            window.onscroll = null;
        };
    }, []);

    const handleCloseModal = () => setShowModal(false);

    const fetchStatistics = async () => {
        setStatsLoading(true);
        try {
            const response = await api.get('/get_statistics.php');
            if (response.data.success && response.data.statistics) {
                setStatistics(response.data.statistics);
            } else {
                setStatistics([
                    { value: '539,743', label: 'Population' },
                    { value: '101.56', label: 'Persons/sq.km.' },
                    { value: '130,814', label: 'Number of households' },
                    { value: '4.24%', label: 'Population growth rate' },
                    { value: '97', label: 'Barangays' }
                ]);
            }
        } catch (error) {
            console.error("Error fetching statistics:", error);
            setStatistics([
                { value: '539,743', label: 'Population' },
                { value: '101.56', label: 'Persons/sq.km.' },
                { value: '130,814', label: 'Number of households' },
                { value: '4.24%', label: 'Population growth rate' },
                { value: '97', label: 'Barangays' }
            ]);
        } finally {
            setStatsLoading(false);
        }
    };

    const fetchNewsItems = async () => {
        setNewsLoading(true);
        try {
            const response = await api.get('/news-carousel-display.php?limit=6&offset=0');
            if (response.data.success && response.data.news) {
                setNewsItems(response.data.news);
            } else {
                setNewsItems([]);
            }
        } catch (error) {
            console.error("Error fetching news:", error);
            setNewsItems([]);
        } finally {
            setNewsLoading(false);
        }
    };

    // Helper function to get display date
    const getDisplayDate = (newsItem) => {
        if (newsItem.news_date && newsItem.news_date.trim() !== '') {
            return newsItem.news_date;
        }
        
        // Fallback: check title for month/year
        if (newsItem.title) {
            const title = newsItem.title.toLowerCase();
            if (title.includes('july')) return 'July';
            if (title.includes('august')) return 'August';
            if (title.includes('september')) return 'September';
            if (title.includes('october')) return 'October';
            if (title.includes('november')) return 'November';
            if (title.includes('december')) return 'December';
            if (title.includes('january')) return 'January';
            if (title.includes('february')) return 'February';
            if (title.includes('march')) return 'March';
            if (title.includes('april')) return 'April';
            if (title.includes('may')) return 'May';
            if (title.includes('june')) return 'June';
            if (title.includes('2024')) return '2024';
            if (title.includes('2025')) return '2025';
        }
        
        return 'Recent';
    };

    return (
        <>
            <AnnouncementModal showModal={showModal} handleCloseModal={handleCloseModal} />

            <div className="container-fluid px-0">
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
                                <p style={{ fontSize: '2vw', textAlign: 'center' }}>Imus Boulevard, Brgy. Malagasang I-G City of Imus, Cavite</p>
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
                    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <div className="py-5 bg-white">
                    <div className="container">
                        <div className="d-flex flex-wrap justify-content-center gap-4">
                            {statsLoading ? (
                                <div className="text-center">
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                    <p className="mt-2">Loading statistics...</p>
                                </div>
                            ) : statistics.length > 0 ? (
                                statistics.map((stat, index) => (
                                    <div key={index} className="stat-card">
                                        <h4 className="m-0 fw-bold">{stat.value}</h4>
                                        <p className="m-0">{stat.label}</p>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center">
                                    <p>No statistics available</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

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

                <div className="container" style={{ padding: '50px 0' }}>
                    <div className="text-center pb-5">
                        <h1><strong>CITY NEWS</strong></h1>
                    </div>

                    <div id="myCarousel2" className="carousel slide pb-5" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#myCarousel2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        </div>

                        <div className="carousel-inner">
                            {newsLoading ? (
                                <div className="text-center">
                                    <div className="spinner-border text-success" role="status">
                                        <span className="visually-hidden">Loading news...</span>
                                    </div>
                                    <p className="mt-3">Loading city news...</p>
                                </div>
                            ) : newsItems.length > 0 ? (
                                <>
                                    <div className="carousel-item active">
                                        <div className="row row-cols-1 row-cols-md-3 g-4 px-4">
                                            {newsItems.slice(0, 3).map((item, index) => (
                                                <div key={item.id} className="col">
                                                    <div className="card h-100">
                                                        <img 
                                                            src={`http://localhost/imus-city-reservation-app/php-backend/uploads/news-carousel/${item.image_path}`} 
                                                            className="card-img-top" 
                                                            alt={item.image_alt || item.title}
                                                            onError={(e) => {
                                                                e.target.src = require('../Media/News/default_news.jpg');
                                                            }}
                                                        />
                                                        <div className="card-body">
                                                            <p className="card-text">{item.excerpt}</p>
                                                            <div className="d-flex justify-content-between align-items-center mt-auto">
                                                                <small className="text-muted">{getDisplayDate(item)}</small>
                                                                {item.link && (
                                                                    <a href={item.link} className="btn btn-sm btn-success" target="_blank" rel="noopener noreferrer">View</a>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <div className="row row-cols-1 row-cols-md-3 g-4 px-4">
                                            {newsItems.slice(3, 6).map((item, index) => (
                                                <div key={item.id} className="col">
                                                    <div className="card h-100">
                                                        <img 
                                                            src={`http://localhost/imus-city-reservation-app/php-backend/uploads/news-carousel/${item.image_path}`} 
                                                            className="card-img-top" 
                                                            alt={item.image_alt || item.title}
                                                            onError={(e) => {
                                                                e.target.src = require('../Media/News/default_news.jpg');
                                                            }}
                                                        />
                                                        <div className="card-body">
                                                            <p className="card-text">{item.excerpt}</p>
                                                            <div className="d-flex justify-content-between align-items-center mt-auto">
                                                                <small className="text-muted">{getDisplayDate(item)}</small>
                                                                {item.link && (
                                                                    <a href={item.link} className="btn btn-sm btn-success" target="_blank" rel="noopener noreferrer">View</a>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className="text-center">
                                    <p>No news items available at this time.</p>
                                </div>
                            )}
                        </div>

                        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel2" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel2" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                    <div className="text-center pt-3">
                        <a href="news.html"><button id="ViewMore" type="button" className="btn btn-success">View more</button></a>
                    </div>
                </div>

                <section style={{ backgroundColor: 'white', padding: '50px 0' }}>
                    <div className="container p-3" style={{ fontStyle: 'italic' }}>
                        <div className="section" data-aos="fade-right" data-aos-delay="400">
                            <div className="container text-center">
                                <h1 style={{ color: '#06428A', fontWeight: 900 }}>Vision</h1>
                                <h3>The model city in the region, with secured and healthy citizenry, living in a smart, green and sustainable environment in a technology-driven economy, governed with integrity and transparency.</h3>
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

                <div className="container" style={{ padding: '50px 0' }}>
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
                                    <h3 style={{ color: '#053774' }}>Imus Boulevard, Brgy. Malagasang I-G<br /> City of Imus, Cavite</h3>
                                    <br />
                                    <h3 style={{ color: '#053774' }}>Open Monday to Friday <br /> 08:00 am - 05:00 pm</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section style={{ color: 'white', padding: '50px 0' }}>
                    <div className="container p-5" style={{ backgroundColor: '#053774', width: '75%' }}>
                        <div className="row">
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
                        <div className="row">
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
            </div>
        </>
    );
};

export default HomePage;