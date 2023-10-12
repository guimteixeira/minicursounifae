import { AccountCircle, HighlightOff, PointOfSale, ShoppingBag, Timeline } from '@mui/icons-material';
import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Stack, Typography } from '@mui/material';
import React from 'react';

function MenuTemporario({ estadoMenu, fecharMenu }) {
    return (
        <>
            <Drawer
                anchor='left'
                open={estadoMenu}
            >
                <Box
                    sx={{
                        pt: 2,
                        pl: 4,
                        minWidth: "300px"
                    }}
                >

                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="flex-start"
                        spacing={2}
                    >

                        <Typography>MENU</Typography>
                        <IconButton onClick={() => fecharMenu()}><HighlightOff /></IconButton>
                    </Stack>
                    <Divider sx={{ m: 2 }} />
                    <nav>
                        <List>
                            <ListItem>
                                <ListItemButton href="/">
                                    <Timeline sx={{ mr: 2 }} />                                 <ListItemText primary="Dashboard" />

                                </ListItemButton>
                            </ListItem>

                            <ListItem>
                                <ListItemButton href="/vendas">
                                    <PointOfSale sx={{ mr: 2 }} />
                                    <ListItemText primary="Vendas" />

                                </ListItemButton>
                            </ListItem>

                            <ListItem>
                                <ListItemButton href="/produtos">
                                    <ShoppingBag sx={{ mr: 2 }} />
                                    <ListItemText primary="Produtos" />

                                </ListItemButton>
                            </ListItem>

                            <ListItem>
                                <ListItemButton href="/vendedores">
                                    <AccountCircle sx={{ mr: 2 }} />
                                    <ListItemText primary="Vendedores" />

                                </ListItemButton>
                            </ListItem>

                        </List>
                    </nav>
                </Box>
            </Drawer >
        </>
    );
}

export default MenuTemporario;