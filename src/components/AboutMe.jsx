import React from "react";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import photographerImage from "../images/profile.jpg";

const AboutMe = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "80px", marginBottom: "80px" }}>
            <Card sx={{ maxWidth: 1200 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <div style={{ display: "flex", margin: "20px" }}>
                            <CardMedia
                                component="img"
                                sx={{ width: "100%", height: "auto", objectFit: "contain", marginRight: "20px" }}
                                image={photographerImage}
                                alt="Photographer"
                            />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CardContent>
                            <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                                &nbsp;Nací en la ciudad de Rosario.<br />
                                &nbsp;&nbsp;&nbsp;En 5to grado por un taller de fotografía al que me anoté y que me obsequiaron una cámara Konica. En 2007 comencé a estudiar fotografía en la Escuela de Artes Plásticas Manuel Musto. Allí trabajé en el laboratorio aprendiendo fotografía analógica en blanco y negro con Andrea Ostera.
                                También en esa institución participé en talleres de pintura, serigrafía con Hugo Cava, historia del arte contemporáneo con Nancy Rojas y heliocopia con Mabel Rodríguez.<br />
                                &nbsp;&nbsp;&nbsp;Participé en diversos talleres sobre producción con Norberto Puzzolo, Gisela Volá de la subcooperativa de fotógrafos y Gustavo Fritegotto, este último sobre el Archivo familiar.<br />
                                &nbsp;&nbsp;&nbsp;En el año 2018 completé mis estudios terciarios en fotografía en ISET nº18 con especialización en medios digitales.<br />
                                &nbsp;&nbsp;&nbsp;En el año 2013 participé en "Interferencias", un programa radial de experimentación y arte sonoro, a partir de un taller con Leonello Zambón sobre Gambiarras sonoras.<br />
                                &nbsp;&nbsp;&nbsp;En 2016, se me otorgó el segundo premio en fotografías en serie de la obra del Arq. Rafael Iglesia. La muestra se realizó del 13 de octubre al 20 de noviembre en las galerías del CCPE.<br />
                                &nbsp;&nbsp;&nbsp;Desde 2016 me he estado formando en clases particulares de canto con Liza Polichizzo, habiendo pasado por un breve lapso por la facultad de música.<br />
                                &nbsp;&nbsp;&nbsp;Desde 2018 estoy incursionando en la filmación de cortos y videoclips.<br />
                                &nbsp;&nbsp;&nbsp;Desde 2017 me encuentro explorando la técnica de cianotipo.
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>
        </div>
    );
}

export default AboutMe;
