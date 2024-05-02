import React from 'react'
import ProjectSliderData from '../DataFile/Datafile'
import { Link } from 'react-router-dom'

const ProjectSlider = () => {
    return (
        <>
            <div className="img-accordion">
                {
                    ProjectSliderData.map((docs, index)=><div key={index} className={`img acc_img_${index}`} style={{ backgroundImage: `url(${docs.img})` }}>
                    <Link to={`${docs.src}`} target='_blank'><p>{docs.title}</p></Link>
                </div>)
                }
            </div>
            </>
    )
}
export default ProjectSlider