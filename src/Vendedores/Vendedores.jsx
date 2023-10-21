import { React, useEffect, useState } from "react";
import { Avatar, Box, CircularProgress, Divider, Paper, Stack, Table, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import axios from "axios"

function Vendedores() {

    const [vendedores, setVendedores] = useState(false);

    useEffect(() => {

        const urlVendedores = process.env.REACT_APP_API_URL + "/vendedores"

        axios.get(urlVendedores)
            .then((response) => {
                setVendedores(response.data)
            }).catch((error) => {
                alert(error);
            })
    }, []);

    return (<>
        <Paper elevation={4} sx={{
            p: 2
        }}>
            <Typography element="h1" variant="h4" >Vendedores</Typography>
            <Divider sx={{ mb: 2 }} />


            {(!vendedores) ?
                <Box>
                    <CircularProgress />
                </Box>
                :
                <TableContainer component={Box}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Nome</TableCell>
                                <TableCell>Total em Vendas</TableCell>
                            </TableRow>
                        </TableHead>

                        {vendedores.map((vendedor, index) => (
                            <TableRow key={index}>
                                <TableCell>{vendedor.idVendedor}</TableCell>
                                <TableCell>


                                    <Stack
                                        direction="row"
                                        justifyContent="flex-start"
                                        alignItems="center"
                                        spacing={2}
                                    >
                                        <Avatar alt={vendedor.nome} src={`${process.env.REACT_APP_API_URL}${vendedor.foto}`} sx={{ mr: 2 }} />
                                        <Typography p>{vendedor.nome}</Typography>
                                    </Stack>


                                </TableCell>
                                <TableCell> - </TableCell>
                            </TableRow>
                        ))}

                    </Table>
                </TableContainer>
            }


        </Paper>
    </>);
}

export default Vendedores;