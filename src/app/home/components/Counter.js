import "./Random.css"
import {add , sub , res} from "../../../lib/features/counter/counterSlice"
import { useDispatch , useSelector} from "react-redux"
export default function Counter() {
    const counter = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()
    return (
        <div className="counter">
            <h2 style={{backgroundColor: counter > 0 ? " blue " : counter < 0 ? " red " : "" , transition: "0.5s"}}>{counter}</h2>
            <div className="buttons">
                <button onClick={() => dispatch(add())}>increment</button>
                <button onClick={() => dispatch(sub())}>decrement</button>
                <button onClick={() => dispatch(res())}>reset</button>
            </div>
        </div>
        )
}