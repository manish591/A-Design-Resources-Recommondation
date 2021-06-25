import "./styles.css";
import React from "react";
import bookDB from "./data";

class App extends React.Component {
  state = {
    set: "Action"
  };

  setGenre = (book) => {
    this.setState({ set: book });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Edit to see some magic happen!</h2>
        <div>
          {Object.keys(bookDB).map((book) => (
            <button onClick={() => this.setGenre(book)}>{book}</button>
          ))}
        </div>

        <hr />
        <div>
          <ul>
            {bookDB[this.state.set].map((item) => (
              <li>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
