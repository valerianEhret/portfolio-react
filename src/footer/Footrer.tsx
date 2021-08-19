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
                        <a href='https://t.me/ValerianEhret'>
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






        // <div className={style.footerBlock}>
        //     <div className={`${styleContainer.container} ${style.footerContainer}`}>
        //             <h2 className={style.title}>Valerian Ehret</h2>
        //             <div className={style.socialNetworks}>
        //                 <div className={style.icon}>1</div>
        //                 <div className={style.icon}>2</div>
        //                 <div className={style.icon}>3</div>
        //                 <div className={style.icon}>4</div>
        //                 <div className={style.icon}>5</div>
        //
        //             </div>
        //             <span className={style.copyright}>2021 beingeorge, All Rights Reserved</span>
        //     </div>
        //
        // </div>
    )
}

export default Footer