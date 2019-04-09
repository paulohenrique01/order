import React, { Component } from 'react';

import PropTypes from 'prop-types';

import NavBar from './Menu/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cliente from './clientes/Cliente';
import Pedido from './pedidos/Pedido';
import Produto from './produtos/Produto';
import Usuario from './usuarios/Usuario';

class App extends Component {

  render() {

    return (
      
      <BrowserRouter  basename="http://localhost:3000"  >
        <NavBar>

          <Switch>
            <Route path="/" exact component={Cliente} />
            <Route path="/pedidos" component={Pedido} />
            <Route path="/produtos" component={Produto} />
            <Route path="/clientes" component={Cliente} />
            <Route path="/usuarios" component={Usuario} />
          </Switch>

        </NavBar>
      </BrowserRouter>
    );
  }
}


export default App;
