
import React from "react";
import '@coreui/coreui/dist/css/coreui.min.css'
import { CCarousel } from '@coreui/react'
import { CCarouselCaption } from '@coreui/react'
import { CCarouselItem } from '@coreui/react'
import { CImage } from '@coreui/react'
import ReactIMG from '../IMG/ReactIMG.jpg';
import VueIMG from "../IMG/VueIMG.jpg";
import angularIMG from "../IMG/angularIMG.jpg"


export default function Carousel2() {
    return(
            <CCarousel controls indicators>
                <CCarouselItem>
                    <CImage className="d-block w-100" src={ReactIMG} alt="slide 1" />
                    <CCarouselCaption className="d-none d-md-block">
                    <h5>SIH 2022 Winners</h5>
                    <p>Software Category Project with Domain of Web-development and ML</p>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100" src={VueIMG} alt="slide 2" />
                    <CCarouselCaption className="d-none d-md-block">
                    <h5>Grand Finalist of SIH 2022</h5>
                    <p>Hardware Category Project with Domain of Embedded Systems and IoT</p>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100" src={angularIMG} alt="slide 3" />
                    <CCarouselCaption className="d-none d-md-block">
                    <h5>Industry level project</h5>
                    <p>Software + Web dev + AI/ML</p>
                    </CCarouselCaption>
                </CCarouselItem>
            </CCarousel>
    )
}