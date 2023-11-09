import "./Contributor.css"

export default function Contributor(props) {
    const { name, role, image } = props.contributor
    const cardColor = props.cardColor
    return (
        <div className="box-card" style={{
            backgroundColor: cardColor
        }}>
            <div className="header">
                <img src={image} alt={`Foto de ${name}`} />
            </div>
            <div className="content">
                <h4>{name}</h4>
                <p>{role}</p>
            </div>
        </div>
    )
}