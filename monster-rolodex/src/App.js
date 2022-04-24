import { Component } from 'react';
import CardList from './components/card-list/card-list.component';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      usuarios: [],
      nomeBuscado: ''
    }
  }

  onNomeBuscadoChange = (event) => {

    const nomeBuscado = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { nomeBuscado };
    })

  }

  render() {

    //Inicializando os acessos ao state
    const { usuarios, nomeBuscado } = this.state;
    const { onNomeBuscadoChange } = this;

    //Constante que guarda o nome dos usuários filtrados
    const nomesDeUsuariosFiltrados = usuarios.filter((usuario) => {
      return usuario.name.toLocaleLowerCase().includes(nomeBuscado);
    })

    return (
      <div className="App">
        <input
          className='search-box'
          type='search'
          placeholder='Seach monster'
          onChange={onNomeBuscadoChange} />
        {/*nomesDeUsuariosFiltrados.map((usuario) => {
          return (
            <div key={usuario.id}>
              <h1>{usuario.name}</h1>
            </div>
          );
        })*/}
        <CardList usuarios={ nomesDeUsuariosFiltrados } />
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
