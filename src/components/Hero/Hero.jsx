import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    JUSTINNE BALTAZAR
                </h1>
                 <p className={styles.description}>An aspiring developer with a keen interest in data science, machine learning, and AI, with a focus on building practical, data-driven solutions.</p>
                <ul className={styles.links}>
                    <li><a href="https://github.com/justinnebaltazar"><img src={getImageUrl("hero/github-dark.png")} alt="github-icon" className={styles.github} /></a></li>
                    <li><a href="https://www.linkedin.com/in/justinnebaltazar/"><img src={getImageUrl("hero/linkedin-dark.png")} alt="github-icon" className={styles.linkedin} /></a></li>
                    <li><a href="mailto:jfb3@sfu.ca"><img src={getImageUrl("hero/email-dark.png")} className={styles.email}></img></a></li>
                </ul>
            </div>
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
    )
};