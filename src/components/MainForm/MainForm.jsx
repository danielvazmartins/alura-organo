import "./MainForm.css"
import FieldText from "../FieldText/FieldText";
import FieldSelect from "../FieldSelect/FieldSelect";
import Button from "../Button/Button";
import { useState } from "react";
import { newUUID } from "../../functions/helper";

export default function MainForm(props) {
    const teams = props.teams
    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setIMage] = useState('')
    const [team, setTeam] = useState('')

    const [teamName, setTeamName] = useState('')
    const [teamColor, setTeamColor] = useState('')

    const submitContributor = (e) => {
        e.preventDefault()
        props.newContributor({
            id: newUUID(),
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

    const submitTeam = (event) => {
        event.preventDefault()
        props.createTeam({
            name: teamName,
            cardColor: teamColor
        })
        setTeamName('')
    }

    return (
        <section className="mainForm">
            <form onSubmit={submitTeam}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <FieldText label="Nome do Time" value={teamName} onChange={event => setTeamName(event.target.value)} placeholder="Digite o nome do time"></FieldText>
                <FieldText label="Cor do Time" value={teamColor} onChange={event => setTeamColor(event.target.value)} placeholder="Digite a cor em hexadecimal. Ex: #FF0000"></FieldText>
                <Button>Criar Time</Button>
            </form>

            <form onSubmit={submitContributor}>
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