import React, { Component } from "react";
import axios from "axios";

class ProjectForm extends Component {
	state = {
		value: "",
		success: false,
	};
	render() {
		const { value, success } = this.state;
		return (
			<div>
				<p>this is my form </p>
				<input
					value={value}
					placeholder={"votre nom"}
					onChange={this.handleChangeText}
				/>
				<button onClick={this.handleSubmit}>CLICK CLICK</button>
				{success && <div>Success !</div>}
			</div>
		);
	}

	handleChangeText = (event) => {
		this.setState({
			value: event.target.value,
		});
	};

	handleSubmit = () => {
		axios({
			method: "post",
			url: "http://localhost:4000/api/projects",
			data: {
				title: this.state.value,
				description: "coucou",
				imageUrl: "coucou",
			},
			config: { headers: { "Content-Type": "multipart/form-data" } },
		})
			.then(
				() => this.setState({ success: true })
				//handle success
			)
			.catch(function (response) {
				console.log("coucou", response);
				//handle error
			});
	};
}

export default ProjectForm;
