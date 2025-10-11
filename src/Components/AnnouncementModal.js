import React from 'react';

const AnnouncementModal = ({ showModal, handleCloseModal }) => {
    if (!showModal) return null;

    return (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} id="exampleModalCenter" tabIndex="-1" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Announcement</h5>
                        <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="container">
                            <br />
                            <div className="row">
                                <div className="col-md">
                                    <img src={require('../Media/Banner/default_1.jpg')} alt="City Banner" className="img-fluid" />
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-md">
                                    <a href="https://egovcityofimus.ph/ebpls/" target="_blank" rel="noopener noreferrer">
                                        <img src={require('../Media/EBoss/EBoss_Banner (1).jpg')} alt="EBoss System" className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col">
                                    <p><br /> City Government of Imus Landline/Hotline<br /><br /> Isangguni ang inyong mga katanungan sa Pamahalaang Lungsod ng Imus sa mga numerong ito:<br /> 📞(046) 888 9910<br /> 📞(046) 888 9912<br /><br /> Handa namang tumugon 24/7 ang
                                        emergency hotline nito na:<br /> 🆘️(046) 888 9911<br /> Bukas ang Pamahalaang Lungsod ng Imus tuwing Lunes hanggang Biyernes mula 8:00 AM hanggang 5:00 PM.
                                        <br />
                                    </p>
                                </div>
                                <div className="col-md">
                                    <img src={require('../Media/city_of_imus_hotline1.jpg')} alt="Hotline Information" className="img-fluid" />
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col">
                                    <p>
                                        Kailangan niyo ba ng maayos at tahimik na lugar para mag review sa inyong State Board Exam?<br /><br /> Malugod na binubuksan ng New Imus City Public Library ang kanilang pinto para sa inyo!
                                        <br /><br /> Magpunta lamang sa lower ground floor ng Imus City Government Center, Malagasang I-G. Bukas ito mula 08:00 ng umaga hanggang 05:00 ng hapon, Lunes hanggang Biyernes.<br /><br /> #AAngatAngImus
                                    </p>
                                </div>
                                <div className="col-md">
                                    <img src={require('../Media/library_study.jpg')} alt="Library Study Area" className="img-fluid" /><br /><br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnnouncementModal;