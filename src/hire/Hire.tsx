import React from 'react'
import styleContainer from '../common/styles/Container.module.css'
import style from './Hire.module.scss'
import Title from "../common/components/title/Title";
import Button from "../common/components/button/Button";

function Hire() {
    return (
        <div className={style.hireBlock}>
            <div className={`${styleContainer.container} ${style.hireContainer} `}>
                    <Title title={'Ready for remote job'}/>
                    <Button text={'hire me'}/>
                    {/*<a href='' className={style.hireBtn}>hire me</a>*/}
            </div>

        </div>
    )
}

export default Hire