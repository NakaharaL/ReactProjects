import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      usuarios: [],
      nomeBuscado: ''
    }
  }

  render() {

    const nomesDeUsuariosFiltrados = this.state.usuarios.filter((usuario) => {
      return usuario.name.toLocaleLowerCase().includes(this.state.nomeBuscado);
    })

    return (
      <div className="App">
        <input
          className='search-box'
          type='search'
          placeholder='Seach monster'
          onChange={(event) => {
            
            const nomeBuscado = event.target.value.toLocaleLowerCase();

            this.setState(() => {
              return { nomeBuscado };
            })

          }} />
        {nomesDeUsuariosFiltrados.map((usuario) => {
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
