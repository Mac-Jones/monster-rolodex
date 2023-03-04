import { Component } from 'react';

class CardList extends Component {
	render() {
		const { monsters } = this.props;
		// console.log('render from cardlist');
		return (
			<div>
				{monsters.map((monster) => (
					<h1 key={monster.id}>{monster.name}</h1>
				))}
			</div>
		);
	}
}

export default CardList;
