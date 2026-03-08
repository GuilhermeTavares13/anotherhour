import { getAccessToken } from "./auth"

export async function LoadProjects({ user }) {

    const userToken = getAccessToken();

    console.log(userToken);

    const response = await fetch('http://localhost:3000/user/project', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + userToken
        }
    });

    const responseJson = await response.json();

    console.log(responseJson);
}