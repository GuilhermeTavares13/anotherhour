import { useEffect } from "react";
import { LoadProjects } from "../lib/http";

export function ProjectsPage({user}) {

    useEffect(() => {
        LoadProjects(user);
    }, [])

    return(
        <div id='projects'>
            <ul>
                
            </ul>
        </div>
    );
}