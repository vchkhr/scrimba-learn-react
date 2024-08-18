import React from "react"

export default function App() {
    /**
     * Challenge: Set up state to track our count (initial value is 0)
     */

    const [counter, setCounter] = React.useState(0)

    function setCountPlus() {
        setCounter(counter + 1)
    }

    function setCountMinus() {
        setCounter(counter - 1)
    }

    return (
        <div className="counter">
            <button className="counter--minus" onClick={setCountMinus}>–</button>
            <div className="counter--count">
                <h1>{counter}</h1>
            </div>
            <button className="counter--plus" onClick={setCountPlus}>+</button>
        </div>
    )
}
