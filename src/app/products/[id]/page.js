"use client";
import { useParams } from "next/navigation"
import {useState , useEffect} from "react"
import axios from "axios"
export default function Page() {
    const [data , setData] = useState(null);
    const [error , setError] = useState(null)
    const [loading , setLoading] = useState(true)
    useEffect(()=> {
        axios.get("https://api.jikan.moe/v4/anime?q=新世紀&sfw")
        .then((response) => {setData(response.data.data) ; setLoading(false) } )
        .catch((error) => setError(error))
    } , [])
    console.log(data)
    if(loading) {
        return <h1 className="loading">Loading products...</h1>
    }
    if(error) {
        return <h1>{error}</h1>
    }
    const params = useParams()

    return <h1>ID : {params.id}</h1>
}