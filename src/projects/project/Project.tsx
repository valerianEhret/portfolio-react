import React from 'react'
import style from './Project.module.scss'
import { Fade } from "react-awesome-reveal";

type ProjectPropsType = {
    title: string
    description: string
    style: any
    linkDemo:string
    linkCode?:string
}

export function Project(props: ProjectPropsType) {
    return (

        <div className={style.project}>
            <Fade>
            <div className={style.image} style={props.style}>
                <a href={props.linkDemo} className={style.viewBtn}>see</a>
            </div>

            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
            </Fade>
        </div>
    )
}

