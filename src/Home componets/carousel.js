import React from "react";
import arrow from "../IMG/arrow.png"


export default function Carousel() {

    return(
        <>
        <div className="carousel">
            <div className = "carousel-card">Project 1</div>
            <div className = "carousel-card">Project 1</div>
            <div className = "carousel-card">Project 1</div>
        </div>
        <div className="div-arrow">
            <span>
                <img src={arrow} alt="arrow" className="back-arrow"/>
            </span>
            <span>
                <img src={arrow} alt="arrow" />
            </span>
        </div>
        </>
    )
}