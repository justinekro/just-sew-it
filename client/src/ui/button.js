import React from 'react';
import colors from './colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Button({
	isReversed,
	ref,
	onClick,
	text = '',
	style,
	textStyle,
	type,
	icon,
	children
}) {
	return (
		<button
			ref={ref}
			css={[
				styles.mainButton,
				isReversed ? styles.reversedButton : styles.button,
				!icon && { justifyContent: 'center' },
				style
			]}
			onClick={onClick}
			type={type}
		>
			{!!icon && <FontAwesomeIcon icon={icon} />}
			<p style={textStyle}>{text.toUpperCase()}</p>
			{children}
		</button>
	);
}

export const styles = {
	mainButton: {
		'minHeight': 42,
		'outline': 0,
		'cursor': 'pointer',
		'borderRadius': 4,
		'padding': '10px 20px',
		'fontWeight': 700,
		'fontSize': 12,
		'display': 'flex',
		'alignItems': 'center',
		'fontFamily': 'Raleway, sans-serif',
		'& > p': {
			margin: 0
		},
		'& > svg': {
			marginRight: 10
		},
		':focus': { outline: 'none' }
	},
	button: {
		'backgroundColor': colors.pink,
		'color': 'white',
		'border': 'none',
		':hover': {
			backgroundColor: colors.lightPink
		}
	},
	reversedButton: {
		'borderWidth': 2,
		'borderColor': colors.pink,
		'backgroundColor': 'white',
		'color': colors.pink,
		':hover': {
			borderColor: colors.lightPink,
			color: colors.lightPink
		}
	}
};
