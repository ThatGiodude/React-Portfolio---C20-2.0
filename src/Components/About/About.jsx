import React from "react";

import styles from "./About.module.css";

export const About = () => {
    return (
        <section className={styles.container} id ="about">
            <h2 className={styles.title}>ABOUT ME</h2>
            <div className={styles.content}>
                <img
                src={getImageUrl("about/Viking Boi.jpeg")}
                className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        
                    </li>
                </ul>
            </div>
        </section>
    )
}