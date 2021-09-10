import React, {useCallback, useEffect, useRef} from 'react'
import styles from './Menu.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-scroll";


type MenuType = {
    header:any
    items:any
    active:any
    setActive:any
}


const Menu:React.FC<MenuType> = ({header, items, active, setActive}) =>{

    const modalRef = useRef(null)

    const onClickOutsideHandler = useCallback(
        (event) => {
            if (
                active &&
                !(
                    //@ts-ignore
                    modalRef.current && modalRef.current.contains(event.target)
                )
            ) {
                setActive(false);
            }
        },
        [active, modalRef,setActive]
    );

    useEffect(() => {
        window.addEventListener('click', onClickOutsideHandler);
        return () => {
            window.removeEventListener('click', onClickOutsideHandler);
        };
    }, [onClickOutsideHandler]);

    return (<div className={`${active ? styles.menuActive : styles.menu}`}>
            <div className={styles.menuContent}>
                <div className={styles.closeMenu} onClick={() => {
                    setActive(false)
                }}>
                    <FontAwesomeIcon icon={faTimesCircle}/>
                </div>
                <div className={styles.menuHeader}>
                    {header}
                </div>
                <div className={styles.items}>
                    {items.map((item:any, index:any) =>
                        <div key={index} className={styles.oneItem}>
                            <Link
                                className={styles.link}
                                activeClass={styles.active}
                                to={item}
                                spy={true}
                                smooth={true}
                                offset={-99}
                                duration={500}
                            >{item}</Link>
                        </div>)}
                </div>
            </div>
        </div>
    );
}

export default Menu;