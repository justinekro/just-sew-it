import React, { useState } from 'react';
import colors from './colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

export default function Input({
	placeHolder,
	value,
	style,
	onChange,
	name,
	icon,
	error
}) {
	const [isFocused, setIsFocused] = useState(false);
	return (
		<div css={{ position: 'relative' }}>
			<input
				onChange={e => {
					onChange(e.target.value);
				}}
				placeholder={placeHolder}
				value={value}
				css={[
					styles.input,
					style,
					!!icon && { paddingLeft: 35 },
					!!error && { border: '2px solid red' }
				]}
				name={name}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
			/>
			<FontAwesomeIcon
				icon={faTimesCircle}
				onClick={() => onChange('')}
				style={{
					width: 20,
					height: 20,
					borderRadius: 20,
					color: isFocused ? 'lightGrey' : 'white',
					transition: 'color 0.7s ease',
					position: 'absolute',
					display: 'block',
					top: 11,
					right: 11
				}}
			/>
			{!!error && (
				<div
					css={{ fontSize: 10, color: 'red', position: 'absolute', bottom: 2 }}
				>
					{error}
				</div>
			)}
		</div>
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
		'width': '100%',
		'height': 42,
		'borderRadius': 4,
		'border': '1px solid #ccc',
		'outline': 0,
		'padding': 0,
		'paddingLeft': 10,
		'paddingRight': 20,
		'fontSize': 12,
		'fontFamily': 'Raleway, sans-serif',
		'transition': 'border-color 0.7s ease',
		'::placeholder': {
			color: '#ccc'
		},
		':focus': {
			borderColor: colors.lightPink,
			borderWidth: 2
		}
	}
};
