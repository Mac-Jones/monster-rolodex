import { useState, useEffect, ChangeEvent } from 'react';

import CardList from './component/card-list/card-list.component';
import SearchBox from './component/search-box/search-box.component';

import { getData } from './utils/data.utils';
import './App.css';

export type Monster = {
	id: string;
	name: string;
	email: string;
};

const App = () => {
	const [searchField, setSearchField] = useState('');
	const [monsters, setMonsters] = useState<Monster[]>([]);
	const [filteredMonsters, setFilteredMonsters] = useState(monsters);

	useEffect(() => {
		// fetch('https://jsonplaceholder.typicode.com/users')
		// 	.then((response) => response.json())
		// 	.then((users) => setMonsters(users));

		const fetchUsers = async () => {
			const users = await getData<Monster[]>(
				'https://jsonplaceholder.typicode.com/users'
			);
			setMonsters(users);
		};

		fetchUsers();
	}, []);

	useEffect(() => {
		const newFilteredMonsters = monsters.filter((monster) => {
			return monster.name.toLocaleLowerCase().includes(searchField);
		});

		setFilteredMonsters(newFilteredMonsters);
	}, [monsters, searchField]);

	const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
		const searchFieldString = event.target.value.toLocaleLowerCase();
		setSearchField(searchFieldString);
	};

	return (
		<div className='App'>
			<h1 className='app-title'>Monsters Rolodex</h1>
			<SearchBox
				onChangeHandler={onSearchChange}
				placeholder='search monsters'
				className='monsters-search-box'
			/>
			<br />

			<CardList monsters={filteredMonsters} />
		</div>
	);
};

export default App;
