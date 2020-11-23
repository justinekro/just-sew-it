import React, { Component } from "react";
import { Button, breakpoints, colors, Input } from "../../ui";
import {
	faPlusCircle,
	faTimesCircle,
	faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import PicturesModule from "./pictures_module";
import TodoList from "./todo_list";

const initialState = {
	isCreating: false,
	title: "",
	pictures: [],
	link: "",
	todoTitle: "",
	pendingTask: "",
	todoList: [],
};

const initialStateWithoutCards = {
	isCreating: false,
	title: "Ma table de noël",
	pictures: [
		"v1574695492/wdgm2ugpnoicvdeynoyu.png",
		"v1574695492/aumpz0y2jyf104xjggpp.png",
		"v1574695492/kpgnizf2bwokstymcy8n.png",
	],
	link: "",
	todoTitle: "Nom de ma TODO",
	pendingTask: "",
	todoList: [
		{ name: "Cette tâche est finie", done: true },
		{ name: "Cette tâche n'est pas finie", done: false },
	],
};

export default class NewCard extends Component {
	state = initialStateWithoutCards;
	render() {
		const {
			isCreating,
			title,
			pictures,
			link,
			pendingTask,
			todoTitle,
			todoList,
		} = this.state;

		const canSubmitForm = this.checkSubmissionForm();

		return (
			<div css={styles.add}>
				{!isCreating ? (
					<Button
						text={"Nouveau projet"}
						onClick={() => this.setState({ isCreating: true })}
						icon={faPlusCircle}
						isReversed
					/>
				) : (
					<div css={styles.formContainer}>
						<div css={styles.formHeader}>
							Créez votre futur projet !
							{isCreating && (
								<div css={styles.closeIcon}>
									<FontAwesomeIcon
										icon={faTimesCircle}
										onClick={() =>
											this.setState(
												initialStateWithoutCards
											)
										}
										color={"grey"}
									/>
								</div>
							)}
						</div>
						<div css={styles.form}>
							<div css={styles.inputTitle}>Nom du projet</div>
							<Input
								placeHolder="Le titre de votre prochain projet"
								onChange={(title) => this.setState({ title })}
								style={styles.input}
								value={title}
							/>
							<div css={styles.inputTitle}>Ajouter</div>
							<div
								css={{
									display: "flex",
									flexWrap: "wrap",
									justifyContent: "space-between",
								}}
							>
								<div
									css={{
										height: 40,
										width: "30%",
										backgroundColor: "pink",
									}}
								>
									Un lien
								</div>
								<div
									css={{
										height: 40,
										width: "30%",
										backgroundColor: "pink",
									}}
								>
									Des photos
								</div>
								<div
									css={{
										height: 40,
										width: "30%",
										backgroundColor: "pink",
									}}
								>
									Une liste de courses
								</div>
								<div
									css={{
										height: 40,
										width: "30%",
										backgroundColor: "pink",
									}}
								>
									Une todo pour le projet
								</div>
							</div>
							<div css={styles.inputTitle}>Liens</div>
							{/* //TODO separate links with , to add several */}
							<Input
								placeHolder="Un lien en rapport avec le projet"
								onChange={(link) => this.setState({ link })}
								style={styles.input}
								value={link}
							/>
							<div css={styles.inputTitle}>Todo List</div>
							<div
								css={[
									todoTitle.length > 0 &&
										styles.todoContainer,
								]}
							>
								<Input
									placeHolder="Besoin d'une Todo List ? C'est ici !"
									onChange={(t) =>
										this.handleTodoTitleChange(t)
									}
									style={[
										styles.fullWidth,
										todoTitle.length > 0
											? { border: "none" }
											: { marginBottom: 15 },
									]}
									value={todoTitle}
								/>
								<TodoList
									todoTitle={todoTitle}
									todoList={todoList}
									handleTaskChange={this.handleTaskChange}
									removeFromList={this.removeFromList}
									addTask={this.addTask}
									onInputChange={(pendingTask) =>
										this.setState({ pendingTask })
									}
									pendingTask={pendingTask}
								/>
							</div>
							<div css={styles.inputTitle}>
								Ajouter des photos au projet
							</div>
							{/*<PicturesModule
									pictures={pictures}
									deletePicture={this.deletePicture}
									updatePictures={this.updatePictures}
								/>*/}
							{canSubmitForm && (
								<div css={styles.actionContainer}>
									<Button
										text={"Sauvegarder"}
										onClick={this.submit}
										style={{ width: "100%" }}
									>
										<div css={{ marginLeft: 5 }}>
											<FontAwesomeIcon icon={faHeart} />
										</div>
									</Button>
								</div>
							)}
						</div>
					</div>
				)}
			</div>
		);
	}

	handleTodoTitleChange = (todoTitle) => {
		this.setState((prevState) => ({
			todoTitle: todoTitle,
			todoList: todoTitle.length > 0 ? prevState.todoList : [],
		}));
	};

	uploadPictures = (pictures) => {
		this.setState((prevState) => ({
			pictures: prevState.pictures.concat(pictures),
		}));
	};

	removeFromList = (index) => {
		const { todoList } = this.state;
		todoList.splice(index, 1);
		this.setState({ todoList, pendingTask: "" });
	};

	addTask = () => {
		const { pendingTask, todoList } = this.state;
		if (pendingTask.length > 0) {
			todoList.push({ name: pendingTask, done: false });
			this.setState({ todoList, pendingTask: "" });
		}
	};

	handleTaskChange = (task, done, index) => {
		const { todoList } = this.state;
		const newTask = { name: task, done, index };
		todoList.splice(index, 1, newTask);
		this.setState({
			todoList,
		});
	};

	checkSubmissionForm = () => {
		const { title } = this.state;
		if (title.length > 0) return true;
		return false;
	};

	deletePicture = (index) => {
		const { pictures } = this.state;
		pictures.splice(index, 1);
		this.setState({ pictures });
	};

	updatePictures = ({ pictures }) => {
		this.setState({ pictures });
	};

	submit = () => {
		const { userId } = this.props;
		const { title, pictures, link, todoTitle, todoList } = this.state;
		const now = new Date();
		// TODO: save to database
	};
}

const styles = {
	add: {
		width: "50%",
		border: "1px dashed grey",
		minHeight: 70,
		borderRadius: 4,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		margin: "auto",
	},
	form: {
		padding: 15,
	},
	formHeader: {
		position: "relative",
		padding: 15,
		backgroundColor: colors.lightGrey,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	formContainer: {
		width: "100%",
		height: "100%",
		display: "flex",
		flexDirection: "column",
	},
	actionContainer: {
		"& > a": {
			color: colors.pink,
			fontWeight: "bold",
			":hover": {
				textDecoration: "underline",
			},
		},
	},
	inputTitle: { fontSize: 11, marginBottom: 5 },
	input: { width: "100%", marginBottom: 15 },
	todoContainer: {
		borderRadius: 4,
		border: "1px solid #ccc",
		outline: 0,
		padding: 0,
		fontSize: 14,
		fontFamily: "Raleway, sans-serif",
		marginBottom: 15,
	},
	fullWidth: { width: "100%" },
	todoList: {
		display: "flex",
		justifyContent: "space-between",
		margin: "0px 10px 15px 30px",
		backgroundColor: colors.lightGrey,
		padding: 10,
		borderRadius: 4,
	},

	todoListItem: { display: "flex", width: "100%" },
	closeIcon: {
		position: "absolute",
		top: 15,
		right: 15,
	},
	taskContainer: {
		display: "flex",
		justifyContent: "space-between",
		margin: "0 10px 10px 10px",
	},
	taskName: {
		border: "none",
		height: "auto",
		backgroundColor: colors.lightGrey,
		width: "100%",
	},
	buttonContainer: { height: 42 },
	blackLayer: {
		position: "absolute",
		backgroundColor: "black",
		opacity: 0.5,
		width: "100%",
		height: "100%",
		borderRadius: 4,
	},
};
