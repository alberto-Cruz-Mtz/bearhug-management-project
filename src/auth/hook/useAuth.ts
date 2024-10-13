import {useState} from "react";

interface credential {
    username: string;
    password: string;
}

const API_BASE_URL = "http://localhost:8080/auth";

export default function useAuth(endpoint: string) {

    const [error, setError] = useState(false);


    const prepareCredential = (credential: credential) => {
        const {username, password} = credential;
        if (username === "" || password === "") return null;

        if(endpoint === "/sign-up") {
            return {
                "username": username,
                "password": password,
                roleRequest: { roleListName: ["INVITED"] }
            }
        }
        return {
            "username": username,
            "password": password
        }
    }

    const authenticate = async (credential: credential) => {
        const request = prepareCredential(credential);
        if(!request) return false;

        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(request)
        });

        if (!response.ok) {
            setError(true);
            return false;
        }

        const data = await response.json();
        console.log(data);
        window.localStorage.setItem('jwt', data.status)
        return data.jwt;
    };

    return {authenticate, error};
}