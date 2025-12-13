/*eslint-disable jsx-a11y/anchor-is-valid, jsx-a11y/alt-text*/
import React from "react";

const CityProfile = () => {
    return (
        <div className="container no-animations">
            <div className="row p-3">
                <div className="col-md-2 col-xs-6">
                    <div className="text-center">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item" style={{backgroundColor: 'white', color: '#053774'}}><h3>Our City</h3></li>
                            <li className="list-group-item active"><a href="/CityProfile">City Profile</a></li>
                            
                            <li className="list-group-item accordion" id="accordioncity" >
                                <a className="accordion collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    City Government
                                </a>
                            </li>
                            
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordioncity">
                                <li className="list-group-item"><a href="/CityMayor">City Mayor</a></li>
                                <li className="list-group-item"><a href="/CityCouncil">City Council</a></li>
                            </div>
                            
                            <li className="list-group-item"><a href="/DepartmentsandUnits">Departments and Units</a></li>
                            <li className="list-group-item"><a href="/BarangayOfficials">Barangay Officials</a></li>
                            <li className="list-group-item"><a href="/History">History</a></li>
                            <li className="list-group-item"><a href="/PastMayors">Past Mayors</a></li>
                        </ul>
                    </div>
                </div>
                
                <div className="col-md-8 col-xs-6 p-3" style={{backgroundColor: 'white'}}>
                    <img src={require("../Media/IMUS PLAZA & CATHEDRAL AERIAL-2.jpg")} className="img-thumbnail shadow" />
                    <br /><br /><hr />
                    <h5 className="text-center">
                        A new beginning, a new Imus. <br /><br />
                        A public service that is people-centered. A government that listens and acts on the needs of every Imuseño. 
                        Committing to sincerity and truthfulness while igniting the spirit of community where no one gets left behind. 
                        Together, we can transform this city, your home, toward real progress.<br /><br /><hr /><br />
                    </h5>

                    <p className="text-justify">
                        The City of Imus is the de jure capital of the Province of
                        Cavite. Under the Recollects, it became an independent
                        municipality in 1975. In October 2009, Republic Act 9727
                        reapportioned Cavite into seven districts making Imus the
                        Third Legislative District.<br /><br />

                        On 12 April 2012, Republic Act 10161 was enacted into law,
                        converting the Municipality of Imus into a City. The people
                        of Imus ratified this later on through a plebiscite on 30 June
                        2012.
                        <br /><br />

                        The city's rich history is evident in its various heritage
                        sites--the Imus Cathedral, Imus City Plaza, and Imus
                        Heritage Site.
                        <br /><br />

                        It was also the site of two momentous Katipunero victories
                        during the Philippine Revolution against Spain--The Battle
                        of Imus and the Battle of Alapan, where the first Philippine
                        flag was unfurled and raised, making Imus the "Flag Capital
                        of the Philippines".
                    </p>

                    <br />
                    <hr />
                    <br />

                    {/* STAT CARDS */}
                    <div className="d-flex flex-wrap justify-content-center gap-4">

                        <div className="stat-card">
                            <h4 className="m-0 fw-bold">539,743</h4>
                            <p className="m-0">population</p>
                        </div>

                        <div className="stat-card">
                            <h4 className="m-0 fw-bold">101.56</h4>
                            <p className="m-0">persons/sq.km.</p>
                        </div>

                        <div className="stat-card">
                            <h4 className="m-0 fw-bold">130,814</h4>
                            <p className="m-0">number of households</p>
                        </div>

                        <div className="stat-card">
                            <h4 className="m-0 fw-bold">4.24%</h4>
                            <p className="m-0">population growth rate</p>
                        </div>

                        <div className="stat-card">
                            <h4 className="m-0 fw-bold">97</h4>
                            <p className="m-0">barangays</p>
                        </div>

                    </div>

                    <br />
                    <hr />
                    <br />

                    <h4 style={{color: '#18a54a'}}><strong> Vision</strong> </h4>
                    <p>The model city in the region, with secured and healthy citizenry, living in a smart,
                        green and sustainable environment in a technology-driven economy, governed with integrity and transparency.
                    </p>

                    <h4 style={{color: '#18a54a'}}><strong> Mission</strong> </h4>
                    <p> The City Government of Imus is committed to delivering a
                        transparent, reliable, and efficient public service that is proactive to
                        the needs of its people while actively pursuing development for a
                        dynamic and unified Imus.
                    </p>

                    <br />
                    <br />
                </div>
            </div>
        </div>
    );
};

export default CityProfile;