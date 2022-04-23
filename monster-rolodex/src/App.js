import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      usuarios: [],
    }  }

  render() {
    return (
      <div className="App">
        {this.state.usuarios.map((usuario) => {
          return (
            <div key={usuario.id}>
              <h1>{usuario.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((resposta) => resposta.json())
      .then((users) =>
        this.setState(
          () => {
            return { usuarios: users };
          },
          () => {
            console.log(this.state);
          }
        )
      )
  }
}

export default App;
