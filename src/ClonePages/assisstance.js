import React from "react";

const Assistance = () => {
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
            <strong>Assistance Requirements</strong>
          </h3>
          <h6 style={{ color: "#06428A" }}>
            <strong>
              Note: For assistance requests, please proceed to the Action
              Center, located at the Office of the Congressman, 3rd floor, City
              of Imus Government Center.
            </strong>
          </h6>

          {/* MEDICAL ASSISTANCE (REGULAR MEDICATION) */}
          <div className="row p-3">
            <div className="card">
              <div className="card-body">
                <h4
                  style={{
                    textAlign: "center",
                    color: "#06428A",
                  }}
                >
                  <strong>MEDICAL ASSISTANCE (REGULAR MEDICATION)</strong>
                </h4>
                <p>
                  <i className="bi bi-file-check"></i> > Back-to-back xerox of
                  valid ID of claimant/client and beneficiary/patient. Valid ID
                  must have an Imus address and not be expired.
                  <br />
                  <i className="bi bi-file-check"></i> > Voter's Certification from
                  COMELEC of the claimant/client and beneficiary/patient.
                  <br />
                  <i className="bi bi-file-check"></i> > Barangay Certification of
                  the claimant/client and beneficiary/patient.
                  <br />
                  <i className="bi bi-file-check"></i> > Original or Certified True
                  Copy of the Medical Certificate with signature and license
                  number of doctor.
                  <br />
                  <i className="bi bi-file-check"></i> > Xerox of prescription or
                  reseta with signature and license number of the same doctor.
                  <br />
                  <i className="bi bi-file-check"></i> > Xerox of Laboratory
                  Requests, if any.
                </p>
              </div>
            </div>
          </div>

          {/* MEDICAL ASSISTANCE (HOSPITALIZATION/CONFINEMENT) */}
          <div className="row p-3">
            <div className="card">
              <div className="card-body">
                <h4 style={{ textAlign: "center", color: "#06428A" }}>
                  <strong>
                    MEDICAL ASSISTANCE (HOSPITALIZATION/CONFINEMENT)
                  </strong>
                </h4>
                <p>
                  <i className="bi bi-file-check"></i> > Back-to-back xerox of
                  valid ID of claimant/client and beneficiary/patient.
                  <br />
                  <i className="bi bi-file-check"></i> > Voter's Certification from
                  COMELEC of the claimant/client and beneficiary/patient.
                  <br />
                  <i className="bi bi-file-check"></i>  > Barangay Certification of
                  the claimant/client and beneficiary/patient.
                  <br />
                  <i className="bi bi-file-check"></i> > Original or Certified True
                  Copy of the Medical Abstract.
                  <br />
                  <i className="bi bi-file-check"></i> > Xerox of hospital bill or
                  promissory note if unpaid.
                </p>
              </div>
            </div>
          </div>

          {/* MEDICAL ASSISTANCE (CHEMOTHERAPY/DIALYSIS) */}
          <div className="row p-3">
            <div className="card">
              <div className="card-body">
                <h4 style={{ textAlign: "center", color: "#06428A" }}>
                  <strong>MEDICAL ASSISTANCE (CHEMOTHERAPY/DIALYSIS)</strong>
                </h4>
                <p>
                  <i className="bi bi-file-check"></i> > Back-to-back xerox of
                  valid ID of claimant/client and beneficiary/patient.
                  <br />
                  <i className="bi bi-file-check"></i> > Voter's Certification from
                  COMELEC.
                  <br />
                  <i className="bi bi-file-check"></i> > Barangay Certification of
                  the claimant/client and beneficiary/patient.
                  <br />
                  <i className="bi bi-file-check"></i> > Original or Certified True
                  Copy of the Medical Abstract.
                  <br />
                  <i className="bi bi-file-check"></i> > Treatment Protocol or
                  price quotation with doctor’s signature.
                </p>
              </div>
            </div>
          </div>

          {/* BURIAL ASSISTANCE */}
          <div className="row p-3">
            <div className="card">
              <div className="card-body">
                <h4 style={{ textAlign: "center", color: "#06428A" }}>
                  <strong>BURIAL ASSISTANCE</strong>
                </h4>
                <p>
                  <i className="bi bi-file-check"></i> > Back-to-back photocopy of
                  valid ID of claimant/client and beneficiary/patient.
                  <br />
                  <i className="bi bi-file-check"></i> > Voter's Certification from
                  COMELEC.
                  <br />
                  <i className="bi bi-file-check"></i> > Barangay Certification of
                  the claimant/client and beneficiary/patient.
                  <br />
                  <i className="bi bi-file-check"></i> > Certified True Copy of the
                  registered Death Certificate.
                  <br />
                  <i className="bi bi-file-check"></i> > Funeral Contract.
                </p>
              </div>
            </div>
          </div>

          {/* FINANCIAL ASSISTANCE (FIRE VICTIMS) */}
          <div className="row p-3">
            <div className="card">
              <div className="card-body">
                <h4 style={{ textAlign: "center", color: "#06428A" }}>
                  <strong>FINANCIAL ASSISTANCE (FIRE VICTIMS)</strong>
                </h4>
                <p>
                  <i className="bi bi-file-check"></i> > Back-to-back photocopy of
                  valid ID of claimant/client and beneficiary/patient.
                  <br />
                  <i className="bi bi-file-check"></i> > Voter's Certification from
                  COMELEC.
                  <br />
                  <i className="bi bi-file-check"></i> > Barangay Certification.
                  <br />
                  <i className="bi bi-file-check"></i> > Fire Incident Report.
                  <br />
                  <i className="bi bi-file-check"></i> > Photo of house after the
                  fire incident.
                </p>
              </div>
            </div>
          </div>

          {/* FINANCIAL ASSISTANCE (BALIK PROBINSIYA) */}
          <div className="row p-3">
            <div className="card">
              <div className="card-body">
                <h4 style={{ textAlign: "center", color: "#06428A" }}>
                  <strong>FINANCIAL ASSISTANCE (BALIK PROBINSIYA)</strong>
                </h4>
                <p>
                  <i className="bi bi-file-check"></i> > Back-to-back photocopy of
                  valid ID of claimant/client and beneficiary/patient.
                  <br />
                  <i className="bi bi-file-check"></i> > Voter's Certification from
                  COMELEC.
                  <br />
                  <i className="bi bi-file-check"></i> > Barangay Certification.
                  <br />
                  <i className="bi bi-file-check"></i> > Price quotation for
                  transportation/fare.
                  <br />
                  <i className="bi bi-file-check"></i> > Acceptance letter from the
                  province.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assistance;
