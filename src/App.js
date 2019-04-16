import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './Menu/NavBar';
import Cliente from './pages/clientes/Cliente';
import Pedido from './pages/pedidos/Pedido';
import Produto from './pages/produtos/Produto';
import Usuario from './pages/usuarios/Usuario';

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
       <Router>
        <NavBar>
         
            <Route path="/" exact component={Cliente} />
            <Route path="/pedidos" component={Pedido} />
            <Route path="/produtos" component={Produto} />
            <Route path="/clientes" component={Cliente} />
            <Route path="/usuarios" component={Usuario} />

       
        </NavBar>
        </Router>
      </MuiThemeProvider>
    );
  }
}



export default App;

