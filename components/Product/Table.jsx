import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PRODUCT_TABLE from '../Data/ProductTable';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const rows = PRODUCT_TABLE;

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table" size="small">
        <TableHead>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell>British Standard</TableCell>
            <TableCell>American Standard</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.description}</TableCell>
          <TableCell>{row.brit}<br/>{row.brit2}<br/>{row.brit3}</TableCell>
              <TableCell>{row.america}<br/>{row.america2}<br/>{row.america3}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
