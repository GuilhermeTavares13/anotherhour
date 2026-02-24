export async function postLogin(email, password) {
    console.log(email, password)

    const response = await fetch("http://localhost:3000/user/login",
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        }
    );
    const resData = await response.json();

    return resData.user
}
