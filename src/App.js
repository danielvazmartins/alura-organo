import { useState } from "react";
import Banner from "./components/Banner/Banner";
import MainForm from "./components/MainForm/MainForm";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";


function App() {
	const teams = [{
		name: 'Programação',
		bgColor: '#D9F7E9',
		cardColor: '#57C278'
	}, {
		name: 'Front-End',
		bgColor: '#E8F8FF',
		cardColor: '#82CFFA'
	}, {
		name: 'Data Science',
		bgColor: '#F0F8E2',
		cardColor: '#A6D157'
	}, {
		name: 'Devops',
		bgColor: '#FDE7E8',
		cardColor: '#E06B69'
	}, {
		name: 'UX e Design',
		bgColor: '#FAE9F5',
		cardColor: '#DB6EBF'
	}, {
		name: 'Mobile',
		bgColor: '#FFF5D9',
		cardColor: '#FFBA05'
	}, {
		name: 'Inovação e Gestão',
		bgColor: '#FFEEDF',
		cardColor: '#FF8A29'
	}]

	const [contributors, setContributors] = useState([])

	const getTeamsNames = () => teams.map(team => team.name)
	const getContributorsOfTeam = (teamName) => {
		return contributors.filter(contributor => contributor.team === teamName)
	}

	const renderTeams = () => {
		return teams.map((team, index) => <Team key={index} team={team} contributors={getContributorsOfTeam(team.name)}></Team>)
	}

	return (
		<>
			<Banner></Banner>
			<MainForm teams={getTeamsNames()} newContributor={(contributor) => setContributors([...contributors, contributor])}></MainForm>
			{renderTeams()}
			<Footer></Footer>
		</>
	);
}

export default App;
