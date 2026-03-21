import React, { useState, useEffect} from "react";

export const useFetch = (url: string) => {
    const [data, setData] = useState([])
    const [error, setError] = useState<string | unknown>()
    const [loading, setLoading] = useState(false)

    const fetchingData = async() => {
        try{
            setLoading(true)
            const response = await fetch(url)
            if(!response.ok){
                throw Error("Error occured while fetching Data")
            }
            const res = await response.json()
            setData(res)
        }
        catch(err){
            setError(err)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchingData()
    }, [url])

    return {data, error, loading, reFetch: fetchingData}
}