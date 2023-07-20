import { FC, useState } from 'react';

import styles from './App.module.scss';

import { Search } from '../Search/Search';
import { Output } from '../Output/Output';

import data from './../../data/data.json';

export const App: FC = () => {
	const [value, setValue] = useState<string>('HTML');
	const [items] = useState<string[]>(data);
	const [matchItems, setMatchItems] = useState<string[]>([]);

	const onChangeValue = (str: string) => {
		setValue(str);
		console.log(value);
	};

	const handleSearch = () => {
		if (value === '') return;

		const lowerCaseValue = value.toLowerCase();

		setMatchItems(
			items.filter(item => item.toLowerCase().includes(lowerCaseValue))
		);
	};

	const handleSetValue = (match: string) => {
		setValue(match);
	};

	return (
		<div className={styles.application}>
			<Search
				value={value}
				onChangeValue={onChangeValue}
				handleSearch={handleSearch}
			/>
			<Output matchItems={matchItems} handleSetValue={handleSetValue} />
		</div>
	);
};
