import React from 'react'
import styleContainer from '../common/styles/Container.module.css'
import style from './Footer.module.css'

function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <div className={style.block}>
                    <span>Valerian Ehret</span>
                    <div className={style.socialNetworks}>
                        <div className={style.icon}>1</div>
                        <div className={style.icon}>2</div>
                        <div className={style.icon}>3</div>
                        <div className={style.icon}>4</div>
                        <div className={style.icon}>5</div>

                    </div>
                    <span>2021 beingeorge, All Rights Reserved</span>
                </div>


            </div>

        </div>
    )
}

export default Footer