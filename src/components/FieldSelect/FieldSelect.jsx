import "./FieldSelect.css"

export default function FieldSelect(props) {
    const renderOptions = () => {
        return props.items.map((item, index) => <option key={index} value={item}>{item}</option>)
    }

    return (
        <div className="fieldSelect">
            <label>{props.label}</label>
            <select value={props.value} onChange={props.onChange}>
                {renderOptions()}
            </select>
        </div>
    )
}