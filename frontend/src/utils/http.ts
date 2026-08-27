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



