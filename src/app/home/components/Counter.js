import "./Random.css"
export default function Counter({count , makePlusOne , makeMinusOne , reset}) {
    return (
        <div className="counter">
            <h2 style={{backgroundColor: count > 0 ? " blue " : count < 0 ? " red " : "" , transition: "0.5s"}}>{count}</h2>
            <div className="buttons">
                <button onClick={() => makePlusOne()}>increment</button>
                <button onClick={() => makeMinusOne()}>decrement</button>
                <button onClick={() => reset()}>reset</button>
            </div>
        </div>
        )
}