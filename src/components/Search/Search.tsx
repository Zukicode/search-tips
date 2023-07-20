import { FC } from 'react';

import styles from './Search.module.scss';

type Props = {
	value: string;
	onChangeValue: (str: string) => void;
	handleSearch: () => void;
};

export const Search: FC<Props> = ({ value, onChangeValue, handleSearch }) => {
	const handleSearchByEnter = (key: string) => {
		if (key === 'Enter') handleSearch();
	};

	return (
		<div className={styles.search}>
			<input
				type='text'
				placeholder='Search...'
				value={value}
				onKeyDown={e => handleSearchByEnter(e.key)}
				onChange={e => onChangeValue(e.target.value)}
				autoFocus
			/>
			<button onClick={handleSearch}>Go</button>
		</div>
	);
};
