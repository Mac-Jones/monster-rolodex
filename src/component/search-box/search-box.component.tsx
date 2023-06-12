import { ChangeEvent } from 'react';

import './search-box.styles.css';

interface ISearchBoxProps {
	className: string;
	placeholder?: string;
	onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
	// onChangeHandler: ChangeEventHandler<HTMLInputElement>;
}

const SearchBox = ({
	onChangeHandler,
	placeholder,
	className,
}: ISearchBoxProps) => (
	<input
		className={`search-box ${className}`}
		type='search'
		placeholder={placeholder}
		onChange={onChangeHandler}
	/>
);

export default SearchBox;
