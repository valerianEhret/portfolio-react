import React from 'react'
import style from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Project} from "./project/Project";
import Title from "../common/components/title/Title";
import todoImage from '../assets/images/todolist_.jpg'
import socialImage from '../assets/images/socialNetwork_.jpg'

function Projects() {

    const socialNetwork = {
        backgroundImage: `url(${todoImage})`,
    };

    const todolist = {
        backgroundImage: `url(${socialImage})`,
    };

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={'Projects'}/>
                <div className={style.projects}>
                    <Project style={socialNetwork} title='Project1' description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has  '}/>
                    <Project  style={todolist} title='Project2' description={'Lorem Ipsum is simplypsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hasddddd ddddddddddddddd dddddddddddd ddddddddd ddddddddd ddddddd dd dd ddddd ddd  '}/>
                </div>
            </div>

        </div>
    )
}

export default Projects