import { useEffect, useState, useActionState } from "react";
import { Link } from "react-router";
import { LoadProjects } from "../lib/http";
import "../styles/ProjectsPage.css";
import { CreateProject, DeleteProject } from "../lib/http";

export function ProjectsPage({ user }) {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        LoadProjects().then(setProjects);
    }, []);

    const handleDeleteProject = async (id) => {
        try {
            await DeleteProject(id);
            console.log('test2')
            setProjects((prevProjects) => {
                return prevProjects.filter((project) => project.id !== id)
            });
        }
        catch (error) {
            throw new Error(error);
        }
    }

    const addProjectAction = async (prevFormState, formData) => {
        let errors = []; // Create errors check later
        const name = formData.get('name');
        
        try {
            const project = await CreateProject(user, name)
            setProjects((prevProjects) => [...prevProjects, project]);
        }
        catch (error) {
            errors.push(error);
        }
        
        return {
            errors,
            enteredValues: {
                name
            }
        };
    }

    const [formState, formAction] = useActionState(addProjectAction, { errors: null });

    return (
        <div id='projects' className="projects-container">
            <h1 className="projects-title">Projects</h1>
            <form className="projects-header" action={formAction}>
                <input name="name" type="text" className="projects-input" placeholder="Project name" required/>
                <button className="projects-add-btn">Add new Project</button>
            </form>
            <ul className="projects-list">
                {projects.map(project => (
                    <li key={project.id} className="projects-list-item">
                        <Link to={`/projects/${project.id}`} className="projects-list-link">
                            {project.name}
                        </Link>
                        <button onClick={() => handleDeleteProject(project.id)} className="projects-delete-btn">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}