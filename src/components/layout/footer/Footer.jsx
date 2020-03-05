import React from 'react'
import './Footer.scss';

const Footer = () => {
    return (
        <div className="container">
            <article className="row pt-4 pb-2">
                <section className="col-lg-3 col-12">
                    <p>Møllerup Gods</p>
                    <p>Møllerupvej 26</p>
                    <p>8410 Rønde</p>
                </section>
                <section className="col-lg-3 col-12">
                    <p>Telefon 87 58 69 00</p>
                    <p><a href="index.html">info@moellerup.dk</a></p>
                </section>
                <section className="col-lg-3 col-12">
                    <p>Tekst Lone Rubin</p>
                </section>
            </article>
        </div>
    )
}

export default Footer
