import React, { Component } from 'react';
import classNames from 'classnames';
import { Button, Icon, TextField, withStyles, Divider } from '@material-ui/core';


const styles = theme => ({
    leftIcon: {
        marginRight: theme.spacing.unit,
    },

    iconSmall: {
        fontSize: 20,
    },
});

class ClienteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {}
        };
    }



    handleCancelar = () => {
        alert('Voltar');
    }

    handleGravar = () => {
        alert(JSON.stringify(this.state.form));
    }

    handleInputTextChange = (event) => {
        const target = event.target;
        const name = target.name;
        this.setState({
            form: {
                ...this.state.form,
                [name]: target.value
            }
        });
    }

    render() {

        const { classes } = this.props;
        return (
            <>
                <Button variant="contained" size="small" color="primary"
                    className={classes.button} onClick={this.handleCancelar}>
                    <Icon className={classNames(classes.leftIcon, classes.iconSmall)}>arrow_back</Icon>
                    Voltar
                </Button>
                <Button variant="contained" size="small" color="primary"
                    className={classes.button} onClick={this.handleGravar}>
                    <Icon className={classNames(classes.leftIcon, classes.iconSmall)}>save</Icon>
                    Gravar
                </Button>

                <Divider />
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        label="Nome"
                        name="name"
                        className={classes.textField}
                        value={this.state.form.name}
                        onChange={this.handleInputTextChange}
                        margin="normal"
                    />
                    <TextField
                        label="CPF"
                        name="cpf"
                        className={classes.textField}
                        value={this.state.form.cpf}
                        onChange={this.handleInputTextChange}
                        margin="normal"
                    />
                </form>
            </>
        );
    }
}

export default withStyles(styles)(ClienteForm);