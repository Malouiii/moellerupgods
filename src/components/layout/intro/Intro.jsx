import React from 'react'
import Slider01 from '../../../gfx/Moellerup_Gods_4.jpg'
import Slider02 from '../../../gfx/Moellerup_Gods_1.jpg'
import Slider03 from '../../../gfx/Moellerup_Gods_8.jpg'

const Intro = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <figure className="carousel-item active">
                    <img className="d-block w-100" src={Slider01} alt="First slide"/>
                </figure>
                <figure className="carousel-item">
                    <img className="d-block w-100" src={Slider02} alt="Second slide"/>
                </figure>
                <figure className="carousel-item">
                    <img className="d-block w-100" src={Slider03} alt="Third slide"/>
                </figure>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}
                
export default Intro
