import React from "react";
import styles from './Header.module.scss';
import Button from "../Button/Button";


const Header = () => {
    return(
        <header className={styles.header}>
            <h1 className={styles.logo}>Go<span className={styles.wi}>Wi</span>-<span className={styles.wi}>Fi</span></h1>
            <div className={styles.wrapperBtn}>
            <Button type="button" text="Зареєструватись"/>
            <Button type="button" style={styles.light} text="Увійти"/>
            </div>
        </header>
    );
};


export default Header;