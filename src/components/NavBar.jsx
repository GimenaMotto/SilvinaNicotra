
import { AppBar, Toolbar, Typography, IconButton, Icon, Box, Drawer, List, ListItem, ListItemText, Hidden } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import Modal from "./FoodModal";
import './NavBar.css';

export default function NavBar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false); //Agregar un estado para el modal

    const toggleDrawer = (open) => (event) => {
        setDrawerOpen(open);
    };

    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItem button>
                    <ListItemText primary="Retratos" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Alimentos" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Boda" />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <>
            <AppBar color="transparent" className="myAppBar">
                <Toolbar sx={{ display: "flex", alignItems: "center" }}>
                    <Hidden implementation="js" smUp>
                        <IconButton onClick={toggleDrawer(true)} sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                            SILVINA NICOTRA
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: "none", sm: "flex" },
                            flexGrow: 1,
                            justifyContent: "center",
                        }}
                    >
                        <Box sx={{ mr: 5 }}>
                            <Typography variant="h6" className="nav-link">Retratos</Typography>
                        </Box>
                        <Box sx={{ mr: 5 }}>
                            <Typography variant="h6" className="nav-link">Naturaleza</Typography>
                        </Box>
                        <Box sx={{ mr: 5 }}>
                            <Typography variant="h6" className="nav-link">Otras cosas</Typography>
                        </Box>
                        <Box sx={{ mr: 5 }}>
                            <Typography variant="h6" className="nav-link" onClick={() => setModalOpen(true)}>Alimentos</Typography>
                        </Box>
                        <Box sx={{ mr: 5 }}>
                            <Typography variant="h6" className="nav-link">Boda</Typography>
                        </Box>
                    </Box>

                </Toolbar>
                <Drawer
                    anchor={"left"}
                    open={drawerOpen}
                    onClose={toggleDrawer(false)}
                >
                    {list()}
                </Drawer>
            </AppBar>
            <Modal open={modalOpen} onClose={() => setModalOpen(false)} /> {/* Agregar el componente Modal con el estado de modalOpen */}
        </>
    );
}
