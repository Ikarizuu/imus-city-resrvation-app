import React from "react";

const DepartmentsandUnits = () => {
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
                    <h3 style={{color: '#18a54a'}}><strong>Departments and Units</strong> </h3>
    
                    <div className="row p-3">
                        <p>Click Office to see function and citizen's charter.</p>
                        <table className="table-lg" id="resolutiontable">
                            <thead>
                                <tr className="tableizer-firstrow">
                                    <th>DEPARTMENT/UNIT</th>
                                    <th>HEAD</th>
                                    <th>LOCAL</th>
                                    <th>FLOOR</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Angat Imus Homeowners Alliance, Inc. - Federation</td><td>Mr. Enrique Romeo R. Martin</td><td>&nbsp;</td><td>4th Floor</td></tr>
                                <tr><td>Barangay Accounting</td><td>Ms. Roselie A. Pangilinan</td><td>304</td><td>3rd Floor</td></tr>
                                <tr><td>Bids and Awards Committee</td><td>Mr. Lauro D. Monzon</td><td>420</td><td>4th Floor</td></tr>
                                <tr><td><a href="/departments_units/obo">Office of the Building Official</a></td><td>Engr. Alvin S. Saitanan</td><td>231</td><td>2nd Floor</td></tr>
                                <tr><td>City Chaplain Office</td><td>Mr. Sancho R. Sampot</td><td>247</td><td>2nd Floor</td></tr>
                                <tr><td>City College of Imus</td><td>Mr. Generoso F. Ramos, Jr.</td><td>&nbsp;</td><td>Outside Office</td></tr>
                                <tr><td>City of Imus Task Force for Road Clearing</td><td>Mr. Peter Simon C. Lara</td><td>&nbsp;</td><td>4th Floor</td></tr>
                                <tr><td>City Local Government Operations Office</td><td>Ms. Mary Roxanne T. Vicedo</td><td>229</td><td>2nd Floor</td></tr>
                                <tr><td>Civil Society Organization Office</td><td>Ms. Sheryline S. Timtiman</td><td>407</td><td>4th Floor</td></tr>
                                <tr><td>Commission on Audit</td><td>Mr. Benjie V. Tubelleza</td><td>320</td><td>3rd Floor</td></tr>
                                <tr><td>DTI - Go Negosyo Center</td><td>Ms. Marie Jenneth Vilbar-Lungcay</td><td>&nbsp;</td><td>UG Floor</td></tr>
                                <tr><td><a href="/departments_units/abc">Liga ng mga Barangay ng Imus</a></td><td>Hon. Reymundo G. Ramirez</td><td></td><td>5th Floor</td></tr>
                                <tr><td>Local Housing Board</td><td>Mr. Jose Froilan G. Abad</td><td>&nbsp;</td><td>UG Floor</td></tr>
                                <tr><td><a href="/departments_units/bplo">Office of the Business Permits and Licensing Officer</a></td><td>Ms. Jasmin C. Ramos</td><td>101</td><td>UG Floor</td></tr>
                                <tr><td><a href="/departments_units/city_accounting">Office of the City Accountant</a></td><td>Ms. Roselie A. Pangilinan</td><td>301</td><td>3rd Floor</td></tr>
                                <tr><td><a href="/departments_units/office_of_the_admin">Office of the City Administrator</a></td><td>Mr. Lauro D. Monzon</td><td>601</td><td>3rd Floor</td></tr>
                                <tr><td><a href="/departments_units/city_agricultiral_office">Office of the City Agriculturist</a></td><td>Mr. Robert R. Marges</td><td>201</td><td>2nd Floor</td></tr>
                                <tr><td><a href="/departments_units/arch">Office of the City Architect</a></td><td>Engr. Christian Mervin S. Sarno</td><td>401</td><td>4th Floor</td></tr>
                                <tr><td><a href="/departments_units/office_of_the_assessor">Office of the City Assessor</a></td><td>Mr. Elmer L. Camerino</td><td>106</td><td>UG Floor</td></tr>
                                <tr><td><a href="/docs/Citizen's Charter/3rd_Floor/BUDGET_2023.pdf">Office of the City Budget Officer</a></td><td>Ms. Arlene DG. Duminding</td><td>306</td><td>3rd Floor</td></tr>
                                <tr><td><a href="/docs/Citizen's Charter/Ground_Floor/CCRO_2023.pdf">Office of the City Civil Registrar</a></td><td>Mr. Randy B. Gonzales</td><td>121</td><td>UG Floor</td></tr>
                                <tr><td><a href="/departments_units/cicledo">Office of the City Cooperatives Development Officer</a></td><td>Mr. Generoso F. Ramos, Jr.</td><td>215</td><td>2nd Floor</td></tr>
                                <tr><td><a href="/departments_units/cdrrmo">Office of the City Disaster Risk Reduction and Management Officer</a></td><td>Ms. Marisel R. Cayetano</td><td>206</td><td>2nd Floor</td></tr>
                                <tr><td><a href="/departments_units/engr">Office of the City Engineer</a></td><td>Engr. Christian Mervin S. Sarno</td><td>403</td><td>4th Floor</td></tr>
                                <tr><td><a href="/docs/Citizen's Charter/3rd_Floor/CENRO.pdf">Office of the City Environment and Natural Resources Officer</a></td><td>Ms. Phoebe Januarie M. Camaisa</td><td>311</td><td>3rd Floor</td></tr>
                                <tr><td><a href="/departments_units/gso">Office of the City General Services Officer</a></td><td>Mr. Patrick M. Paulme</td><td>415</td><td>4th Floor</td></tr>
                                <tr><td><a href="/docs/Citizen's Charter/Outside_Office/CHO.pdf">Office of the City Health Officer</a></td><td>Dr. Ferdinand P. Mina</td><td>248</td><td>2nd Floor</td></tr>
                                <tr><td>Office of the City Health Officer - City Epidemiology and Surveillance Unit</td><td>Ms. Donabelle R. Melo, RN</td><td>&nbsp;</td><td>Outside Office</td></tr>
                                <tr><td>Office of the City Health Officer - City of Imus Diagnostic Laboratory</td><td>Ms. Alexandra Regilyne M. Romero, RMT</td><td>&nbsp;</td><td>Outside Office</td></tr>
                                <tr><td>Office of the City Health Officer - City Sanitation Unit</td><td>Dr. Ferdinand P. Mina</td><td>&nbsp;</td><td>2nd Floor</td></tr>
                                <tr><td><a href="/docs/Citizen's Charter/3rd_Floor/HRMO.pdf">Office of the City Human Resource Management Officer</a></td><td>Ms. Van Carlyne F. Rocha</td><td>322</td><td>3rd Floor</td></tr>
                                <tr><td><a href="/departments_units/city_information_office">Office of the City Information Officer</a></td><td>Mr. Ervin Ace H. Navarette</td><td>213</td><td>2nd Floor</td></tr>
                                <tr><td><a href="/docs/Citizen's Charter/3rd_Floor/LEGAL_2023.pdf">Office of the City Legal Officer</a></td><td>Atty. Leonard Martin E. Syjuco</td><td>316</td><td>3rd Floor</td></tr>
                                <tr><td rowSpan="2"><a href="/departments_units/office_of_the_mayor">Office of the City Mayor</a></td><td>Hon. Alex L. Advincula</td><td>&nbsp;</td><td>3rd Floor</td></tr>
                                <tr><td>Atty. Tricia Marie Villaluz-Barzaga</td><td>805</td><td>3rd Floor</td></tr>
                                <tr><td><a href="/departments_units/it">Office of the City Mayor - City Information Technology and Records Management Unit</a></td><td>Engr. Christian D. Barco</td><td>411</td><td>4th Floor</td></tr>
                                <tr><td><a href="/departments_units/city_public_library">Office of the City Mayor - City of Imus Public Library</a></td><td>Ms. Rosena V. Roman</td><td>001</td><td>LG Floor</td></tr>
                                <tr><td><a href="/departments_units/sports_development">Office of the City Mayor - City of Imus Sports Development Unit</a></td><td>Mr. Jericho F. Reyes</td><td>217</td><td>2nd Floor</td></tr>
                                <tr><td><a href="/departments_units/citmo">Office of the City Mayor - City of Imus Traffic Management Unit</a></td><td>Mr. Rizaldy T. Nato</td><td>219</td><td>2nd Floor</td></tr>
                                <tr><td><a href="/docs/Citizen's Charter/3rd_Floor/CSU.pdf">Office of the City Mayor - Civil Security Unit</a></td><td>PCOL Jose Junar P. Alamo (Ret)</td><td>318</td><td>3rd Floor</td></tr>
                                <tr><td>Office of the City Mayor - Economic Enterprise Management Unit</td><td>Mr. Peter Simon C. Lara</td><td>&nbsp;</td><td>Outside Office</td></tr>
                                <tr><td>Office of the City Mayor - Extension Unit</td><td></td><td>&nbsp;</td><td>Outside Office</td></tr>
                                <tr><td><a href="/departments_units/gad">Office of the City Mayor - Gender and Development Unit</a></td><td>Ms. Dorotea L. Sagenes</td><td>424</td><td>4th Floor</td></tr>
                                <tr><td><a href="/departments_units/youth">Office of the City Mayor - Local Youth Development Office</a></td><td>Mr. Jericho F. Reyes</td><td>335</td><td>3rd Floor</td></tr>
                                <tr><td><a href="/departments_units/osca">Office of the City Mayor - Office of the Senior Citizens Affairs</a></td><td>Mr. Arturo B. Pangilinan</td><td>136</td><td>UG Floor</td></tr>
                                <tr><td><a href="/docs/Citizen's Charter/2nd_Floor/PESO_2023.pdf">Office of the City Mayor - Public Employment Service Office</a></td><td>Ms. Clarita T. Casing</td><td>241</td><td>2nd Floor</td></tr>
                                <tr><td><a href="/departments_units/tricycle_reg_unit">Office of the City Mayor - Tricycle Regulatory Unit</a></td><td>Mr. Nestor C. Sauquillo</td><td>243</td><td>2nd Floor</td></tr>
                                <tr><td><a href="/departments_units/cpdo">Office of the City Planning and Development Coordinator</a></td><td>Engr. Guiana F. Monzon</td><td>221</td><td>2nd Floor</td></tr>
                                <tr><td><a href="/departments_units/office_on_population">Office of the City Population Officer</a></td><td>Ms. Maria Theresa C. Sañez</td><td>236</td><td>2nd Floor</td></tr>
                                <tr><td><a href="/departments_units/cswdo">Office of the City Social Welfare and Development Officer</a></td><td>Ms. Josephine G. Villanueva, RSW</td><td>126</td><td>UG Floor</td></tr>
                                <tr><td><a href="/departments_units/city_tourism">Office of the City Tourism and Heritage Officer</a></td><td>Dr. Emanuel R. Paredes</td><td>225</td><td>2nd Floor</td></tr>
                                <tr><td><a href="/departments_units/city_treasurer">Office of the City Treasurer</a></td><td>Mr. Manuel Reynold W. Dela Fuente</td><td>131</td><td>UG Floor</td></tr>
                                <tr><td><a href="/departments_units/city_vet">Office of the City Veterinarian</a></td><td>Dr. Maribel Depayso-Reyes</td><td>227</td><td>2nd Floor</td></tr>
                                <tr><td rowSpan="2">Office of the City Vice Mayor</td><td>Hon. Homer T. Saquilayan</td><td></td><td>5th Floor</td></tr>
                                <tr><td>Mr. Alan Dexter C. Jamir</td><td>701</td><td>5th Floor</td></tr>
                                <tr><td rowSpan="2">Office of the Congressman</td><td>Hon. Adrian Jay C. Advincula</td><td></td><td>3rd Floor</td></tr>
                                <tr><td>Mr. Allen Bryan R. Atienza</td><td>900</td><td>3rd Floor</td></tr>
                                <tr><td><a href="/departments_units/ledipo">Office of the Local Economic Development and Investment Promotions Officer</a></td><td>Ms. Marie Jenneth Vilbar-Lungcay</td><td>142</td><td>UG Floor</td></tr>
                                <tr><td><a href="/departments_units/pdao">Office of the Persons with Disability Affairs Officer</a></td><td>Ms. Josephine G. Villanueva</td><td>138</td><td>UG Floor</td></tr>
                                <tr><td>Office of the Sangguniang Panlungsod</td><td>Mr. Jose Rafael C. Alarcon</td><td>&nbsp;</td><td>5th Floor</td></tr>
                                <tr><td>Office of the Sangguniang Panlungsod Secretary (Records and Legislative Section)</td><td>Ms. Mary Jemeny V. Yulo</td><td>703</td><td>5th Floor</td></tr>
                                <tr><td><a href="/docs/Citizen's Charter/Outside_Office/ONI.pdf">Ospital ng Imus</a></td><td>Dr. Gabriel G. Gabriel</td><td>&nbsp;</td><td>Outside Office</td></tr>
                                <tr><td>Peace and Order and Public Safety</td><td>Mr. Arturo B. Pangilinan</td><td>425</td><td>4th Floor</td></tr>
                                <tr><td>Robinsons and District Satellite Offices</td><td>Mr. Manuel Reynold W. Dela Fuente</td><td>&nbsp;</td><td>Outside Office</td></tr>
                                <tr><td><a href="/departments_units/sk">Sangguniang Kabataan Federation Office</a></td><td>Hon. Glian Piolo P. Ilagan</td><td>708</td><td>5th Floor</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DepartmentsandUnits;