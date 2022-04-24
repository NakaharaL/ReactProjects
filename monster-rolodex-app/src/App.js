import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

const App = () => {
  // Essa constante é equivalente à inicialização do state quando usando classes.
  // A diferença é que isso fará com que tenhamos mais código.
  const [nomeBuscado, setNomeBuscado] = useState(''); // [value, setValue]
  const [usuarios, setUsuarios] = useState([]);
  const [usuariosFiltrados, setUsuariosFiltrados] = useState(usuarios); 

  // Função que fará com que rode apenas na primeira interação OU quando o valor do array mudar
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((resposta) => resposta.json())
      .then((users) => setUsuarios(users))
  }, []);

  useEffect(() => {
    const NovosUsuariosFiltrados = usuarios.filter((usuario) => {
      return usuario.name.toLocaleLowerCase().includes(nomeBuscado);
    })

    setUsuariosFiltrados(NovosUsuariosFiltrados);
  }, [usuarios, nomeBuscado])

  const onNomeBuscadoChange = (event) => {
    const nomeBuscadoString = event.target.value.toLocaleLowerCase();
    setNomeBuscado(nomeBuscadoString);
  }

  return (
    <div className="App">
      <h1 className='app-title'>Usuários Rolodex</h1>
      <SearchBox
        ClassName='search-box'
        onChangeHandler={onNomeBuscadoChange}
        placeholder='Search Monster' />
      <CardList usuarios={usuariosFiltrados} />
    </div>
  )
}

export default App;
