
import React, { Component } from 'react';
import { TextField, withStyles, Button, Icon } from '@material-ui/core';
import classNames from 'classnames';

const styles = theme => ({    
    leftIcon: {
      marginRight: theme.spacing.unit,
    },
    
    iconSmall: {
      fontSize: 20,
    },
  });
class ClienteFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: {}
        };
    }
    

    handleInputTextChange = (event) => {
        const target = event.target;
        const name = target.name;
        this.setState({
          filter: {
            ...this.state.filter,
            [name]: target.value
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
                    label="Nome"
                    name="name"
                    className={classes.textField}
                    value={this.state.filter.name}
                    onChange={this.handleInputTextChange}
                    margin="normal"
                />
                <TextField                    
                    label="CPF"
                    name="cpf"
                    className={classes.textField}
                    value={this.state.filter.cpf}
                    onChange={this.handleInputTextChange}
                    margin="normal"
                />
                <Button variant="contained" size="small" color="primary" 
                className={classes.button} onClick={this.handlePesquisar}>
                    <Icon className={classNames(classes.leftIcon, classes.iconSmall)}>search</Icon>
                    Pesquisar

                </Button>
            </form>
        );

    }
}



export default withStyles(styles)(ClienteFilter);

