import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

export default function App() {
    const cards = data.map(card => {
        return <Card
            key={card.id}
            {...card}
        />
    })

    return (
        <div>
            <Navbar />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}
