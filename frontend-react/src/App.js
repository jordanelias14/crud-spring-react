
import './App.css';
import ListaUsuarios from './components/ListaUsuarios';
import Footer from './components/Footer';
import Header from './components/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CriarUsuario from './components/CriarUsuario';
import AtualizarUsuarios from './components/AtualizarUsuarios';

function App() {
  return (
    <div >
      <Router>
                <Header/>
                  <div className="container">
                      <Switch> 
                        <Route path = "/" exact component = {ListaUsuarios}></Route>
                        <Route path = "/usuarios" component = {ListaUsuarios}></Route>
                        <Route path = "/add-usuarios" component = {CriarUsuario}></Route>
                        <Route path = "/atualizar-usuarios/:id" component = {AtualizarUsuarios}></Route>

                          <ListaUsuarios/>
                      </Switch>  
                  </div>
              
                <Footer/>
      </Router>
    </div>
  );
}

export default App;
