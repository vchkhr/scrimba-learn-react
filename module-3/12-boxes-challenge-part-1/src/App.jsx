import React from "react"
import boxes from "./boxes"

export default function App() {
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from boxes.js
     * 2. Map over that state array and display each one
     *    as an empty square (black border, transparent bg color)
     *    (Don't worry about using the "on" property yet)
     */

    const [boxesArray, setBoxesArray] = React.useState(boxes)
    
    const boxesDisplay = boxesArray.map(box => (
        <div key={box.id} className={box.on ? 'box box-filled' : 'box'}></div>
    ))

    return (
        <main>
            <h1>Boxes will go here</h1>
            <div className="boxes">
                {boxesDisplay}
            </div>
        </main>
    )
}
