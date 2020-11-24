import React, { useState } from 'react';
import colors from './colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// TODO check https://codepen.io/Don-m/pen/mmgyQG
export default function Input({
	placeHolder,
	value,
	style,
	onChange,
	name,
	icon,
	error
}) {
	const [isHidden, setIsHidden] = useState(true);
	return (
		<div css={{ position: 'relative' }}>
			<input
				type={isHidden ? 'password' : 'input'}
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
			/>

			<FontAwesomeIcon
				icon={isHidden ? faEye : faEyeSlash}
				onClick={() => setIsHidden(!isHidden)}
				style={{
					width: 20,
					color: 'lightGrey',
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
