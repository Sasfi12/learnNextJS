"use client"; 
import { useEffect, useState } from "react"
import Link from "next/link";
import Counter from "./components/Counter";
export default function Home() {
    const [isLoaded , setIsLoaded] = useState(false); 
    
    useEffect(() => setIsLoaded(true) , [])
    if(!isLoaded) {
        return (
            <h1>Loading...</h1>
        )
    }
    
    return (
        <div>
            <Counter/>
        </div>
    )
}