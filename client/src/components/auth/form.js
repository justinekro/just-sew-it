import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUpUser } from '../../redux/actions';
import { Button, Input, Link, breakpoints } from '../../ui';

class Auth extends Component {
	render() {
		const {
			isCreatingUser,
			name,
			mail,
			password,
			setName,
			setMail,
			setPassword,
			handleSubmit,
			handleChangeState
		} = this.props;
		return (
			<div css={styles.page}>
				<div css={styles.container}>
					{!!isCreatingUser && (
						<Input
							placeHolder={'Prénom'}
							value={name}
							onChange={setName}
							style={styles.input}
						/>
					)}
					<Input
						placeHolder={'Email'}
						value={mail}
						onChange={setMail}
						style={styles.input}
					/>
					<Input
						placeHolder={'Mot de passe'}
						value={password}
						onChange={setPassword}
						style={styles.input}
					/>
					<Button onClick={handleSubmit}>
						{isCreatingUser ? 'Créer mon compte' : 'Me connecter'}
					</Button>
					<Link
						style={{ marginTop: 10 }}
						onClick={handleChangeState}
						text={
							isCreatingUser
								? "J'ai déjà un compte"
								: "Je n'ai pas encore de compte"
						}
					/>
				</div>
			</div>
		);
	}
}

export default connect(
	state => ({
		connected: state.auth.connected,
		wasJustCreated: state.auth.wasJustCreated
	}),
	{ signUpUser }
)(Auth);

const styles = {
	page: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	container: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		[breakpoints.tabletQuery]: {
			width: '50%'
		}
	},
	input: {
		marginBottom: 10
	}
};
