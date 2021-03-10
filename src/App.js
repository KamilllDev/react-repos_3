import React, { Component } from "react";
import reactDom from "react-dom";

class App extends Component {
  state = {
    name: "",
    surname: "",
  };

  render() {
    const handleNameChange = (e) => {
      this.setState({
        name: e.target.value,
      });
    };

    const handleSurnameChange = (e) => {
      this.setState({
        surname: e.target.value,
      });
    };

    const handleSend = (e) => {
      console.log("Brawo ! Prawidłowe Dane : ) ");
      e.preventDefault();
    };

    return (
      <div>
        <h1>Login :</h1>
        <br></br>
        <form onSubmit={handleSend}>
          <input onChange={handleNameChange}></input>
          <input onChange={handleSurnameChange}></input>
          <br></br>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

export default App;
