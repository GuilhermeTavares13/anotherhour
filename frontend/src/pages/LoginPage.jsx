import { postLogin } from "../lib/auth";
import { Navigate } from "react-router";

export default function LoginPage({ onLogin, user }) {
    if ((user) && (user.id)) {
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
            <div id='projects'>
                <h1>Login</h1>
                <form action={handleFormAction}>
                    <div className="field">
                        <label htmlFor="email" className="label">E-Mail:</label>
                        <div className="control">
                            <input className="input" type="email" name="email" id="email" required/>
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" required/>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}