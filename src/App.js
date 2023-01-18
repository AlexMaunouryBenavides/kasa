import "./styles.css/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Logement from "./Pages/logement";
import Error from "./Pages/Error";
import About from "./Pages/About";
import NavBar from "./NavBar";

function App() {
	return (
		<>
			<NavBar />
			<div className="app">
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/About" element={<About />} />
					<Route path="/logement/:id" element={<Logement />} />

					<Route path="*" element={<Error />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
