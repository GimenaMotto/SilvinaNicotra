import React from 'react'
import { Box, Typography } from "@mui/material"
import { Responsive, WidthProvider } from 'react-grid-layout'

import home1 from '../images/Favs/1.jpg'
import home2 from '../images/Favs/2.jpg'
import home3 from '../images/Favs/3.jpg'
import home4 from '../images/Favs/4.jpg'
import home5 from '../images/Favs/5.jpg'
import home6 from '../images/Favs/6.jpg'
import home7 from '../images/Favs/7.jpg'
import home8 from '../images/Favs/8.jpg'
import home9 from '../images/Favs/9.jpg'
import home10 from '../images/Favs/10.jpg'
import home11 from '../images/Favs/11.jpg'
import home12 from '../images/Favs/12.jpg'
import home13 from '../images/Favs/12.jpg'
import home14 from '../images/Favs/14.jpg'
import home15 from '../images/Favs/15.jpg'
import home16 from '../images/Favs/16.jpg'
import home17 from '../images/Favs/17.jpg'


import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import './ImageList.css'

const ResponsiveReactGridLayout = WidthProvider(Responsive)

export default function ImagesHome() {

    const [layout, setLayout] = React.useState([
        { i: 'a', x: 0, y: 0, w: 1.5, h: 1.5, resizeHandles: ['sw', 'nw', 'se', 'ne'] },
        { i: 'b', x: 1.5, y: 0, w: 1.5, h: 1.5, resizeHandles: ['sw', 'nw', 'se', 'ne'] },
        { i: 'poesía', x: 0, y: 1.5, w: 3, h: 3, resizeHandles: ['sw', 'nw', 'se', 'ne'] },
        { i: 'c', x: 1.5, y: 1.5, w: 1.5, h: 1.5, resizeHandles: ['sw', 'nw', 'se', 'ne'] },
        { i: 'd', x: 0, y: 3, w: 1.5, h: 1.5, resizeHandles: ['sw', 'nw', 'se', 'ne'] },
        { i: 'e', x: 1.5, y: 3, w: 1.5, h: 1.5, resizeHandles: ['sw', 'nw', 'se', 'ne'] },
        { i: 'f', x: 0, y: 4.5, w: 1.5, h: 1.5, resizeHandles: ['sw', 'nw', 'se', 'ne'] },
        { i: 'g', x: 1.5, y: 4.5, w: 1.5, h: 1.5, resizeHandles: ['sw', 'nw', 'se', 'ne'] },
        { i: 'h', x: 0, y: 6, w: 1.5, h: 1.5, resizeHandles: ['sw', 'nw', 'se', 'ne'] },
        { i: 'i', x: 1.5, y: 6, w: 1.5, h: 1.5, resizeHandles: ['sw', 'nw', 'se', 'ne'] },
        { i: 'j', x: 0, y: 7.5, w: 1.5, h: 1.5, resizeHandles: ['sw', 'nw', 'se', 'ne'] },
        { i: 'k', x: 1.5, y: 7.5, w: 1.5, h: 1.5, resizeHandles: ['sw', 'nw', 'se', 'ne'] },
        { i: 'l', x: 0, y: 9, w: 1.5, h: 1.5, resizeHandles: ['sw', 'nw', 'se', 'ne'] },
        { i: 'm', x: 1.5, y: 9, w: 1.5, h: 1.5, resizeHandles: ['sw', 'nw', 'se', 'ne'] },
        { i: 'n', x: 0, y: 9.5, w: 1.5, h: 1.5, resizeHandles: ['sw', 'nw', 'se', 'ne'] },
        { i: 'o', x: 1.5, y: 10, w: 1.5, h: 1.5, resizeHandles: ['sw', 'nw', 'se', 'ne'] },
        { i: 'p', x: 0, y: 10.5, w: 1.5, h: 1.5, resizeHandles: ['sw', 'nw', 'se', 'ne'] },
        { i: 'q', x: 1.5, y: 11, w: 1.5, h: 1.5, resizeHandles: ['sw', 'nw', 'se', 'ne'] },
    ]);




    const handleLayoutChange = (newLayout) => {
        setLayout(newLayout);
    };

    return (
        <Box sx={{ marginTop: "80px" }}>
            <ResponsiveReactGridLayout
                className="layout"
                layouts={{ lg: layout }}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                cols={{ lg: 3, md: 3, sm: 2, xs: 1, xxs: 1 }}
                rowHeight={240}
                onLayoutChange={handleLayoutChange}
            >

                <div key="a">
                    <img src={home1} />
                </div>
                <div key="b">
                    <img src={home2} />
                </div>
                <div key="poesía" style={{ gridColumnEnd: 'span 2' }}>
                    <Typography variant="body1" sx={{ color: 'black', fontSize: '32px', margin: '0 80px' }}>
                        Parar, fotografiar, observar, contemplar , volver a  <span style={{ fontWeight: 'bold', fontSize: '40px' }}>mirar</span>, respirar y seguir. <br /><br /> Ir por lo que nuestra mirada nos va mostrando, cómo despeje del propio andar, del camino personal, para avanzar en eso que anhelamos. <br /><br />
                        Frenar en los detalles, en esas simples pequeñas cosas que son como una pausa en nuestro andar y nos hacen avanzar en la interacción con la otredad.<br /><br />
                        A mis ojos les gusta narrar, contar historias, detenerse en lo que acontece en un fuego, en un andar, en un atardecer, en un encuentro.
                    </Typography>
                </div>
                <div key="c">
                    <img src={home3} />
                </div>
                <div key="d">
                    <img src={home4} />
                </div>
                <div key="e">
                    <img src={home5} />
                </div>
                <div key="f">
                    <img src={home6} />
                </div>
                <div key="g">
                    <img src={home7} />
                </div>

                <div key="h">
                    <img src={home8} />
                </div>
                <div key="i">
                    <img src={home9} />
                </div>
                <div key="j">
                    <img src={home10} />
                </div>
                <div key="k">
                    <img src={home11} />
                </div>
                <div key="l">
                    <img src={home12} />
                </div>
                <div key="m">
                    <img src={home13} />
                </div>
                <div key="n">
                    <img src={home14} />
                </div>
                <div key="o">
                    <img src={home15} />
                </div>
                <div key="p">
                    <img src={home16} />
                </div>
                <div key="o">
                    <img src={home17} />
                </div>

            </ResponsiveReactGridLayout>
        </Box>
    );
}

