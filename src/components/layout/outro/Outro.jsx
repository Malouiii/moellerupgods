import React from 'react'
import Instagram from './instagram/Instagram'
import Nyhedsbrev from './nyhedsbrev/Nyhedsbrev'
import DKC from './dkc/DKC'

const Outro = () => {
    return (
        <article className="row mb-4">
            <section className="col-12">
                <DKC />
            </section>
            <section className="col-lg-9 col-12">
                <Instagram />
            </section>
            <section className="col-lg-3 col-12">
                <Nyhedsbrev />
            </section>
        </article>
    )
}

export default Outro
