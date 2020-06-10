import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PRODUCT_TABLE from '../Data/ProductTable';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },

  tablecell : {
    border:'0.1px solid #e0e0e0',
  }
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
            <TableCell>German Standard</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className={classes.tablecell}>{row.description}</TableCell>

          <TableCell className={classes.tablecell}>{row.brit}<br/>
          {row.brit2}<br/>{row.brit3}<br/>{row.brit4}</TableCell>

              <TableCell className={classes.tablecell}>{row.america}
              <br/>{row.america2}<br/>{row.america3}<br/>{row.america4}</TableCell>

              <TableCell className={classes.tablecell}>{row.ger}<br/>{row.ger2}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
