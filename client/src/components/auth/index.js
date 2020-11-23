import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUpUser, logInUser } from '../../redux/actions';
import Form from './form';

class Auth extends Component {
	state = {
		name: '',
		mail: '',
		password: '',
		isCreatingUser: true
	};

	render() {
		const { name, mail, password, isCreatingUser } = this.state;
		return (
			<Form
				isCreatingUser={isCreatingUser}
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
		);
	}

	setName = name => {
		this.setState({ name });
	};

	setMail = mail => {
		this.setState({ mail });
	};

	setPassword = password => {
		this.setState({ password });
	};

	handleChangeState = () => {
		this.setState(prevState => ({
			isCreatingUser: !prevState.isCreatingUser
		}));
	};
	handleCreateAccount = () => {
		const { name, mail, password } = this.state;
		this.props.signUpUser({
			name,
			mail,
			password
		});
	};

	handleLogin = () => {
		const { mail, password } = this.state;
		this.props.logInUser({
			mail,
			password
		});
	};
}

export default connect(
	state => ({
		connected: state.auth.connected,
		wasJustCreated: state.auth.wasJustCreated
	}),
	{ signUpUser, logInUser }
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
		width: '50%'
	},
	input: {
		marginBottom: 10
	}
};
