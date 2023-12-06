import React from "react";
import styles from './Main.module.scss';
import Button from "../Button/Button";


const Main = () => {
    return(
        <main>
        <section className={styles.mainSection}>
            <div className={styles.formSection}>
                <div className={styles.formContent}>
                    <h2 className={styles.formContentTitle}>Оплачуй інтернет в гуртожитку <span>швидко</span></h2>
                    <h4 className={styles.formContentSubtitle}>Сайт, де ви можете оплатити за інтернет в своїй кімнаті, не стоячи в черзі</h4>
                </div>
                <div className={styles.wrapperForm}>
                    <input className={styles.formInput} type="email" placeholder="Ваша електронна адреса"/>
                    <Button type="button" style={styles.light} text="Увійти"/>
                </div>
            </div>
        </section>
        <section>
            <h2 className="formContentTitle">Working in process ... </h2>
        </section>
        </main>
    );
};


export default Main;