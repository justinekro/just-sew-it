import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUpUser, logInUser } from '../../redux/actions';
import Form from './form';
import {
	checkValidationSignUp,
	checkValidationLogIn
} from '../../helpers/auth';

class Auth extends Component {
	state = {
		name: '',
		mail: '',
		password: '',
		isCreatingUser: true,
		error: {}
	};

	render() {
		const { name, mail, password, isCreatingUser, error } = this.state;
		return (
			<div>
				{this.props.authError && (
					<div css={styles.error}>{this.props.authError}</div>
				)}
				<Form
					isCreatingUser={isCreatingUser}
					error={error}
					name={name}
					mail={mail}
					password={password}
					setName={this.setName}
					setMail={this.setMail}
					setPassword={this.setPassword}
					handleSubmit={
						isCreatingUser ? this.handleCreateAccount : this.handleLogin
					}
					handleChangeState={this.handleChangeState}
				/>
			</div>
		);
	}

	setName = name => {
		this.setState({ name, error: {} });
	};

	setMail = mail => {
		this.setState({ mail, errror: {} });
	};

	setPassword = password => {
		this.setState({ password, error: {} });
	};

	handleChangeState = () => {
		this.setState(prevState => ({
			isCreatingUser: !prevState.isCreatingUser
		}));
	};

	handleCreateAccount = () => {
		const { name, mail, password } = this.state;
		const error = checkValidationSignUp({ name, mail, password });
		if (!!error) {
			return this.setState({
				error
			});
		}
		this.props.signUpUser({
			name,
			mail,
			password
		});
	};

	handleLogin = () => {
		const { mail, password } = this.state;
		const error = checkValidationLogIn({ mail, password });
		if (!!error) {
			return this.setState({
				error
			});
		}
		this.props.logInUser({
			mail,
			password
		});
	};
}

export default connect(
	state => ({
		connected: state.auth.connected,
		wasJustCreated: state.auth.wasJustCreated,
		authError: state.auth.error
	}),
	{ signUpUser, logInUser }
)(Auth);

const styles = {
	error: {
		backgroundColor: 'rgba(178,34,34, 0.3)',
		border: '1px solid rgba(178,34,34)',
		padding: 10,
		borderRadius: 4,
		marginBottom: 20,
		color: 'rgba(178,34,34)',
		fontSize: 12
	}
};
