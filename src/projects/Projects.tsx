import React from 'react'
import style from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Title from "../common/components/title/Title";
import imgTodolist from '../assets/images/todolist_.jpg';
import imgCounter from '../assets/images/counter_.jpg';
import imgFridayProject from '../assets/images/Friday_project.jpg';
import imgFutureProject from '../assets/images/future_project.jpg';
import imgFutureProject1 from '../assets/images/future_project1.jpg';
import imgReactTasks from '../assets/images/react_tasks.jpg';
import {Project} from "./project/Project";

function Projects() {
    return (
        <div className={style.projectsBlock} id={'projects'}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={'My Projects'}/>
                <div className={style.projects}>

                    <Project title={"Social Network"}
                             img={imgReactTasks}
                             description={"React, Redux, TS, RestAPI, Thunk"}
                             linkDemo={"https://github.com/valerianEhret/myCode"}
                             linkCode={"https://github.com/valerianEhret/myCode"}/>

                    <Project title={"Todolist"}
                             img={imgTodolist}
                             description={"React, Redux, TS, RestAPI, Thunk, Material UI, Unit Tests"}
                             linkDemo={"http://valerianEhret.github.io/todolist/"}
                             linkCode={"https://github.com/valerianEhret/todolist"}/>

                    <Project title={"Counter"}
                             img={imgCounter}
                             description={"React, Redux, TS"}
                             linkDemo={"https://github.com/valerianEhret/Counter"}
                             linkCode={"https://github.com/valerianEhret/Counter"}/>

                    <Project title={"Cards"}
                             img={imgFridayProject}
                             description={"Team project: React, Redux, TS, RestAPI, Thunk"}
                             linkDemo={"http://valerianEhret.github.io/cards/"}
                             linkCode={"https://github.com/valerianEhret/cards"}/>

                    <Project title={"Future Project"}
                             img={imgFutureProject}
                             description={"...in progress"}
                             linkDemo={"https://github.com/valerianEhret"}
                             linkCode={"https://github.com/valerianEhret"}/>

                    <Project title={"Future Project"}
                             img={imgFutureProject1}
                             description={"...in progress"}
                             linkDemo={"https://github.com/valerianEhret"}
                             linkCode={"https://github.com/valerianEhret"}/>
                </div>
            </div>
        </div>
    );
}


export default Projects