import React from 'react'
import Studying from "../components/Studying";
import {FaReact, FaSass, FaHtml5,FaJs, FaDatabase, FaNode, FaMobile} from 'react-icons/fa'
import SkillItem from "../components/SkillItem";
import Modnikky from "../img/modnikky/modnikky.png"
import ModnikkyAdmin from "../img/modnikky/modnikky-admin.png"
import ModnikkyBag from "../img/modnikky/modnikky-bag.png"
import ModnikkyDetail from "../img/modnikky/modnikky-detail.png"
import ModnikkySignup from "../img/modnikky/modnikky-signup.png"
import Hotel from "../img/hotel/hotel.png"
import HotelRoom from "../img/hotel/hotel-room.png"
import HotelServices from "../img/hotel/hotel-services.png"
import HotelRest from "../img/hotel/hotel-rest.png"
import HotelMenu from "../img/hotel/hotel-menu.png"
import Project from "../components/Project";

const Skills = () => {
    return <div className="wrapper">
        <div className="container">
            <div className="title pt-50">Studying</div>
            <Studying years="2016-2018" text="Computer Science" title="College of Chernivtsi National University"/>
            <Studying years="2018-now" text="Software engineering" title="Chernivtsi National University"/>
            <div className="title pt-50">Skills</div>
            <ul className="skills-list">
                <SkillItem title="Html"><FaHtml5/></SkillItem>
                <SkillItem title="Css/Scss"><FaSass/></SkillItem>
                <SkillItem title="JS"><FaJs/></SkillItem>
                <SkillItem title="React/Redux"><FaReact/></SkillItem>
                <SkillItem title="SQL/Mongo"><FaDatabase/></SkillItem>
                <SkillItem title="Basic knowledge of React Native"><FaMobile/></SkillItem>
                <SkillItem title="Basic knowledge of Node/Express"><FaNode/></SkillItem>
            </ul>
            <div className="title pt-50">
                Projects
            </div>
            <Project
                id={1}
                title='Modnikky'
                text="It's an e-commerce project, kind of online shop. This project has many features, for example:
                sign in/sign up, adding product to cart/removing from cart, redirecting to sign in page,
                if you are not signed in and you clicked on pay button,
                adding personal/delivery information, choosing payment method(by card/paypal).
                Also there is an email distribution, if you forgot a password you would be able to reset password.
                If you are an admin, you can visit admin page. There are list of products, categories of products and orders,
                that customers did on this website. You have an opportunity to add/update/remove products and categories.
                This project was made in MERN stack(Mongo, Express, React, NodeJs).
                And I think that's beautiful :)
                "
                link={"https://github.com/leralera2201/modnikky"}
                images={[
                    {src: Modnikky,  caption: 'Shop page'},
                    {src: ModnikkyDetail,  caption: 'Product detail page'},
                    {src: ModnikkyBag,  caption: 'Cart Page'},
                    {src: ModnikkyAdmin,  caption: 'Admin page'},
                    {src: ModnikkySignup,  caption: 'Sign up page'},
                   ]}
                />
            <Project
                id={2}
                title='Hotel template'
                text="It's a hotel template, making in Html/Css/Js. Without any logic, except for moving to other pages.
                There are a slider, many animation. Also it's an adaptive website for any mobile.
                "
                link="https://github.com/leralera2201/Valera-hotel"
                images={[
                    {src: Hotel,  caption: 'Consecutur adiscip elit'},
                    {src: HotelRoom,  caption: 'Consecutur adiscip elit'},
                    {src: HotelServices,  caption: 'Consecutur adiscip elit'},
                    {src: HotelRest,  caption: 'Consecutur adiscip elit'},
                    {src: HotelMenu,  caption: 'Consecutur adiscip elit'},
                ]}
            />
        </div>
    </div>
}

export default Skills
