import React from "react";

const EBoss = () => {
  return (
    <div className="container no-animations">
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
            <strong>Electronic Business One Stop Shop</strong>
          </h3>

          <div className="row p-3">
            <div className="card">
              <div className="card-body">
                <img
                  src="https://www.cityofimus.gov.ph/Media/EBoss/EBoss_Banner%20(2).jpg"
                  className="img-thumbnail"
                  alt="EBoss Banner"
                  width="100%"
                  height="auto"
                />
                <br />
                <br />
                <a
                  className="btn btn-primary btn-sm"
                  href="https://egovcityofimus.ph/bpl/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now!
                </a>
              </div>
            </div>
          </div>

          <div className="row p-3"></div>
        </div>
      </div>
    </div>
  );
};

export default EBoss;
