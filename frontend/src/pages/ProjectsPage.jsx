import { useEffect, useState } from "react";
import { Link } from "react-router";
import { LoadProjects } from "../lib/http";
import "../styles/ProjectsPage.css";

export function ProjectsPage() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        LoadProjects().then(setProjects);
    }, [])

    return (
        <div id='projects' className="projects-container">
            <h1 className="projects-title">Projects</h1>
            <div className="projects-header">
                <input type="text" className="projects-input" placeholder="Project name" required />
                <button className="projects-add-btn">Add new Project</button>
            </div>
            <ul className="projects-list">
                {projects.map(project => (
                    <li key={project.id} className="projects-list-item">
                        <Link to={`/projects/${project.id}`} className="projects-list-link">
                            {project.name}
                        </Link>
                        <button className="projects-delete-btn">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}