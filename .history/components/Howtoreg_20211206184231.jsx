import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(noocaAlaabta, tusaale, xaaladda) {
  return { noocaAlaabta, tusaale, xaaladda };
}

const rows = [
  createData('Laptops', 'hp, acer, apple, lenova ', 'New / Used'),
  createData('Laptops', 'hp, acer, apple, lenova ', 'New / Used'),
  createData('Laptops', 'hp, acer, apple, lenova ', 'New / Used'),
  createData('Laptops', 'hp, acer, apple, lenova ', 'New / Used'),
  createData('Laptops', 'hp, acer, apple, lenova ', 'New / Used'),
  createData('Laptops', 'hp, acer, apple, lenova ', 'New / Used'),
  createData('Laptops', 'hp, acer, apple, lenova ', 'New / Used'),
  createData('Laptops', 'hp, acer, apple, lenova ', 'New / Used'),
  createData('Laptops', 'hp, acer, apple, lenova ', 'New / Used'),
  
];

export default function Howtoreg() {
  return (
    <TableContainer className="" component={Paper} sx={{ padding: "12px", minWidth: 300 }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Noocyada Alaabta</StyledTableCell>
            <StyledTableCell align="center"> Tusaale Ahaan</StyledTableCell> 
            <StyledTableCell align="right">Xaaladda La Ogolyahay</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.noocaAlaabta} sx={{backgroundColor: 'white'}}>
              <StyledTableCell component="th" scope="row">
                {row.noocaAlaabta}
              </StyledTableCell>
              <StyledTableCell   align="center">{row.tusaale}</StyledTableCell>
              <StyledTableCell align="right">{row.xaaladda}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
