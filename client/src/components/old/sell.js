import React from 'react';
import { Layout, colors, Button, Input, breakpoints, Textarea } from '../ui';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const Sell = () => {
	return (
		<Layout css={{ backgroundColor: colors.lightGrey }}>
			<h3>Je vends un article de sport </h3>
			<div css={styles.section}>
				<p>Ajouter au moins une photo de votre article</p>
				<div css={styles.addPicture}>
					<Button text={'Ajouter des photos'} icon={faPlusCircle} isReversed />
				</div>
			</div>
			<div css={[styles.section, styles.formSection]}>
				<p>Titre de l'article</p>
				<div css={styles.inputContainer}>
					<Input
						placeHolder={'ex: Paire de chaussures de running jamais portées'}
					/>
				</div>
			</div>
			<div css={[styles.section, styles.formSection]}>
				<p>Description de l'article</p>

				<div css={styles.inputContainer}>
					<Textarea
						placeHolder={'ex: Paire de chaussures de running jamais portées'}
					/>
				</div>
			</div>
			<div css={[styles.section, styles.formSection]}>
				<p>Catégorie</p>

				<div css={styles.inputContainer}>
					<p>C'est là le nerf de la guerre</p>
				</div>
			</div>
			<div css={[styles.section, styles.formSection]}>
				<p>Prix</p>

				<div css={styles.inputContainer}>
					<Input placeHolder={'ex: 10€'} />
				</div>
			</div>
			<div css={styles.buttonContainer}>
				<Button text={'Valider'} />
			</div>
		</Layout>
	);
};

const styles = {
	section: {
		'backgroundColor': 'white',
		'borderRadius': 4,
		'padding': 15,
		'marginTop': 15,
		'&>p': {
			marginBottom: 15
		}
	},
	addPicture: {
		border: '1px dashed grey',
		minHeight: 100,
		borderRadius: 4,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	formSection: {
		display: 'flex',
		flexDirection: 'column',

		[breakpoints.tabletQuery]: {
			'alignItems': 'flex-start',
			'flexDirection': 'row',
			'& > div': {
				flex: 1
			},
			'& > p': {
				flex: 1
			}
		}
	},
	inputContainer: {
		'& > div': {
			'flex': 1,
			'& > input': {
				width: '100%'
			}
		},
		'& > textarea': {
			width: '100%'
		}
	},
	buttonContainer: {
		marginTop: 15,
		display: 'flex',
		justifyContent: 'flex-end'
	}
};

export default Sell;
