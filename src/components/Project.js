import React from 'react'
import { SRLWrapper } from 'simple-react-lightbox'

const Project = ({title, text, images, id, link}) => {

    return  <div className="project">
        <div className="project-title">
            {id}. {title}
        </div>
        <div className="project-text">
            {text}
        </div>
        <div className="project-link">
            Visit github repository: <a href={link} target='_blank' rel="noopener noreferrer">{link}</a>
        </div>
        <SRLWrapper>
            {images.map(img => <img src={img.src} key={img.src} alt={img.caption} className="project-img"/>)}
        </SRLWrapper>
    </div>
}

export default Project
