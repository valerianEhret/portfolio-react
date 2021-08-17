import React from 'react'
import styleContainer from '../common/styles/Container.module.css'
import style from './Hire.module.scss'
import Title from "../common/components/title/Title";

function Hire() {
    return (
        <div className={style.hireBlock}>
            <div className={`${styleContainer.container} ${style.hireContainer} `}>
                    <Title title={'Ready for remote job'}/>
                    <a href='' className={style.hireBtn}>hire me</a>
            </div>

        </div>
    )
}

export default Hire