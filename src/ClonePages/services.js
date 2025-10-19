import React from "react";

const Services = () => {
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
        <div className="col-md-10 col-sm-6">
          <h3 style={{ color: "#18a54a" }}>
            <strong>City Public Library</strong>
          </h3>

          <div className="row p-3">
            <div className="card">
              <div className="card-body">
                <img
                  src="https://www.cityofimus.gov.ph/Media/LibraryV1.jpg"
                  className="img-thumbnail"
                  alt="City Library"
                  width="100%"
                  height="auto"
                />
                <br />
                <br />
                <p>
                  The City of Imus Public Library is located at the Lower Ground
                  Floor, Imus Government Center, Malagasang I-G, City of Imus,
                  Cavite.
                </p>
                <p>Open 8 a.m. to 5 p.m., Monday through Friday.</p>

                <a
                  href="https://forms.gle/isFMemdd9HDyuDrRA"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <button type="button" className="btn btn-primary">
                    <i className="bi bi-folder2"></i> Im CORA
                  </button>
                </a>
                */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
