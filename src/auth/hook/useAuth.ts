import {AuthCredentials, authRequest} from "../AuthRequest.ts";
import { useState} from "react";

export default function useAuth({endpoint, method}: authRequest){
    const [authResponse, setResponse] = useState<object | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<null | string>(null);

    const prepareCredential = ({username, password}: AuthCredentials) : object => {
        if (method === 'SIGN-UP') {
            return {
                username: username,
                password: password,
                roleRequest: {
                    roleListName: ['INVITED']
                }
            }
        }

        return {username: username, password: password};
    }

    const submitCredentials = async ({username, password}: AuthCredentials) => {
        const preparedCredentials = prepareCredential({username, password});
        setLoading(true);
        setError(null);
        prepareCredential({username, password})

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(preparedCredentials)
            });
            const data = await response.json();
            setResponse(data);
        } catch (err){
            console.log(err);
            setError('Something went wrong');
        } finally {
            setLoading(false);
        }
    }

    return { authResponse, submitCredentials, loading, error };
}