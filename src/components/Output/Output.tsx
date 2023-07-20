import { FC } from 'react';

import styles from './Output.module.scss';

import { ItemSearch } from '../ItemSearch/ItemSearch';

type Props = {
	matchItems: string[];
	handleSetValue: (match: string) => void;
};

export const Output: FC<Props> = ({ matchItems, handleSetValue }) => {
	if (!matchItems.length) {
		return (
			<div className={styles.output}>
				<h1 className={styles.title}>🌀 No matches !</h1>
			</div>
		);
	}

	return (
		<div className={styles.output}>
			{matchItems.map((title, index) => (
				<ItemSearch key={index} title={title} handleSetValue={handleSetValue} />
			))}
		</div>
	);
};
