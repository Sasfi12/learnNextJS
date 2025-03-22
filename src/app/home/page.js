"use client"; 
import { useEffect, useState } from "react"
import Counter from "./components/Counter";
import { useAppSelector } from "@/lib/hooks";
export default function Home() {
    const [isLoaded , setIsLoaded] = useState(false); 
    const counter = useAppSelector(state => state.counter.count)
    useEffect(() => setIsLoaded(true) , [])
    if(!isLoaded) {
        return (
            <h1>Loading...</h1>
        )
    }
    
    return (
        <div>
            <Counter count={counter}/>
        </div>
    )
}