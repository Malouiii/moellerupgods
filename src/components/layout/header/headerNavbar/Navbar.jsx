import React from 'react'
import './Navbar.scss'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light mb-3">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active dropdown">
                        <a className="nav-link dropdown-toggle" href="index.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Velkommen
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="index.html">Klik her</a>
                            <a className="dropdown-item" href="index.html">Du kan også klikke her</a>
                            <a className="dropdown-item" href="index.html">Eller her</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="index.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Verdensballetten
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="index.html">Klik her</a>
                            <a className="dropdown-item" href="index.html">Du kan også klikke her</a>
                            <a className="dropdown-item" href="index.html">Eller her</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="index.html">Nyheder</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="index.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Events og mødefaciliteter
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="index.html">Klik her</a>
                            <a className="dropdown-item" href="index.html">Du kan også klikke her</a>
                            <a className="dropdown-item" href="index.html">Eller her</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="index.html">Hvad siger vores gæster</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="index.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Om Møllerup Gods
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="index.html">Klik her</a>
                            <a className="dropdown-item" href="index.html">Du kan også klikke her</a>
                            <a className="dropdown-item" href="index.html">Eller her</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="index.html">Kontakt os</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="index.html">Webshop</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
