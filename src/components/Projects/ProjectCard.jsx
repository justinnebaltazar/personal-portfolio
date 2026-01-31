import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ project : {title, projectType, imageSrc, description, skills, demo, source, componentTitle}}) => {
    return (
        <div className={styles.container}>

            <div className={styles.imageContainer}>
                {imageSrc && (
                    <img src={getImageUrl(imageSrc)} alt="" className={`${styles.image} ${styles.aboutItem}`}/>
                )}
            </div>

            <div className={styles.content}>
                <div>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.description}>{description}</p>
                    <ul className={styles.skills}>
                        {skills.map((skill, id) => {
                            return (
                                <li className={styles.skill} key={id}>{skill}</li>
                            )})
                        }   
                    </ul>

                    <div className={styles.links}>
                            {demo && (
                                <div className={styles.click}>
                                    <img src={getImageUrl("projects/link-icon.png")} className={styles.logo}/>
                                    <a className={styles.github} href={demo} target="_blank" rel="noreferrer noopener">Live</a>
                                </div>
                            )}

                            {source && (
                                <div className={styles.click}>
                                    <img src={getImageUrl("hero/github-white.png")} className={styles.logo}/>
                                    <a className={styles.github} href={source} target="_blank" rel="noreferrer noopener">GitHub</a>
                                </div>
                            )}
                        
                    </div>
                </div>
            </div>
            

        </div>
    )
}