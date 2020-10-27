import React from 'react';

export default function Textarea({
	placeHolder,
	value,
	style,
	onChange,
	name
}) {
	return (
		<textarea
			onChange={e => {
				onChange(e.target.value);
			}}
			placeholder={placeHolder}
			value={value}
			css={[styles.input, style]}
			name={name}
		/>
	);
}

const styles = {
	input: {
		'minHeight': 100,
		'borderRadius': 4,
		'border': '1px solid #ccc',
		'outline': 0,
		'padding': 10,
		'fontSize': 14,
		'fontFamily': 'Raleway, sans-serif',
		'::placeholder': {
			color: '#ccc'
		},
		'resize': 'none'
	}
};
