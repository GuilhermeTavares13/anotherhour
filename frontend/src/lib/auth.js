import { jwtDecode } from "jwt-decode";

const API_URL = 'http://localhost:3000/user';
const ACCESS_TOKEN_KEY = 'accessToken';

export async function postLogin(email, password) {
    const response = await fetch(`${API_URL}/login`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        }
    );

    if (!response.ok) {
        return null;
    }

    const { token } = await response.json();
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
    return getUserFromToken(token);
}

export function getUser() {
    const token = getAccessToken();
    if(!token) {
        return null;
    }
    return getUserFromToken(token);
}

export function getAccessToken() {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
}

function getUserFromToken(token) {
    const claims = jwtDecode(token);
    return {
        id: claims.sub,
        email: claims.email
    }
}