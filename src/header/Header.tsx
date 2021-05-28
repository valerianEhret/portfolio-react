import React from 'react'
import style from './Header.module.css'
import Nav from "../nav/Nav";
import styleContainer from '../common/styles/Container.module.css'

function Header() {
    return (
            <div className={style.header}>
                <Nav/>
            </div>

    )
}

export default Header