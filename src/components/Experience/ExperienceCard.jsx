import styles from "./ExperienceCard.module.css"
import { getImageUrl } from "../../utils";

export const ExperienceCard = ({ experience : {role, date, organization, descriptions, skills, link}}) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h3 className={styles.role}>{role}</h3>
                <div className={styles.info}>
                    <h4 className={styles.org}>{organization}</h4>
                    <h4 className={styles.date}>{date}</h4>
                </div>
                <ul className={styles.skills}>
                    {skills && skills.map((skill, id) => {
                        return (
                            <li className={styles.skill} key={id}>{skill}</li>
                        )
                    })}
                </ul>
                <ul className={styles.descriptions}>
                    {descriptions.map((desc, id) => {
                        return (
                            <li className={styles.desc} key={id}>{desc}</li>
                        )})
                    }
                </ul>

                {link && (
                    <div className={styles.click}>
                        <img src={getImageUrl("projects/link-icon.png")} className={styles.logo}/>
                        <a className={styles.link} href={link} target="_blank" rel="noreferrer noopener">Live</a>
                    </div>
                )}
            </div>
        </div>
    )
}