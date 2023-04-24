import React from 'react'
import { Box } from "@mui/material"
import { Responsive, WidthProvider } from 'react-grid-layout'

import home1 from '../images/Favs/01.jpg'
import home2 from '../images/Favs/02.jpg'
import home3 from '../images/Favs/03.jpg'
import home4 from '../images/Favs/04.jpg'
import home5 from '../images/Favs/05.jpg'
import home6 from '../images/Favs/06.jpg'
import home7 from '../images/Favs/07.jpg'
import home8 from '../images/Favs/08.jpg'
import home9 from '../images/Favs/09.jpg'
import home11 from '../images/Favs/11.JPG'
import home12 from '../images/Favs/12.jpg'
import home13 from '../images/Favs/13.JPG'
import home14 from '../images/Universo Plantae/4.JPG'

import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import './ImageList.css'

const ResponsiveReactGridLayout = WidthProvider(Responsive)

export default function ImagesHome() {

    const [layout, setLayout] = React.useState([

        { i: 'a', x: 0, y: 0, w: 2.8, h: 2.8, resizeHandles: ['sw', 'nw', 'se', 'ne'] },
        { i: 'b', x: 2, y: 0, w: 2.8, h: 2.8, resizeHandles: ['sw', 'nw', 'se', 'ne'] },
        { i: 'c', x: 0, y: 2, w: 2, h: 2, resizeHandles: ['sw', 'nw', 'se', 'ne'] },
        { i: 'd', x: 2, y: 1, w: 2.8, h: 2.8, resizeHandles: ['sw', 'nw', 'se', 'ne'] },
        { i: 'e', x: 1, y: 1, w: 2.8, h: 2.8, resizeHandles: ['sw', 'nw', 'se', 'ne'] },
        { i: 'f', x: 2, y: 1, w: 2.5, h: 2.5, resizeHandles: ['sw', 'nw', 'se', 'ne'] },
        { i: 'g', x: 0, y: 2, w: 2.8, h: 2.8, resizeHandles: ['sw', 'nw', 'se', 'ne'] },
        { i: 'h', x: 1, y: 2, w: 3, h: 3, resizeHandles: ['sw', 'nw', 'se', 'ne'] },
        { i: 'i', x: 2, y: 2, w: 2.5, h: 2.5, resizeHandles: ['sw', 'nw', 'se', 'ne'] },
        { i: 'j', x: 2, y: 2, w: 2, h: 2, resizeHandles: ['sw', 'nw', 'se', 'ne'] },
        { i: 'k', x: 1, y: 1, w: 2.3, h: 2.3, resizeHandles: ['sw', 'nw', 'se', 'ne'] },
        { i: 'l', x: 2, y: 2, w: 2.5, h: 2.5, resizeHandles: ['sw', 'nw', 'se', 'ne'] },
        { i: 'm', x: 1, y: 1, w: 2, h: 2, resizeHandles: ['sw', 'nw', 'se', 'ne'] },


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
                    <img src={home11} />
                </div>
                <div key="k">
                    <img src={home12} />
                </div>
                <div key="l">
                    <img src={home13} />
                </div>
                <div key="m">
                    <img src={home14} />
                </div>
            </ResponsiveReactGridLayout>
        </Box>
    );
}

