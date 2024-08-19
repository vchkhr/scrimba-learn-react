import React from "react"
import boxes from "./boxes"
import Box from "./components/Box"

export default function App() {
    const [boxesArray, setBoxesArray] = React.useState(boxes)
    
    const boxesDisplay = boxesArray.map(box => (
        <Box key={box.id} on={box.on} />
    ))

    /**
     * Challenge part 2:
     * 1. Create a separate component called "Box" and
     *    replace the `div` above with our <Box /> components
     * 2. Pass the Box component a prop called `on` with the
     *    value of the same name from the `boxes` objects
     * 3. In the Box component, apply dynamic styles to determine
     *    the backgroundColor of the box. If it's `on`, set the
     *    backgroundColor to "#222222". If off, set it to "none"
     */

    return (
        <main>
            <h1>Boxes will go here</h1>
            <div className="boxes">
                {boxesDisplay}
            </div>
        </main>
    )
}
