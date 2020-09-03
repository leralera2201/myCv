import React from 'react'
import {Link} from 'react-router-dom'

const Button = ({link, title}) => {
    return <Link to={link}>
        <div className="btn">
            {title}
        </div>
    </Link>
}

export default Button
