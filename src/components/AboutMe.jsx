import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import photographerImage from "../images/Eventos/4.jpg";

const AboutMe = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
            <Card sx={{ maxWidth: 1000 }}>
                <div style={{ display: "flex", margin: "20px" }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 200, objectFit: "cover" }}
                        image={photographerImage}
                        alt="Photographer"
                    />
                    <CardContent sx={{ marginTop: "20px", marginBottom: "20px" }}>
                        <Typography variant="body1" sx={{ fontSize: "1.2rem", textIndent: "1em" }}>
                            Nací en la ciudad de Rosario. <br />
                            En 5to grado por un taller de fotografia al que me anote y que me pudieron obsequiar una camara konica En 2007 comencé a estudiar fotografía en la Escuela de artes plásticas Manuel Musto, allí trabajé en el laboratorio aprendiendo fotografía analógica en blanco y negro con Andrea Ostera.
                            También en esa institución me sumergí en los talleres de pintura, serigrafía con Hugo Cava, historia del arte contemporáneo con Nancy Rojas y heliocopia con Mabel Rodríguez. <br />
                            Participe en diversos talleres sobre producción con Norberto Puzzolo, Gisela Volá de la subcooperativa de fotógrafos y Gustavo Fritegotto, éste último sobre el Archivo familiar. <br />
                            En el año 2018 completé mis estudios terciarios en fotografía en ISET nº18 con especialización medios digitales. <br />
                            En el año 2013 participé en Interferencias, programa radial de experimentación y arte sonoro, a partir de un taller con Leonello Zambón sobre Gambiarras sonoras. <br />
                            Me fue dado en 2016 el segundo Premio fotografías en serie de la obra del Arq. Rafael Iglesia. La muestra se realizó desde 13 de octubre al 20 de noviembre en las galerías del CCPE. <br />
                            Desde el año 2016 me vengo formando en clases particulares de canto con Liza Polichizzo, habiendo pasado por un breve lapso por la facultad de música. <br />
                            Desde el 2018 estoy incursionando en la filmación de cortos y videoclips. <br />
                            Desde el 2017 me encuentro explorando en la técnica de cianotipo.
                        </Typography>
                    </CardContent>
                </div>
            </Card>
        </div>
    );
}

export default AboutMe;
