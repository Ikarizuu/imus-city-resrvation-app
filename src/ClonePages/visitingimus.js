import React from 'react';

const VisitingImus = () => {
  return (
    <div className="container">
      <div className="row p-3">
        {/* Sidebar */}
        <div className="col-md-2 col-sm-6">
          <div className="text-center">
            <ul className="list-group list-group-flush">
              <li
                className="list-group-item"
                style={{ backgroundColor: 'white', color: '#053774' }}
              >
                <h3>Tourism</h3>
              </li>
              <li className="list-group-item">
                <a href="/HistoryandCulture">Cultural and Historical Events</a>
              </li>
              <li className="list-group-item">
                <a href="/VisitingImus">Visiting Imus</a>
              </li>
              <li className="list-group-item">
                <a href="/HeroesofImus">Heroes of Imus</a>
              </li>
              <li className="list-group-item">
                <a href="/NotablePerson">Notable Imuseños</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-10 col-sm-6" style={{ padding: 0, margin: 0 }}>
          <div className="text-center" style={{ padding: 0, margin: 0 }}>
            <a href="https://www.facebook.com/ImusCityTourism/">
              <img
                src="https://www.cityofimus.gov.ph/Media/imus_tourism_page.jpg"
                alt="Imus Tourism"
                width="100%"
              />
            </a>
          </div>

          <br />

          {/* First Row of Videos */}
          <div className="row text-center">
            {[
              '614983614978717',
              '1081976803864376',
              '1054744079371040',
            ].map((id, index) => (
              <div className="col-sm-4" key={index}>
                <iframe
                  src={`https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F${id}%2F&show_text=false&width=267&t=0`}
                  width="267"
                  height="476"
                  style={{ border: 'none', overflow: 'hidden' }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title={`Imus Video ${index + 1}`}
                ></iframe>
              </div>
            ))}
          </div>

          {/* Second Row of Videos */}
          <div className="row text-center">
            {[
              '667709082530142',
              '1220663296098898',
              '1030919908404178',
            ].map((id, index) => (
              <div className="col-sm-4" key={index + 3}>
                <iframe
                  src={`https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F${id}%2F&show_text=false&width=267&t=0`}
                  width="267"
                  height="476"
                  style={{ border: 'none', overflow: 'hidden' }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title={`Imus Video ${index + 4}`}
                ></iframe>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="row text-center mt-3">
            <a href="https://www.facebook.com/ImusCityTourism/reels/">
              <button
                type="button"
                className="btn btn-primary"
                style={{ backgroundColor: '#053774' }}
              >
                View More
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitingImus;
