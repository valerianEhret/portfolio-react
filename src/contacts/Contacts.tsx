import React from 'react'
import styleContainer from '../common/styles/Container.module.css'
import style from './Contacts.module.css'

function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} `}>
                <div className={style.block}>
                    <div>Contacts</div>
                    <div className={style.form}>
                        <form action="" className={style.contacts_form}>
                          <input type='text'  />
                          <input type='text'  />
                            <textarea/>
                        </form>
                    </div>
                    <button>Send</button>
                </div>
            </div>

        </div>
    )
}

export default Contacts