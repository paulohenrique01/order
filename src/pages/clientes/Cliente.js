import React, { Component } from 'react';
import ClienteFilter from './ClienteFilter';

class Cliente extends Component {

 
  render() {  
   
    return (      
     <div>
        <p>Cadastro de clientes</p>
        <ClienteFilter />
     </div>
             
   
    );
  }
}


export default Cliente;