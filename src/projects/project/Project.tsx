import React from 'react'
import style from './Project.module.css'

type ProjectPropsType = {
    title: string
    description:string
}

export function Project(props:ProjectPropsType) {
    return (
        <div className={style.project}>
            <div className={style.image}>
                <a href='#' className={style.viewBtn}>see</a>
            </div>
            <div className={style.project_title}>
                <h3 className={style.title}>{props.title}</h3>
            </div>
            <div className={style.description}>
                <span >{props.description}</span>
            </div>

        </div>
    )
}

