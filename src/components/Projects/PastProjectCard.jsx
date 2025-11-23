import { getImageUrl } from "../../utils";
import styles from "./PastProjectCard.module.css";
import { Link } from "react-router-dom";

export const PastProjectCard = ({ project : {title, projectType, imageSrc, description, skills, demo, source, componentTitle}}) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                {imageSrc && (
                    <div className={styles.imageContainer}>
                        <img src={getImageUrl(imageSrc)} alt="" className={`${styles.image} ${styles.aboutItem}`}/>
                    </div>
                )}
                <h4 className={styles.projectType}>{projectType}</h4>
                <p className={styles.description}>{description}</p>
                <ul className={styles.skills}>
                    {skills.map((skill, id) => {
                        return (
                            <li className={styles.skill} key={id}>{skill}</li>
                        )})
                    }   
                </ul>
                <div className={styles.links}>
                        {demo && (<a className={styles.link} href={demo}>Demo</a>)}

                        {source && (<a className={styles.link} href={source}>Source</a>)}
                </div>
            </div>
        </div>
    )
}