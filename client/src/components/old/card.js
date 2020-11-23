import React, { Component, createRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPlusCircle,
	faLink,
	faEllipsisV
} from '@fortawesome/free-solid-svg-icons';
import { breakpoints, colors } from '../ui';

export default class Card extends Component {
	render() {
		const { name, todo, pictures, link } = this.props.data;
		return (
			<div css={styles.card} ref={this.card}>
				<div css={{ position: 'absolute', right: 15, top: 15, color: 'grey' }}>
					<FontAwesomeIcon icon={faEllipsisV} />
				</div>
				<p css={styles.projectTitle}>{name}</p>
				{pictures && pictures.length > 0 && (
					<div css={styles.pictures}>
						<div css={{ width: '60%', overflow: 'hidden' }}>
							<img
								src={`https://res.cloudinary.com/jujukro/image/upload/${pictures[0]}`}
								css={{ height: '100%', width: '100%', objectFit: 'cover' }}
							/>
						</div>
						<div
							css={{
								display: 'flex',
								flexDirection: 'column',
								width: '40%',
								overflow: 'hidden'
							}}
						>
							<img
								src={`https://res.cloudinary.com/jujukro/image/upload/${pictures[1]}`}
								css={{ height: '50%', objectFit: 'cover' }}
							/>
							<img
								src={`https://res.cloudinary.com/jujukro/image/upload/${pictures[2]}`}
								css={{ height: '50%', objectFit: 'cover' }}
							/>
						</div>
					</div>
				)}
				<div css={styles.secondaryInfoContainer}>
					{todo && (
						<div css={styles.todoContainer}>
							{<p css={styles.title}>{todo.title || 'To Do'}</p>}
							{todo.tasks &&
								todo.tasks.map((task, index) => (
									<div key={index}>
										{task.name}
										{task.done && ' - OK'}
									</div>
								))}
						</div>
					)}
					{link && (
						<div css={styles.todoContainer}>
							<a href={link} css={styles.linkToTutorial} target='_blank'>
								<FontAwesomeIcon icon={faLink} />
								<p css={[styles.title, styles.tutoTitle]}>Link To Tutorial</p>
							</a>
						</div>
					)}
					<div css={styles.buttonContainer}>
						<FontAwesomeIcon icon={faPlusCircle} />
					</div>
				</div>
			</div>
		);
	}
}

const styles = {
	card: {
		position: 'relative',
		backgroundColor: colors.lightGrey,
		marginTop: 15,
		padding: 15,
		height: 'fit-content',
		boxShadow: '0px 0px 7px 1px rgba(186,182,186,1)',
		borderRadius: 4,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexWrap: 'wrap'
	},
	withoutMarginTop: {
		[breakpoints.tabletQuery]: {
			marginTop: 0
		}
	},
	projectTitle: {
		fontWeight: 'bold',
		marginBottom: 15
	},
	pictures: {
		display: 'flex',
		backgroundColor: 'lightGrey',
		width: '100%',
		height: 300,
		borderRadius: 4,
		marginBottom: 15,
		overflow: 'hidden'
	},
	todoContainer: {
		backgroundColor: 'white',
		border: '1px solid lightGrey',
		padding: 15,
		borderRadius: 4,
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		fontSize: 13,
		textAlign: 'left',
		marginBottom: 15
	},
	buttonContainer: {
		backgroundColor: 'white',
		border: '1px dashed lightGrey',
		padding: 15,
		borderRadius: 4,
		width: 40,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	secondaryInfoContainer: {
		display: 'flex',
		width: '100%',
		flexWrap: 'wrap'
	},
	title: {
		fontWeight: 'bold'
	},
	linkToTutorial: {
		display: 'flex',
		color: 'grey',
		textDecoration: 'none'
	},
	tutoTitle: {
		marginLeft: 15
	}
};
