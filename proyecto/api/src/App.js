import "./App.css";
import Otro from "./otro";
import Formulariocss from './formulariocss'
import Formularioboot from "./componentes/formularioboot";


function App() {
  return (
    <div className="App">
      <h1>Hola </h1>
      <Otro />
      <Formulariocss />
      <div className="container-fluid p-3">
      <Formularioboot/>
      </div>
    </div>
  );
}

export default App;