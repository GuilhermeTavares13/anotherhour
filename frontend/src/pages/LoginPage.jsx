import { postLogin } from "../lib/auth";
import { Navigate } from "react-router";
import "../styles/ProjectsPage.css";

export default function LoginPage({ onLogin, user }) {

    if (user) {
        return <Navigate to="/projects" replace />;
    }

    async function handleFormAction(formData) {
        const email = formData.get("email");
        const password = formData.get("password");
        const user = await postLogin(email, password);
        onLogin(user);
    }

    return (
        <div id="login">
            <div id='projects' className='projects-container'>
                <h1 className="projects-title">Login</h1>
                <form className="projects-header" action={handleFormAction}>
                    <label htmlFor="email">E-Mail:</label>
                    <input type="email" name="email" id="email" required className="projects-input" />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" required className="projects-input"/>
                    <button className="projects-add-btn" type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}