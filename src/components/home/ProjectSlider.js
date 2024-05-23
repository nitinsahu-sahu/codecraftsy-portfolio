import React from 'react';
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ProjectSliderData } from '../DataFile/Datafile';


const ProjectSlider = () => {
    return (
        <>
            <Carousel
                interval={2500}
                autoPlay={true}
                infiniteLoop={true}
                width="100%"
                showThumbs={false}
                showStatus={false}
            >
                {
                    ProjectSliderData.map((item, index) => <Link to={`${item.src}`} target='_blank' key={index}><div >
                        <img src={`${item.img}`} alt='img' />
                    </div></Link>)
                }
            </Carousel >

        </>
    )
}
export default ProjectSlider