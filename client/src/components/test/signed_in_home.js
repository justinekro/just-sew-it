import React from 'react';
import { breakpoints } from '../ui';
import Card from './card';
import NewCard from './new_card';
import { withUser } from '../contexts';
import { Masonry } from 'gestalt';
import 'gestalt/dist/gestalt.css';

class SignedInHome extends React.Component {
	render() {
		const { userProjects } = this.props;

		const hasCards = Object.keys(userProjects || {}).length > 0;

		return (
			<div css={{ width: '100%' }}>
				<NewCard hasCards={hasCards} />
				{hasCards && (
					<Masonry
						comp={Card}
						items={Object.keys(userProjects || {})
							.sort(
								(a, b) => userProjects[b].createdAt - userProjects[a].createdAt
							)
							.map(cardId => userProjects[cardId])}
						minCols={1}
						flexible={true}
						gutterWidth={15}
					/>
				)}
			</div>
		);
	}

	onCardDisplay = card => {
		this.setState(prevState => ({
			prevState: prevState.cardHeights.push(card)
		}));
	};
}

export default withUser(SignedInHome);

const styles = {};

// import React from 'react';
// import { breakpoints } from '../ui';
// import Card from './card';
// import NewCard from './new_card';
// import { withUser } from '../contexts';

// class SignedInHome extends React.Component {
// 	render() {
// 		const { userProjects } = this.props;

// 		const hasCards = Object.keys(userProjects || {}).length > 0;

// 		return (
// 			<div
// 				css={[
// 					hasCards
// 						? styles.container
// 						: { width: '100%', display: 'flex', justifyContent: 'center' }
// 				]}
// 			>
// 				<div
// 					css={[
// 						styles.column,
// 						!hasCards && { width: '100%' },
// 						styles.firstColumn
// 					]}
// 				>
// 					<NewCard hasCards={hasCards} />
// 					{Object.keys(userProjects || {})
// 						.sort(
// 							(a, b) => userProjects[b].createdAt - userProjects[a].createdAt
// 						)
// 						.map((cardId, index) => (
// 							<Card
// 								{...userProjects[cardId]}
// 								key={cardId}
// 								index={index}
// 								onDisplay={this.onCardDisplay}
// 							/>
// 						))}
// 				</div>
// 				{hasCards && (
// 					<div css={[styles.column, styles.secondColumn]}>
// 						{Object.keys(userProjects || {})
// 							.sort(
// 								(a, b) => userProjects[b].createdAt - userProjects[a].createdAt
// 							)
// 							.map((cardId, index) => (
// 								<Card
// 									{...userProjects[cardId]}
// 									key={cardId}
// 									index={index}
// 									onDisplay={this.onCardDisplay}
// 								/>
// 							))}
// 					</div>
// 				)}
// 			</div>
// 		);
// 	}

// 	onCardDisplay = card => {
// 		this.setState(prevState => ({
// 			prevState: prevState.cardHeights.push(card)
// 		}));
// 	};
// }

// export default withUser(SignedInHome);

// const styles = {
// 	container: {
// 		display: 'flex',
// 		width: '100%',
// 		flexDirection: 'row',
// 		margin: 'auto',
// 		justifyContent: 'space-between',
// 		maxWidth: 1042
// 	},
// 	column: {
// 		width: '100%',
// 		[breakpoints.tabletQuery]: {
// 			width: 'calc(50% - 7.5px)'
// 		}
// 	},
// 	firstColumn: {
// 		'& > div': {
// 			width: '100%'
// 		},
// 		[breakpoints.tabletQuery]: {
// 			'& > div': {
// 				':nth-of-type(2n)': {
// 					display: 'none'
// 				}
// 			}
// 		}
// 	},
// 	secondColumn: {
// 		display: 'none',
// 		[breakpoints.tabletQuery]: {
// 			'display': 'flex',
// 			'flexDirection': 'column',
// 			'& > div': {
// 				':nth-of-type(2n)': {
// 					display: 'none'
// 				},
// 				':first-of-type': {
// 					marginTop: 0
// 				}
// 			}
// 		}
// 	}
// };
