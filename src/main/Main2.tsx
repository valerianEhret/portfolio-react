import React from 'react'
import styles from './Main2.module.scss'
import avatar from '../assets/images/avatar.jpg'
import {Fade} from "react-awesome-reveal";
import Typewriter from 'typewriter-effect';
import Particles from 'react-particles-js';

export function Main2() {

    const photo = {
        backgroundImage: `url(${avatar})`,
    };


    return (
        <div className={styles.mainBlock}>
            {/*<Fade>*/}
                <div className={styles.container}>
                    <Fade>
                    <div className={styles.greeting}>

                        <span>Hi There</span>
                        <span>I am Valerian<span>Ehret</span></span>
                        {/*<h1>Frontend Developer.</h1>*/}
                        <div className={styles.titleH1}>
                            <Typewriter
                                options={{
                                    strings: ['Frontend Developer.'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </div>

                    </div>
                    </Fade>
                    <div className={styles.photo}>
                        <div className={styles.image}>

                        </div>
                    </div>
                </div>

        </div>

    );
}