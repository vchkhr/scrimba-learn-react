export default function Card(props) {
    let badgeText

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.imageUrl} className="card--image" />
            <div className="card--stats">
                <span>{props.location}</span>
            </div>
            <div className="card--stats">
                <span className="gray">{props.startDate} • {props.endDate}</span>
            </div>
            <p className="card--title">
                <a href={props.googleMapsUrl} target="_blank">{props.title}</a>
            </p>
            <p className="card--description">{props.description}</p>
        </div>
    )
}
