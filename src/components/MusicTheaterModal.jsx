import React from 'react'
import { Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import img1 from '../images/Musicateatro/1.jpg'
import img2 from '../images/Musicateatro/2.jpg'
import img3 from '../images/Musicateatro/3.jpg'
import img4 from '../images/Musicateatro/4.jpg'
import img5 from '../images/Musicateatro/5.jpg'
import img6 from '../images/Musicateatro/6.jpg'
import img7 from '../images/Musicateatro/7.jpg'
import img8 from '../images/Musicateatro/8.jpg'
import img9 from '../images/Musicateatro/9.jpg'
import img10 from '../images/Musicateatro/10.jpg'
import img11 from '../images/Musicateatro/11.jpg'
import img12 from '../images/Musicateatro/12.jpg'



export default function MusicTheaterModal({ open, onClose }) {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

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
