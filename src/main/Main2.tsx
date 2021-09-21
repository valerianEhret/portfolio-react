import React from 'react'
import styles from './Main2.module.scss'
import {Fade} from "react-awesome-reveal";
import Typewriter from 'typewriter-effect';


export function Main2() {

    return (
        <div className={styles.mainBlock} id={'main'}>
            <div className={styles.container}>
                <Fade>
                    <div className={styles.greeting}>
                        <span>Hi There</span>
                        <span>I am Valerian<span>Ehret</span></span>
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