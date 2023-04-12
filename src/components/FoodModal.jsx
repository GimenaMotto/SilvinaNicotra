import React from 'react'
import { Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './FoodModal.css'
import img1 from '../images/Alimentos/alimentos1.JPG'
import img2 from '../images/Alimentos/alimentos2.JPG'
import img3 from '../images/Alimentos/alimentos3.jpg'
import img4 from '../images/Alimentos/alimentos4.JPG'
import img5 from '../images/Alimentos/alimentos5.JPG'
import img6 from '../images/Alimentos/alimentos6.JPG'
import img7 from '../images/Alimentos/alimentos7.JPG'

export default function Modal({ open, onClose }) {
    const images = [img1, img2, img3, img4, img5, img6, img7];

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


