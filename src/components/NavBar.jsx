import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, IconButton, Box, Drawer, List, ListItem, ListItemText, Hidden } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import React, { useState } from 'react'
import Modal from "./FoodModal"
import './NavBar.css'
import UniversoPlantae from "./NatureModal"
import SessionModal from "./SessionModal"
import MusicTheaterModal from "./MusicTheaterModal"
import EventsModal from "./EventsModal"


export default function NavBar() {
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const [modalOpenUniversoPlantae, setModalOpenUniversoPlantae] = useState(false)
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
                    <ListItemText primary="MARCHAS" onClick={() => setModalOpenEvents(true)} />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="MÚSICA Y TEATRO" onClick={() => setModalOpenMusicTheater(true)} />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="SESIONES" onClick={() => setModalOpenSession(true)} />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="UNIVERSO PLANTAE" onClick={() => setModalOpenUniversoPlantae(true)} />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="ALIMENTOS" onClick={() => setModalOpen(true)} />
                </ListItem>
                <Link to="/audiovisuales" className="no-underline">
                    <ListItem button>
                        <ListItemText primary="AUDIOVISUALES" />
                    </ListItem>
                </Link>
                <Link to="/sobremí" className="no-underline">
                    <ListItem button>
                        <ListItemText primary="SOBRE MÍ" />
                    </ListItem>
                </Link>
            </List>
        </Box>
    );

    return (
        <>
            <AppBar sx={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }} className="myAppBar">
                <Toolbar sx={{ display: "flex", alignItems: "center" }}>
                    <Hidden implementation="js" smUp>
                        <IconButton onClick={toggleDrawer(true)} sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton>
                    </Hidden>

                    <Box sx={{ flexGrow: 1 }}>
                        <Link to='/' className="no-underline">
                            <Typography variant="h5" sx={{ fontWeight: "bold" }} color="black" >
                                SILVINA NICOTRA
                            </Typography>
                        </Link>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: "none", sm: "flex" },
                            flexGrow: 1,
                            justifyContent: "center",
                        }}
                    >
                        <Box sx={{ mr: 4 }}>
                            <Typography variant="h6" className="nav-link" onClick={() => setModalOpenEvents(true)} color="black">MARCHAS</Typography>
                        </Box>
                        <Box sx={{ mr: 4 }}>
                            <Typography variant="h6" className="nav-link" onClick={() => setModalOpenMusicTheater(true)} color="black">MÚSICA Y TEATRO</Typography>
                        </Box>
                        <Box sx={{ mr: 4 }}>
                            <Typography variant="h6" className="nav-link" onClick={() => setModalOpenSession(true)} color="black">SESIONES</Typography>
                        </Box>
                        <Box sx={{ mr: 4 }}>
                            <Typography variant="h6" className="nav-link" onClick={() => setModalOpenUniversoPlantae(true)} color="black">UNIVERSO PLANTAE</Typography>
                        </Box>
                        <Box sx={{ mr: 4 }}>
                            <Typography variant="h6" className="nav-link" onClick={() => setModalOpen(true)} color="black">ALIMENTOS</Typography>
                        </Box>
                        <Box sx={{ mr: 4 }}>
                            <Link to='/audiovisuales' className="no-underline">
                                <Typography variant="h6" className="nav-link" color="black">AUDIOVISUALES</Typography>
                            </Link>
                        </Box>
                        <Box sx={{ mr: 1 }}>
                            <Link to='/sobremí' className="no-underline">
                                <Typography variant="h6" className="nav-link" color="black">SOBRE MÍ</Typography>
                            </Link>
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
            <SessionModal open={modalSession} onClose={() => setModalOpenSession(false)} />
            <MusicTheaterModal open={modalMusicTheater} onClose={() => setModalOpenMusicTheater(false)} />
            <EventsModal open={modalEvents} onClose={() => setModalOpenEvents(false)} />
        </>
    );
}
