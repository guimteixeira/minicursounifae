import React from "react";
import { Box, Divider, Paper, Table, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"

function Vendedores() {

    return (<>
        <Paper elevation={4} sx={{
            p: 2
        }}>
            <Typography element="h1" variant="h4" >Vendedores</Typography>
            <Divider sx={{ mb: 2 }} />


            <TableContainer component={Box}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Nome</TableCell>
                            <TableCell>Total em Vendas</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>


        </Paper>
    </>);
}

export default Vendedores;