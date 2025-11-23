import React from "react";
import { ExperienceCard } from "./ExperienceCard";
import styles from "./Experience.module.css";
import experiences from "../../data/experience.json"

export const Experience = () => {
    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.timeline}>
                <div className={styles.timelineLine}></div>
                <div className={styles.experiences}>
                    {experiences.map((experience, id) => {
                        return (
                            <div key={id} className={styles.timelineItem}>
                                <div className={styles.timelineNode}></div>
                                <ExperienceCard experience={experience}></ExperienceCard>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
};