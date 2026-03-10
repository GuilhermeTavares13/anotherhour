import { getAccessToken } from "./auth"

export async function DeleteProject(id) {

    const userToken = getAccessToken();

    await fetch(`http://localhost:3000/user/project/delete-project/${id}`, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + userToken,
            'Content-type': 'application/json'    
        },
        body: JSON.stringify({
            id
        })
    });
}

export async function CreateProject(user, name) {

    const userToken = getAccessToken();

    const response = await fetch('http://localhost:3000/user/project/create-project', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + userToken,
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            userId: user.id,
            name: name
        })
    });

    const responseJson = await response.json();

    return responseJson.project;
}

export async function LoadProject(id) {

    const userToken = getAccessToken();

    const response = await fetch('http://localhost:3000/user/project/' + id, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + userToken
        }
    });

    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson.project;
}

export async function LoadProjects() {

    const userToken = getAccessToken();

    const response = await fetch('http://localhost:3000/user/project', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + userToken
        }
    });

    const responseJson = await response.json();

    return responseJson.projects;
}