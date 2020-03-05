import React from 'react'
import DKCLogo from '../../../../gfx/DKC-logo.png';

const DKC = () => {
    return (
        <figure>
            <img src={DKCLogo} alt="DKC Logo" title="DKC Logo" className="img-fluid"/>
            <figcaption>
                Møllerup Gods er autoriseret partner hos Danske Konferencecentre
            </figcaption>
        </figure>
    )
}

export default DKC
