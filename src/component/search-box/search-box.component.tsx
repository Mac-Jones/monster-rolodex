import { ChangeEventHandler } from 'react';

import './search-box.styles.css';

// typing functions
// const func: (a: string, b: number, c: boolean) => void = (a,b,c) => {}

//typing objects
// interface ISearchBoxProps {
// 	className: string;
// 	placeholder?: string;
// }

// interface ISearchBoxProps {
// 	onChangeHandler: (a: string) => void;
// }

type SearchBoxProps = {
	className: string;
	placeholder?: string;
	onChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

const SearchBox = ({
	placeholder,
	className,
	onChangeHandler,
}: SearchBoxProps) => (
	<input
		className={`search-box ${className}`}
		type='search'
		placeholder={placeholder}
		onChange={onChangeHandler}
	/>
);

export default SearchBox;
