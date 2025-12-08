/*eslint-disable jsx-a11y/anchor-is-valid*/
import React from "react";

const PastMayors = () => {
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
                    <h3 style={{color: '#18a54a'}}><strong>Past Mayors</strong> </h3>

                    <div className="row p-3">
                        <img src={require("../Media/LIST OF MAYORS.png")} alt="List of Past Mayors" />
                    </div>

                    <div className="row p-3">
                        <table className="tableizer-table-xl">
                            <thead>
                                <tr className="tableizer-firstrow" style={{backgroundColor: '#053774', color: 'white'}}>
                                    <th>NAME</th>
                                    <th>STATUS OF APPOINTMENT</th>
                                    <th>YEAR</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Alex L. Advincula</td><td>Elected</td><td>July 2022 - Present</td></tr>
                                <tr><td>Emmanuel L. Maliksi</td><td>Elected</td><td>Jan 2012 - 2022</td></tr>
                                <tr><td>Homer T. Saquilayan</td><td>Elected</td><td>July 2010 - Dec 2011</td></tr>
                                <tr><td>Emmanuel L. Maliksi</td><td>Elected</td><td>July 2007 - June 2010</td></tr>
                                <tr><td>Oscar A. Jaro</td><td>Elected</td><td>April-June 2007</td></tr>
                                <tr><td>Homer T. Saquilayan</td><td>Elected</td><td>July 2001 - March 2007</td></tr>
                                <tr><td>Oscar A. Jaro</td><td>Elected</td><td>July 1998 - June 2001</td></tr>
                                <tr><td>Ricardo Paredes</td><td>Appointed</td><td>April - June 1998</td></tr>
                                <tr><td>Erineo S. Maliksi</td><td>Elected</td><td>Feb 1988 - Mar 1998</td></tr>
                                <tr><td>Wilfredo Garde</td><td>OIC</td><td>Oct 1986 - Feb 1988</td></tr>
                                <tr><td>Atty. Damian Villaseca</td><td>OIC</td><td>May 1986 - Oct 1986</td></tr>
                                <tr><td>Jose Jamir</td><td>Elected</td><td>1968 - May 15, 1986</td></tr>
                                <tr><td>&nbsp;</td><td>&nbsp;</td><td>Feb 1 - April 10, 1971</td></tr>
                                <tr><td>&nbsp;</td><td>&nbsp;</td><td>Sept 1 - 30, 1969</td></tr>
                                <tr><td>&nbsp;</td><td>&nbsp;</td><td>Sept 15 - Oct 15, 1968</td></tr>
                                <tr><td>Mariano Reyes</td><td>Acting</td><td>Mar 15-April 1968</td></tr>
                                <tr><td>Atty. Manuel Paredes</td><td>Acting</td><td>Sept 15 - Dec 31, 1967</td></tr>
                                <tr><td>Dominador Camerino</td><td>Elected</td><td>Jan 1946 - Sept 1967</td></tr>
                                <tr><td>Rodrigo Camia</td><td>Acting</td><td>Jan 8 - Feb 28,1960</td></tr>
                                <tr><td>&nbsp;</td><td>Elected</td><td>Nov 1947 - 1963</td></tr>
                                <tr><td>Dominador Ilano</td><td>Appointed</td><td>June 1946 - 1947</td></tr>
                                <tr><td>Epifanio Gabriel</td><td>Appointed</td><td>Mar 1946 - June 1946</td></tr>
                                <tr><td>Dominador Ilano</td><td>Appointed</td><td>Nov 1945 - Feb 1946</td></tr>
                                <tr><td>Fortunato Remulla</td><td>Appointed</td><td>Mar 1945 - Oct 1945</td></tr>
                                <tr><td>Dr. Alfredo Saqui</td><td>Appointed</td><td>Dec 1944 - Feb 1945</td></tr>
                                <tr><td>Dr. Elpidio Osteria</td><td>Elected</td><td>1940 - 1944</td></tr>
                                <tr><td>Dominador Camerino</td><td>Elected</td><td>1931 - 1940</td></tr>
                                <tr><td>Epifanio Gabriel</td><td>Elected</td><td>1928 - 1931</td></tr>
                                <tr><td>Blas Mallari</td><td>Elected</td><td>1925 - 1928</td></tr>
                                <tr><td>Felipe Topacio</td><td>Elected</td><td>1912 - 1915</td></tr>
                                <tr><td>Maximo Abad</td><td>Elected</td><td>1910 - 1912</td></tr>
                                <tr><td>&nbsp;</td><td>Elected</td><td>Nov 1905 -1910</td></tr>
                                <tr><td>Felipe Topacio</td><td>Appointed</td><td>Jun-05</td></tr>
                                <tr><td>Pantaleon Garcia</td><td>Elected</td><td>1904 - 1905</td></tr>
                                <tr><td>Pedro Buenaventura</td><td>Appointed</td><td>Sept - Dec 1903</td></tr>
                                <tr><td>Licerio Topacio</td><td>Appointed</td><td>1903</td></tr>
                                <tr><td>Juan Fajardo</td><td>Appointed</td><td>Jan - April 1903</td></tr>
                                <tr><td>Donato Virata</td><td>Appointed</td><td>1900</td></tr>
                                <tr><td>Juan Castañeda</td><td>Appointed</td><td>1899</td></tr>
                                <tr><td>Valentin Conejo</td><td>Appointed</td><td>1898</td></tr>
                                <tr><td>Jose Tagle</td><td>Appointed</td><td>1896 - 1898</td></tr>
                                <tr><td>Bernardino Paredes</td><td>Appointed</td><td>1894 - 1896</td></tr>
                                <tr><td>Angel Buenaventura Paredes</td><td>Appointed</td><td>1892 - 1894</td></tr>
                                <tr><td>Cayetano Topacio</td><td>Appointed</td><td>1890 - 1892</td></tr>
                                <tr><td>Licerio Topacio</td><td>Appointed</td><td>1888 - 1890</td></tr>
                                <tr><td>Source: CPDO</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PastMayors;