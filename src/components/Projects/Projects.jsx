import { ProjectCard } from "./ProjectCard";
import projects from "../../data/projects.json";
import styles from "./Projects.module.css";
import { Link } from "react-router-dom";

export const Projects = () => {
    const recentProjects = projects.filter((project) => project.recent);

    return (
        <section className={styles.container} id="projects">
            <div className={styles.header}>
                <h2 className={styles.title}>Projects</h2>
                <Link to="/past-projects" className={styles.viewPastProjectsBtn}>
                    View Past Projects
                </Link>
            </div>
            
            <div className={styles.projects}>
                {recentProjects.map((project, id) => {
                    return (
                        <ProjectCard key={id} project={project}></ProjectCard>
                    );

                })
            }
            </div>
        </section>
    )
};
