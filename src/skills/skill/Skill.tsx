import React from 'react'
import style from './Skill.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Fade} from "react-awesome-reveal";
// import linkedinIcon from "../../assets/images/linkedinIcon.png";

type SkillPropsType = {
    title:string
    description:string
    titleIcon:any
}

export function Skill(props:SkillPropsType) {
    return (
        <div className={style.skill}>
            <Fade>
            <div className={style.icon}>
                <a href='#'>
                    <img src={props.titleIcon} alt=''/>
                </a>
                {/*<FontAwesomeIcon icon={props.titleIcon}/>*/}
            </div>
            <div className={style.skillInfo} >
                <h3 className={style.skillTitle}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
            </Fade>
        </div>
    )
}
