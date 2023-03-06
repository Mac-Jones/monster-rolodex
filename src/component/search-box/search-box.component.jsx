import { Component } from 'react';
import './search-box.styles.css';

class SearchBox extends Component {
	render() {
		// console.log(this.props); // the attributes sets on wherever you call this Component
		return (
			<input
				className={`search-box ${this.props.className}`}
				type='search'
				placeholder={this.props.placeholder}
				onChange={this.props.onChangeHandler}
			/>
		);
	}
}

export default SearchBox;
