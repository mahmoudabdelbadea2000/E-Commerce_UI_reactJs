import React from "react";
import { Button, Card, Col, ProgressBar } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
// import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
// import { Swiper, SwiperSlide } from "swiper/react";
import tab from "../../../images/tab.jpg";
import tabTwo from "../../../images/tab1.jpg";
// import tabFour from "../../../images/tab2.jpg";
// import tabThree from "../../../images/tab3.jpg";
import styless from "../../products/productCard/productCard.module.css";
import styles from "./homeOfferies.module.css";

const Offer = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <Col md="6" lg="4">
      <Card
        className={`d-flex flex-row mt-4 ${styles.product__hover}`}
        style={{
          border: 0,
          boxShadow: "-3px 3px 10px 0 #eaeaea",
        }}
      >
        <div className="position-relative overflow-hidden w-75">
          <i
            className="fa-regular fa-heart position-absolute"
            style={{
              top: "10px",
              right: "10px",
              cursor: "pointer",
            }}
          ></i>
          <span className={`${styles.offer__discound}`}> -20% </span>
          <div
            className={`position-absolute d-flex justify-content-center align-items-center flex-column gap-3 ${styles.product__actionBar}`}
          >
            <i className="fa-solid fa-eye"></i>
            <i className="fa-solid fa-shuffle"></i>
            <i className="fa-solid fa-bag-shopping"></i>
          </div>
          <Card.Img
            variant="top"
            src={tab}
            className={`d-none img-fluid ${styles.img__hover}`}
          />
          <Card.Img
            variant="top"
            src={tabTwo}
            className={`img-fluid ${styles.img__hover}`}
          />
          {/* <>
                    <Swiper
                        slidesPerView={4}
                        centeredSlides={true}
                        spaceBetween={30}
                        grabCursor={true}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src={tabThree} alt='product-thumbnail' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={tabFour} alt='product-thumbnail' />
                        </SwiperSlide>
                    </Swiper>
                </> */}
        </div>
        <Card.Body className="flex-2">
          <Card.Title>
            <p className={styless.product__title}>sony</p>
          </Card.Title>
          <Card.Text
            style={{
              fontSize: "14px",
              color: "#777",
              marginBottom: "5px !important",
            }}
          >
            <div className={styless.product__body}>
              <p className="fw-bold text-black">
                kids headphone Bulk 10 pack multi colored
              </p>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={15}
                isHalf={true}
                emptyIcon={<i className="fa-regular fa-star"></i>}
                halfIcon={<i className="fa-solid fa-star-half"></i>}
                fullIcon={<i className="fa-solid fa-star"></i>}
                activeColor="#ffd700"
                edit={false}
                value={3.5}
                classNames={styles.stars}
              />
              <p style={{ color: "#a52a2a" }}>
                $100
                <span className="text-decoration-line-through text-black-50 ms-2">
                  $150.00
                </span>
              </p>
              <div
                className={`d-flex align-items-center gap-1 ${styles.product__discound}`}
              >
                <p>5 days</p>
                <div className="d-flex gap-1 align-itmes-center">
                  <span className="badge rounded-circle p-2 bg-danger">1</span>:
                  <span className="badge rounded-circle p-2 bg-danger">1</span>:
                  <span className="badge rounded-circle p-2 bg-danger">1</span>
                </div>
              </div>
              <div className="mt-2">
                <p>products: </p>
                <ProgressBar
                  variant="success"
                  now={40}
                  visuallyHidden
                  className="mt-1"
                  style={{
                    height: "5px",
                  }}
                />
              </div>
            </div>
            <Link to="/cart">
              <Button
                variant="primary"
                className={`rounded-pill border-0 mt-2 py-1 ${styles.product__button}`}
              >
                add to cart
              </Button>
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Offer;
