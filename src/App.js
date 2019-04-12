import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './Menu/NavBar';
import Cliente from './clientes/Cliente';
import Pedido from './pedidos/Pedido';
import Produto from './produtos/Produto';
import Usuario from './usuarios/Usuario';

class App extends Component {

  render() {

    return (      
      <Router>
       
       
        <NavBar>
        
            <Route path="/" exact component={Cliente} />
            <Route path="/pedidos" component={Pedido} />
            <Route path="/produtos" component={Produto} />
            <Route path="/clientes" component={Cliente} />
            <Route path="/usuarios" component={Usuario} />
         

        </NavBar>
         </Router>
     
    );
  }
}


export default App;
