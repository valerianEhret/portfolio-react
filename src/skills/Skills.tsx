import React from 'react'
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import Title from "../common/components/title/Title";

export function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={'Skills'}/>
                <div className={style.skills}>
                    <Skill title={'JS'} description={'lorem ipsum bl;a bla bla'}/>
                    <Skill title={'Css'} description={'lorem ipsum text test rqee wsdewfdswfase fsdfsdfsdf sdfsfsdfs sdfsdffsd fsчыы'}/>
                    <Skill title={'React'} description={'lorem ipsum lorem ipsum lorem ipsum lorem ipsum'}/>
                </div>
            </div>
        </div>
    )
}
