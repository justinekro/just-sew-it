import React, { Component } from "react";
import axios from "axios";

class AllProjects extends Component {
	state = {
		projects: [],
		loading: true,
		error: false,
	};

	componentDidMount() {
		axios({
			method: "get",
			url: "http://localhost:3000/projects",
		})
			.then((res) =>
				this.setState({ projects: res.data, loading: false })
			)
			.catch((err) =>
				this.setState({ projects: [], loading: false, error: true })
			);
	}

	render() {
		const { projects, loading, error } = this.state;

		return (
			<div>
				<p>All my projects</p>
				{!!loading && <p>Loading...</p>}
				{projects.map((project, index) => (
					<div key={index}>{project.title}</div>
				))}
				{!!error && (
					<p>Merci de vous connecter pour accéder à vos projets </p>
				)}
				<button onClick={this.handleConnect}>Créer mon compte</button>
			</div>
		);
	}

	handleConnect = () => {
		axios({
			method: "get",
			url: "http://localhost:3000/projects",
		})
			.then((res) =>
				this.setState({ projects: res.data, loading: false })
			)
			.catch((err) =>
				this.setState({ projects: [], loading: false, error: true })
			);
	};
}

export default AllProjects;
