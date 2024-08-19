import React from "react"
import boxes from "./boxes"
import Box from "./components/Box"

export default function App() {
    const [boxesArray, setBoxesArray] = React.useState(boxes)
    
    const boxesDisplay = boxesArray.map(box => (
        <Box key={box.id} on={box.on} />
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
