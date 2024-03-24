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
                        <img src={getImageUrl("about/cursonIcon.png")} alt="Cursor Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Front-End Developer</h3>
                            <p>
                                My name is Giovanni Strangio. I am currently a student in a Full Stack Web-Development course through Columbia University.
                                I have entry level experience in both Front End and Back End web design and have familiarity in utilizing API's and devoping
                                fast and responsive sites with decent UI.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};