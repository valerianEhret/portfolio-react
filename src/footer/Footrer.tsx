import React from 'react'
import styleContainer from '../common/styles/Container.module.css'
import styles from './Footer.module.scss'
import Title from "../common/components/title/Title";
import telegramIcon from '../assets/images/telegramIcon.png'
import linkedinIcon from '../assets/images/linkedinIcon.png'
import gitHubIcon from '../assets/images/gitHubIcon.png'
import codeWarsIcon from '../assets/images/codeWars.png'


function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <Title title={'Valerian Ehret'}/>
                <div className={styles.socialIcons}>
                    <div className={styles.socialIcon}>
                        <a href='https://t.me/ValerianEhret' id={"links"}>
                            <img src={telegramIcon} alt=''/>
                        </a>
                    </div>
                    <div className={styles.socialIcon}>
                        <a href='https://www.linkedin.com/in/valerian-ehret-954727210/'>
                            <img src={linkedinIcon} alt=''/>
                        </a>
                    </div>
                    <div className={styles.socialIcon}>
                        <a href='https://github.com/valerianEhret'>
                            <img src={gitHubIcon} alt=''/>
                        </a>
                    </div>
                    <div className={styles.socialIcon}>
                        <a href='https://www.codewars.com/users/valerianEhret'>
                            <img src={codeWarsIcon} alt=''/>
                        </a>
                    </div>
                </div>
                <span className={styles.copyright}>2021 All Rights Reserved.</span>
            </div>
        </div>
    )
}

export default Footer