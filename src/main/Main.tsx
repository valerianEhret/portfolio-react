import React from 'react'
import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import avatar from '../assets/images/avatar.jpg'


function Main() {

    const photo = {
        backgroundImage: `url(${avatar})`,
    };


    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.intro} >
                    <span>Hi there</span>
                    <h2>I am Valerian Ehret</h2>
                    <h1>Front-end developer</h1>
                </div>
                <div className={style.photo} style={photo}></div>
            </div>

        </div>
    )
}

export default Main