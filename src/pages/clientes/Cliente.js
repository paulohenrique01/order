import React, { Component } from 'react';
import ClienteFilter from './ClienteFilter';
import ClienteList from './ClienteList';
import ClienteForm from './ClienteForm';


class Cliente extends Component { 
  render() {     
    return (      
     <div>
        <p>Cadastro de clientes</p>
        <ClienteForm />
        <ClienteFilter />        
        <ClienteList/>
     </div>    
   
    );
  }
}


export default Cliente;