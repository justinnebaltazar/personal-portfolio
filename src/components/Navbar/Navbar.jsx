import React from "react";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import styles from "./Navbar.module.css";
 
export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavClick = (hash) => {
        if (location.pathname !== '/') {
            // if not on home page, navigate to home first
            navigate('/');
            // wait for nav to complete, then scroll to section
            setTimeout(() => {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            // just scroll to section if on home page
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setMenuOpen(false);
    };

    return (
        <nav className={styles.navbar}>
            <Link className={styles.title} to="/">Welcome!</Link>
            <div className={styles.menu}>
                <img className={styles.menuBtn} src={
                    menuOpen ? "./assets/nav/blackCloseBtn.png" : "./assets/nav/blackMenuBtn.png"} 
                    alt="menu-button"
                    onClick={() => {
                        setMenuOpen(!menuOpen);
                    }}>
                    </img>
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
                    <li> 
                        <a href="/#projects" onClick={(e) => {
                            e.preventDefault();
                            handleNavClick('#projects');
                        }}>Projects</a>
                    </li>
                    <li>
                        <a href="/#experience" onClick={(e) => {
                            e.preventDefault();
                            handleNavClick('#experience');
                        }}>Experience</a>
                    </li>
                    <li>
                        <a href="/#experience" onClick={(e) => {
                            e.preventDefault();
                            handleNavClick('#experience');
                        }}>Skills</a>
                    </li>
                    <li>
                        <a href="/#contact" onClick={(e) => {
                            e.preventDefault();
                            handleNavClick('#contact');
                        }}>Contact</a>
                    </li>
                </ul>
            </div>
            
        </nav>
    )
};