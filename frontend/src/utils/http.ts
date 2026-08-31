import { store } from '@/store';
import { setToken } from '@/features/auth/authSlice';

export const onLogin = async (user: { email: string, password: string }) => {
    try {
        const response = await fetch('http://localhost:3000/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        });

        if (!response.ok) {
            throw new Error('Login failed. Please check your credentials.');
        }

        const responseJSON = await response.json();

        const jwtToken: string = responseJSON.token;

        store.dispatch(setToken(jwtToken));

        return true;
    }
    catch (error) {
        console.log('Error during login:', (error as Error).message);
        return false;
    }
}

export const onSignup = async (user: { name: string, email: string, password: string }) => {
    try {
        const response = await fetch('http://localhost:3000/user/create-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        });

        if (!response.ok) {
            throw new Error('Sign up failed. Please try again.');
        }

        return await onLogin({ email: user.email, password: user.password });
    }
    catch (error) {
        console.log('Error during sign up:', (error as Error).message);
        return false;
    }
}

export interface Project {
    id: number;
    name: string;
    userId: number;
}

export const getProjects = async (token: string | null): Promise<Project[]> => {
    if (!token) return [];

    try {
        const response = await fetch('http://localhost:3000/user/project', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch projects.');
        }

        const responseJSON = await response.json();

        return responseJSON.projects ?? [];
    }
    catch (error) {
        console.log('Error during fetching projects:', (error as Error).message);
        return [];
    }
}

export const createProject = async (token: string | null, name: string): Promise<Project | null> => {
    if (!token) return null;

    try {
        const response = await fetch('http://localhost:3000/user/project/create-project', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({ name }),
        });

        if (!response.ok) {
            throw new Error('Failed to create project.');
        }

        const responseJSON = await response.json();

        return responseJSON.project ?? null;
    }
    catch (error) {
        console.log('Error during creating project:', (error as Error).message);
        return null;
    }
}



