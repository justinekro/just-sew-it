// import React, { Component, createRef } from 'react';
// import { breakpoints, colors, CloudinaryUploader } from '../../ui';
// import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// export default class PicturesModule extends Component {
// 	picturesContainer = createRef();

// 	state = {
// 		initialX: null,
// 		initialY: null
// 	};

// 	render() {
// 		const { pictures, deletePicture } = this.props;

// 		return (
// 			<div css={styles.pictureModule}>
// 				{pictures.length > 0 && (
// 					<div css={styles.picturesContainer} ref={this.picturesContainer}>
// 						{pictures.map((id, i) => (
// 							<div
// 								draggable={true}
// 								key={id}
// 								css={[
// 									styles.picture,
// 									{
// 										backgroundImage: `url(https://res.cloudinary.com/jujukro/image/upload/${id})`
// 									}
// 								]}
// 								onDragStart={e => this.handleOnDragStart(e.nativeEvent)}
// 								onDragEnd={e => this.movePicture(e.nativeEvent, i, id)}
// 							>
// 								<div css={styles.blackLayer} />
// 								<div css={styles.deletePicture}>
// 									<FontAwesomeIcon
// 										icon={faTimesCircle}
// 										onClick={() => deletePicture(i)}
// 										color={'white'}
// 									/>
// 								</div>
// 							</div>
// 						))}
// 					</div>
// 				)}
// 				<div css={styles.buttonContainer}>
// 					<CloudinaryUploader uploadPictures={this.uploadPictures} />
// 				</div>
// 			</div>
// 		);
// 	}
// 	handleOnDragStart = e => {
// 		this.setState({
// 			initialX: e.screenX,
// 			initialY: e.screenY
// 		});
// 	};

// 	movePicture = (event, index, id) => {
// 		const { pictures, updatePictures } = this.props;
// 		const { initialX, initialY } = this.state;
// 		const picturesWidth =
// 			this.picturesContainer.current &&
// 			this.picturesContainer.current.offsetWidth;

// 		const pictureWidth = (picturesWidth - 40) / 3;

// 		// need to get the width of an item too
// 		// as function of position in the grid

// 		const newIndex = getNewIndex({
// 			initialIndex: index,
// 			size: pictures.length,
// 			width: pictureWidth,
// 			x: event.screenX - initialX,
// 			y: initialY - event.screenY
// 		});

// 		pictures.splice(index, 1);
// 		pictures.splice(newIndex, 0, id);
// 		updatePictures({ pictures });
// 	};
// }

// // for mobile https://medium.com/@deepakkadarivel/drag-and-drop-dnd-for-mobile-browsers-fc9bcd1ad3c5
// function getNewIndex({ initialIndex, size, width, x, y }) {
// 	let newIndex;
// 	const newX = getIntegerFromCoordinates(width, x) * Math.sign(x);
// 	const newY = getIntegerFromCoordinates(width, y) * Math.sign(y);
// 	newIndex = -3 * newY + newX;
// 	newIndex += initialIndex;
// 	if (newIndex < 0) {
// 		newIndex = 0;
// 	}
// 	if (newIndex > size) {
// 		newIndex = size;
// 	}
// 	return newIndex;
// }
// function getIntegerFromCoordinates(width, x) {
// 	const absX = Math.abs(x);
// 	if (absX > 2 * width - 20) return 2;
// 	if (absX > width - 20) return 1;
// 	if (absX < width - 20) return 0;
// }

// const styles = {
// 	pictureModule: {
// 		minHeight: 64,
// 		display: 'flex',
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		marginBottom: 15,
// 		border: '1px solid lightGrey',
// 		backgroundColor: colors.lightGrey,
// 		padding: 10,
// 		borderRadius: 4,
// 		flexWrap: 'wrap'
// 	},
// 	picturesContainer: {
// 		'display': 'flex',
// 		'width': '100%',
// 		'justifyContent': 'space-between',
// 		'flexWrap': 'wrap',
// 		'border': '1px solid lightGrey',
// 		'marginBottom': 10,
// 		'backgroundColor': 'white',
// 		'flexWrap': 'wrap',
// 		'borderRadius': 4,
// 		'padding': '10px 10px 0 10px',
// 		':after': {
// 			content: '""',
// 			width: 'calc(33.3% - 6.6px)'
// 		}
// 	},
// 	picture: {
// 		'backgroundSize': 'cover',
// 		'borderRadius': 4,
// 		'height': 'auto',
// 		'width': 'calc(33.3% - 6.6px)',
// 		'paddingBottom': 'calc(33.3% - 6.6px)',
// 		'backgroundPosition': 'center',
// 		'marginBottom': 10,
// 		'position': 'relative',
// 		':nth-of-type(3n)': {
// 			marginRight: 0
// 		},
// 		'& > div': {
// 			'transition': 'all ease 0.5s',
// 			'opacity': 0,
// 			':nth-of-type(2)': {
// 				visibility: 'hidden'
// 			}
// 		},
// 		':hover': {
// 			'& > div': {
// 				'opacity': 1,
// 				':first-of-type': {
// 					opacity: 0.5
// 				},
// 				':nth-of-type(2)': {
// 					visibility: 'visible'
// 				}
// 			}
// 		}
// 	},

// 	closeIcon: {
// 		position: 'absolute',
// 		top: 15,
// 		right: 15
// 	},

// 	buttonContainer: { height: 42 },
// 	blackLayer: {
// 		position: 'absolute',
// 		backgroundColor: 'black',
// 		opacity: 0.5,
// 		width: '100%',
// 		height: '100%',
// 		borderRadius: 4
// 	},
// 	deletePicture: {
// 		position: 'absolute',
// 		top: 5,
// 		right: 5,
// 		[breakpoints.tabletQuery]: {
// 			top: 10,
// 			right: 10
// 		}
// 	}
// };
