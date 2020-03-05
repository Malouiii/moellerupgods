import React, { useState } from 'react';
import Gourmetoplevelser from '../../../../img/Gourmetoplevelser.jpg';
import Hubertus from '../../../../img/Hubertus_Kroen.jpg';
import VerdensballetDansere from '../../../../img/Verdensballet_dansere.jpg';
import './Nyhed.scss';

const Nyhed = () => {
    const [nyheder] = useState([
        { img: Gourmetoplevelser, title: 'Køb vores hampeprodukter', text: 'På Møllerup Gods arbejder vi med hamp og hampens unikke ernæringsmæssige egenskaber. Alt vores hamp er dyrket i Danmark, og resultatet er en række gode produkter, som du kan købe her på webshoppen.', link: 'Køb online her', id: 1 },
        { img: VerdensballetDansere, title: 'Verdensballetten 2019', text: 'Siden 2012 har de klassiske gule mure på Møllerup Gods dannet rammen for Verdensballetten, og med mange tusinde gæster gennem årene er begivenheden efterhånden blevet en fasttømret og populær sommertradition på Djursland. Ogås til sommer 2019 vil vi få fornøjelsen af forstillingen på Møllerup Gods.', link: 'Se mere her', id: 2 },
        { img: Hubertus, title: 'Historien om Møllerup Gods', text: 'Marsk Stig Andersen Hvide af den magtfulde Hvideslægt er den tidligst kendte ejer af Møllerup. Mølleru var hans vigtigst besiddelse. Gården lå, som i dag, med en borg på øen og avlsbygninger på den anden side af voldgraven.', link: 'Læs historien her', id: 3 }
    ]);
    return (
        <div className="card-deck">
            {nyheder.map(nyhed => {
                return (
                    <section className="col-lg-4">
                        <figure key={nyhed.id} className="card">
                            <img src={nyhed.img} alt="Nyhed" title="Nyhed" className="img-fluid card-img-top" />
                            <figcaption className="card-body">
                                <h3 className="card-title">{nyhed.title}</h3>
                                <p className="card-text">{nyhed.text}</p>
                                <a href="index.html" className="card-link">{nyhed.link}</a>
                            </figcaption>
                        </figure>
                    </section>
                )
            })}
        </div>

    )
}

export default Nyhed
