import logo from './logo.svg';
import './App.css';

import ContactoList from './component/container/ContactoList';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import GreetinStyle from './component/pure/greetinStyle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <ContactoList></ContactoList> */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* <Ejemplo4 nombre= "Yesid">
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4> */}
        <GreetinStyle name="Yesid"></GreetinStyle>
      </header>
    </div>
  );
}

export default App;
