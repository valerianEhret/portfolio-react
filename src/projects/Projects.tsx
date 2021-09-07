import React from 'react'
import style from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Project} from "./project/Project";
import Title from "../common/components/title/Title";
import todoImage from '../assets/images/todolist_.jpg'
import socialImage from '../assets/images/socialNetwork_.jpg'
import {Project1} from "./project/Project1";
import imgFridayProject from '../assets/images/Friday_project.jpg';



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
                    <Project  linkDemo={'https://valerianehret.github.io/todolist/#/login'} style={socialNetwork} title='Todolist' description={'React, Redux, TS, RestAPI, Thunk, Material UI, Unit Tests '}/>
                    {/*<Project   linkDemo={'http://valerianEhret.github.io/cards/'} style={todolist} title='Cards' description={'Team project: React, Redux, TS, RestAPI, Thunk'}/>*/}
                    <Project1 img={imgFridayProject} description={'descr'} linkDemo={'https://valerianehret.github.io/todolist/#/login'} linkCode={'https://valerianehret.github.io/todolist/#/login'} title={'test'}/>
                    <Project1 img={imgFridayProject} description={'descr'} linkDemo={'https://valerianehret.github.io/todolist/#/login'} linkCode={'https://valerianehret.github.io/todolist/#/login'} title={'test'}/>
                    <Project1 img={imgFridayProject} description={'descr'} linkDemo={'https://valerianehret.github.io/todolist/#/login'} linkCode={'https://valerianehret.github.io/todolist/#/login'} title={'test'}/>
                    <Project1 img={imgFridayProject} description={'descr'} linkDemo={'https://valerianehret.github.io/todolist/#/login'} linkCode={'https://valerianehret.github.io/todolist/#/login'} title={'test'}/>
                </div>
            </div>

        </div>
    )
}

export default Projects