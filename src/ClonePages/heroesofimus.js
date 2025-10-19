import React from "react";

const HeroesofImus = () => {
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
        <div className="col-md-8 col-sm-6" style={{ backgroundColor: "white" }}>
          <div className="strike p-3">
            <span>
              <h2>Heroes of Imus</h2>
            </span>
          </div>

          {/* Hero 1 */}
          <div className="row text-center">
            <div className="col">
              <h4>Gen. Licerio Cuenca Topacio (1839–1925)</h4>
              <br />
              <img src="https://www.cityofimus.gov.ph/Media/topacio_11.jpg" alt="Gen. Licerio Cuenca Topacio" />
              <br />
              <br />
              <p className="text-start">
                A significant point in history concerning Licerio Topacio needs clarification. One biographer, Sol H. Gwekoh, says that had Topacio not
                gallantly given way to a young man, Emilio Aguinaldo, he would have been the leader of the Philippine Revolution. Another biographer,
                Benjamin M. Bolivar, claims that Topacio "declined the honor" when Aguinaldo offered him the leadership of the Revolution.
                <br />
                <br />
                Collating and analyzing all the facts involved in this particular case, what happened was the following:
                <br />
                <br />
                Because of the ongoing Lachambre offensive in Magdalo territory, only eight Magdalo leaders were able to attend the Tejeros Convention on
                March 22, 1897. They were Baldomero Aguinaldo, Daniel Tria Tirona, Licerio Topacio, Felix Cuenca, Cayetano Topacio, Crispulo Aguinaldo,
                Antonio Montenegro, and an unidentified Magdalo leader. Except for Montenegro and this unidentified leader, they were all members of the
                Magdalo Council or Government.
                <br />
                <br />
                Licerio Topacio was the eldest of the Magdalo present. In deference to his age, he must have been considered by his group for nomination as
                President of the Revolutionary Government to be established. But he declined because he was too old (58 years old), and the presidency
                needed a younger, stronger man. The next choice was Emilio Aguinaldo, who was absent, defending the strategic Pasong Santol in
                Dasmariñas against repeated assaults by Lachambre troops. It was an excellent lucky choice. Aguinaldo was elected president of the
                Revolutionary Government in absentia.
                <br />
                <br />
                Looking back to this crucial incident in our history, it cannot be denied that Aguinaldo had a significant edge over Topacio in age (28 years
                old) and stamina but also in military experience and prestige. After the Battle of Imus and the Battle of Binakayan, Aguinaldo's prestige as a
                military leader had risen like a meteor, making him a living legend.
                <br />
                <br />
                Born in Imus, Cavite, on August 27, 1839, to Miguel Topacio and Marta Cuenca, Licerio finished his studies in Imus. He was appointed twice
                as Municipal President of Imus after the war. He died on April 19, 1925, at the age of 86.
              </p>
            </div>
          </div>

          <hr />

          {/* Hero 2 */}
          <div className="row text-center">
            <div className="col">
              <h4>General Juan Saraza Castañeda (1870–1902)</h4>
              <br />
              <img src="https://www.cityofimus.gov.ph/Media/castaneda_11.jpg" alt="General Juan Saraza Castañeda" />
              <br />
              <br />
              <p className="text-start">
                The Ilustrado and landowner who turned general during the Spanish Revolution took charge of the logistics of the Katipuneros and later
                joined the American Revolution in Cavite.
                <br />
                <br />
                He was born on May 8, 1870, the eldest son of Don Numeriano Castañeda and Doña Paula Ramirez Saraza. At age 18, he married Doña
                Andrea Tirona Monzon. He became known as the “bitter foe of the Spanish Friars.”
                <br />
                <br />
                In 1895, he went to Hong Kong to seek support for the Katipuneros of Cavite. With Padre Severo Buenaventura and other Mason friends, he
                proceeded to Kobe and Yokohama to gain more support. Arms were smuggled from Hong Kong via Binakayan Bay using his boats.
                <br />
                <br />
                He became Capitan Municipal of Imus in 1899, but later rejoined the revolution against the Americans. He died at age 32 on October 15, 1902.
              </p>
            </div>
          </div>

          <hr />

          {/* Hero 3 */}
          <div className="row text-center">
            <div className="col">
              <h4>General Pantaleon Garcia (1856–1936)</h4>
              <br />
              <img src="https://www.cityofimus.gov.ph/Media/garcia_11.jpg" alt="General Pantaleon Garcia" />
              <br />
              <br />
              <p className="text-start">
                The close and trusted general of Emilio Aguinaldo, a representative at the Malolos Convention, and one of the two generals entrusted with the defense of Imus.
                <br />
                <br />
                Born in Imus on July 27, 1856, Garcia was a teacher before joining the revolution. He fought in key battles and was later appointed Commanding General of all Filipino forces in Central Luzon.
                <br />
                <br />
                He served as Municipal Mayor of Imus (1904–1905) and later as Justice of the Peace and Superintendent of the Colonia Agricola in Cavite. He died on August 16, 1936.
              </p>
            </div>
          </div>

          <hr />

          {/* Hero 4 */}
          <div className="row text-center">
            <div className="col">
              <h4>General Flaviano A. Yengco (1873–1897)</h4>
              <br />
              <img src="https://www.cityofimus.gov.ph/Media/yengco_11.jpg" alt="General Flaviano A. Yengco" />
              <br />
              <br />
              <p className="text-start">
                One of the bravest and youngest generals of the Philippine Revolution — a Manileño who became a Caviteño hero.
                <br />
                <br />
                Born in 1873, he joined the revolution at age 23 and fought valiantly at the Battle of Binakayan and the Battle of Pasong Santol, where he was mortally wounded. He died three days later, admired for his courage and spirit.
              </p>
            </div>
          </div>

          <hr />

          {/* Hero 5 */}
          <div className="row text-center">
            <div className="col">
              <h4>Colonel Jose S. Tagle (1854–?)</h4>
              <br />
              <img src="https://www.cityofimus.gov.ph/Media/tagle_11.jpg" alt="Colonel Jose S. Tagle" />
              <br />
              <br />
              <p className="text-start">
                Colonel of the Katipunan and leader of the Imus revolt during the 1896 Revolution. Born in Bayan Luma on March 18, 1854, he led the first successful uprising in Imus on September 1, 1896.
                <br />
                <br />
                After the victory, he became Capitan Municipal of Imus. His date of death remains unknown.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroesofImus;
