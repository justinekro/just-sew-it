import React, { Component } from "react";
import axios from "axios";

class AllProjects extends Component {
	state = {
		projects: [],
		loading: true,
	};

	componentDidMount() {
		axios({
			method: "get",
			url: "http://localhost:4000/api/projects",
			config: { headers: { "Content-Type": "multipart/form-data" } },
		})
			.then((res) =>
				this.setState({ projects: res.data, loading: false })
			)
			.catch(function (response) {
				console.log("coucou", response);
			});
	}

	render() {
		const { projects, loading } = this.state;

		return (
			<div>
				<p>All my projects</p>
				{loading && <p>Loading...</p>}
				{projects.map((project, index) => (
					<div key={index}>{project.title}</div>
				))}
			</div>
		);
	}
}

export default AllProjects;
