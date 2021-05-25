import React from 'react'
import styleContainer from '../common/styles/Container.module.css'
import style from './RemoteJob.module.css'

function RemoteJob() {
    return (
        <div className={style.remoteJobBlock}>
            <div className={`${styleContainer.container} `}>
                <div className={style.block}>
                   <div>Ready for remote job</div>
                    <button>hire me</button>
                </div>
            </div>

        </div>
    )
}

export default RemoteJob