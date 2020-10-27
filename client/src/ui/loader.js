import React from 'react';
import { css } from 'glamor';
import { colors } from '.';

function ActivityIndicator({ color, size, style }) {
	let dots = [];
	const NUMBER_OF_DOTS = 3;
	for (let i = 0; i < NUMBER_OF_DOTS; i++) {
		dots.push(
			<div
				key={i}
				css={[
					styles.bar,
					{ backgroundColor: color, height: size, width: size },
					i === NUMBER_OF_DOTS - 1
						? undefined
						: i % 2 === 0
						? { animationDelay: '-0.32s' }
						: { animationDelay: '-0.16s' }
				]}
			/>
		);
	}
	return (
		<div css={[styles.spinner, { height: size, width: size * 3 + 24 }, style]}>
			{dots}
		</div>
	);
}

ActivityIndicator.defaultProps = {
	color: colors.pink,
	size: 12
};

const spin = css.keyframes({
	'0%, 80%, 100%': { opacity: 0 },
	'30%, 50%': { opacity: 1 }
});

const styles = {
	spinner: {
		display: 'flex',
		flexDirection: 'row',
		position: 'relative',
		justifyContent: 'center',
		alignItems: 'center'
	},
	bar: {
		borderRadius: '100%',
		display: 'inline-block',
		animation: `${spin} 1s infinite ease-in-out both`,
		margin: '0 4px'
	}
};

export default ActivityIndicator;
