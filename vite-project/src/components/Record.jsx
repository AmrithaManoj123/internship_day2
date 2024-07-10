import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

let rows = [
  {
    name: 'Amritha Manoj',
    dept: 'CSE',
    sem: 'S5'
  },
  {
    name: 'Adish U',
    dept: 'CSE',
    sem: 'S5'
  },
  {
    name: 'Afrina Farook',
    dept: 'CSE',
    sem: 'S5'
  },
  {
    name: 'Bhagya Suchith',
    dept: 'CSE',
    sem: 'S5'
  },
  {
    name: 'Hari Sankar',
    dept: 'CSE',
    sem: 'S5'
  },
  {
    name: 'Navneeth Arun',
    dept: 'CSE',
    sem: 'S5'
  },
];

const Record = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Department</TableCell>
            <TableCell align="right">Semester</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.dept}</TableCell>
              <TableCell align="right">{row.sem}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Record;
