import React from 'react'
import Aktivitet from './aktivitet/Aktivitet'

const Aktiviteter = () => {
    return (
        <article className="row">
            <section className="col-12 mt-3 mb-4">
                <h3>Møllerup Gods tilbyder en perlerække af muligheder</h3>
                <p>Møllerup Gods og Hubertus Kroen er ikke alene kulturhistoriske perler, vi er også en virksomhed med højt til loftet, masser af muligheder og god plads til aktiviteter på 425 hektar - for private og erhverv</p>
            </section>
            <Aktivitet />
        </article>
    )
}

export default Aktiviteter
