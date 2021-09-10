import React, {useState} from 'react'

import styles from './BurgerMenu.module.scss'
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Menu from "./Menu/Menu";


const BurgerMenu:React.FC<any> =({items}) => {
    const [menuActive, setMenuActive] = useState(false)
    const setMenu = () => setMenuActive(!menuActive)

    return (
        <div>
            <div className={styles.burgerBtn} onClick={setMenu}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <Menu items={items} header={'menu'} active={menuActive} setActive={setMenuActive}/>
        </div>
    );
}

export default BurgerMenu;