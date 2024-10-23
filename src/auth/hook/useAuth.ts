interface credential {
    username: string;
    password: string;
}

const API_BASE_URL = "http://localhost:8080/auth";

export default function useAuth(endpoint: string) {

    const prepareCredential = (credential: credential) => {
        const {username, password} = credential;
        if (username === "" || password === "") return null;

        return {
            "username": username,
            "password": password
        }
    }

    const authenticate = async (credential: credential) => {
        const request = prepareCredential(credential);
        if(!request) return false;

        const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(request)
        });

        const data = await response.json();

        if (response.status === 409 || response.status === 404) return data;

        if (response.status === 400) {
            const {password, username} = data;
            const message = !!username ? `${password} y ${username}.` : password;
            return {
                message: message,
                error: "Error en los datos"
            }
        }


        window.localStorage.setItem("jwt", data.jwt);
        return data;
    };

    return {authenticate};
}