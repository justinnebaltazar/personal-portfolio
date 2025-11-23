import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("hero/new-email.png")} alt="email-icon" className={styles.email}/>
                    <a href="mailto:justinnebaltazar@gmail.com">justinnebaltazar@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img className={styles.linkedin} src={getImageUrl("hero/linkedinIcon.png")} alt="linkedin-icon"/>
                    <a href="https://www.linkedin.com/in/justinnebaltazar/">linkedin.com/justinnebaltazar</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("hero/githubIcon.png")} alt="github-icon" />
                    <a href="https://github.com/justinnebaltazar">github.com/justinnebaltazar</a>
                </li>
            </ul>
        </footer>
    )
};