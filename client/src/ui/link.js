import React from 'react';
import colors from './colors';

export default function Link({ text, onClick, style }) {
	return (
		<a css={[styles.link, style]} onClick={onClick}>
			{text}
		</a>
	);
}

const styles = {
	link: {
		'width': 'fit-content',
		'cursor': 'pointer',
		'fontSize': 12,
		'fontFamily': 'Raleway, sans-serif',
		'color': colors.pink,
		'textDecoration': 'none',
		'transition': 'color 0.5s ease',

		':hover': {
			color: colors.lightPink
		},
		'&::after': {
			content: `''`,
			width: '0px',
			height: '1px',
			display: 'block',
			backgroundColor: colors.lightPink,
			transition: 'width 0.5s ease, background-color 0.5s ease'
		},
		'&:hover::after': {
			width: '100%',
			backgroundColor: colors.lightPink
		}
	}
};
