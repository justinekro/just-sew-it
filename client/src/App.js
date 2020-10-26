import React from "react";
import "./App.css";
import Form from "./components/form";
import AllProjects from "./components/all_projects";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form />
        <AllProjects />
      </header>
    </div>
  );
}
