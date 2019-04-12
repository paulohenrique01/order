
import React, { Component } from 'react';
import { TextField, withStyles, Button, Icon } from '@material-ui/core';

class ClienteFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: {}
        };

        this.handlePesquisar = this.handlePesquisar.bind(this);
    }
    

    onChangeNameFilter = (event) => {
        this.setState({
          filter: {
            ...this.state.filter,
            name: event.target.value
          }
        });        
    }

    onChangeCpfFilter = (event) => {
        this.setState({
            filter: {
                ...this.state.filter,
                cpf: event.target.value
            }
        });
    }
    handlePesquisar = () => {
        alert(JSON.stringify(this.state.filter));
    }
    render() {

        const { classes } = this.props;
        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField                  
                    label="Name"
                    className={classes.textField}
                    value={this.state.filter.name}
                    onChange={this.onChangeNameFilter}
                    margin="normal"
                />
                <TextField                    
                    label="CPF"
                    className={classes.textField}
                    value={this.state.filter.cpf}
                    onChange={this.onChangeCpfFilter}
                    margin="normal"
                />
                <Button variant="contained" color="primary" 
                className={classes.button} onClick={this.handlePesquisar}>
                    <Icon className={classes.leftIcon}>send</Icon>
                    Pesquisar

                </Button>
            </form>
        );


    }
}



export default withStyles()(ClienteFilter);

