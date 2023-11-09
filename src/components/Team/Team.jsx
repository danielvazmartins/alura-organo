import Contributor from "../Contributor/Contributor"
import "./Team.css"

export default function Team(props) {
    const {name, bgColor, cardColor} = props.team
    const contributors = props.contributors

    const renderContributors = () => {
        return contributors.map(contributor => {
            return <Contributor contributor={contributor} cardColor={cardColor}></Contributor>
        })
    }

    return (
        contributors.length > 0 &&
        <section className="box-team" style={{
            backgroundColor: bgColor
        }}>
            <h1 style={{
                borderColor: cardColor
            }}>{name}</h1>
            <div className="box-contributors">
                {renderContributors()}
            </div>
        </section>
    )
}