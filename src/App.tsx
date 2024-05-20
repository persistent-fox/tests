import './App.css';
import { multy, splitIntoWords, sum } from './functions/common';

function App() {
	return (
		<div className='App'>
			<div>{splitIntoWords('Hello  my friend!')}</div>
			<div>{sum(2, 5)}</div>
			<div>{multy(5, 5)}</div>
		</div>
	);
}

export default App;
