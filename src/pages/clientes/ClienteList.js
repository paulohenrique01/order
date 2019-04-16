import React, { Component } from 'react';
import { TableHead, TableRow, TableCell, withStyles, TableBody, Table, Paper } from '@material-ui/core';

class ClienteList extends Component {
    render() {
        const { classes } = this.props;
        let id = 0;
        function createData(name, cpf) {
            id += 1;
            return { id, name, cpf};
        }

        const rows = [
            createData('Darth Vader', '37285137090'),
            createData('Han Solo', '30384986021'),
            createData('Leia Skywalker', '05071624044'),
            createData('Luck Skywalker', '30860932001'),
            createData('Obi Wan Kenobi', '79581790063')
        ];

        return (
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Nome</TableCell>
                        <TableCell>CPF</TableCell>                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell mask="999.999.999-99" >{row.cpf}</TableCell>
                           
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        );
    }
}



export default withStyles()(ClienteList);