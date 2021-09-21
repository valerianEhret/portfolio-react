import React from 'react'
import styles from './Contacts.module.scss'
import Title from "../common/components/title/Title";
import { Fade } from "react-awesome-reveal";

export const Contacts = () => {
    return (
        <div className={styles.contactsBlock} id={'contacts'}>
            <div className={styles.container}>
                <a id={"#contacts"}></a>
                <Title title={'Contacts'}/>
                <Fade>
                    <form className={styles.form}>
                        <input type='text' className={styles.formArea} placeholder={'Name'}/>
                        <input type='text' className={styles.formArea} placeholder={'E-Mail'}/>
                        <textarea className={styles.messageArea} placeholder={'Message'}/>
                        <button type='submit'>Send message</button>
                    </form>
                </Fade>
            </div>
        </div>
    )
}

export default Contacts