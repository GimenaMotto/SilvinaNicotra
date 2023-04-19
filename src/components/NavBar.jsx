
import { AppBar, Toolbar, Typography, IconButton, Box, Drawer, List, ListItem, ListItemText, Hidden } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import Modal from "./FoodModal";
import './NavBar.css';
import UniversoPlantae from "./NatureModal";
import SessionModal from "./SessionModal";
import MusicTheaterModal from "./MusicTheaterModal";
import EventsModal from "./EventsModal";


export default function NavBar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false); //Agregar un estado para el modal alimentos
    const [modalOpenUniversoPlantae, setModalOpenUniversoPlantae] = useState(false); //modal plantas
    const [modalSession, setModalOpenSession] = useState(false)
    const [modalMusicTheater, setModalOpenMusicTheater] = useState(false)
    const [modalEvents, setModalOpenEvents] = useState(false)



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
                    <ListItemText primary="EVENTOS" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="MÚSICA Y TEATRO" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="SESIONES" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="UNIVERSO PLANTAE" onClick={() => setModalOpenUniversoPlantae(true)} />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="ALIMENTOS" onClick={() => setModalOpen(true)} />
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
                            <Typography variant="h6" className="nav-link" onClick={() => setModalOpenEvents(true)}>EVENTOS</Typography>
                        </Box>
                        <Box sx={{ mr: 5 }}>
                            <Typography variant="h6" className="nav-link" onClick={() => setModalOpenMusicTheater(true)}>MÚSICA Y TEATRO</Typography>
                        </Box>
                        <Box sx={{ mr: 5 }}>
                            <Typography variant="h6" className="nav-link" onClick={() => setModalOpenSession(true)}>SESIONES</Typography>
                        </Box>
                        <Box sx={{ mr: 5 }}>
                            <Typography variant="h6" className="nav-link" onClick={() => setModalOpenUniversoPlantae(true)}>UNIVERSO PLANTAE</Typography>
                        </Box>
                        <Box sx={{ mr: 5 }}>
                            <Typography variant="h6" className="nav-link" onClick={() => setModalOpen(true)}>ALIMENTOS</Typography>
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
            <Modal open={modalOpen} onClose={() => setModalOpen(false)} />
            <UniversoPlantae open={modalOpenUniversoPlantae} onClose={() => setModalOpenUniversoPlantae(false)} />
            <SessionModal open={modalSession} onCLose={() => setModalOpenSession(false)} />
            <MusicTheaterModal open={modalMusicTheater} onClose={() => setModalOpenMusicTheater(false)} />
            <EventsModal open={modalEvents} onClose={() => setModalOpenEvents(false)} />
        </>
    );
}
