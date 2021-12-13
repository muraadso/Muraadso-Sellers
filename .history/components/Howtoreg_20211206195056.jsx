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
    borderBottom: '4px solid rgb(240, 17, 17)' ,
    
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
      <>
    <div className="flex flex-col items-center justify-center tablle mb-36">
                <h1 className="text-xl font-bold text-center text-gray-900 md:text-3xl">Alaab Nocee ah ayaad iibin kartaa ?</h1>
                <p className="max-w-3xl mb-8 text-sm text-center text-gray-700 md:text-lg">Waxay ku xirantahy alaabta noceeda, xaaladda alaabta, Category-ga, iyo Brand-ka .
                table-ka hoos ku xusan waxa uu kutusayaa Categoriyada shirkaddu ay ogoshahay iibintooda 
                iyo kuwa aysan ogolayn xaaladaha lagu iibinkaro </p>

            <TableContainer className="" component={Paper} sx={{ padding: "12px", maxWidth: 1400, boxShadow: '2px 1px 11px rgba(0, 0, 0, 0.226)' }}>
        <h1 className="mb-6 text-2xl font-bold "> <span className="font-black text-red-500 ">|</span> Noocyada Alaabta</h1>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{fontStyle:'bold'}} >Noocyada Alaabta</StyledTableCell>
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

    </div>
    
    <div className="flex flex-col items-center justify-center tablle2 mb-36">
            <h1 className="text-xl font-bold text-center text-gray-900 md:text-3xl">Alaab Nocee ah ayaadan iibin karin ?</h1>
            <p className="max-w-3xl mb-8 text-sm text-center text-gray-700 md:text-lg">Dhamaan alaabta hoos ku xusan ma aha alaab laga ogol yahay shirkadda 
                ama aad soo diiwaan galin kartid si lagaaga iibsado waxayna dhibaato
                ku keeni kartaa koontadaada iyo in lagaa xayiro</p>

            <TableContainer className="" component={Paper} sx={{ padding: "12px", maxWidth: 1400, boxShadow: '2px 1px 11px rgba(0, 0, 0, 0.226)' }}>
                        <h1 className="mb-6 text-2xl font-bold"> <span className="font-black text-red-500 ">|</span> Noocyada Alaabta</h1>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead className="" >
          <TableRow className="">
            <StyledTableCell>Noocyada Alaabta</StyledTableCell>
            <StyledTableCell align="center"> Tusaale Ahaan</StyledTableCell> 
            <StyledTableCell align="right">Xaaladda La Ogolyahay</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.noocaAlaabta} sx={{backgroundColor: 'white'}}>
              <StyledTableCell  component="th" scope="row">
                {row.noocaAlaabta}
              </StyledTableCell>
              <StyledTableCell   align="center">{row.tusaale}</StyledTableCell>
              <StyledTableCell align="right">{row.xaaladda}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>

     </>
  );
}
