import { FC } from 'react';

import styles from './ItemSearch.module.scss';

type Props = {
	title: string;
	handleSetValue: (match: string) => void;
};

export const ItemSearch: FC<Props> = ({ title, handleSetValue }) => {
	const handleClick = () => {
		handleSetValue(title);
	};

	return (
		<div onClick={handleClick} className={styles.itemSearch}>
			<p>{title}</p>
		</div>
	);
};
