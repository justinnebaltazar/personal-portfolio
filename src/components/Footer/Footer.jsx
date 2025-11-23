import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className={styles.container}>
            <p className={styles.text}>
                © {currentYear} Justinne Baltazar
            </p>
            <p className={styles.text}>
                <a 
                    href="https://github.com/justinnebaltazar/personal-portfolio" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.link}
                >
                    View Source Code
                </a>
            </p>
        </footer>
    );
};

