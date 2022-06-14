import Lista from './componets/ListaPeliculas'
import ListaPais from './componets/ListaPais'

import './App.css';
import { ListaComida } from './componets/listacomida/ListaComida';

function App() {
  const paises = ['Dinamarca', 'Mexico', 'Colombia', 'Brazil']
  return (
    <>
      <h1>Hola a todes buen dia</h1>
      <Lista>
        
            <li>
              django
            </li>
            <li>
              star wars
            </li>
      </Lista>

      <ListaPais paises={paises} />

      <ListaComida />

    </>
    
  );
}

export default App;
