import React from 'react'
import style from './Header.module.scss'
import Navigation from "./nav/Navigation";

function Header() {
    return (
            <div className={style.header}>
                <Navigation/>
            </div>

    )
}

export default Header