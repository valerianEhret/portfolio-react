import React from 'react'
import style from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Project} from "./project/Project";
import Title from "../common/components/title/Title";


function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={'Projects'}/>
                <div className={style.projects}>
                    <Project title='Project1' description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has  '}/>
                    <Project title='Project2' description={'Lorem Ipsum is simplypsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has  '}/>
                </div>
            </div>

        </div>
    )
}

export default Projects