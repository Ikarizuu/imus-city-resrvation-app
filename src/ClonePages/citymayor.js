import React from "react";

const CityMayor = () => {
    return (
        <div className="container">
            <div className="row p-3">
                <div className="col-md-2 col-sm-6">
                    <div className="text-center">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item" style={{backgroundColor: 'white', color: '#053774'}}><h3>General Information</h3></li>
                            <li className="list-group-item"><a href="/CityProfile">City Profile</a></li>
                            
                            <li className="list-group-item accordion" id="accordioncity">
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
                
                <div className="col-md-9 col-sm-6">
                    <h3 style={{color: '#18a54a'}}><strong>City Mayor</strong> </h3>

                    <div className="row p-3" style={{backgroundColor: 'white'}}>
                        <div className="col-md-4 p-2">
                            <a href="https://www.facebook.com/alexladvincula" target="_blank" rel="noopener noreferrer">
                                <img id="leaders" src={require("../Media/MayorAA.jpg")} className="img-thumbnail shadow" alt="Mayor Alex Advincula" width="100%" style={{backgroundColor: '#DAE4ED'}} />
                            </a>
                        </div>

                        <div className="col-md">
                            <img src={require("../Media/Mayor.png")} alt="Mayor" width="100%" />
                            <p className="text-justify">
                                <br />
                                Alex Lacson Advincula, popularly known as "AA," represents transparency and accountable governance. He
                                was born on the December 28, 1969 to Leticia Lacson and Anastacio Advincula in Tanzang Luma, Imus Cavite.<br /><br />

                                He finished his primary education at the Tanzang Luma Elementary School in 1982 and his secondary
                                education at the Imus Institute in 1986. In college, he took up a Bachelor of Science in Criminology degree at
                                De La Salle University–Dasmariñas from 1986 to 1988. In December 2014, he finished his Bachelor of Science
                                in Entrepreneurial Management degree at the Polytechnic University of the Philippines–Open University
                                System.<br /><br />

                                AA is a former Municipal Councilor, Board Member, and Representative of the Third District of Cavite. During
                                his term as Congressman, Advincula brought progressive programs and projects for the growth and
                                development of Imus. Among these are the establishment of "Ospital ng Imus", the first public hospital in
                                the City, the construction of the City of Imus Grandstand, and the relocation of the Imus Land
                                Transportation Office into a modern building, making it the second biggest satellite office of the agency.<br /><br />

                                In 2022, AA won as the City Mayor of Imus for the first time in his political career. Through his Five-point
                                agenda, he plans to introduce more programs and projects to further improve the lives of every Imuseño.<br /><br />

                                In 2025, AA won his second term, a clear reflection of the continued trust and confidence of the Imuseño in his leadership.
                                From his original 5-point agenda during his first term, AA expanded his vision into an 8-point agenda, demonstrating a broader and more inclusive direction for the city.
                                AA remains committed to delivering genuine and lasting change that uplifts lives and builds a better future for the City of Imus.
                            </p>
                        </div>
                    </div>

                    <div className="row" style={{backgroundColor: 'white'}}>
                        <div className="container">
                            <hr />
                            <div className="container">
                                <h4 style={{color: '#18a54a'}}> <strong>Eight-Point Agenda</strong></h4>
                                <p>
                                    Guided by his Eight-point agenda, Mayor AA is committed to making progress in Imus and making it one of
                                    Cavite's finest cities. His Eight-point agenda includes:<br /><br />
        
                                    • Health<br /><br />
                                    • Education<br /><br />
                                    • Infrastructure Development<br /><br />
                                    • Peace and Order and Public Safety<br /><br />
                                    • Economic Development<br /><br />
                                    • Good Governance<br /><br />
                                    • Social Services<br /><br />
                                    • Environment and Disaster Risk Reduction Resilience<br /><br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CityMayor;