import React from 'react'
import style from './Project.module.css'

type ProjectPropsType = {
    title: string
    description:string
}

export function Project(props:ProjectPropsType) {
    return (
        <div className={style.project}>
            <div className={style.project_Img_Container}>
                <a href='#' className={style.button}>see</a>
            </div>
            <div className={style.project_title}>
                <h3 className={style.project_title}>{props.title}</h3>
            </div>
            <div className={style.description}>
                <span >{props.description}</span>
            </div>

        </div>
    )
}

