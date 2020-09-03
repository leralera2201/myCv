import React from 'react'
import Typical from 'react-typical'
import Resume from '../img/resume.pdf'

const About = ({history}) => {

    return <div className='wrapper'>
        <div className="container">
            <div className="title">Hi, my name is Lera Vodianchuk.</div>

            <div className="text" >
                <Typical
                    steps={["I'm 19 and I'm a student of Chernivtsi National University. Now I'm looking for job as React Developer. Feel free to contact me.", 1000]}
                    wrapper="p"
                />
            </div>
            <div className="text">
               This is my resume
            </div>
            <div className="flex">
                <button className="btn-secondary">
                    <a href={Resume} download>Download Resume</a>
                </button>
                <button className="btn-secondary" onClick={() => history.push('/skills')}>
                    Go to skills
                </button>
            </div>

        </div>
    </div>
}

export default About
