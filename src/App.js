import { useState, useEffect } from 'react';

import './App.css';

import CardList from './component/card-list/card-list.component';
import SearchBox from './component/search-box/search-box.component';

const App = () => {
	const [searchField, setSearchField] = useState('');
	const [title, setTitle] = useState('');
	const [monsters, setMonsters] = useState([]);
	const [filteredMonsters, setFilteredMonsters] = useState(monsters);

	console.log('rendered');

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => setMonsters(users));
	}, []);

	useEffect(() => {
		const newFilteredMonsters = monsters.filter((monster) => {
			return monster.name.toLocaleLowerCase().includes(searchField);
		});

		setFilteredMonsters(newFilteredMonsters);
	}, [monsters, searchField]);

	const onSearchChange = (event) => {
		const searchFieldString = event.target.value.toLocaleLowerCase();
		setSearchField(searchFieldString);
	};

	const onTitleChange = (event) => {
		const searchFieldString = event.target.value.toLocaleLowerCase();
		setTitle(searchFieldString);
	};

	return (
		<div className='App'>
			<h1 className='app-title'>{title}</h1>
			<SearchBox
				onChangeHandler={onSearchChange}
				placeholder='search monsters'
				className='monsters-search-box'
			/>
			<br />
			<SearchBox
				className='title-search-box'
				onChangeHandler={onTitleChange}
				placeholder='set title'
			/>
			<CardList monsters={filteredMonsters} />
		</div>
	);
};

// class App extends Component {
// 	constructor() {
// 		super();

// 		this.state = {
// 			monsters: [],
// 			searchField: '',
// 		};
// 	}

// 	componentDidMount() {
// 		fetch('https://jsonplaceholder.typicode.com/users')
// 			.then((response) => response.json())
// 			.then((users) =>
// 				this.setState(() => {
// 					return { monsters: users };
// 				})
// 			);
// 	}

// 	onSearchChange = (event) => {
// 		const searchField = event.target.value.toLocaleLowerCase();

// 		this.setState(() => {
// 			return { searchField };
// 		});
// 	};

// 	render() {
// 		console.log('render from appJs');

// 		const { monsters, searchField } = this.state;
// 		const { onSearchChange } = this;

// 		const filteredMonster = monsters.filter((monster) => {
// 			return monster.name.toLocaleLowerCase().includes(searchField);
// 		});

// 		return (
// 			<div className='App'>
// 				<h1 className='app-title'>Monsters Rolodex</h1>
// 				<SearchBox
// 					onChangeHandler={onSearchChange}
// 					placeholder='search monsters'
// 					className='monsters-search-box'
// 				/>
// 				<CardList monsters={filteredMonster} />
// 			</div>
// 		);
// 	}
// }

export default App;
