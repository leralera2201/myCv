import React from 'react'

const Studying = ({years, title, text}) => {
    return <div className="flex studying">
        <div className="studying-years">{years}</div>
        <div className="studying-info">
            <div className="studying-info-title">{title}</div>
            <div className="studying-info-text">{text}</div>
        </div>
    </div>
}

export default Studying
