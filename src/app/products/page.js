"use client";
import { useEffect, useState } from "react"
import axios from "axios"
import Link from "next/link";
export default function Products() {
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
    return (
    <div>
        <h1>
            Browse our products 
        </h1>
        <div className="anime-cards">
        { data &&
            
               data.map((e , key) => {
                return (
                    <div key={key}>
                   <h2>{e.title_japanese}</h2>
                   <img src={e.images.webp.image_url}/>
                   <Link href={`products/${e.mal_id.toString()}`}>See more</Link>
                   </div>
                    )
               })
        }
        </div>
    </div>
    )
} 