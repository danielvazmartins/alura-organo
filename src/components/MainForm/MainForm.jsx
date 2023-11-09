import "./MainForm.css"
import FieldText from "../FieldText/FieldText";
import FieldSelect from "../FieldSelect/FieldSelect";
import Button from "../Button/Button";
import { useState } from "react";

export default function MainForm(props) {
    const teams = props.teams
    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setIMage] = useState('')
    const [team, setTeam] = useState('')

    const sendForm = (e) => {
        e.preventDefault()
        props.newContributor({
            name,
            role,
            image,
            team
        })
        setName('')
        setRole('')
        setIMage('')
        setTeam('')
    }

    return (
        <section className="mainForm">
            <form onSubmit={sendForm}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <FieldText label="Nome" value={name} onChange={event => setName(event.target.value)} placeholder="Digite seu nome"></FieldText>
                <FieldText label="Cargo" value={role} onChange={event => setRole(event.target.value)} placeholder="Digite seu cardo"></FieldText>
                <FieldText label="Imagem" value={image} onChange={event => setIMage(event.target.value)} placeholder="Digite o endereço da imagem"></FieldText>
                <FieldSelect label="Time" items={teams} value={team} onChange={event => setTeam(event.target.value)}></FieldSelect>
                <Button>Criar card</Button>
            </form>
        </section>
    )
}