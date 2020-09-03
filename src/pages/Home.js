import React from 'react'
import MyImage from '../img/iam.JPG'

const Home = () => {
    return <div className="main">
        <div className="img">
            <img src={MyImage} alt=""/>
        </div>
       <div className="title">Lera Vodianchuk</div>
       <div className="text ">Frontend developer</div>
    </div>
}

export default Home
