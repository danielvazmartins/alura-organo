import { useState } from "react";

import Banner from "./components/Banner/Banner";
import MainForm from "./components/MainForm/MainForm";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";

import teamsMock from "./mock/teamsMock.json"
import contributorsMock from "./mock/contributorsMock.json"
import { includeUUID, newUUID } from "./functions/helper";


function App() {
	const [teams, setTeams] = useState(includeUUID(teamsMock))
	const [contributors, setContributors] = useState(includeUUID(contributorsMock))

	const getTeamsNames = () => teams.map(team => team.name)
	const getContributorsOfTeam = (teamName) => {
		return contributors.filter(contributor => contributor.team === teamName)
	}

	const createTeam = ({name, cardColor}) => {
		const newTeam = {
			id: newUUID(),
			name,
			cardColor
		}
		setTeams([...teams, newTeam])
	}

	const renderTeams = () => {
		return teams.map((team, index) => <Team key={index} team={team} contributors={getContributorsOfTeam(team.name)} changeColor={changeTeamColor} removeContributor={removeContributor}></Team>)
	}

	const changeTeamColor = (teamName, color) => {
		setTeams(teams.map(team => {
			if (team.name === teamName) team.cardColor = color
			return team
		}))
	}

	const removeContributor = (contributorId) => {
		setContributors(contributors.filter(contributor => contributor.id !== contributorId))
	}

	return (
		<>
			<Banner></Banner>
			<MainForm teams={getTeamsNames()} newContributor={(contributor) => setContributors([...contributors, contributor])} createTeam={createTeam}></MainForm>
			{renderTeams()}
			<Footer></Footer>
		</>
	);
}

export default App;
