import React from "react";
import styles from './Button.module.scss';
import classnames from 'classnames';


const Button = ({type, text, style}) => {
    return(
        <button className={classnames(styles.btn, style)} type={type}>{text}</button>
    );
};


export default Button;