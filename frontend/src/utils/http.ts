export const onLogin = async (user: { email: string, password: string }) => {
    console.log(user);
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

        localStorage.setItem('UserToken', jwtToken);

        return responseJSON;
    }
    catch (error) {
       console.log('Error during login:', error.message);
    }
}



