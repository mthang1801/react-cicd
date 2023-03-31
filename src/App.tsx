import "./App.css";
import logo from "./logo.svg";

function App() {
	const [curDate, setCurDate] = useState(new Date());
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h3 onClick={() => setCurDate(() => new Date())}>
					Now : {curDate}
				</h3>
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
