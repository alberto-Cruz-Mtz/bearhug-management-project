import {useEffect, useState} from "react";

type Data<T> = T | null;
type ErrorType = Error | null;
type RequestType = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface Params<T> {
    data: Data<T>
    loading: boolean
    error: ErrorType
}

export default function useFetch<T>(url: string, request: RequestType): Params<T> {
    const [data, setData] = useState<Data<T>>(null);
    const [error, setError] = useState<ErrorType>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        const fetchData = async () => {
            try {
                const response = await fetch(url, {
                    method: request ?? 'GET',
                });

                if (!response.ok) throw new Error("Could not fetch data");

                const json: T = await response.json();
                setError(null);
                setData(json);
            } catch (error) {
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
        return () => {
            controller.abort();
        }
    }, [url]);

    return {data, loading, error}
}