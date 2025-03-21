import "./Random.css"
export default function Random({count , makePlusOne , makeMinusOne , reset}) {
    return (
        <div className="counter">
            <h2>Your number... {count}</h2>
            <div className="buttons">
                <button onClick={() => makePlusOne()}>increment</button>
                <button onClick={() => makeMinusOne()}>decrement</button>
                <button onClick={() => reset()}>reset</button>
            </div>
        </div>
        )
}