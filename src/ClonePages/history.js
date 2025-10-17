/*eslint-disable jsx-a11y/anchor-is-valid*/
import React from "react";

const History = () => {
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
                
                <div className="col-md-8 col-sm-6">
                    <h4 style={{color: '#18a54a'}}><strong>HISTORY</strong> </h4>
                    <p>Imus, formerly a "visita" of Cavite Viejo (now Kawit), is one of the oldest administrative units of Cavite. Cavite Viejo was under
                        the administration of the Jesuits until 1686, when the Recollects took over Imus. Efforts were then directed toward seeking
                        independence from the ecclesiastical and civil administration of Cavite Viejo until Imus was wholly liberated.
                    </p>

                    <p>
                        The ecclesiastical land that tied Imus to Cavite Viejo since the early part of the 17th century was
                        covered by the Royal Order of October 30, 1776. This Royal Decree was considered the first
                        step in the creation of the Municipality of Imus. The Recollects, not contented with the religious
                        emancipation of Imus from Cavite Viejo, sought its eventual political separation. Imus finally
                        became an independent municipality in 1795.
                    </p>

                    <div className="row">
                        <div className="col">
                            <figure className="figure">
                                <img src={require("../Media/church.png")}
                                    className="figure-img img-fluid z-depth-1" 
                                    alt="U.S. invaders in camp at the left side of Imus Church, 1899" 
                                    style={{width: '400px'}} />
                                <figcaption className="figure-caption">U.S. invaders in camp at the left side of Imus Church, 1899.</figcaption>
                            </figure>
                        </div>

                        <div className="col">
                            <figure className="figure">
                                <img src={require("../Media/licerio.png")}
                                    className="figure-img img-fluid z-depth-1" 
                                    alt="Licerio Topacio, Presidente Municipal (Mayor) of Imus, with two Filipino priests" 
                                    style={{width: '200px'}} />
                                <figcaption className="figure-caption">Licerio Topacio, Presidente Municipal (Mayor) of Imus, with two Filipino priests. Photo was taken in 1899.</figcaption>
                            </figure>
                        </div>
                    </div>

                    <p>
                        The Imus Municipal Building, situated in the heart of the pueblo, opened its doors in 1935. The new municipal building was subsequently inaugurated in 2003.<br /><br />

                        Congressmen Pidi Barzaga and Crispin Remulla joined Congressman Joseph Abaya in introducing a bill that would establish the Municipality of Imus as a lone legislative district. Senators Panfilo Lacson, Richard Gordon, and Bong Revilla backed the legislation. On 22 October 2009, under Republic Act 9727, the lone district of Imus, known as the "Third District of Cavite," was established.<br /><br />

                        With House Bill No. 01989, Congressman Erineo Maliksi proposed the conversion of Imus as a City on 03 August 2010, which later became Republic Act (RA) No. 10161. With a plebiscite conducted on 30 June 2012, RA 10161 was ratified by 22,742 registered voters of Imus and turned the municipality into a component city, known as the City of Imus.<br /><br />

                        Through Resolution No. 03-2017-189, the construction of the new City Government Center was included in the Priority Development Program of the City Government for the years 2018 – 2021. The building has a total floor space of 30,595.54 square meters, and its construction started in 2019. The Imus City Government Center was completed and inaugurated in 2022.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default History;