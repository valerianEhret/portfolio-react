import React from 'react'
import style from './Nav.module.css'
import styleContainer from '../common/styles/Container.module.css'

function Nav() {
    return (
        <div className={`${styleContainer.container} ${style.navContainer}`} >
            <div className={style.nav}>
                <a className={style.link} href="">Work1</a>
                <a className={style.link} href="">Work2</a>
                <a className={style.link} href="">Work3</a>
                <a className={style.link} href="">Work4</a>
            </div>
        </div>

    )
}

export default Nav