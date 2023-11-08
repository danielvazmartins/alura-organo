import "./FieldText.css";

export default function FieldText(props) {
    return (
        <div className="fieldText">
            <label>{props.label}</label>
            <input type="text" value={props.value} onChange={props.onChange} placeholder={props.placeholder} />
        </div>
    )
}