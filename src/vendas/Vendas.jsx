import React from "react";
import { Paper, Typography } from "@mui/material"

function Vendas() {

    return (<>
        <Paper elevation={4} sx={{
            p: 2
        }}>
            <Typography element="h1" variant="h4">Vendas</Typography>
        </Paper>
    </>);
}

export default Vendas;