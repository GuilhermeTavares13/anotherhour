import { useEffect, useState, useActionState } from "react";
import { Link } from "react-router";
import { LoadProjects } from "../lib/http";
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
        <div id='projects'>
            <form action={formAction}>
                <div className="field">
                    <label htmlFor="name" className="label">Add Project</label>
                    <div className="field has-addons">
                        <div className="control is-expanded">
                            <input className="input" name="name" type="text" placeholder="Project name" required/>
                        </div>
                        <div className="control">
                            <button className="button is-light is info">Add new Project</button>
                        </div>
                    </div>
                </div>
            </form>
            <ul className="mt-3">
                <div className="fixed-grid has-auto-count">
                    <div className="grid">
                        {projects.map(project => (
                            <li className="panel" key={project.id}>
                                <div className="panel-block">
                                    <Link to={`/projects/${project.id}`}>
                                        <p className="panel-heading">{project.name}</p>
                                    </Link>
                                </div>
                                <div className="panel-block">
                                    <button className="button is-danger is-light is-small" onClick={() => handleDeleteProject(project.id)} >Delete</button>
                                </div>
                            </li>
                        ))}
                    </div>
                </div>
            </ul>
        </div>
    );
}