import React from "react";
import Img from "../assets/images/movieP1.png";
import styled from 'styled-components';

const Carousel = styled.div`
    margin-left: -28px;
    margin-top: 10px;
`;

const Image = styled.img`
  height: 200px;
  width: 163px;
  margin-right: 10px;
`;


function DashWatchCarousel(props) {
    return (
        <Carousel id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="row ml-1">
                        <div className="col-xs-2">
                            <Image src={Img} alt="submerge" />
                        </div>
                        <div className="col-xs-2">
                            <Image src={Img} alt="submerge" />
                        </div>
                        <div className="col-xs-2">
                            <Image src={Img} alt="submerge" />
                        </div>
                        <div className="col-xs-2">
                            <Image src={Img} alt="submerge" />
                        </div>
                        <div className="col-xs-2">
                            <Image src={Img} alt="submerge" />
                        </div>
                        <div className="col-xs-2">
                            <Image src={Img} alt="submerge" />
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="row ml-1">
                        <div className="col-xs-2">
                            <Image src={Img} alt="submerge" />
                        </div>
                        <div className="col-xs-2">
                            <Image src={Img} alt="submerge" />
                        </div>
                        <div className="col-xs-2">
                            <Image src={Img} alt="submerge" />
                        </div>
                        <div className="col-xs-2">
                            <Image src={Img} alt="submerge" />
                        </div>
                        <div className="col-xs-2">
                            <Image src={Img} alt="submerge" />
                        </div>
                        <div className="col-xs-2">
                            <Image src={Img} alt="submerge" />
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="row ml-1">
                        <div className="col-xs-2">
                            <Image src={Img} alt="submerge" />
                        </div>
                        <div className="col-xs-2">
                            <Image src={Img} alt="submerge" />
                        </div>
                        <div className="col-xs-2">
                            <Image src={Img} alt="submerge" />
                        </div>
                        <div className="col-xs-2">
                            <Image src={Img} alt="submerge" />
                        </div>
                        <div className="col-xs-2">
                            <Image src={Img} alt="submerge" />
                        </div>
                        <div className="col-xs-2">
                            <Image src={Img} alt="submerge" />
                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </Carousel>
    )
}

export default DashWatchCarousel;