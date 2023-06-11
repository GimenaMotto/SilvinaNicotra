import React from 'react'
import { Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import img3 from '../images/Eventos/3.jpg'
import img4 from '../images/Eventos/4.jpg'
import img5 from '../images/Eventos/5.jpg'
import img6 from '../images/Eventos/6.jpg'
import img7 from '../images/Eventos/7.jpg'
import img8 from '../images/Eventos/8.jpg'
import img9 from '../images/Eventos/9.jpg'
import img10 from '../images/Eventos/10.jpg'
import img11 from '../images/Eventos/11.jpg'
import img12 from '../images/Eventos/12.jpg'
import img13 from '../images/Eventos/13.JPG'
import img14 from '../images/Eventos/14.JPG'
import img15 from '../images/Eventos/15.JPG'
import img16 from '../images/Eventos/16.JPG'
import img17 from '../images/Eventos/17.JPG'
import img18 from '../images/Eventos/18.JPG'

export default function EventsModal({ open, onClose }) {
    const images = [img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    arrows: false
                }
            }
        ]
    };

    function CustomPrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", left: "50px", zIndex: 2 }}
                onClick={onClick}
            />
        );
    }

    function CustomNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", right: "50px", zIndex: 2 }}
                onClick={onClick}
            />
        );
    }

    return (
        <Dialog open={open}
            onClose={onClose}
            fullWidth
            maxWidth="xl"
            style={{
                margin: '0px',
                height: '100%',
                width: '100%',
                overflow: 'auto',
            }}>
            <DialogTitle>
                <IconButton className="closeButton" onClick={onClose} style={{ position: 'absolute', right: 0 }}>
                    <CloseIcon />
                    <span className="closeButtonHoverArea" />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index}>
                            <img className="sliderImage" src={image} alt={`Imagen ${index + 1}`} />
                        </div>
                    ))}
                </Slider>
            </DialogContent>
        </Dialog>
    );
}
