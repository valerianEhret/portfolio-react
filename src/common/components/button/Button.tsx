import React from 'react'
import style from './Button.module.scss';

type ButtonPropsType = {
    title:string
    onClock:()=>void
}


function Button(props:any) {
    return (
        <div>
           <a href='' className={style.btn}>{props.text}</a>
        </div>
    );
}

export default Button;