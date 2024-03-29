import React from 'react'
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import Title from "../common/components/title/Title";
import reactIcon from '../assets/images/react.png'



export function Skills() {
    return (
        <div className={style.skillsBlock} id={'skills'}>

            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={'Skills'}/>
                <div className={style.skills}>
                    <Skill title={'Development'} titleIcon={reactIcon} description={'React, Redux, Axios etc'}  />
                    <Skill title={'Foundation'} titleIcon={reactIcon} description={'JavaScript, TypeScript, HTML5, CSS3'}/>
                    <Skill title={'Testing'} titleIcon={reactIcon} description={'Unit Tests, SnapShot, Storybook'}/>
                    <Skill title={'Design'} titleIcon={reactIcon} description={'Material UI'}/>
                </div>
            </div>
        </div>
    )
}
