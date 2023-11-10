import "./Contributor.css"
import { AiFillCloseCircle } from "react-icons/ai"

export default function Contributor(props) {
    const { id, name, role, image } = props.contributor
    const cardColor = props.cardColor

    return (
        <div className="box-card" style={{
            backgroundColor: cardColor
        }}>
            <AiFillCloseCircle size={24} className="icon-delete" onClick={() => props.remove(id)}></AiFillCloseCircle>
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