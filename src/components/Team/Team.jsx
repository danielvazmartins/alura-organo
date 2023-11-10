import Contributor from "../Contributor/Contributor"
import "./Team.css"
import hexToRgba from "hex-to-rgba"

export default function Team(props) {
    const {name, cardColor} = props.team
    const contributors = props.contributors

    const renderContributors = () => {
        return contributors.map((contributor, index) => {
            return <Contributor key={index} contributor={contributor} cardColor={cardColor} remove={props.removeContributor}></Contributor>
        })
    }

    return (
        contributors.length > 0 &&
        <section className="box-team" style={{ backgroundColor: hexToRgba(cardColor, 0.3) }}>
            <h1 style={{ orderColor: cardColor }}>{name}</h1>
            <input type="color" className="input-color" value={cardColor} onChange={event => { props.changeColor(name, event.target.value) }}/>
            <div className="box-contributors">
                {renderContributors()}
            </div>
        </section>
    )
}