import React from 'react'
import Button from "./Button";

const Header = () => {
    return <div className="header">
        <Button link='/' title='Home'/>
        <Button link='/about' title='About'/>
        <Button link='/skills' title='Skills'/>
        <Button link='/contact' title='Contact'/>
    </div>
}

export default Header
