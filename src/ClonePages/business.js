import React from "react";

const Business = () => {
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
                <h3>Business</h3>
              </li>
              <li className="list-group-item">
                <a
                  href="#WhyInvest"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="true"
                >
                  Why Invest in Imus?
                </a>
              </li>
              <li className="list-group-item">
                <a
                  href="#Accomodation"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                >
                  Accommodation
                </a>
              </li>
              <li className="list-group-item">
                <a
                  href="#Communication"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                >
                  Communication
                </a>
              </li>
              <li className="list-group-item">
                <a
                  href="#CourierandGo"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                >
                  Courier and Cargo
                </a>
              </li>
              <li className="list-group-item">
                <a
                  href="#NationalTaxes"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                >
                  National Taxes
                </a>
              </li>
              <li className="list-group-item">
                <a
                  href="#Transportation"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                >
                  Transportation
                </a>
              </li>
              <li className="list-group-item">
                <a
                  href="#PowerandWater"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                >
                  Utilities: Power and Water
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Main content */}
        <div className="col-md-8 col-sm-6">
          <div className="row">
            {/* YouTube video */}
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingBottom: "56.25%",
                height: 0,
                overflow: "hidden",
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/ROTO4QJJyso?autoplay=1&loop=1&playlist=ROTO4QJJyso&rel=0"
                title="City of Imus - Top Tax Payers 2024"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              ></iframe>
            </div>

            {/* Accordion Section */}
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <div
                  id="WhyInvest"
                  className="accordion-collapse collapse show"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="card card-body">
                    <h2>Why Invest in Imus</h2>
                    <p>
                      <br />
                      The City of Imus is recognized as one of the country's
                      most Economically Dynamic Component Cities.
                      <br />
                      <br />
                      Geographically located in the Northeastern part of Cavite,
                      Imus is politically subdivided into 97 barangays. Being a
                      highly urbanized city, Imus takes effective and aggressive
                      strides for technological progressions, earning the
                      distinction as one of the most Competitive Cities at the
                      national level.
                      <br />
                      <br />
                      The investment climate in the City has attracted multiple
                      investors, both foreign and local. These investments
                      create new jobs, provide high revenue taxes, serve as
                      vehicles for new technologies, and boost earnings from
                      exports.
                      <br />
                      <br />
                      Big corporations such as Liwayway Corporation,
                      San Miguel-Yamamura Asia Corporation, and EDS
                      Manufacturing Incorporated-Yazaki have continuously
                      operated in the City. Likewise, several shopping malls
                      have emerged such as Robinsons Place Imus, The District,
                      S&R Membership Shopping, CityMall, Shopwise, Lotus Mall,
                      Puregold, and SM Center Imus.
                      <br />
                      <br />
                      Committed to supporting its economic enterprises, Imus
                      continues to provide businesses, particularly micro,
                      small, and medium enterprises (MSMEs), with apt learning
                      resources to sustain operations in the new normal with the
                      conduct of talks, trainings, and workshops such as the
                      Imus Seminars of Emerging Entrepreneurs (iSEE), Imus City
                      Business Summit, Business Cliniquing, Business Expo, and
                      E-Talakayan.
                      <br />
                      <br />
                      The City Government has also established several platforms
                      for businesses, such as:
                      <br />
                      1. Business One-Stop Shop (BOSS)
                      <br />
                      2. Go Negosyo Center
                      <br />
                      3. “Ease of Doing Business Act”
                      <br />
                      <br />
                      The influx of investors who have chosen Imus as their
                      home, is a concrete testament that the City’s business
                      policies have successfully created and sustained a
                      business-friendly environment.
                    </p>
                  </div>
                  <p className="text-center">
                    <br />
                    Conversion rate 1 US$ = ₱58.46*<br />
                    *Based on quotations published by the respective agencies.
                    <br />
                    These may vary and change without prior notice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default Business;
