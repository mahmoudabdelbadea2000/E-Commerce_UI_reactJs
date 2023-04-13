import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import catBannerOne from "../../../images/catbanner-01.jpg";
import catBannerTwo from "../../../images/catbanner-02.jpg";
import catBannerThree from "../../../images/catbanner-03.jpg";
import catBannerFour from "../../../images/catbanner-04.jpg";
import bannerTwo from "../../../images/main-banner-1.jpg";
import bannerOne from "../../../images/main-banner.jpg";
import styles from "./homeBanner.module.css";


const HomeBanners = () => {
    return (
        <section style={{ margin:"40px 0"}}>
            <Container>
                <Row className='justify-content-between align-items-center'>
                    <Col md="6">
                        <Swiper loop={true} autoplay={{delay: 1000}} pagination={true} modules={[Pagination]} className={`h-100 ${styles.mySwiper}`}>
                            <SwiperSlide>
                                <div className={`position-relative ${styles.homeBanner__text}`}>
                                    <div>
                                        <p>SUPERSHARGED FOR PROS</p>
                                        <h4>IPadS13+ Pro.</h4>
                                        <p>from $999 on $41.62/mo</p>
                                        <button type='text'>Buy Now</button>
                                    </div>
                                    <img src={bannerOne} alt="banner__one" width="100%" height="100%" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={`position-relative ${styles.homeBanner__text}`}>
                                    <div>
                                        <p>SUPERSHARGED FOR PROS</p>
                                        <h4>IPadS13+ Pro.</h4>
                                        <p>from $999 on $41.62/mo</p>
                                        <button type='text'>Buy Now</button>
                                    </div>
                                    <img src={bannerTwo} alt="banner__two" width="100%" height="100%" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </Col>
                    <Col xs="6" sm="6" md="3" className={`d-flex flex-column mt-sm-4 mt-md-0 ${styles.homeBanner__cat}`}>
                        <div>
                            <div className={`position-relative ${styles.homeBanner__content}`}>
                                <div>
                                    <p>Best Sale</p>
                                    <p>Laptop Max</p>
                                    <p>from $1699.00 on <br /> 64.62/mo</p>
                                </div>
                                <img src={catBannerOne} className='rounded-1' alt='cat__banner' width="100%" height="100%" />
                            </div>
                            <div className={`position-relative mt-3 ${styles.homeBanner__content}`}>
                                <div>
                                    <p>New Arrival</p>
                                    <p>But IPad Air</p>
                                    <p>from $600 on <br /> 50/mo</p>
                                </div>
                                <img src={catBannerTwo} className='rounded-1' alt='cat__banner' width="100%" height="100%" />
                            </div>
                        </div>
                    </Col>
                    <Col xs="6" sm="6" md="3" className={`d-flex flex-column mt-sm-4 mt-md-0 ${styles.homeBanner__cat}`}>
                        <div>
                            <div className={`position-relative ${styles.homeBanner__content}`}>
                                <div>
                                    <p>15% off</p>
                                    <p>Smart Watchs 7</p>
                                    <p>shop the latest band <br />styles and colors</p>
                                </div>
                                <img src={catBannerThree} className='rounded-1' alt='cat__banner' width="100%" height="100%" />
                            </div>
                            <div className={`position-relative mt-3 ${styles.homeBanner__content}`}>
                                <div>
                                    <p>FREE ENGRAVING</p>
                                    <p>AirPods Max</p>
                                    <p>high-fidilty playback & <br /> ultra low distortion</p>
                                </div>
                                <img src={catBannerFour} className='rounded-1' alt='cat__banner' width="100%" height="100%" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HomeBanners