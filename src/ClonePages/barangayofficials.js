/*eslint-disable jsx-a11y/anchor-is-valid*/
import React from "react";

const BarangayOfficials = () => {
    return (
        <div className="container no-animations">
            <div className="row p-3">
                <div className="col-md-2 col-sm-6">
                    <div className="text-center">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item" style={{backgroundColor: 'white', color: '#053774'}}><h3>General Information</h3></li>
                            <li className="list-group-item"><a href="/CityProfile">City Profile</a></li>

                            <li className="list-group-item dropdown-center">
                                <a data-bs-toggle="dropdown" aria-expanded="false">
                                    City Government
                                </a>
                                <ul className="dropdown-menu" style={{backgroundColor: '#053774'}}>
                                    <li className="list-group-item"><a href="/CityMayor">City Mayor</a></li>
                                    <li className="list-group-item"><a href="/CityCouncil">City Council</a></li>
                                </ul>
                            </li>
                            
                            <li className="list-group-item"><a href="/DepartmentsandUnits">Departments and Units</a></li>
                            <li className="list-group-item active"><a href="/BarangayOfficials">Barangay Officials</a></li>
                            <li className="list-group-item"><a href="/History">History</a></li>
                            <li className="list-group-item"><a href="/PastMayors">Past Mayors</a></li>
                        </ul>
                    </div>
                </div>
                
                <div className="col-md-9 col-md-6">
                    <h3 style={{color: '#18a54a'}}><strong>Barangay Officials</strong> </h3>

                    <div className="row p-3">
                        <table className="table-lg text-center" width="100%">
                            <tbody>
                                <tr><td className="text-center" colSpan="3" style={{backgroundColor: '#053774', color: 'white'}}>Cluster 1</td></tr>
                                <tr style={{backgroundColor: '#18a54a', color: 'white'}}><td>Barangay</td><td>Barangay Captain</td></tr>
                                <tr><td>Alapan I-A</td><td>Aman, Jeffrey Primero</td></tr>
                                <tr><td>Alapan I-B</td><td>Santos, Rico David</td></tr>
                                <tr><td>Alapan I-C</td><td>Marcial, Noriel Santiaguel</td></tr>
                                <tr><td>Alapan II-A</td><td>Barzaga, Marc Albert Didal</td></tr>
                                <tr><td>Alapan II-B</td><td>Camia, Benedicto Dayrit</td></tr>
                                <tr><td>Bucandala I</td><td>Santiaguel, Ferdinand Apolinar</td></tr>
                                <tr><td>Bucandala II</td><td>Vilbar, Mark Jefferson Legaspi</td></tr>
                                <tr><td>Bucandala III</td><td>Sarreal, Amado Saria</td></tr>
                                <tr><td>Bucandala IV</td><td>Bacos, Gary Olaes</td></tr>
                                <tr><td>Bucandala V</td><td>Saliba, Reynaldo Obispo</td></tr>
                                                
                                <tr><td className="text-center" colSpan="3" style={{backgroundColor: '#053774', color: 'white'}}>Cluster 2</td></tr>
                                <tr style={{backgroundColor: '#18a54a', color: 'white'}}><td>Barangay</td><td>Barangay Captain</td></tr>
                                <tr><td>Carsadang Bago I</td><td>Cubillo, Laila Papa</td></tr>
                                <tr><td>Carsadang Bago II</td><td>Candalla, Eliseo Jarin</td></tr>
                                <tr><td>Pag-Asa I</td><td>Galang, Rolito Jarin</td></tr>
                                <tr><td>Pag-Asa II</td><td>Medina, Ernesto Jarin</td></tr>
                                <tr><td>Pag-Asa III</td><td>Dagumboy, Joemar Felix</td></tr>
                                <tr><td>Medicion I-A</td><td>Camat, Leomar Viña</td></tr>
                                <tr><td>Medicion I-B</td><td>Condalor, Ferdinand Dayson</td></tr>
                                <tr><td>Medicion I-C</td><td>Dominguez, Roberto Toledo</td></tr>
                                <tr><td>Medicion I-D</td><td>Igtiben, Mark Luigi Monreal</td></tr>
                                <tr><td>Medicion II-A</td><td>Jarin, Alexander Monzon</td></tr>
                                <tr><td>Medicion II-B</td><td>Monzon, Eduardo Frias</td></tr>
                                <tr><td>Medicion II-C</td><td>Bella, Riciel Barzaga</td></tr>
                                <tr><td>Medicion II-D</td><td>Nas, Rommel Cairme</td></tr>
                                <tr><td>Medicion II-E</td><td>Monzon, Lamberto Episioco</td></tr>
                                <tr><td>Medicion II-F</td><td>Octavo, Eugenio Risco</td></tr>
                                
                                <tr><td className="text-center" colSpan="3" style={{backgroundColor: '#053774', color: 'white'}}>Cluster 3</td></tr>
                                <tr style={{backgroundColor: '#18a54a', color: 'white'}}><td>Barangay</td><td>Barangay Captain</td></tr>
                                <tr><td>Anabu I-A</td><td>Saratan, Jan Wilmher Cuenca</td></tr>
                                <tr><td>Anabu I-B</td><td>Minaldo, Rafael Ochoa</td></tr>
                                <tr><td>Anabu I-C</td><td>Ramos, Romeo Ignacio</td></tr>
                                <tr><td>Anabu I-D</td><td>Lares, Joven A.</td></tr>
                                <tr><td>Anabu I-E</td><td>Camungol, Antonio Barco</td></tr>
                                <tr><td>Anabu I-F</td><td>Sarte, Rocky Marciano A.</td></tr>
                                <tr><td>Anabu I-G</td><td>Silla, Robinson Papa</td></tr>
                                
                                <tr><td className="text-center" colSpan="3" style={{backgroundColor: '#053774', color: 'white'}}>Cluster 4</td></tr>
                                <tr style={{backgroundColor: '#18a54a', color: 'white'}}><td>Barangay</td><td>Barangay Captain</td></tr>
                                <tr><td>Anabu II-A</td><td>Atanacio, James Bryan Remulla</td></tr>
                                <tr><td>Anabu II-B</td><td>Diato, Christian Rementilla</td></tr>
                                <tr><td>Anabu II-C</td><td>Sarte, Joey Bernardo</td></tr>
                                <tr><td>Anabu II-D</td><td>Lares, Geraldo Calitis</td></tr>
                                <tr><td>Anabu II-E</td><td>Paredes, Lorenzo Genido</td></tr>
                                <tr><td>Anabu II-F</td><td>Parreñas, Bernadette Gaborro</td></tr>

                                <tr><td className="text-center" colSpan="3" style={{backgroundColor: '#053774', color: 'white'}}>Cluster 5</td></tr>
                                <tr style={{backgroundColor: '#18a54a', color: 'white'}}><td>Barangay</td><td>Barangay Captain</td></tr>
                                <tr><td>Bayan Luma I</td><td>Canaynay, Melquiades Tala Tala</td></tr>
                                <tr><td>Bayan Luma II</td><td>Bautista, Reuben Jesse Magsaysay</td></tr>
                                <tr><td>Bayan Luma III</td><td>Borromeo, Reynaldo Pastor</td></tr>
                                <tr><td>Bayan Luma IV</td><td>Aquilino, Natividad Chua</td></tr>
                                <tr><td>Bayan Luma V</td><td>Reyes, Edgardo Dela Cruz</td></tr>
                                <tr><td>Bayan Luma VI</td><td>Salvador, Kent Lewis Cani</td></tr>
                                <tr><td>Bayan Luma VII</td><td>Camia, Zosimo Jr. Cruz</td></tr>
                                <tr><td>Bayan Luma VIII</td><td>Esguerra, Efren Jr. Bautista</td></tr>
                                <tr><td>Bayan Luma IX</td><td>Tined, Ruben Jr. De Guzman</td></tr>
                                
                                <tr><td className="text-center" colSpan="3" style={{backgroundColor: '#053774', color: 'white'}}>Cluster 6</td></tr>
                                <tr style={{backgroundColor: '#18a54a', color: 'white'}}><td>Barangay</td><td>Barangay Captain</td></tr>
                                <tr><td>Bagong Silang</td><td>Cariño, Carlito Dumalanta</td></tr>
                                <tr><td>Magdalo</td><td>Jardin, Kaizer Lozada</td></tr>
                                <tr><td>Maharlika</td><td>Hynson, Gina Delos Reyes</td></tr>
                                <tr><td>Mariano Espeleta I</td><td>Cruz, Alnair Macahilig</td></tr>
                                <tr><td>Mariano Espeleta II</td><td>Punzalan, Nelson Jr. Dagum</td></tr>
                                <tr><td>Mariano Espeleta III</td><td>Nato, Silvestre Campaña</td></tr>
                                <tr><td>Pinagbuklod</td><td>Ocampo, Ricardo Salvador</td></tr>
                                <tr><td>Pasong Buaya I</td><td>Ramos, Wilfredo Esguerra</td></tr>
                                <tr><td>Pasong Buaya II</td><td>Tagle, Carlito Camantigue</td></tr>
                                
                                <tr><td className="text-center" colSpan="3" style={{backgroundColor: '#053774', color: 'white'}}>Cluster 7</td></tr>
                                <tr style={{backgroundColor: '#18a54a', color: 'white'}}><td>Barangay</td><td>Barangay Captain</td></tr>
                                <tr><td>Buhay Na Tubig</td><td>Ramirez, Reymundo De Guzman</td></tr>
                                <tr><td>Palico I</td><td>Olives, Nicanor Zaragosa</td></tr>
                                <tr><td>Palico II</td><td>Sapanghila, Ryan Jay Gayamo</td></tr>
                                <tr><td>Palico III</td><td>Dominguez, Luisito Zapanta</td></tr>
                                <tr><td>Palico Iv</td><td>Dominguez, Marlo Espiritu</td></tr>
                                <tr><td>Tanzang Luma I</td><td>Dones, Reynante Dominguez</td></tr>
                                <tr><td>Tanzang Luma II</td><td>Lacson, Carlo Rey Perez</td></tr>
                                <tr><td>Tanzang Luma III</td><td>Manela, Marty Landas</td></tr>
                                <tr><td>Tanzang Luma Iv</td><td>Cinto, Jhun Gaña</td></tr>
                                <tr><td>Tanzang Luma V</td><td>Acuña, Bienvenido Camaclang</td></tr>
                                <tr><td>Tanzang Luma VI</td><td>Crisologo, Redentor Magsakay</td></tr>

                                <tr><td className="text-center" colSpan="3" style={{backgroundColor: '#053774', color: 'white'}}>Cluster 8</td></tr>
                                <tr style={{backgroundColor: '#18a54a', color: 'white'}}><td>Barangay</td><td>Barangay Captain</td></tr>
                                <tr><td>Poblacion I-A</td><td>Tacus, Gregorio Escobido</td></tr>
                                <tr><td>Poblacion I-B</td><td>Dominguez, Kristel Joy De Leon</td></tr>
                                <tr><td>Poblacion I-C</td><td>Constantino, Hilario Sapin</td></tr>
                                <tr><td>Poblacion II-A</td><td>Sauler, Gary Dela Cruz</td></tr>
                                <tr><td>Poblacion II-B</td><td>Ravelo, Ferdinand Tambio</td></tr>
                                <tr><td>Poblacion III-A</td><td>Maluto, Carlos Serviano</td></tr>
                                <tr><td>Poblacion III-B</td><td>Ramirez, Elmer Diones</td></tr>
                                <tr><td>Poblacion IV-A</td><td>Figueras, Perpetua Fernandez</td></tr>
                                <tr><td>Poblacion IV-B</td><td>Caimol, John Orly Gonzaga</td></tr>
                                <tr><td>Poblacion IV-C</td><td>Kamantigue, Imelda Gacos</td></tr>
                                <tr><td>Poblacion IV-D</td><td>Virata, Michael Samonte</td></tr>
                                <tr><td>Toclong I-A</td><td>Sañez, Oktubre Camandang</td></tr>
                                <tr><td>Toclong I-B</td><td>Badion, Nerrie Salem</td></tr>
                                <tr><td>Toclong I-C</td><td>Santos, Joey Remulla</td></tr>
                                <tr><td>Toclong II-A</td><td>Sañez, Abraham Jr. Santos</td></tr>
                                <tr><td>Toclong II-B</td><td>Remulla, Joseph Regalado</td></tr>
                                
                                <tr><td className="text-center" colSpan="3" style={{backgroundColor: '#053774', color: 'white'}}>Cluster 9</td></tr>
                                <tr style={{backgroundColor: '#18a54a', color: 'white'}}><td>Barangay</td><td>Barangay Captain</td></tr>
                                <tr><td>Malagasang I-A</td><td>Parnala, Pedro Manimbao</td></tr>
                                <tr><td>Malagasang I-B</td><td>Reyes, Mario Jr. Palajos</td></tr>
                                <tr><td>Malagasang I-C</td><td>Saulog, Gerardo Sanchez</td></tr>
                                <tr><td>Malagasang I-D</td><td>Tapawan, Manuel Saquilayan</td></tr>
                                <tr><td>Malagasang I-E</td><td>Sayaman, Josefino Macalawa</td></tr>
                                <tr><td>Malagasang I-F</td><td>Lara, Randy Sapinoso</td></tr>
                                <tr><td>Malagasang I-G</td><td>Valerio, Mark Oliver Jarin</td></tr>
                                <tr><td>Malagasang II-A</td><td>Progoso, Aldrin Olivarez</td></tr>
                                <tr><td>Malagasang II-B</td><td>Andallon, Lenie Herrera</td></tr>
                                <tr><td>Malagasang II-C</td><td>Herrera, Danilo Magsino</td></tr>
                                <tr><td>Malagasang II-D</td><td>Servida, Alexander Vasquez</td></tr>
                                <tr><td>Malagasang II-E</td><td>Topacio, Jose Zanido Camarce</td></tr>
                                <tr><td>Malagasang II-F</td><td>Fauni, Edward Dayuta</td></tr>
                                <tr><td>Malagasang II-G</td><td>Fauni, Armando Saquilayan</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BarangayOfficials;