import React from 'react'
import styleContainer from '../common/styles/Container.module.css'
import style from './Contacts.module.css'

function Contacts() {
    return (

        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container}  ${style.contactsContainer}`}>
                {/*<div className={style.block}>*/}
                    <h2 className={style.title}>Contacts</h2>
                    {/*<div className={style.form}>*/}
                        <form action="" className={style.contactsForm}>
                          <input type='text'  />
                          <input type='text'  />
                            <textarea/>
                        </form>
                    {/*</div>*/}
                    <button type='submit' className={style.submitBtn}>Send</button>
                {/*</div>*/}
            </div>

        </div>
    )
}

export default Contacts