import logo from './logo.svg';
import './App.css';
import Titulo from './Titulo';
import ListaAtividades from './ListaAtividades';
import Contador from './Contador';
import CapsLock from './CapsLock';
import { useState } from 'react';
import PlayerForm from './PlayerForm';
import PlayerList from './PlayerList';

function App() {
  // const listaDeAtividades = ["Se vestir", "Ir pra faculdade", "Estudar", "Ir pra casa"]
  // const [count, setCount] = useState(0)

  const [players, setPlayers] = useState([])

  function handleAddPlayers(novoJogador){
    setPlayers([...players, novoJogador])    
  }
  return (
    <div className="App">
      <Titulo texto="Sorteador" />
      <PlayerForm handleAddPlayers={handleAddPlayers}></PlayerForm>
      <PlayerList players={players}></PlayerList>
    </div>
  );
}

export default App;
