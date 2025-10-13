import React from "react";

const CityCouncil = () => {
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
                    <h3 style={{color: '#18a54a'}}><strong>City Council</strong> </h3>

                    <div className="row p-3" style={{backgroundColor: 'white'}}>
                        <div className="col-md-4 p-2">
                            <div className="shadow">
                                <a href="https://www.facebook.com/homersaquilayanfb" target="_blank" rel="noopener noreferrer">
                                    <img src={require("../Media/CityOfficials/VM1.jpg")} 
                                        className="img-thumbnail" 
                                        alt="Vice Mayor Homer Saquilayan" 
                                        width="100%"
                                        style={{backgroundColor: '#DAE4ED'}} id="leaders" />
                                </a>
                            </div>
                        </div>
                        <div className="col-md">
                            <img src={require("../Media/ViceMayor.png")} alt="Vice Mayor" width="100%" />
                            <p className="text-justify">
                                Homer Topacio Saquilayan, also known as "Saki", exemplifies a competent leader. He is the oldest of
                                Lorenza Manalaysay Topacio and Ruben Rusit Saquilayan's seven children. He attended the Lyceum of
                                Baguio and the Far Eastern University before earning a degree in Civil Engineering from Manuel L. Quezon
                                University.<br /><br />

                                Before entering politics, Saquilayan worked at the Cavite Provincial Engineer's Office, Abuljadayel
                                Engineering in Saudi Arabia, and became the Municipal Engineer at the Building Official of Imus.<br /><br />

                                Saquilayan first ran as Vice Mayor of Imus in 1998; held the position of Mayor of Imus in 2001, 2004, and
                                2010; and served as the Cavite Provincial Senior Board Member in 2016. He was chosen as the City's Vice
                                Mayor in the 2022 election, working alongside City Mayor Alex "AA" L. Advincula to serve the Imuseños.<br /><br />

                                Homer Saquilayan currently serves as the Vice Mayor of Imus City Cavite, Ad-hoc Committee on Good Governance, Public
                                Ethics, and Accountability; and Ad-hoc Committee on Personnel Affairs and
                                Appointments.
                            </p>
                        </div>
                    </div>
                    
                    <div className="row p-3" style={{backgroundColor: 'white'}}>
                        <img src={require("../Media/6th_members.png")} alt="City Council Members" />
                    </div>
                    
                    <div className="row text-center" style={{backgroundColor: 'white'}} id="sp_row">
                        <div className="col-4">
                            <a href="https://www.facebook.com/ShernanSJaro" target="_blank" rel="noopener noreferrer">
                                <img className="img" 
                                    src={require("../Media/CityOfficials/1 Shernan.png")} 
                                    alt="Hon. Shernan S. Jaro"
                                    width="100%" />
                            </a>
                            <br /><br />
                            <h5><strong>Hon. Shernan S. Jaro</strong></h5>
                            <h6>Committee on Finance, Budget and Appropriations/ Committee on Ways and Means</h6>
                        </div>
                        <div className="col-4">
                            <a href="https://www.facebook.com/bmdennislacson" target="_blank" rel="noopener noreferrer">
                                <img className="img" 
                                    src={require("../Media/CityOfficials/5 Dennis.png")} 
                                    alt="Hon. Dennis T. Lacson"
                                    width="100%" />
                            </a>
                            <br /><br />
                            <h5><strong>Hon. Dennis T. Lacson</strong></h5>
                            <h6>Committee on Land Utilization, Zoning, and Housing/ Human Settlements</h6>
                        </div>
                        <div className="col-4">
                            <a href="https://www.facebook.com/attywencylara/" target="_blank" rel="noopener noreferrer">
                                <img className="img" 
                                    src={require("../Media/CityOfficials/10 Atty Wency.png")} 
                                    alt="Hon. Peter Emmanuel C. Lara"
                                    width="100%" />
                            </a>
                            <br /><br />
                            <h5><strong>Hon. Peter Emmanuel C. Lara</strong></h5>
                            <h6>Committee on Ordinances, Rules, Privileges, and Legal Matters</h6>
                        </div>
                    </div>

                    <div className="row text-center" style={{backgroundColor: 'white'}} id="sp_row">
                        <div className="col-4">
                            <a href="https://www.facebook.com/yen.saquilayan/" target="_blank" rel="noopener noreferrer">
                                <img className="img" 
                                    src={require("../Media/CityOfficials/2 Yen.png")} 
                                    alt="Hon. Lloren Dionella G. Saquilayan"
                                    width="100%" />
                            </a>
                            <br /><br />
                            <h5><strong>Hon. Lloren Dionella G. Saquilayan</strong></h5>
                            <h6>Committee on Social Services, Family, Women, and Children</h6>
                        </div>
                        <div className="col-4">
                            <a href="https://www.facebook.com/larrysayasnato/" target="_blank" rel="noopener noreferrer">
                                <img className="img" 
                                    src={require("../Media/CityOfficials/3 Larry.png")} 
                                    alt="Hon. Larry Boy S. Nato" 
                                    width="100%" />
                            </a>
                            <br /><br />
                            <h5><strong>Hon. Larry Boy S. Nato</strong></h5>
                            <h6>Committee on Games and Amusement/ Franchise/ Transportations and Communications/ Information and Communication Technology</h6>
                        </div>
                        <div className="col-4">
                            <a href="https://www.facebook.com/SherwinLaresComia/" target="_blank" rel="noopener noreferrer">
                                <img className="img" 
                                    src={require("../Media/CityOfficials/9 Sherwin.png")} 
                                    alt="Hon. Sherwin L. Comia"
                                    width="100%" />
                            </a>
                            <br /><br />
                            <h5><strong>Hon. Sherwin L. Comia</strong></h5>
                            <h6>Committee on Public Works and Infrastructures, Special Projects</h6>
                        </div>
                    </div>

                    <div className="row text-center" style={{backgroundColor: 'white'}} id="sp_row">
                        <div className="col-4">
                            <a href="https://www.facebook.com/remulladarwin/" target="_blank" rel="noopener noreferrer">
                                <img className="img" 
                                    src={require("../Media/CityOfficials/6 Darwin.png")} 
                                    alt="Hon. Darwin Marti M. Remulla"
                                    width="100%" />
                            </a>
                            <br /><br />
                            <h5><strong>Hon. Darwin Marti M. Remulla</strong></h5>
                            <h6>Committee on Agriculture and Agrarian Reforms/ Environment Protection and Ecology/ Market and Slaughterhouses</h6>
                        </div>
                        <div className="col-4">
                            <a href="https://www.facebook.com/enzoasistioofficial/" target="_blank" rel="noopener noreferrer">
                                <img className="img" 
                                    src={require("../Media/CityOfficials/11 Enzo.png")} 
                                    alt="Hon. Enzo Gaston A. Asistio" 
                                    width="100%" />
                            </a>
                            <br /><br />
                            <h5><strong>Hon. Enzo Gaston A. Asistio</strong></h5>
                            <h6>Committee on Health, Nutrition, Population, and Sanitation</h6>
                        </div>
                        <div className="col-4">
                            <a href="https://www.facebook.com/JelynLMaliksi/" target="_blank" rel="noopener noreferrer">
                                <img className="img" 
                                    src={require("../Media/CityOfficials/4 Jelyn.png")} 
                                    alt="Hon. Jogie Lyn L. Maliksi"
                                    width="100%" />
                            </a>
                            <br /><br />
                            <h5><strong>Hon. Jogie Lyn L. Maliksi</strong></h5>
                            <h6>Committee on Tourism and Culture</h6>
                        </div>
                    </div>

                    <div className="row pb-4 text-center" style={{backgroundColor: 'white'}} id="sp_row">
                        <div className="col-4">
                            <a href="https://www.facebook.com/igirevillaocampo/" target="_blank" rel="noopener noreferrer">
                                <img className="img" 
                                    src={require("../Media/CityOfficials/12 Igi.png")} 
                                    alt="Hon. Gregorio Miguel B. Ocampo Jr."
                                    width="100%" />
                            </a>
                            <br /><br />
                            <h5><strong>Hon. Gregorio Miguel B. Ocampo Jr.</strong></h5>
                            <h6>Committee on Education</h6>
                        </div>
                        <div className="col-4">
                            <a href="https://www.facebook.com/davidajsapitan" target="_blank" rel="noopener noreferrer">
                                <img className="img" 
                                    src={require("../Media/CityOfficials/13 David.png")} 
                                    alt="Hon. David Sapitan Jr."
                                    width="100%" />
                            </a>
                            <br /><br />
                            <h5><strong>Hon. David Sapitan Jr.</strong></h5>
                            <h6>Committee on Cooperatives/ People's Organization Accreditation Livelihood/ Elderly</h6>
                        </div>
                        <div className="col-4">
                            <a href="https://www.facebook.com/kap.markvillanueva/" target="_blank" rel="noopener noreferrer">
                                <img className="img" 
                                    src={require("../Media/CityOfficials/7 Mark.png")} 
                                    alt="Hon. Mark Anthony P. Villanueva" 
                                    width="100%" />
                            </a>
                            <br /><br />
                            <h5><strong>Hon. Mark Anthony P. Villanueva</strong></h5>
                            <h6>Committee on Trade, Commerce, and Industry/ Labor and Employment and Industrial Peace</h6>
                        </div>
                    </div>

                    <div className="row pb-4 text-center" style={{backgroundColor: 'white'}} id="sp_row">
                        <div className="col-2"></div>
                        <div className="col-4">
                            <a href="https://www.facebook.com/profile.php?id=61553994553581" target="_blank" rel="noopener noreferrer">
                                <img className="img" 
                                    src={require("../Media/CityOfficials/capt_r.png")} 
                                    alt="Hon. Reymundo Ramirez"
                                    width="100%" />
                            </a>
                            <br /><br />
                            <h5><strong>Hon. Reymundo Ramirez<br />LNB President</strong></h5>
                            <h6>Committee on Peace and Order, Public Welfare and Safety and Fire Protection/ Human Rights/ Barangay Affairs</h6>
                        </div>
                        <div className="col-4">
                            <a href="https://www.facebook.com/profile.php?id=61555884434392" target="_blank" rel="noopener noreferrer">
                                <img className="img" 
                                    src={require("../Media/CityOfficials/SK_GLIAN.png")} 
                                    alt="Hon. Glian Ilagan"
                                    width="100%" />
                            </a>
                            <br /><br />
                            <h5><strong>Hon. Glian Ilagan<br />SK Federation President</strong></h5>
                            <h6>Committee on Sports and Youth Development</h6>
                        </div>
                        <div className="col-2"></div>
                    </div>

                    <br />
                    <br />
                    <hr />
                    <br />
                    <br />

                    <div className="row p-3" style={{backgroundColor: 'white'}}>
                        <div className="col-md-4 p-2">
                            <div className="shadow">
                                <a href="https://www.facebook.com/ajadvinculafb" target="_blank" rel="noopener noreferrer">
                                    <img src={require("../Media/CityOfficials/Cong AJ.jpg")} 
                                        className="img-thumbnail" 
                                        alt="Hon. Adrian Jay Advincula" 
                                        width="100%"
                                        style={{backgroundColor: '#DAE4ED'}} id="leaders" />
                                </a>
                            </div>
                        </div>
                        <div className="col-md">
                            <img src={require("../Media/tag_aj.png")} alt="Congressman AJ Advincula" width="100%" />
                            <p className="text-justify">
                                Adrian Jay Caguicla Advincula, also referred to as "AJ," was born on October 20, 1993 to Nerissa Caguicla and Alex Advincula.<br /><br />

                                He finished his Bachelor of Science in Business Administration major in Export Management degree at the De La Salle-College of Saint
                                Benilde.<br /><br />

                                He is a former Imus City Councilor from 2019 to 2022. While serving as Chairperson of the Committee on Health and Sanitation in the
                                Fourth Sangguniang Panlungsod, he authored City Ordinance No. 04-136 or "An Ordinance Establishing and Organizing the City of Imus
                                Dialysis Center."<br /><br />

                                As the current Representative of the Third District of Cavite in the 19th Congress, he was appointed as Assistant Majority Leader. He is
                                also the Vice Chairperson of the Committee on Local Government and a member of committees such as the Committee on
                                Appropriations, Committee on Public Works and Highways, Committee on Health, Committee on Housing and Urban Development, and
                                Committee on Higher and Technical Education.
                            </p>
                        </div>
                    </div>

                    <div className="row p-3" style={{backgroundColor: 'white'}}>
                        <div className="col-md-4 p-2">
                            <div className="shadow">
                                <a href="https://www.facebook.com/VMOnyCantimbuhan" target="_blank" rel="noopener noreferrer">
                                    <img src={require("../Media/CityOfficials/BMO.jpg")} 
                                        className="img-thumbnail" 
                                        alt="Hon. Ony Cantimbuhan" 
                                        width="100%"
                                        style={{backgroundColor: '#DAE4ED'}} id="leaders" />
                                </a>
                            </div>
                        </div>
                        <div className="col-md">
                            <img src={require("../Media/tag_ony.png")} alt="Board Member Ony Cantimbuhan" width="100%" />
                            <p className="text-justify">
                                Ony Cantimbuhan is currently serving as a Board Member of the 3rd District of Cavite.
                            </p>
                        </div>
                    </div>

                    <div className="row p-3" style={{backgroundColor: 'white'}}>
                        <div className="col-md-4 p-2">
                            <div className="shadow">
                                <a href="https://www.facebook.com/LloydEmmanJaro" target="_blank" rel="noopener noreferrer">
                                    <img src={require("../Media/CityOfficials/lloyd.png")} 
                                        className="img-thumbnail" 
                                        alt="Hon. Lloyd Emman Jaro" 
                                        width="100%"
                                        style={{backgroundColor: '#DAE4ED'}} id="leaders" />
                                </a>
                            </div>
                        </div>
                        <div className="col-md">
                            <img src={require("../Media/LLOYD JARO.png")} alt="Board Member Lloyd Emman Jaro" width="100%" />
                            <p className="text-justify">
                                Lloyd Emman D. Jaro is currently serving as a Board Member of the 3rd District of Cavite.
                            </p>
                        </div>
                    </div>

                    <div className="row p-3" style={{backgroundColor: 'white'}}>
                        <div className="col-md-4 p-2">
                            <div className="shadow">
                                <a href="https://www.facebook.com/SKChelseaSarno" target="_blank" rel="noopener noreferrer">
                                    <img src={require("../Media/CityOfficials/chelsea.png")} 
                                        className="img-thumbnail" 
                                        alt="Hon. Chelsea Jillian Sarno" 
                                        width="100%"
                                        style={{backgroundColor: '#DAE4ED'}} id="leaders" />
                                </a>
                            </div>
                        </div>
                        <div className="col-md">
                            <img src={require("../Media/chelsea.png")} alt="SK President Chelsea Jillian Sarno" width="100%" />
                            <p className="text-justify">
                                Chelsea Jillian Sarno is currently serving as a Cavite SK Provincial Federation President.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CityCouncil;