import React from 'react';


const HistoryAndCulture = () => {
    return (
        <>
            <div className="container">
                <div className="row p-3">
                    <div className="col-md-2 col-sm-6">
                        <div className="text-center">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item" style={{ backgroundColor: 'white', color: '#053774' }}>
                                    <h3>Tourism</h3>
                                </li>
                                <li className="list-group-item "><a href="/HistoryandCulture">Cultural and Historical Events</a></li>
                                <li className="list-group-item "><a href="/VisitingImus">Visiting Imus</a></li>
                                <li className="list-group-item "><a href="/HeroesofImus">Heroes of Imus</a></li>
                                <li className="list-group-item "><a href="/NotablePerson">Notable Imuseños</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-8 col-sm-6" style={{ backgroundColor: 'white' }}>
                        {/*Feast of Nuestra Señora del Pilar*/}
                        <div className="strike p-3">
                            <span>
                                <h2>Feast of Nuestra Señora del Pilar</h2>
                            </span>
                        </div>
                        <img src={require("../Media/image_fiesta.jpg")} alt="Feast of Nuestra Señora del Pilar" width="100%" /><br /><br />
                        <p>
                            Nuestra Señora del Pilar, fondly called “Nana Pilar” by the Imuseños, is the Patron Saint
                            of Imus and whose feast day is religiously celebrated every October 12.<br /><br />

                            The people of Imus widely commemorate the celebration of the feast day of
                            Our Lady of the Pillar. In keeping with Nana Pilar's spirit of giving, the City Government launches
                            programs and activities throughout October, also known as Service Month, as it honors
                            the miracles and blessings the patron saint has bestowed to the Imuseños since 1694.
                            <br /><br />
                            Every year, the Diocese of Imus commemorates the Patroness through a
                            procession of the image and a holy mass.
                            <br /><br />
                            The Recollects brought the image of Nuestra Señora del Pilar to Cavite on May 28,
                            1694. Since then, the people of Imus, particularly its devotees, have experienced several
                            miracles. One of these accounts came from Cardinal Luis Antonio Tagle himself whose
                            appointments as bishop, archbishop, and cardinal happened during October in
                            different years.
                            <br /><br />
                            Nana Pilar received a Canonical Coronation on December 3, 2012, in time with the
                            celebration of the Golden Jubilee of the Diocese.
                        </p>

                        {/*Araw ng Imus*/}
                        <div className="strike p-3">
                            <span>
                                <h2>Araw ng Imus</h2>
                            </span>
                        </div>
                        <img className="img-thumbnail shadow" src={require("../Media/image_gawad.jpg")} alt="Araw ng Imus" width="100%" /><br /><br />
                        <p>
                            Gawad Parangal commemorates the establishment of the Municipality of Imus,
                            Cavite, on October 7, 1775, independent from Cavite El Viejo (now Kawit). In this
                            annual celebration, outstanding citizens of Imus are also conferred honors in the
                            Gawad Parangal.
                            <br /><br />
                            Gawad Parangal Awards include:
                            <br /><br />
                            Gen. Licerio Topacio Award - the highest award given to Imuseños, who have
                            achieved something extra special for the people of Imus.
                            <br /><br />
                            Gen. Juan Castañeda Award - this award is given to outstanding Imuseños in their
                            chosen field of endeavor (Arts, Sciences, Medicine, History, Entrepreneurship, etc.)
                            <br /><br />
                            Gen. Pantaleon Garcia Award - this is awarded to an outstanding public servant,
                            nominated by their peers.
                            <br /><br />
                            Gen. Cayetano P. Topacio Award - an award extended to outstanding students.
                            <br /><br />
                            Col. Jose S. Tagle Award - this is the young achiever’s award given to Imuseños,
                            aged 39 years old and below who achieved something extraordinary.
                            <br /><br />
                            Gen. Flaviano A. Yengco Award - this is the award given to investors who have
                            been partners of the municipality in business. This includes the Outstanding
                            Taxpayers’ Award, Investor’s Award, and Posthumous Award
                        </p>

                        {/*National Flag Day*/}
                        <div className="strike p-3">
                            <span>
                                <h2 style={{ fontSize: '1em' }}>National Flag Day (Battle of Alapan)</h2>
                            </span>
                        </div>
                        <img className="img-thumbnail shadow" src={require("../Media/nfd.jpg")} alt="National Flag Day" width="100%" />
                        <br /><br />
                        <p>
                            The National Flag Day every May 28 commemorates the triumph of the Filipino
                            revolutionaries over the Spanish forces on May 28, 1898. This victory paved the way
                            for the birth of the First Philippine Republic and is now celebrated as the Philippine
                            Flag Day under the auspices of the National Historical Commission of the Philippines
                            (NHCP), the National Commission for Culture and the Arts (NCAA), Cavite Historical
                            Society (CHS), the Imus City Tourism and Development Office (CTDO), and the City
                            Government of Imus. This annual celebration aims to instill a sense of history in every
                            Filipino and deepen his commitment to nation-building.
                        </p>

                        <hr />
                        {/*Historical Events*/}
                        {/*Battle of Imus*/}
                        <div className="strike p-3">
                            <span>
                                <h2>Battle of Imus</h2>
                            </span>
                        </div>
                        <img className="img-thumbnail shadow" src={require("../Media/Battle-of-Imus.jpg")} alt="Battle of Imus" width="100%" /><br /><br />
                        <p>
                            The Battle of Imus, on September 1, 1896, is considered the most decisive
                            battle and a significant turning point in Philippine history. It emboldened the
                            Filipinos to fight for freedom when the Revolutionary forces suffered several
                            defeats at the hands of the Spaniards.
                        </p>

                        {/*Battle of Alapan*/}
                        <div className="strike p-3">
                            <span>
                                <h2>Battle of Alapan</h2>
                            </span>
                        </div>
                        <img className="img-thumbnail shadow" src={require("../Media/Battle of Alapan - .jpg")} alt="Battle of Alapan" width="100%" /><br /><br />
                        <p>
                            The Battle of Alapan paved the way for the birth of the First Philippine
                            Republic. It is where the Philippine Flag, sewn in Hongkong by Marcella
                            Agoncillo, received its Baptism on Fire on May 28, 1898. Located at the
                            Alapan I Elementary School, the battle site is a 10-15 minute drive from
                            the town proper. The location of this marker was highlighted by a 104 feet
                            tall flagpole where the Philippine Flag proudly waves. The marker is set
                            atop three large rocks, each encrusted with pasted cement. On the
                            center of the rock is a statue of a woman boldly holding the Philippine
                            Flag. The National Historical Institute declared the site as a National
                            Historical Landmark through Resolution Number 5 Series of 1993, signed
                            on May 26, 1993.
                        </p>

                        {/*Imus Historical Museum*/}
                        <div className="strike p-3">
                            <span>
                                <h2>Imus Historical Museum</h2>
                            </span>
                        </div>
                        <img className="img-thumbnail shadow" src={require("../Media/image_museumimus1.jpg")} alt="Imus Historical Museum" width="100%" /><br /><br />
                        <p>
                            This fortress-like structure was once a metal foundry and workshop
                            operated by Jose Ignacio Paua – a blacksmith of Chinese descent who
                            made guns and cannons and repaired them for the revolutionaries. A
                            plaque outside the building proclaims it as the “Arsenal ng Imus.”
                            <br /><br />
                            Inside the museum is a series of moving tableaus that take visitors back
                            through time to relive historical scenes with realistic life-size figures set
                            amidst painstakingly recreated settings.
                            <br /><br />
                            Each scene is set in motion with the help of hidden sensors, while
                            informative and well-written captions present the facts surrounding each
                            episode. Interspersed between these tableaus are colorfully detailed
                            murals and relief sculptures of crucial figures in the Cavite Revolution, as
                            well as fascinating trivia and little-known historical tidbits.
                            <br /><br />
                            Combining creativity and modern technology, the Imus Historical
                            Museum presents an eye-opening view of local history in an appealing,
                            more exciting light to increase the awareness and pride of the Filipinos in
                            their nation’s history and patrimony.
                        </p>

                        {/*City Plaza*/}
                        <div className="strike p-3">
                            <span>
                                <h2>City Plaza</h2>
                            </span>
                        </div>
                        <img className="img-thumbnail shadow" src={require("../Media/Imus Plaza.jpg")} alt="City Plaza" width="100%" />
                        <br /><br />
                        <p>
                            It is also one of the city’s scenic attractions which was refined and beautified in 1990
                            through the funding assistance from Philippine Tourism Authority. The City Plaza
                            underwent total rehabilitation in 2009.
                        </p>

                        {/*Imus Cathedral*/}
                        <div className="strike p-3">
                            <span>
                                <h2>Imus Cathedral</h2>
                            </span>
                        </div>
                        <img className="img-thumbnail shadow" src={require("../Media/Imus Cathedral.jpg")} alt="Imus Cathedral" width="100%" /><br /><br />
                        <p>
                            It is an exponent of old Hispanic Architecture and exudes an ambiance conducive to
                            monastic life and spiritual meditation. The colors may have darkened with time;
                            nevertheless, one would not fail to notice the red-colored bricks that make up the
                            arches and walls of the place. Latin inscriptions accentuate the arches of the church.
                        </p>

                        {/*Isabel Bridge*/}
                        <div className="strike p-3">
                            <span>
                                <h2>Isabel Bridge</h2>
                            </span>
                        </div>
                        <img className="img-thumbnail shadow" src={require("../Media/isabelabridge.jpg")} alt="Isabel Bridge" width="100%" />
                        <br /><br />
                        <p>
                            Located at Palico and a two-minute drive from the town proper. A concrete arch
                            bridge with marker, it signifies the battle that took place in the Philippine-Spanish
                            War.
                        </p>

                        {/*Pasong Santol*/}
                        <div className="strike p-3">
                            <span>
                                <h2>Pasong Santol</h2>
                            </span>
                        </div>
                        <img className="img-thumbnail shadow" src={require("../Media/image_pasongsantol1.jpg")} alt="Pasong Santol" width="100%" />
                        <br /><br />
                        <p>
                            A 10 to 15-minute drive from the town proper, it is the site of the battle against
                            Spanish forces in 1897, located in Brgy. Anabu II.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HistoryAndCulture;
