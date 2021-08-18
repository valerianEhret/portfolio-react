import React from 'react'
import styles from './Contacts.module.scss'
import Title from "../common/components/title/Title";


export const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={styles.container}>
                <Title title={'Contacts'}/>
                <form className={styles.form}>
                    <input type='text' className={styles.formArea} placeholder={'Name'}/>
                    <input type='text' className={styles.formArea} placeholder={'E-Mail'}/>
                    <textarea className={styles.messageArea} placeholder={'Message'}/>
                    <button type='submit'>Send message</button>
                </form>
            </div>
        </div>
    )
}

export default Contacts