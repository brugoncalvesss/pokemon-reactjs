import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import PokemonList from './components/PokemonList'

function App() {
  return (
    <div className="App">
      <div className="container">
        <PokemonList />
      </div>
    </div>
  );
}

export default App;