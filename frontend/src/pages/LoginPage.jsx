import { postLogin } from "../lib/auth"
import { Navigate } from "react-router"

export default function LoginPage({ onLogin, user }) {

    if (user) {
        return <Navigate to="/projects" replace />
    }

    async function handleFormAction(formData) {
        const email = formData.get("email");
        const password = formData.get("password");
        const user = await postLogin(email, password);
        onLogin(user);
    }

    return (
        <div id="login">
            <h1>Login</h1>
            <form action={handleFormAction}>
                <label htmlFor="email">E-Mail:</label>
                <input type="email" name="email" id="email" required />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" required />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}