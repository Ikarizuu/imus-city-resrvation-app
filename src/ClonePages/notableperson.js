import React from "react";

const NotablePerson = () => {
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
              <h2>Notable Imuseños</h2>
            </span>
          </div>


          {/* Prominent Figures */}
          <a
            className="card"
            data-bs-toggle="collapse"
            href="#notable_1"
            role="button"
            aria-expanded="false"
            aria-controls="notable_1"
          >
            <div className="card-body">
              <h5>Prominent Figures of Imus</h5>
            </div>
          </a>

          <div className="collapse" id="notable_1">
            <div className="card card-body">
              {/* Francisca Tirona y Benitez */}
              <div className="row p-2">
                <div className="col-md-4">
                  <img
                    src="https://www.cityofimus.gov.ph/Heroes/New%20folder/FranciscaBenitez.png"
                    alt="Francisca Tirona Benitez"
                    width="100%"
                  />
                </div>
                <div className="col-md-8">
                  <h4>Francisca Tirona y Benitez</h4>
                  <p>Arts / Education</p>
                  <p>
                    She founded the Philippine Women's University (PWU), one of
                    the first colleges for women in the Philippines. She also
                    founded women's organizations that inspired the establishment
                    of the National Women's Commission under the Office of the
                    President.
                  </p>
                </div>
              </div>

              <hr />

              {/* Helena Zoila Tirona Benitez */}
              <div className="row p-2">
                <div className="col-md-8">
                  <h4>Helena Zoila Tirona Benitez</h4>
                  <p>Education / Arts / Politics</p>
                  <p>
                    She was the seventh Filipina to become the country's senator
                    and served from 1967 to 1972. She also served as an
                    Assemblywoman in the Batasang Pambansa from 1978 to 1986.
                  </p>
                </div>
                <div className="col-md-4">
                  <img
                    src="https://www.cityofimus.gov.ph/Heroes/New%20folder/HelenaBenitez.jpg"
                    alt="Helena Zoila Tirona Benitez"
                    width="100%"
                  />
                </div>
              </div>

              <hr />

              {/* Dominador Monzon Camerino */}
              <div className="row p-2">
                <div className="col-md-4">
                  <img
                    src="https://www.cityofimus.gov.ph/Heroes/New%20folder/GovDominadorCamerino.jpg"
                    alt="Dominador Monzon Camerino"
                    width="100%"
                  />
                </div>
                <div className="col-md-8">
                  <h4>Dominador Monzon Camerino</h4>
                  <p>Politics</p>
                  <p>
                    During the administration of Governor Camerino, the
                    two-story town government building of Imus was built. In
                    Camerino's 51 years in public service from 1928 to 1979, he
                    served as barangay chief, Imus' mayor, and Cavite's
                    governor.
                  </p>
                </div>
              </div>

              <hr />

              {/* Lydia Casama */}
              <div className="row p-2">
                <div className="col-md-8">
                  <h4>Lydia Casama</h4>
                  <p>Culinary Tradition</p>
                  <p>
                    The "kutsinta" made by Lydia Casama are well-known and are
                    mainly prepared and given as gifts whenever there is an
                    occasion and are even brought to other countries.
                  </p>
                </div>
                <div className="col-md-4">
                  <img
                    src="https://www.cityofimus.gov.ph/Heroes/New%20folder/LydiaCasama.jpg"
                    alt="Lydia Casama"
                    width="100%"
                  />
                </div>
              </div>

              <hr />

              {/* General Juan Saraza Castañeda */}
              <div className="row p-2">
                <div className="col-md-4">
                  <img
                    src="https://www.cityofimus.gov.ph/Heroes/New%20folder/GenJuanCasta%C3%B1eda.jpg"
                    alt="General Juan Saraza Castañeda"
                    width="100%"
                  />
                </div>
                <div className="col-md-8">
                  <h4>General Juan Saraza Castañeda</h4>
                  <p>History</p>
                  <p>
                    He helped the Katipuneros to get weapons and war equipment.
                    He is the founder of Pilar Lodge No. 15 of Free Masonry of
                    the Philippines. He also helped farmers from Imus who lost
                    their farmland.
                  </p>
                </div>
              </div>

              <hr />

              {/* Amado de los Santos Castrillo */}
              <div className="row p-2">
                <div className="col-md-8">
                  <h4>Amado de los Santos Castrillo</h4>
                  <p>Arts - Sculpture and Screenplay</p>
                  <p>
                    He left beautiful works of art that beautified our
                    environment. He also left writings that were filmed,
                    paintings, and more.
                  </p>
                </div>
                <div className="col-md-4">
                  <img
                    src="https://www.cityofimus.gov.ph/Heroes/New%20folder/AmadoCastrillo.jpg"
                    alt="Amado de los Santos Castrillo"
                    width="100%"
                  />
                </div>
              </div>

              <hr />

              {/* Hilaria del Rosario */}
              <div className="row p-2">
                <div className="col-md-4">
                  <img
                    src="https://www.cityofimus.gov.ph/Heroes/New%20folder/HilariaReyesDelRosarioAguinaldo.jpg"
                    alt="Hilaria del Rosario"
                    width="100%"
                  />
                </div>
                <div className="col-md-8">
                  <h4>Hilaria del Rosario</h4>
                  <p>History / Socio-Civic</p>
                  <p>
                    She was instrumental in helping the wounded and sick during
                    the rebellion against the Spanish and Americans. She was
                    also one of the founders of Hijas de la Revolucion which
                    became Asociacion Nacional de la Cruz Roja (National
                    Association of the Red Cross).
                  </p>
                </div>
              </div>

              <hr />

              {/* General Pantaleon Garcia */}
              <div className="row p-2">
                <div className="col-md-8">
                  <h4>General Pantaleon Garcia</h4>
                  <p>Politics</p>
                  <p>
                    He became the municipal president of Imus (Municipal Mayor)
                    from 1904 to 1905 and Justice of the Peace from 1906 to
                    1907. He was later appointed Superintendent of an
                    agricultural colony in Cavite. He was one of the close and
                    trusted generals of General Emilio Aguinaldo.
                  </p>
                </div>
                <div className="col-md-4">
                  <img
                    src="https://www.cityofimus.gov.ph/Heroes/New%20folder/GenPantaleonGarcia.jpg"
                    alt="General Pantaleon Garcia"
                    width="100%"
                  />
                </div>
              </div>

              <hr />

              {/* Panfilo Lacson */}
              <div className="row p-2">
                <div className="col-md-4">
                  <img
                    src="https://www.cityofimus.gov.ph/Heroes/New%20folder/PingLacson.jpg"
                    alt="Panfilo Lacson"
                    width="100%"
                  />
                </div>
                <div className="col-md-8">
                  <h4>Panfilo “Ping” Morena Lacson</h4>
                  <p>Military / Politics</p>
                  <p>
                    He is a prominent politician and public servant who served
                    several terms in the Senate. He is a former chief of the
                    Philippine National Police and earned many medals while in
                    the Service.
                  </p>
                </div>
              </div>

              <hr />

              {/* Dr. Hilario de Guzman Lara */}
              <div className="row p-2">
                <div className="col-md-8">
                  <h4>Dr. Hilario de Guzman Lara</h4>
                  <p>Science - Medicine</p>
                  <p>
                    He was awarded the National Scientist Award in 1985. Dr.
                    Lara is called the Father of Modern Public Health of the
                    Philippines.
                  </p>
                </div>
                <div className="col-md-4">
                  <img
                    src="https://www.cityofimus.gov.ph/Heroes/New%20folder/HilarioLara.jpg"
                    alt="Dr. Hilario de Guzman Lara"
                    width="100%"
                  />
                </div>
              </div>

              <hr />

              {/* Erineo Maliksi */}
              <div className="row p-2">
                <div className="col-md-4">
                  <img
                    src="https://www.cityofimus.gov.ph/Heroes/New%20folder/GovErineoAyongSMaliksi.jpg"
                    alt="Erineo Maliksi"
                    width="100%"
                  />
                </div>
                <div className="col-md-8">
                  <h4>Erineo “Ayong” Saquilayan Maliksi</h4>
                  <p>Politics</p>
                  <p>
                    He served as a public servant for 26 years and has held many
                    significant local and national government positions. He did
                    many projects that helped his fellow Imuseños.
                  </p>
                </div>
              </div>

              <hr />

              {/* General Tomas Mascardo */}
              <div className="row p-2">
                <div className="col-md-8">
                  <h4>General Tomas Mascardo</h4>
                  <p>History / Politics</p>
                  <p>
                    He was a Commander General in the rebellion of 1896 and 1898.
                    He was with Gen. Emilio Aguinaldo who built the Sangguniang
                    Magdalo. He was appointed as the politico-military governor
                    of Bataan and Zambales at the height of the Battle with the
                    Americans.
                  </p>
                </div>
                <div className="col-md-4">
                  <img
                    src="https://www.cityofimus.gov.ph/Heroes/New%20folder/TomasMascardo.jpg"
                    alt="General Tomas Mascardo"
                    width="100%"
                  />
                </div>
              </div>

              <hr />

              {/* Bernardino Paredes */}
              <div className="row p-2">
                <div className="col-md-4">
                  <img
                    src="https://www.cityofimus.gov.ph/Media/person_placeholder.png"
                    alt="Bernardino Paredes"
                    width="100%"
                  />
                </div>
                <div className="col-md-8">
                  <h4>Bernardino Paredes</h4>
                  <p>History / Politics</p>
                  <p>
                    He was the food administrator during the Filipino-Spanish
                    Revolution. He became president of Imus from 1894 to 1896.
                  </p>
                </div>
              </div>

              <hr />

              {/* Juanito R. Remulla Sr. */}
              <div className="row p-2">
                <div className="col-md-8">
                  <h4>Juanito R. Remulla Sr.</h4>
                  <p>Politics</p>
                  <p>
                    He was governor of Cavite for 16 years. He is recognized as
                    the "Ama ng Makabagong Cavite". Under his rule as governor,
                    he promoted modernization, industrialization, and
                    development of the province.
                  </p>
                </div>
                <div className="col-md-4">
                  <img
                    src="https://www.cityofimus.gov.ph/Heroes/New%20folder/GovJohnnyRemulla.jpg"
                    alt="Juanito R. Remulla Sr."
                    width="100%"
                  />
                </div>
              </div>

              <hr />

              {/* Ramon Revilla Sr. / Jose Acuña Bautista */}
              <div className="row p-2">
                <div className="col-md-4">
                  <img
                    src="https://www.cityofimus.gov.ph/Heroes/New%20folder/RamonRevillaSR.jpg"
                    alt="Ramon B. Revilla Sr."
                    width="100%"
                  />
                </div>
                <div className="col-md-8">
                  <h4>Jose Acuña Bautista (Ramon B. Revilla Sr.)</h4>
                  <p>Politics / Arts - Film</p>
                  <p>
                    He served as a senator from 1992 to 2004. He authored several
                    important laws such as the Public Works and Highways
                    Infrastructure Program Act of 1995. He is one of the famous
                    actors of his generation and is known as the King of Agimat
                    because of his movies.
                  </p>
                </div>
              </div>

              <hr />

              {/* Teodora Bella Sapinoso */}
              <div className="row p-2">
                <div className="col-md-8">
                  <h4>Teodora Bella Sapinoso</h4>
                  <p>Visual Arts - Fashion Design</p>
                  <p>
                    She belongs to a prominent family in Imus. She was the
                    leading milliner of her time in Imus. She contributed a lot
                    to Cavite fashion because of her classic and simple designs
                    that are still considered iconic.
                  </p>
                </div>
                <div className="col-md-4">
                  <img
                    src="https://www.cityofimus.gov.ph/Heroes/New%20folder/TeodoraBellaSapinoso.jpg"
                    alt="Teodora Bella Sapinoso"
                    width="100%"
                  />
                </div>
              </div>

              <hr />

              {/* Solomon Saprid */}
              <div className="row p-2">
                <div className="col-md-4">
                  <img
                    src="https://www.cityofimus.gov.ph/Heroes/New%20folder/SolomonSaprid.jpg"
                    alt="Solomon Saprid"
                    width="100%"
                  />
                </div>
                <div className="col-md-8">
                  <h4>Solomon Saprid</h4>
                  <p>Visual Arts - Painting and Sculpture</p>
                  <p>
                    He contributed a lot to the field of Filipino art and
                    culture. He is one of the pillars of modern art because of
                    his mastery of using bronze in his sculptures such as the
                    Tikbalang Series.
                  </p>
                </div>
              </div>

              <hr />

              {/* Leonardo Sarao */}
              <div className="row p-2">
                <div className="col-md-8">
                  <h4>Leonardo “Adong” Salvador Sarao</h4>
                  <p>Crafts – Automotive Design</p>
                  <p>
                    He modified the design of the surplus army type jeep left
                    in the Philippines after WWII and extended it to make it
                    longer so more people could ride. His jeepney became a
                    staple of Philippine mass transportation.
                  </p>
                </div>
                <div className="col-md-4">
                  <img
                    src="https://www.cityofimus.gov.ph/Heroes/New%20folder/LeonardoSarao.jpg"
                    alt="Leonardo Sarao"
                    width="100%"
                  />
                </div>
              </div>

              <hr />

              {/* Simon Saulog */}
              <div className="row p-2">
                <div className="col-md-4">
                  <img
                    src="https://www.cityofimus.gov.ph/Heroes/New%20folder/SimonSaulog.jpg"
                    alt="Simon Saulog"
                    width="100%"
                  />
                </div>
                <div className="col-md-8">
                  <h4>Simon Saulog</h4>
                  <p>Visual Arts - Painting</p>
                  <p>
                    He contributed greatly as a painter and mentor to budding
                    artists, especially in Imus. He was one of the founders of
                    the Academy of Filipino Artists.
                  </p>
                </div>
              </div>

              <hr />

              {/* Coronel Jose S. Tagle */}
              <div className="row p-2">
                <div className="col-md-8">
                  <h4>Coronel Jose S. Tagle</h4>
                  <p>History / Politics</p>
                  <p>
                    He was a municipal captain of Imus during the Filipino-Spanish
                    Uprising. He was with General Aguinaldo, who won the Battle of
                    Imus on September 3, 1896.
                  </p>
                </div>
                <div className="col-md-4">
                  <img
                    src="https://www.cityofimus.gov.ph/Heroes/New%20folder/ColJoseTagle.jpg"
                    alt="Coronel Jose S. Tagle"
                    width="100%"
                  />
                </div>
              </div>

              <hr />

              {/* Cardinal Luis Antonio Tagle */}
              <div className="row p-2">
                <div className="col-md-4">
                  <img
                    src="https://www.cityofimus.gov.ph/Heroes/New%20folder/LuisAntonioTagle.jpg"
                    alt="Cardinal Luis Antonio Tagle"
                    width="100%"
                  />
                </div>
                <div className="col-md-8">
                  <h4>Cardinal Luis Antonio Gokim Tagle</h4>
                  <p>Religion</p>
                  <p>
                    He has served in high positions in the Vatican, including as
                    Prefect of the Congregation for the Evangelization of Peoples.
                  </p>
                </div>
              </div>

              <hr />

              {/* Cayetano Topacio */}
              <div className="row p-2">
                <div className="col-md-8">
                  <h4>Cayetano Topacio</h4>
                  <p>History / Politics</p>
                  <p>
                    He was the Ministro de Hacienda (Secretary of Finance) of
                    the government of General Emilio Aguinaldo and held many
                    local offices in Imus, including president of Imus from
                    1880 to 1892.
                  </p>
                </div>
                <div className="col-md-4">
                  <img
                    src="https://www.cityofimus.gov.ph/Media/person_placeholder.png"
                    alt="Cayetano Topacio"
                    width="100%"
                  />
                </div>
              </div>

              <hr />

              {/* Licerio Topacio */}
              <div className="row p-2">
                <div className="col-md-4">
                  <img
                    src="https://www.cityofimus.gov.ph/Heroes/New%20folder/GenLicerioCuencaTopacio.jpg"
                    alt="Licerio Topacio"
                    width="100%"
                  />
                </div>
                <div className="col-md-8">
                  <h4>Heneral Licerio Cuenca Topacio</h4>
                  <p>History / Politics</p>
                  <p>
                    General Licerio Topacio was one of the first mayors of Imus
                    and the eldest general of the Revolutionary Government. He
                    refused the offer to become president of the Revolutionary
                    Government in favor of Emilio Aguinaldo.
                  </p>
                </div>
              </div>

              <hr />

              {/* Jose Ramirez Velasco */}
              <div className="row p-2">
                <div className="col-md-8">
                  <h4>Jose Ramirez Velasco</h4>
                  <p>Science - Agriculture Chemistry and Plant Physiology</p>
                  <p>
                    He discovered photoperiodism of rice and how to eliminate
                    it, studied coconut physiology and Cadang-cadang disease,
                    and documented Imus municipal council minutes for 1917-1921.
                  </p>
                </div>
                <div className="col-md-4">
                  <img
                    src="https://www.cityofimus.gov.ph/Heroes/New%20folder/JoseRVelasco.jpg"
                    alt="Jose Ramirez Velasco"
                    width="100%"
                  />
                </div>
              </div>

              <hr />

              {/* Cesar E.A. Virata */}
              <div className="row p-2">
                <div className="col-md-4">
                  <img
                    src="https://www.cityofimus.gov.ph/Heroes/New%20folder/CesarEAvirata.jpg"
                    alt="Cesar E.A. Virata"
                    width="100%"
                  />
                </div>
                <div className="col-md-8">
                  <h4>Cesar E.A. Virata</h4>
                  <p>Economics / Governance</p>
                  <p>
                    He was the former Prime Minister (Minister) of the Marcos
                    government (1981-1986) and represented the Philippines in
                    international financial committees.
                  </p>
                </div>
              </div>

              <hr />

              {/* Leonides Sarao Virata */}
              <div className="row p-2">
                <div className="col-md-8">
                  <h4>Leonides Sarao Virata</h4>
                  <p>Economics</p>
                  <p>
                    He served as Secretary of Commerce and Industry (1969-1970)
                    and Chairman of the Development Bank of the Philippines
                    until 1976.
                  </p>
                </div>
                <div className="col-md-4">
                  <img
                    src="https://www.cityofimus.gov.ph/Heroes/New%20folder/LeonidasSaraoVirata.jpg"
                    alt="Leonides Sarao Virata"
                    width="100%"
                  />
                </div>
              </div>

              <hr />

              {/* General Flaviano Yengko */}
              <div className="row p-2">
                <div className="col-md-4">
                  <img
                    src="https://www.cityofimus.gov.ph/Heroes/New%20folder/GenFlavianoAbadYengko.jpg"
                    alt="General Flaviano Yengko"
                    width="100%"
                  />
                </div>
                <div className="col-md-8">
                  <h4>General Flaviano Yengko</h4>
                  <p>History</p>
                  <p>
                    He was a Brigadier General during the Filipino-Spanish
                    Rebellion and was involved in the Battle of Salitran in 1897.
                  </p>
                </div>
              </div>

              <hr />

              {/* Thirteen Martyrs of Imus */}
              <div className="row p-2">
                <div className="col text-center">
                  <h4>Thirteen Martyrs of Imus</h4>
                  <img
                    src="https://www.cityofimus.gov.ph/Heroes/New%20folder/13martyrs.jpg"
                    alt="Thirteen Martyrs of Imus"
                    width="100%"
                  />
                  <img
                    src="https://www.cityofimus.gov.ph/Heroes/New%20folder/13martyrs_names.png"
                    alt="Thirteen Martyrs Names"
                    width="100%"
                  />
                </div>
              </div>

              <hr />

              {/* Imus War Veterans */}
              <div className="row p-2">
                <div className="col text-center">
                  <h4>Imus War Veterans</h4>
                  <img
                    src="https://www.cityofimus.gov.ph/Heroes/New%20folder/Picture1.png"
                    alt="Imus War Veterans"
                    width="100%"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Artists Directory */}
          <a
            className="card mt-3"
            data-bs-toggle="collapse"
            href="#notable_2"
            role="button"
            aria-expanded="false"
            aria-controls="notable_2"
          >
            <div className="card-body">
              <h5>Directory of Imuseño Artists and Art Professionals</h5>
            </div>
          </a>

          <div className="collapse" id="notable_2">
            <div className="card card-body">
              <h4>Architecture, Design and Allied Arts</h4>

              {/* Angela Crisostomo */}
              <div className="row p-3">
                <div className="col-lg-3">
                  <img
                    src="https://www.cityofimus.gov.ph/ARTIST%20REGISTRY/NEW/ARCHITECTURE%20DESIGN%20ALLIED%20ARTS/ANGELA%20CRISOSTOMO.jpg"
                    alt="Angela Crisostomo"
                    className="img-thumbnail"
                  />
                </div>
                <div className="col">
                  <h3>Angela Crisostomo</h3>
                </div>
              </div>

              {/* Jahnelle G. de Jose */}
              <div className="row p-3">
                <div className="col-lg-3">
                  <img
                    src="https://www.cityofimus.gov.ph/ARTIST%20REGISTRY/NEW/ARCHITECTURE%20DESIGN%20ALLIED%20ARTS/JAHNELLE%20DE%20JOSE.jpg"
                    alt="Jahnelle G. de Jose"
                    className="img-thumbnail"
                  />
                </div>
                <div className="col">
                  <h3>Jahnelle G. de Jose</h3>
                </div>
              </div>

              {/* Michael Tabaranza Gutierrez */}
              <div className="row p-3">
                <div className="col-lg-3">
                  <img
                    src="https://www.cityofimus.gov.ph/ARTIST%20REGISTRY/NEW/ARCHITECTURE%20DESIGN%20ALLIED%20ARTS/MICHAEL%20TABARANZA%20GUTIERREZ.jpg"
                    alt="Michael Tabaranza Gutierrez"
                    className="img-thumbnail"
                  />
                </div>
                <div className="col">
                  <h3>Michael Tabaranza Gutierrez</h3>
                </div>
              </div>

              {/* Erick John Saul */}
              <div className="row p-3">
                <div className="col-lg-3">
                  <img
                    src="https://www.cityofimus.gov.ph/ARTIST%20REGISTRY/NEW/ARCHITECTURE%20DESIGN%20ALLIED%20ARTS/ERICK%20JOHN%20SAUL.jpg"
                    alt="Erick John Saul"
                    className="img-thumbnail"
                  />
                </div>
                <div className="col">
                  <h3>Erick John Saul</h3>
                </div>
              </div>

              {/* Keithleen Papa Cubillo */}
              <div className="row p-3">
                <div className="col-lg-3">
                  <img
                    src="https://www.cityofimus.gov.ph/ARTIST%20REGISTRY/NEW/ARCHITECTURE%20DESIGN%20ALLIED%20ARTS/Keithleen%20Papa%20Cubillo.jpg"
                    alt="Keithleen Papa Cubillo"
                    className="img-thumbnail"
                  />
                </div>
                <div className="col">
                  <h3>Keithleen Papa Cubillo</h3>
                </div>
              </div>

              <hr />

              <h4>Dance</h4>

              {/* Dance entries */}
              <div className="row p-3">
                <div className="col-lg-3">
                  <img
                    src="https://www.cityofimus.gov.ph/ARTIST%20REGISTRY/NEW/DANCE/GENESIS%20CRISTOBAL.jpg"
                    alt="Genesis N. Cristobal"
                    className="img-thumbnail"
                  />
                </div>
                <div className="col">
                  <h3>Genesis N. Cristobal</h3>
                </div>
              </div>

              <div className="row p-3">
                <div className="col-lg-3">
                  <img
                    src="https://www.cityofimus.gov.ph/ARTIST%20REGISTRY/NEW/DANCE/Enrique%20D.%20Sabuco%20Jr.jpg"
                    alt="Enrique D. Sabuco Jr"
                    className="img-thumbnail"
                  />
                </div>
                <div className="col">
                  <h3>Enrique D. Sabuco Jr</h3>
                </div>
              </div>

              <div className="row p-3">
                <div className="col-lg-3">
                  <img
                    src="https://www.cityofimus.gov.ph/ARTIST%20REGISTRY/NEW/DANCE/JOHN%20PHILIP%20BALANG%20BUGHAW.jpg"
                    alt="John Philip Balang Bughaw"
                    className="img-thumbnail"
                  />
                </div>
                <div className="col">
                  <h3>John Philip Balang Bughaw</h3>
                </div>
              </div>

              <div className="row p-3">
                <div className="col-lg-3">
                  <img
                    src="https://www.cityofimus.gov.ph/ARTIST%20REGISTRY/NEW/DANCE/Justine%20S.%20Alarcio.jpg"
                    alt="Justine S. Alarcio"
                    className="img-thumbnail"
                  />
                </div>
                <div className="col">
                  <h3>Justine S. Alarcio</h3>
                </div>
              </div>

              <div className="row p-3">
                <div className="col-lg-3">
                  <img
                    src="https://www.cityofimus.gov.ph/ARTIST%20REGISTRY/NEW/DANCE/Rey%20Marlon%20Dacallos%20Sabuco.jpg"
                    alt="Rey Marlon Dacallos Sabuco"
                    className="img-thumbnail"
                  />
                </div>
                <div className="col">
                  <h3>Rey Marlon Dacallos Sabuco</h3>
                </div>
              </div>

              <hr />

              <h4>Literature</h4>

              <div className="row p-3">
                <div className="col-lg-3">
                  <img
                    src="https://www.cityofimus.gov.ph/ARTIST%20REGISTRY/NEW/LITERATURE/Ronnel%20Kien%20M.%20Bermas.jpg"
                    alt="Ronnel Kien M. Bermas"
                    className="img-thumbnail"
                  />
                </div>
                <div className="col">
                  <h3>Ronnel Kien M. Bermas</h3>
                </div>
              </div>

              <hr />

              <h4>Film and Broadcast Arts</h4>

              <div className="row p-3">
                <div className="col-lg-3">
                  <img
                    src="https://www.cityofimus.gov.ph/ARTIST%20REGISTRY/NEW/FILM%20AND%20BROADCAST%20ARTS/BRYAN%20KRISTOFFER%20J.%20BRAZIL.jpg"
                    alt="Bryan Kristoffer J. Brazil"
                    className="img-thumbnail"
                  />
                </div>
                <div className="col">
                  <h3>Bryan Kristoffer J. Brazil</h3>
                </div>
              </div>

              <div className="row p-3">
                <div className="col-lg-3">
                  <img
                    src="https://www.cityofimus.gov.ph/ARTIST%20REGISTRY/NEW/FILM%20AND%20BROADCAST%20ARTS/joboy%20raguin.jpg"
                    alt="Joboy Raguin"
                    className="img-thumbnail"
                  />
                </div>
                <div className="col">
                  <h3>Joboy Raguin</h3>
                </div>
              </div>

              <hr />

              <h4>Music</h4>

              <div className="row p-3">
                <div className="col-lg-3">
                  <img
                    src="https://www.cityofimus.gov.ph/ARTIST%20REGISTRY/NEW/MUSIC/Andrew%20Constantino.jpg"
                    alt="Andrew Constantino"
                    className="img-thumbnail"
                  />
                </div>
                <div className="col">
                  <h3>Andrew Constantino</h3>
                </div>
              </div>

              <div className="row p-3">
                <div className="col-lg-3">
                  <img
                    src="https://www.cityofimus.gov.ph/ARTIST%20REGISTRY/NEW/MUSIC/Ariel%20S.%20Constantino.jpg"
                    alt="Ariel S. Constantino"
                    className="img-thumbnail"
                  />
                </div>
                <div className="col">
                  <h3>Ariel S. Constantino</h3>
                </div>
              </div>

              <div className="row p-3">
                <div className="col-lg-3">
                  <img
                    src="https://www.cityofimus.gov.ph/ARTIST%20REGISTRY/NEW/MUSIC/RICO%20DEL%20ROSARIO.jpg"
                    alt="Rico J. del Rosario"
                    className="img-thumbnail"
                  />
                </div>
                <div className="col">
                  <h3>Rico J. del Rosario</h3>
                </div>
              </div>

              <div className="row p-3">
                <div className="col-lg-3">
                  <img
                    src="https://www.cityofimus.gov.ph/ARTIST%20REGISTRY/NEW/MUSIC/Mark%20Anthony%20Lavapie.jpg"
                    alt="Mark Anthony Lavapie"
                    className="img-thumbnail"
                  />
                </div>
                <div className="col">
                  <h3>Mark Anthony Lavapie</h3>
                </div>
              </div>

              <div className="row p-3">
                <div className="col-lg-3">
                  <img
                    src="https://www.cityofimus.gov.ph/ARTIST%20REGISTRY/NEW/MUSIC/RALPH%20CARLO%20D.%20MONAKIL.jpg"
                    alt="Ralph Carlo Monakil"
                    className="img-thumbnail"
                  />
                </div>
                <div className="col">
                  <h3>Ralph Carlo Monakil</h3>
                </div>
              </div>

              <div className="row p-3">
                <div className="col-lg-3">
                  <img
                    src="https://www.cityofimus.gov.ph/ARTIST%20REGISTRY/NEW/MUSIC/RYAN%20HANZEL%20MONAKIL.jpg"
                    alt="Ryan Hanzel Monakil"
                    className="img-thumbnail"
                  />
                </div>
                <div className="col">
                  <h3>Ryan Hanzel Monakil</h3>
                </div>
              </div>

              <div className="row p-3">
                <div className="col-lg-3">
                  <img
                    src="https://www.cityofimus.gov.ph/ARTIST%20REGISTRY/NEW/MUSIC/ANA%20MARIE%20TOPACIO.jpg"
                    alt="Ana Marie S. Topacio"
                    className="img-thumbnail"
                  />
                </div>
                <div className="col">
                  <h3>Ana Marie S. Topacio</h3>
                </div>
              </div>

              <div className="row p-3">
                <div className="col-lg-3">
                  <img
                    src="https://www.cityofimus.gov.ph/ARTIST%20REGISTRY/NEW/MUSIC/Kimberly%20Rajj%20Gulfan.jpg"
                    alt="Kimberly Rajj Gulfan"
                    className="img-thumbnail"
                  />
                </div>
                <div className="col">
                  <h3>Kimberly Rajj Gulfan</h3>
                </div>
              </div>

              <hr />

              <h4>Theater</h4>

              <div className="row p-3">
                <div className="col-lg-3">
                  <img
                    src="https://www.cityofimus.gov.ph/ARTIST%20REGISTRY/NEW/THEATER/James%20Cuevas.jpg"
                    alt="James Cuevas"
                    className="img-thumbnail"
                  />
                </div>
                <div className="col">
                  <h3>James Cuevas</h3>
                </div>
              </div>

              <div className="row p-3">
                <div className="col-lg-3">
                  <img
                    src="https://www.cityofimus.gov.ph/ARTIST%20REGISTRY/NEW/THEATER/DWIGHT%20ANGELO%20VITO%20CRUZ.jpg"
                    alt="Dwight Angelo Vito Cruz"
                    className="img-thumbnail"
                  />
                </div>
                <div className="col">
                  <h3>Dwight Angelo Vito Cruz</h3>
                </div>
              </div>

              <hr />

              <h4>Visual Arts</h4>

              {/* Visual arts list */}
              <div className="row p-3">
                <div className="col-lg-3">
                  <img
                    src="https://www.cityofimus.gov.ph/ARTIST%20REGISTRY/NEW/VISUAL%20ARTS/ROSAURO%20ABIHAY.jpg"
                    alt="Rosauro Abihay"
                    className="img-thumbnail"
                  />
                </div>
                <div className="col">
                  <h3>Rosauro Abihay</h3>
                </div>
              </div>

              <div className="row p-3">
                <div className="col-lg-3">
                  <img
                    src="https://www.cityofimus.gov.ph/ARTIST%20REGISTRY/NEW/VISUAL%20ARTS/RAFAELA%20JANNA%20BABARAN.jpg"
                    alt="Rafaela Janna Babaran"
                    className="img-thumbnail"
                  />
                </div>
                <div className="col">
                  <h3>Rafaela Janna Babaran</h3>
                </div>
              </div>

              <div className="row p-3">
                <div className="col-lg-3">
                  <img
                    src="https://www.cityofimus.gov.ph/ARTIST%20REGISTRY/NEW/VISUAL%20ARTS/ADRIAN%20BERNABE.jpg"
                    alt="Adrian Bernabe"
                    className="img-thumbnail"
                  />
                </div>
                <div className="col">
                  <h3>Adrian Bernabe</h3>
                </div>
              </div>

              <div className="row p-3">
                <div className="col-lg-3">
                  <img
                    src="https://www.cityofimus.gov.ph/ARTIST%20REGISTRY/NEW/VISUAL%20ARTS/RICHARD%20BUXANI.jpg"
                    alt="Richard Buxani"
                    className="img-thumbnail"
                  />
                </div>
                <div className="col">
                  <h3>Richard Buxani</h3>
                </div>
              </div>

              <div className="row p-3">
                <div className="col-lg-3">
                  <img
                    src="https://www.cityofimus.gov.ph/ARTIST%20REGISTRY/NEW/VISUAL%20ARTS/DUSTIN%20CARBONERA.jpg"
                    alt="Dustin Carbonera"
                    className="img-thumbnail"
                  />
                </div>
                <div className="col">
                  <h3>Dustin Carbonera</h3>
                </div>
              </div>

              <div className="row p-3">
                <div className="col-lg-3">
                  <img
                    src="https://www.cityofimus.gov.ph/ARTIST%20REGISTRY/NEW/VISUAL%20ARTS/RANKIN%20ELCID%20C.%20CRUZ.jpg"
                    alt="Rankin Elcid Cruz"
                    className="img-thumbnail"
                  />
                </div>
                <div className="col">
                  <h3>Rankin Elcid Cruz</h3>
                </div>
              </div>

              <div className="row p-3">
                <div className="col-lg-3">
                  <img
                    src="https://www.cityofimus.gov.ph/ARTIST%20REGISTRY/NEW/VISUAL%20ARTS/JAMES%20FRANI%20DAYRIT.jpg"
                    alt="James Frani Dayrit"
                    className="img-thumbnail"
                  />
                </div>
                <div className="col">
                  <h3>James Frani Dayrit</h3>
                </div>
              </div>

              <div className="row p-3">
                <div className="col-lg-3">
                  <img
                    src="https://www.cityofimus.gov.ph/ARTIST%20REGISTRY/NEW/VISUAL%20ARTS/ULYSSES%20DIMDAM.jpg"
                    alt="Ulysses F. Dimdam"
                    className="img-thumbnail"
                  />
                </div>
                <div className="col">
                  <h3>Ulysses F. Dimdam</h3>
                </div>
              </div>

              <div className="row p-3">
                <div className="col-lg-3">
                  <img
                    src="https://www.cityofimus.gov.ph/ARTIST%20REGISTRY/NEW/VISUAL%20ARTS/JOHN%20MCRAY%20A.%20HAPLASCA.jpg"
                    alt="John McRay A. Haplasca"
                    className="img-thumbnail"
                  />
                </div>
                <div className="col">
                  <h3>John McRay A. Haplasca</h3>
                </div>
              </div>

              <div className="row p-3">
                <div className="col-lg-3">
                  <img
                    src="https://www.cityofimus.gov.ph/ARTIST%20REGISTRY/NEW/VISUAL%20ARTS/ALDWIN%20IGNACIO.jpg"
                    alt="Aldwin Gerald Ignacio"
                    className="img-thumbnail"
                  />
                </div>
                <div className="col">
                  <h3>Aldwin Gerald Ignacio</h3>
                </div>
              </div>

              <hr />

              <h4>Multidiscipline</h4>

              {/* Multidiscipline list */}
              {/* Camama */}
              <div className="row p-3">
                <div className="col-lg-3">
                  <img
                    src="https://www.cityofimus.gov.ph/Media/person_placeholder.png"
                    alt="Richard A. Camama"
                    className="img-thumbnail"
                  />
                </div>
                <div className="col">
                  <h3>Richard A. Camama</h3>
                </div>
              </div>

            {/* Saria */}
              <div className="row p-3">
                <div className="col-lg-3">
                  <img
                    src="https://www.cityofimus.gov.ph/ARTIST%20REGISTRY/NEW/MULTIDISCIPLINE/JOEMARIE%20SARIA.jpg"
                    alt="Joemarie Saria"
                    className="img-thumbnail"
                  />
                </div>
                <div className="col">
                  <h3>Joemarie Saria</h3>
                </div>
              </div>

              {/* Saul */}
              <div className="row p-3">
                <div className="col-lg-3">
                  <img
                    src="https://www.cityofimus.gov.ph/ARTIST%20REGISTRY/NEW/MULTIDISCIPLINE/ERICK%20JOHN%20SAUL.jpg"
                    alt="Erick John Saul"
                    className="img-thumbnail"
                  />
                </div>
                <div className="col">
                  <h3>Erick John Saul</h3>
                </div>
              </div>

              {/* Tabason */}
              <div className="row p-3">
                <div className="col-lg-3">
                  <img
                    src="https://www.cityofimus.gov.ph/ARTIST%20REGISTRY/NEW/MULTIDISCIPLINE/JEFFREY%20TABASON.jpg"
                    alt="Jeffrey Tabason"
                    className="img-thumbnail"
                  />
                </div>
                <div className="col">
                  <h3>Jeffrey Tabason</h3>
                </div>
              </div>

              {/* Usman */}
              <div className="row p-3">
                <div className="col-lg-3">
                  <img
                    src="https://www.cityofimus.gov.ph/ARTIST%20REGISTRY/NEW/MULTIDISCIPLINE/JANMENL%20L.%20USMAN.jpg"
                    alt="Janmel L. Usman"
                    className="img-thumbnail"
                  />
                </div>
                <div className="col">
                  <h3>Janmel L. Usman</h3>
                </div>
              </div>

              {/* Fajardo */}
              <div className="row p-3">
                <div className="col-lg-3">
                  <img
                    src="https://www.cityofimus.gov.ph/ARTIST%20REGISTRY/NEW/MULTIDISCIPLINE/FRITZ%20FAJARDO.jpg"
                    alt="Fritz Fajardo"
                    className="img-thumbnail"
                  />
                </div>
                <div className="col">
                  <h3>Fritz Fajardo</h3>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotablePerson;
