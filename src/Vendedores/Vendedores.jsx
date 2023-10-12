import React from "react";
import { Paper, Typography } from "@mui/material"

function Vendedores() {

    return (<>
        <Paper elevation={4} sx={{
            p: 2
        }}>
            <Typography element="h1" variant="h4">Vendedores</Typography>
        </Paper>
    </>);
}

export default Vendedores;