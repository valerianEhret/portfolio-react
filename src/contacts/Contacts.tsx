import React from 'react'
import styleContainer from '../common/styles/Container.module.css'
import style from './Contacts.module.scss'
import Title from "../common/components/title/Title";

function Contacts() {
    return (

        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container}  ${style.contactsContainer}`}>
                <Title title={'Contacts'}/>
                        <form action="" className={style.contactsForm}>
                          <input type='text'  />
                          <input type='text'  />
                            <textarea/>
                        </form>
                    <button type='submit' className={style.submitBtn}>Send</button>
            </div>

        </div>
    )
}

export default Contacts