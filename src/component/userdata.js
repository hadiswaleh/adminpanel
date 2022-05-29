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
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
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

function UserData(props) {
	return (
		<>
          <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Username</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Street</StyledTableCell>
            <StyledTableCell align="right">City</StyledTableCell>
            <StyledTableCell align="right">Zipcode</StyledTableCell>
            <StyledTableCell align="right">Latitude</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
        { props.data.map((userdata) => (
            <StyledTableRow>
              <StyledTableCell  component="th" scope="row">{userdata.name}</StyledTableCell >
              <StyledTableCell  align="right">{userdata.username}</StyledTableCell >
              <StyledTableCell  align="right">{userdata.email}</StyledTableCell >
              <StyledTableCell  align="right">{userdata.address.street}</StyledTableCell >
              <StyledTableCell  align="right">{userdata.address.city}</StyledTableCell >
              <StyledTableCell  align="right">{userdata.address.zipcode}</StyledTableCell >
              <StyledTableCell  align="right">{userdata.address.geo.lat}</StyledTableCell >
            </StyledTableRow >
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </>
	);
}

export default UserData;
