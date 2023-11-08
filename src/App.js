import { useState } from "react";
import Banner from "./components/Banner/Banner";
import MainForm from "./components/MainForm/MainForm";


function App() {
	const [contributors, setContributors] = useState()

	return (
		<>
			<Banner></Banner>
			<MainForm newContributor={(contributor) => console.log(contributor)}></MainForm>
		</>
	);
}

export default App;
