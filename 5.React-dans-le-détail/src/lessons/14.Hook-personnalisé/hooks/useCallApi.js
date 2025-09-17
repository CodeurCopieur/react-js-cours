import { useState, useEffect } from "react";

export default function useCallApi() {

    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(true);

    useEffect(() => {
        fetch("https://api.thecatapi.com/v1/images/search")
        .then(res =>{
            if(!res.ok) throw new Error("Erreur lors de la récupération des données")
            return res.json()
        })
        .then(data => {
            setData(data);
            setLoading(false);
            setError(false);
        })
        .catch(() => setError(true))
    }, []);

    return { data, loading, error };
}