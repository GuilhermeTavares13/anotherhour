import { useParams } from "react-router";
import { LoadProject } from "../lib/http";
import { useEffect, useState } from "react";
import "../styles/ProjectPage.css";

export function ProjectPage() {
    const [project, setProject] = useState({});

    const { id } = useParams();

    useEffect(() => {
        LoadProject(id).then((projects) => setProject(projects[0]));
    }, [id]);

    return (
        <div className="project-page-container">
            <h1>Project Details</h1>
            {project.name && (
                <div>
                    <h2>{project.name}</h2>
                </div>
            )}
        </div>
    );
}
