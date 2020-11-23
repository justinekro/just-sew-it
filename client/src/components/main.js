import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './form';
import Auth from './auth';

class Main extends Component {
	render() {
		return (
			<div css={styles.container}>
				{!this.props.connected ? <Auth /> : <Form />}
			</div>
		);
	}
}

const styles = {
	container: {
		padding: 20,
		height: '100%',
		width: '100%',
		flex: 'auto',
		display: 'block'
	}
};

export default connect(state => ({
	connected: state.auth.connected
}))(Main);
