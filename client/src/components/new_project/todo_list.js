import React, { Component, createRef } from 'react';
import { colors, Input, Button } from '../../ui';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faSquare, faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class TodoList extends Component {
	render() {
		const {
			todoList,
			todoTitle,
			handleTaskChange,
			addTask,
			onInputChange,
			pendingTask,
			removeFromList
		} = this.props;

		return (
			<div>
				{todoTitle.length > 0 &&
					todoList.length > 0 &&
					todoList.map((task, index) => (
						<div
							key={index}
							css={styles.todoList}
							draggable={true}
							onDragStart={() => {
								console.log('coucou');
							}}
						>
							<div css={styles.todoListItem}>
								<FontAwesomeIcon
									icon={task.done ? faCheckSquare : faSquare}
									onClick={() => handleTaskChange(task.name, !task.done, index)}
								/>
								<Input
									value={task.name}
									style={styles.taskName}
									onChange={t => handleTaskChange(t, task.done, index)}
								/>
							</div>
							<FontAwesomeIcon
								icon={faTimesCircle}
								onClick={() => removeFromList(index)}
								color={colors.pink}
							/>
						</div>
					))}
				{todoTitle.length > 0 && (
					<div css={styles.taskContainer}>
						<Input
							placeHolder='Write here your task'
							onChange={onInputChange}
							value={pendingTask}
							style={[styles.fullWidth, { marginRight: 15 }]}
						/>
						<Button text={'add'} onClick={() => addTask()} isReversed />
					</div>
				)}
			</div>
		);
	}
}

const styles = {
	todoContainer: {
		borderRadius: 4,
		border: '1px solid #ccc',
		outline: 0,
		padding: 0,
		fontSize: 14,
		fontFamily: 'Raleway, sans-serif',
		marginBottom: 15
	},
	fullWidth: { width: '100%' },
	todoList: {
		display: 'flex',
		justifyContent: 'space-between',
		margin: '0px 10px 15px 30px',
		backgroundColor: colors.lightGrey,
		padding: 10,
		borderRadius: 4
	},
	todoListItem: { display: 'flex', width: '100%' },
	closeIcon: {
		position: 'absolute',
		top: 15,
		right: 15
	},
	taskContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		margin: '0 10px 10px 10px'
	},
	taskName: {
		border: 'none',
		height: 'auto',
		backgroundColor: colors.lightGrey,
		width: '100%'
	}
};
