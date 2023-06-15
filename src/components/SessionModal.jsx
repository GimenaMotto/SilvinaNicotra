import React from 'react'
import { Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import img1 from '../images/Sesiones/1.jpg'
import img2 from '../images/Sesiones/2.jpg'
import img3 from '../images/Sesiones/3.jpg'
import img4 from '../images/Sesiones/4.jpg'
import img5 from '../images/Sesiones/5.jpg'
import img8 from '../images/Sesiones/8.jpg'
import img10 from '../images/Sesiones/10.jpg'
import img11 from '../images/Sesiones/11.jpg'
import img12 from '../images/Sesiones/12.jpg'
import img13 from '../images/Sesiones/13.JPG'
import img14 from '../images/Sesiones/14.jpg'
import img15 from '../images/Sesiones/15.jpg'

export default function SessionModal({ open, onClose }) {
    const images = [img1, img2, img3, img4, img5, img10, img11, img12, img13, img14, img15, img8];

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

