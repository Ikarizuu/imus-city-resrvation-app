import React from "react";

const CitizensCharcter = () => {
  return (
    <div className="container">
      <div className="row p-3">
        {/* Sidebar */}
        <div className="col-md-2 col-sm-6">
          <div className="text-center">
            <ul className="list-group list-group-flush">
              <li
                className="list-group-item"
                style={{ backgroundColor: "white", color: "#053774" }}
              >
                <h3>Services</h3>
              </li>
              <li className="list-group-item">
                <a href="/Services">City Public Library</a>
              </li>
              <li className="list-group-item">
                <a href="/Assistance">Assistance</a>
              </li>
              <li className="list-group-item">
                <a href="/CitizensCharcter">Citizen's Charter</a>
              </li>
              <li className="list-group-item">
                <a href="/EBoss">EBoss</a>
              </li>
              <li className="list-group-item">
                <a href="/ReservationSlot">Slot Reservation</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-9 col-sm-6">
          <h3 style={{ color: "#18a54a" }}>
            <strong>Citizen's Charter</strong>
          </h3>

          <div className="row p-3">
            <div className="card">
              <div className="card-body">
                <h3 style={{ color: "#18a54a" }}>CITY GOVERNMENT OF IMUS</h3>

                <a
                  href="https://www.cityofimus.gov.ph/docs/Citizen's%20Charter/Outside_Office/IMUS_CC_20240330.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CITIZEN’S CHARTER CITY GOVERNMENT OF IMUS 2024, 1st EDITION
                </a>

                <br />
                <br />

                <h3 style={{ color: "#18a54a" }}>Departments</h3>

                <a
                  href="https://www.cityofimus.gov.ph/docs/Citizen's%20Charter/Ground_Floor/BPLO_Revised_2024.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Business Permit and Licensing Office
                </a>
                <br />
                <a
                  href="https://www.cityofimus.gov.ph/docs/Citizen's%20Charter/3rd_Floor/BUDGET_2023.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  City Budget Office
                </a>
                <br />
                <a
                  href="https://www.cityofimus.gov.ph/docs/Citizen's%20Charter/2nd_Floor/OBO.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Office of the Building Official
                </a>
                <br />
                <a
                  href="https://www.cityofimus.gov.ph/docs/Citizen's%20Charter/3rd_Floor/ACCOUNTING_2023.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  City Accountant Office
                </a>
                <br />
                <a
                  href="https://www.cityofimus.gov.ph/docs/Citizen's%20Charter/3rd_Floor/ADMIN.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  City Administrator's Office
                </a>
                <br />
                <a
                  href="https://www.cityofimus.gov.ph/docs/Citizen's%20Charter/2nd_Floor/AGRI_2024.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  City Agriculture Services Office
                </a>
                <br />
                <a
                  href="https://www.cityofimus.gov.ph/docs/Citizen's%20Charter/Ground_Floor/ASSESSOR.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  City Assessor's Office
                </a>
                <br />
                <a
                  href="https://www.cityofimus.gov.ph/docs/Citizen's%20Charter/Ground_Floor/CCRO_2023.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  City Civil Registrar’s Office
                </a>
                <br />
                <a
                  href="https://www.cityofimus.gov.ph/docs/Citizen's%20Charter/4th_Floor/GSO.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  City General Services Office
                </a>
                <br />
                <a
                  href="https://www.cityofimus.gov.ph/docs/Citizen's%20Charter/Outside_Office/CHO.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  City Health Office
                </a>
                <br />

                {/*di ko na natapos inaantok na ako next na aq andami pa shet}
                <a
                  href="/docs/Citizen's Charter/2nd_Floor/CIO_2023.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  City Information Office
                </a>
                <br />
                {/* Continue adding other department links here with the same format */}
                <br />

                <h3 style={{ color: "#18a54a" }}>Units</h3>
                <a
                  href="/docs/Citizen's Charter/4th_Floor/CITRMU_2023_1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  City Information Technology and Records Management Unit
                </a>
                <br />
                <a
                  href="/docs/Citizen's Charter/2nd_Floor/CITMO.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  City Traffic Management Unit
                </a>
                <br />
                <a
                  href="/docs/Citizen's Charter/Ground_Floor/GAD_2023.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gender And Development Unit
                </a>
                <br />
                <a
                  href="/docs/Citizen's Charter/8. LIGA NG MGA BARANGAY OFFICE.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Liga ng mga Barangay Office
                </a>
                <br />
                <a
                  href="/docs/Citizen's Charter/Outside_Office/SATELLITE.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Satellite Office
                </a>
                <br />
                <a
                  href="/docs/Citizen's Charter/2nd_Floor/SPORTS_2024.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sports Development Unit
                </a>
                <br />
                <a
                  href="/docs/Citizen's Charter/4th_Floor/TASKFORCE_2023.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Task Force
                </a>
                <br />
                <a
                  href="/docs/Citizen's Charter/2nd_Floor/TRU_2023.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tricycle Regulatory Unit
                </a>
                <br />
                <a
                  href="/docs/Citizen's Charter/Ground_Floor/LEDIPO_2023.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Local Economic Dev't and Investment Promotions Office
                </a>
                <br />
                <br />

                <h3 style={{ color: "#18a54a" }}>National</h3>
                <a
                  href="/docs/Citizen's Charter/2nd_Floor/POPDEV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Office on Population Development
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitizensCharcter;
