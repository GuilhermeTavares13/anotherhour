import { postLogin } from "../utils/http"

export default function Login() {

    async function handleFormAction(formData) {
        const email = formData.get("email");
        const password = formData.get("password");
        const response = await postLogin(email, password);
        console.log(response);
    }

    return (
        <div id="login">
            <h1>Login</h1>
            <form action={handleFormAction}>
                <label htmlFor="email">E-Mail:</label>
                <input type="email" name="email" id="email" required/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" required/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}