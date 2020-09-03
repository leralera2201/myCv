import React from 'react'
import {IconContext} from "react-icons";

const SkillItem = ({children, title, link}) => {
    return <li>
        <IconContext.Provider value={{  size: '2rem', style: {marginRight: 10} }}>
            {children}
        </IconContext.Provider>
        <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
    </li>
}

export default SkillItem
