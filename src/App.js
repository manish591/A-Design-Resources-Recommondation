import "./styles.css";
import React from "react";
import designResourceDB from "./data";

class App extends React.Component {
  state = {
    set: "Fonts"
  };

  setGenre = (book) => {
    this.setState({ set: book });
  };

  render() {
    return (
      <div className="App">
        <h1>🔖 Design Resources</h1>
        <p>
          This app will give you some of my design resources that i use on a
          daily basis. You should definitely check them out.
        </p>
        <div>
          {Object.keys(designResourceDB).map((book) => (
            <button onClick={() => this.setGenre(book)}>{book}</button>
          ))}
        </div>

        <hr />
        <div>
          <ul>
            {designResourceDB[this.state.set].map((item) => (
              <li>
                {item.name}
                <span>{item.review}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
