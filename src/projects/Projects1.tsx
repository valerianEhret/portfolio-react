import React from 'react'
import style from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Title from "../common/components/title/Title";
import {Project1} from "./project/Project1";
import imgTodolist from '../assets/images/todolist_.jpg';
import imgCounter from '../assets/images/counter_.jpg';
import imgFridayProject from '../assets/images/Friday_project.jpg';
import imgFutureProject from '../assets/images/future_project.jpg';
import imgFutureProject1 from '../assets/images/future_project1.jpg';
import imgReactTasks from '../assets/images/react_tasks.jpg';

function Projects1() {
    return (
        <div className={style.projectsBlock} id={'projects'}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={'My Projects'} />
                <div className={style.projects}>

                    <Project1 title={"React Tasks"}
                        img={imgReactTasks}
                        description={"React, Redux, TS, RestAPI, Thunk, Unit Tests"}
                        linkDemo={"https://pmuzychenko.github.io/react-homeworks"}
                        linkCode={"https://github.com/pmuzychenko/react-homeworks"} />

                    <Project1 title={"Todolist"}
                             img={imgTodolist}
                             description={"React, Redux, TS, RestAPI, Thunk, Material UI, Unit Tests"}
                             linkDemo={"https://pmuzychenko.github.io/todolist-training"}
                             linkCode={"https://github.com/pmuzychenko/todolist-training"} />

                    <Project1 title={"Counter"}
                             img={imgCounter}
                             description={"React, Redux, TS"}
                             linkDemo={"https://pmuzychenko.github.io/counter-with-settings"}
                             linkCode={"https://github.com/pmuzychenko/counter-with-settings"} />

                    <Project1 title={"Friday project"}
                             img={imgFridayProject}
                             description={"Team project: React, Redux, TS, RestAPI, Thunk, Material UI"}
                             linkDemo={"https://pmuzychenko.github.io/friday-cards-project/"}
                             linkCode={"https://github.com/pmuzychenko/friday-cards-project"} />

                    <Project1 title={"Future Project"}
                             img={imgFutureProject}
                             description={"...in progress"}
                             linkDemo={"https://github.com/pmuzychenko"}
                             linkCode={"https://github.com/pmuzychenko/friday-cards-project"} />

                    <Project1 title={"Future Project"}
                             img={imgFutureProject1}
                             description={"...in progress"}
                             linkDemo={"https://github.com/pmuzychenko"}
                             linkCode={"https://github.com/pmuzychenko"} />

                    {/*<Project1 title={"Future Project"}*/}
                    {/*         img={imgFutureProject2}*/}
                    {/*         description={"...in progress"}*/}
                    {/*         linkDemo={"https://github.com/pmuzychenko"}*/}
                    {/*         linkCode={"https://github.com/pmuzychenko"} />*/}

                    {/*<Project1 title={"The Social Network"}*/}
                    {/*         img={imgSocialNetwork}*/}
                    {/*         description={"React, Redux, TS, RestAPI, Thunk"}*/}
                    {/*         linkDemo={"https://github.com/pmuzychenko/social-network-ts"}*/}
                    {/*         linkCode={"https://github.com/pmuzychenko/social-network-ts"} />*/}
                </div>
            </div>
        </div>
    );
}



export default Projects1