"use client"; 
import { useEffect, useState } from "react"
import Random from "./components/Random";

export default function Home() {
    const [isLoaded , setIsLoaded] = useState(false); 
    const [number , setNumber] = useState(0)
    useEffect(() => setIsLoaded(true) , [])
    if(!isLoaded) {
        return (
            <h1>Loading...</h1>
        )
    }
    const increment = () => {
        setNumber( number + 1 )
    }
    return (
        <div>
            <Random count={number} makeitPlusOne={increment}/>
        </div>
    )
}