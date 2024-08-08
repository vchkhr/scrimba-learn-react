export default function Joke(props) {
  return (
      <div className="joke-card">
        {/* {props.setup && <p>Setup: {props.setup}</p>} */}
        <h3 style={{display: props.setup ? "block" : "none"}}>Setup: {props.setup}</h3>
        <p>Punchline: {props.punchline}</p>
      </div>
  )
}
