import React from "react";
import { Paper, Typography } from "@mui/material"

function Produtos() {

    return (<>
        <Paper elevation={4} sx={{
            p: 2
        }}>
            <Typography element="h1" variant="h4">Produtos</Typography>
        </Paper>
    </>);
}

export default Produtos;