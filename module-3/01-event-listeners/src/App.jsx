import React from "react"

export default function App() {
    function handleClick() {
        console.log("I was clicked!")
    }

    function handleMouse() {
        console.log("Mouse is hovering over the image")
    }
    
    /**
     * Challenge: 
     * Log something to the console when the mouse hovers over the image
     */
    
    return (
        <div className="container">
            <img onMouseEnter={handleMouse} src="https://picsum.photos/640/360" />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}
