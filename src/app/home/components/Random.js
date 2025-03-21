export default function Random({count , makeitPlusOne}) {
    return (
        <div>
            <h2>Your number... {count}</h2>
            <button onClick={() => makeitPlusOne()}>This is a button</button>
        </div>
        )
}