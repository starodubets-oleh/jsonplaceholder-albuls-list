import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import DeleteAlbumButton from './DeleteAlbumButton'
import EditAlbumButton from './EditAlbumButton'


const useStyles = makeStyles({
  tableConteiner: {
    width: 'fit-content',
    margin: "0 auto",
    marginTop: '2rem'
  },
  table: {
    width: 'auto',
  },
});

const TableAlbums = ({ rows }) => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.tableConteiner} size='small' elevation={10} component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">id album</TableCell>
            <TableCell align="center">Name Album</TableCell>
            <TableCell align="center">Edit</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center">
                <a href={`/album/${row.id}`} >{row.title}</a>
              </TableCell>
              <TableCell align="center">
                <EditAlbumButton
                  idAlbum={row.id}
                />
              </TableCell>
              <TableCell align="center">
                <DeleteAlbumButton
                  idAlbum={row.id}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableAlbums