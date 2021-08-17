import React from 'react'
import style from './Nav.module.scss'
import styleContainer from '../common/styles/Container.module.css'

function Nav() {

    const items = ['main', 'skills', 'projects', 'contacts', 'links']

    return (
        <div className={`${styleContainer.container} ${style.navContainer}`} >
            <nav className={style.nav}>
                <a className={style.link} href="">main</a>
                <a className={style.link} href="">skills</a>
                <a className={style.link} href="">projects</a>
                <a className={style.link} href="">contacts</a>
                <a className={style.link} href="">links</a>
            </nav>
        </div>

    )
}

export default Nav