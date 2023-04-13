import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.min.css';
import brandOne from "../../../images/brand-01.png";
import brandTwo from "../../../images/brand-02.png";
import brandThree from "../../../images/brand-03.png";
import brandFour from "../../../images/brand-04.png";
import brandFive from "../../../images/brand-05.png";
import brandSix from "../../../images/brand-06.png";
import brandSeven from "../../../images/brand-07.png";
import brandEigth from "../../../images/brand-08.png";

const HomeBrands = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(3);
    const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setSlidesPerView(2);
            } else if (window.innerWidth < 992) {
                setSlidesPerView(3);
            } else {
                setSlidesPerView(4);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            <Swiper
            onSlideChange={handleSlideChange}
            initialSlide={currentSlide}
            slidesPerView={slidesPerView}
            spaceBetween={40}
            centeredSlides={true}
            loop={true}
            speed={500}
            style={{backgroundColor: "#fff",borderRadius: "5px"}}>
                <SwiperSlide>
                    <img  src={brandOne} alt='brand'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={brandTwo} alt='brand'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={brandThree} alt='brand'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={brandFour} alt='brand'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={brandFive} alt='brand'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={brandSix} alt='brand'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={brandSeven} alt='brand'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={brandEigth} alt='brand'/>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default HomeBrands