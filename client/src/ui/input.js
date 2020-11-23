import React from 'react';

export default function Input({
	placeHolder,
	value,
	style,
	onChange,
	name,
	icon
}) {
	return (
		<input
			onChange={e => {
				onChange(e.target.value);
			}}
			placeholder={placeHolder}
			value={value}
			css={[styles.input, style, !!icon && { paddingLeft: 35 }]}
			name={name}
		/>
	);
}

const styles = {
	inputContainer: {
		'position': 'relative',
		'& > svg': {
			position: 'absolute',
			color: 'grey',
			left: 10,
			top: 12
		}
	},
	input: {
		'height': 42,
		'borderRadius': 4,
		'border': '1px solid #ccc',
		'outline': 0,
		'padding': 0,
		'paddingLeft': 10,
		'fontSize': 12,
		'fontFamily': 'Raleway, sans-serif',
		'::placeholder': {
			color: '#ccc'
		}
	}
};
