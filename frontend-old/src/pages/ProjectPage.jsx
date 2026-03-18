import { useParams } from "react-router";
import { LoadProject } from "../lib/http";
import { useEffect, useState } from "react";

export function ProjectPage() {
    const [project, setProject] = useState({});

    const { id } = useParams();

    useEffect(() => {
        LoadProject(id).then((projects) => setProject(projects[0]));
    }, [id]);

    return (
        <div>
            <h1>Project Details</h1>
            {project.name && (
                <div>
                    <h2>{project.name}</h2>
                </div>
            )}
        </div>
    );
}
