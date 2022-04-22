import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      nome: 'Leonardo'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Oi {this.state.nome}
          </p>
          <button
            onClick={() => {
              if (this.state.nome === 'Leonardo') {
                this.setState({ nome: 'Daniel' })
              } else {
                this.setState({ nome: 'Leonardo' })
              }

            }}>Mude o nome</button>
        </header>
      </div>
    );
  }
}

export default App;
