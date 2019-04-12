import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './Menu/NavBar';
import Cliente from './clientes/Cliente';
import Pedido from './pedidos/Pedido';
import Produto from './produtos/Produto';
import Usuario from './usuarios/Usuario';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';


const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: {
      main: '#FFC413',
    },
  }
});


class App extends Component {

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <NavBar>
          <Router>
            <Route path="/" exact component={Cliente} />
            <Route path="/pedidos" component={Pedido} />
            <Route path="/produtos" component={Produto} />
            <Route path="/clientes" component={Cliente} />
            <Route path="/usuarios" component={Usuario} />

          </Router>
        </NavBar>
      </MuiThemeProvider>
    );
  }
}



export default App;

