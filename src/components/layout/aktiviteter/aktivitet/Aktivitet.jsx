import React, { useState } from 'react'
import Aktivitet1 from '../../../../img/Aktivitet1.jpg';

const Aktivitet = () => {
    const [aktiviteter] = useState([
        { img: Aktivitet1, title: 'Verdensballetten', text: 'Verdensballet - charmerende udendørsforestilling. 13. juli 2018 på Møllerup ', link: 'Læs mere her', id: 1 },
        { img: Aktivitet1, title: 'Verdensballetten', text: 'Verdensballet - charmerende udendørsforestilling. 13. juli 2018 på Møllerup ', link: 'Læs mere her', id: 2 },
        { img: Aktivitet1, title: 'Verdensballetten', text: 'Verdensballet - charmerende udendørsforestilling. 13. juli 2018 på Møllerup ', link: 'Læs mere her', id: 3 },
        { img: Aktivitet1, title: 'Verdensballetten', text: 'Verdensballet - charmerende udendørsforestilling. 13. juli 2018 på Møllerup ', link: 'Læs mere her', id: 4 },
        { img: Aktivitet1, title: 'Verdensballetten', text: 'Verdensballet - charmerende udendørsforestilling. 13. juli 2018 på Møllerup ', link: 'Læs mere her', id: 5 },
        { img: Aktivitet1, title: 'Verdensballetten', text: 'Verdensballet - charmerende udendørsforestilling. 13. juli 2018 på Møllerup ', link: 'Læs mere her', id: 6 },
        { img: Aktivitet1, title: 'Verdensballetten', text: 'Verdensballet - charmerende udendørsforestilling. 13. juli 2018 på Møllerup ', link: 'Læs mere her', id: 7 },
        { img: Aktivitet1, title: 'Verdensballetten', text: 'Verdensballet - charmerende udendørsforestilling. 13. juli 2018 på Møllerup ', link: 'Læs mere her', id: 8 },
        { img: Aktivitet1, title: 'Verdensballetten', text: 'Verdensballet - charmerende udendørsforestilling. 13. juli 2018 på Møllerup ', link: 'Læs mere her', id: 9 },
        { img: Aktivitet1, title: 'Verdensballetten', text: 'Verdensballet - charmerende udendørsforestilling. 13. juli 2018 på Møllerup ', link: 'Læs mere her', id: 10 },
        { img: Aktivitet1, title: 'Verdensballetten', text: 'Verdensballet - charmerende udendørsforestilling. 13. juli 2018 på Møllerup ', link: 'Læs mere her', id: 11 },
        { img: Aktivitet1, title: 'Verdensballetten', text: 'Verdensballet - charmerende udendørsforestilling. 13. juli 2018 på Møllerup ', link: 'Læs mere her', id: 12 },
    ]);
    return (
        <div className="card-deck">
            {aktiviteter.map(aktivitet => {
                return (
                    <section className="col-lg-4">
                        < figure key={aktivitet.id} className="card">
                            <img src={aktivitet.img} alt="Nyhed" title="Nyhed" className="img-fluid card-img-top" />
                            <figcaption className="card-body">
                                <h3 className="card-title">{aktivitet.title}</h3>
                                <p className="card-text">{aktivitet.text}</p>
                                <a href="index.html" className="card-link">{aktivitet.link}</a>
                            </figcaption>
                        </figure>
                    </section>
                )
            })}
        </div>

    )
}

export default Aktivitet
