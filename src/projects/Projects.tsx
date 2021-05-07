import React from 'react'
import style from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Project} from "./project/Project";


function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>My projects</h2>
                <div className={style.projects}>
                    <Project title='Project1' description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has  '}/>
                    <Project title='Project1' description={'Lorem Ipsum is simplypsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has  '}/>
                </div>
            </div>

        </div>
    )
}

export default Projects