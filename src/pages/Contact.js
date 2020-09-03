import React from 'react'
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import SkillItem from "../components/SkillItem";

const Contact = () => {
    return <div className="wrapper">
        <div className="container">
            <div className="title">
                Contact me
            </div>
            <ul className="skills-list pt-50">
                <SkillItem title="380992176847"><FaPhone/></SkillItem>
                <SkillItem title="leravodancuk@gmail.com"><FaEnvelope/></SkillItem>
                <SkillItem title="Follow me on Github" link="https://github.com/leralera2201"><FaGithub/></SkillItem>
                <SkillItem title="Find me on Linkedin" link="https://www.linkedin.com/in/%D0%B2%D0%B0%D0%BB%D0%B5%D1%80%D1%96%D1%8F-%D0%B2%D0%BE%D0%B4%D1%8F%D0%BD%D1%87%D1%83%D0%BA-909588196/"><FaLinkedin/></SkillItem>
                <SkillItem title="Follow me on Instagram" link="https://instagram.com/leralera2201"><FaInstagram/></SkillItem>
            </ul>
        </div>
    </div>
}

export default Contact
