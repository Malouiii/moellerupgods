import React from 'react'
import Nyhed from './nyhed/Nyhed'

const Nyheder = () => {
    return (
        <article className="row">
            <section className="col-12">
                <figure>
                    <img src={process.env.PUBLIC_URL + '/img/Verdensballet.jpg'} alt="Verdensballet" title="Verdensballet" className="img-fluid w-100" />
                    <figcaption>
                        <h2 className="mt-3">Verdensballetten på Møllerup Gods lørdag d. 13 juli 2019 blev en skøn aften</h2>
                        <p>Verdensballetten planlægger at komme igen næste år lørdag d. 11 juli 2020</p>
                        <p><a href="index.html">Læs mere her</a></p>
                    </figcaption>
                </figure>
            </section>
            <Nyhed />
        </article>
    )
}

export default Nyheder
