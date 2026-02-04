import { useEffect, useState } from "react";
import { getData } from "@/services/cache/firebaseCache";

export function useFirebase(path: string) {
    const [data, setData] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {

        try { 
            const urls = await getData(path);
            setData(urls);
        } 
        catch (caughtError) {
            setError((caughtError as Error).message);
        } 
        finally {
            setLoading(false);
        }

        };

        fetchData();
    }, [path]);

    return { data, error, loading };
}
