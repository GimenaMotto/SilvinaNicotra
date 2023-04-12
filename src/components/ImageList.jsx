import React from 'react';
import { Box } from "@mui/material"
import { Responsive, WidthProvider } from 'react-grid-layout';
import home1 from '../images/Favs/1.jpg'
import home2 from '../images/Favs/2.jpg'
import home3 from '../images/Favs/3.jpg'
import home4 from '../images/Favs/4.jpg'
import home5 from '../images/Favs/5.jpg'
import home6 from '../images/Favs/6.jpg'
import home7 from '../images/Favs/7.jpg'
import home8 from '../images/Favs/8.jpg'
import home9 from '../images/Favs/9.jpg'
import home10 from '../images/Favs/10.JPG'
import home11 from '../images/Favs/11.jpg'
import home12 from '../images/Favs/12.JPG'
import home13 from '../images/Favs/13.jpg'
import home14 from '../images/Favs/14.jpg'
import home15 from '../images/Favs/15.JPG'



import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './ImageList.css'

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default function ImagesHome() {

    const [layout, setLayout] = React.useState([
        // { i: 'a', x: 0, y: 0, w: 1, h: 1, resizeHandles: ['sw', 'nw', 'se', 'ne'] },
        { i: 'b', x: 1, y: 0, w: 1, h: 1, resizeHandles: ['sw', 'nw', 'se', 'ne'] },
        { i: 'c', x: 0, y: 1, w: 1, h: 1, resizeHandles: ['sw', 'nw', 'se', 'ne'] },
        { i: 'd', x: 1, y: 1, w: 1, h: 1, resizeHandles: ['sw', 'nw', 'se', 'ne'] },
        { i: 'e', x: 2, y: 0, w: 1, h: 1, resizeHandles: ['sw', 'nw', 'se', 'ne'] },
        { i: 'f', x: 2, y: 1, w: 1, h: 1, resizeHandles: ['sw', 'nw', 'se', 'ne'] },
        { i: 'g', x: 0, y: 0, w: 1, h: 1, resizeHandles: ['sw', 'nw', 'se', 'ne'] },
        // { i: 'h', x: 1, y: 0, w: 1, h: 1, resizeHandles: ['sw', 'nw', 'se', 'ne'] },
        { i: 'i', x: 0, y: 1, w: 1, h: 1, resizeHandles: ['sw', 'nw', 'se', 'ne'] },
        // { i: 'j', x: 1, y: 1, w: 1, h: 1, resizeHandles: ['sw', 'nw', 'se', 'ne'] },
        { i: 'k', x: 2, y: 0, w: 1, h: 1, resizeHandles: ['sw', 'nw', 'se', 'ne'] },
        { i: 'l', x: 2, y: 1, w: 1, h: 1, resizeHandles: ['sw', 'nw', 'se', 'ne'] },
        { i: 'm', x: 1, y: 1, w: 1, h: 1, resizeHandles: ['sw', 'nw', 'se', 'ne'] },
        { i: 'n', x: 2, y: 0, w: 1, h: 1, resizeHandles: ['sw', 'nw', 'se', 'ne'] },
        { i: 'ñ', x: 2, y: 1, w: 1, h: 1, resizeHandles: ['sw', 'nw', 'se', 'ne'] },
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
                {/* <div key="a">
                    <img src={home1} />
                </div> */}
                <div key="b">
                    <img src={home14} />
                </div>
                <div key="c">
                    <img src={home11} />
                </div>
                <div key="d">
                    <img src={home3} />
                </div>
                <div key="e">
                    <img src={home4} />
                </div>
                <div key="f">
                    <img src={home5} />
                </div>
                <div key="g">
                    <img src={home6} />
                </div>
                {/* <div key="h">
                    <img src={home8} />
                </div> */}
                <div key="i">
                    <img src={home7} />
                </div>
                {/* <div key="j">
                    <img src={home10} />
                </div> */}
                <div key="k">
                    <img src={home9} />
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
                <div key="ñ">
                    <img src={home15} />
                </div>
            </ResponsiveReactGridLayout>
        </Box>
    );
}

