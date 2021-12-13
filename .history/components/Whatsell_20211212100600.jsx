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
    fontSize: '16px',
    fontWeight: '600',
    
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

const rows =[
  createData('Laptops', 'Hp, Acer, Dell , Appl', 'New / Used'),
  createData('Mobiles', 'Samsung, Redmi, Nokia, Apple', 'New / Used'),
  createData('Watches', 'Rollex, Sveston, Dell , Appl', 'New / Used'),
  createData('Sports & Fitness', 'jump robs', 'weights',),
  createData('')
]
const rows2 = [
  createData('Daroogo', "Qaad, Sigaar, Tubaako", 'Lama Ogola'),
  createData('Hub', 'Mindi, Bastolad, Qori', 'Lama Ogola'),
  createData('Khudrad', 'Nooc Walba', 'Lama Ogola'),
  createData('Hilib', 'Nooc Walba', 'Lama Ogola'),
  createData('Raashin', 'Nooc Walba', 'Lama Ogola')
  
];

export default function Whatsell() {
  return (
      <>
    <div className="flex flex-col items-center md:justify-center md:mb-36 tablle mb-11">
                <h1 className="text-xl font-bold text-center text-gray-900 md:text-3xl">Alaab Nocee ah ayaad iibin kartaa ?</h1>
                <p className="max-w-3xl mb-8 text-sm text-center text-gray-700 md:text-lg">Waxay ku xirantahy alaabta noceeda, xaaladda alaabta, Category-ga, iyo Brand-ka .
                table-ka hoos ku xusan waxa uu kutusayaa Categoriyada shirkaddu ay ogoshahay iibintooda 
                iyo kuwa aysan ogolayn xaaladaha lagu iibinkaro </p>

            <TableContainer className="mw-screen-lg TableContainer" component={Paper} sx={{ padding: "15px", minWidth: 380 , maxWidth: 1500, boxShadow: '2px 1px 11px rgba(0, 0, 0, 0.226)' }}>
        <h1 className="mb-6 text-2xl font-bold "> <span className="font-black text-red-500 ">|</span> Noocyada Alaabta</h1>
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
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

    </div>

    
    <div className="flex flex-col items-center md:justify-center md:mb-36 tablle mb-11">
                <h1 className="text-xl font-bold text-center text-gray-900 md:text-3xl">Alaab Nocee ah ayaad iibin kartaa ?</h1>
                <p className="max-w-3xl mb-8 text-sm text-center text-gray-700 md:text-lg">Waxay ku xirantahy alaabta noceeda, xaaladda alaabta, Category-ga, iyo Brand-ka .
                table-ka hoos ku xusan waxa uu kutusayaa Categoriyada shirkaddu ay ogoshahay iibintooda 
                iyo kuwa aysan ogolayn xaaladaha lagu iibinkaro </p>

            <TableContainer className="mw-screen-lg TableContainer" component={Paper} sx={{ padding: "15px", minWidth: 380 , maxWidth: 1500, boxShadow: '2px 1px 11px rgba(0, 0, 0, 0.226)' }}>
        <h1 className="mb-6 text-2xl font-bold "> <span className="font-black text-red-500 ">|</span> Noocyada Alaabta</h1>
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Noocyada Alaabta</StyledTableCell>
            <StyledTableCell align="center"> Tusaale Ahaan</StyledTableCell> 
            <StyledTableCell align="right">Xaaladda La Ogolyahay</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows2.map((row) => (
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

  
    
    
     </>
  );
}
