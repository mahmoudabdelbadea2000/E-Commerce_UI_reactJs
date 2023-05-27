import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductSection from "../../components/products/ProductSection";
import Reviews from "../../components/products/Reviews";
import HelmetComponent from "../../components/utility/Helmet";
import headphone from "../../images/watch.jpg";
import styles from "./product.module.css";

const ProductDetailsPage = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  return (
    <section
      className={`pt-5 pb-5`}
      style={{
        backgroundColor: "#f1f1f1",
      }}
    >
      <HelmetComponent title="Product Details" />
      <Container>
        <div className={`bg-white shadow p-4 rounded-2`}>
          <Row className={`${styles.product__Details}`}>
            <Col sm="12" md="6">
              <div className="w-100">
                <Swiper loop={true} pagination={true} navigation={true}>
                  <SwiperSlide>
                    <img
                      src={headphone}
                      alt="prodect"
                      width="100%"
                      height="100%"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={headphone}
                      alt="prodect"
                      width="100%"
                      height="100%"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </Col>
            <Col sm="12" md="6">
              <div className={styles.product__details}>
                <h5 className="fw-bold">
                  kids headphone Bulk 10 pack multi colored for students
                </h5>
                <p className="fw-bold">$100.00</p>
                <div className="d-flex align-items-center text-black-50">
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    isHalf={true}
                    emptyIcon={<i className="fa-regular fa-star"></i>}
                    halfIcon={<i className="fa-solid fa-star-half"></i>}
                    fullIcon={<i className="fa-solid fa-star"></i>}
                    activeColor="#ffd700"
                    edit={false}
                    value={3.5}
                  />
                  <span className="mx-2">(2 reciews)</span>
                  <p style={{ cursor: "pointer" }}>write review</p>
                </div>
                <div>
                  <p className="fw-bold">
                    Type:{" "}
                    <span
                      className="fw-normal text-black-50"
                      style={{ fontSize: "14px" }}
                    >
                      Headphone
                    </span>
                  </p>
                  <p className="fw-bold">
                    Brand:{" "}
                    <span
                      className="fw-normal text-black-50"
                      style={{ fontSize: "14px" }}
                    >
                      Havells
                    </span>
                  </p>
                  <p className="fw-bold">
                    Categories:{" "}
                    <span
                      className="fw-normal text-black-50"
                      style={{ fontSize: "14px" }}
                    >
                      airbods, camera, computer
                    </span>
                  </p>
                  <p className="fw-bold">
                    Tags:{" "}
                    <span
                      className="fw-normal text-black-50"
                      style={{ fontSize: "14px" }}
                    >
                      headphones laptop mobile appo speaker
                    </span>
                  </p>
                  <p className="fw-bold">
                    availability:{" "}
                    <span
                      className="fw-normal text-black-50"
                      style={{ fontSize: "14px" }}
                    >
                      541 in Stock
                    </span>
                  </p>
                  <p className="fw-bold">
                    Size:{" "}
                    <div>
                      <span
                        className="fw-normal text-black-50"
                        style={{
                          fontSize: "14px",
                          border: "1px solid black",
                          padding: "5px 10px",
                          cursor: "pointer",
                        }}
                      >
                        S
                      </span>{" "}
                      <span
                        className="fw-normal text-black-50"
                        style={{
                          fontSize: "14px",
                          border: "1px solid black",
                          padding: "5px 10px",
                          cursor: "pointer",
                        }}
                      >
                        L
                      </span>
                    </div>
                  </p>
                  <div className="fw-bold d-flex flex-column mt-2">
                    Color:{" "}
                    <div className="d-flex">
                      <div
                        className="badge rounded-circle p-2 bg-danger"
                        style={{
                          width: "20px",
                          height: "20px",
                          marginRight: "5px",
                          border: "1px solid #000",
                        }}
                      >
                        {" "}
                      </div>
                      <div
                        className="badge rounded-circle p-2 bg-danger"
                        style={{
                          width: "20px",
                          height: "20px",
                          marginRight: "5px",
                          border: "1px solid #000",
                        }}
                      >
                        {" "}
                      </div>
                      <div
                        className="badge rounded-circle p-2 bg-danger"
                        style={{
                          width: "20px",
                          height: "20px",
                          marginRight: "5px",
                          border: "1px solid #000",
                        }}
                      >
                        {" "}
                      </div>
                      <div
                        className="badge rounded-circle p-2 bg-danger"
                        style={{
                          width: "20px",
                          height: "20px",
                        }}
                      >
                        {" "}
                      </div>
                    </div>
                  </div>
                  <div className="d-flex  flex-column mt-2">
                    <p className="fw-bold">
                      Quantity:
                      <input
                        type="number"
                        className="ms-2"
                        style={{ width: "50px" }}
                      />
                    </p>
                    <div className="mt-2">
                      <Link to="">
                        <Button
                          className={`rounded-pill border-0 me-2 ${styles.pord__button}`}
                        >
                          Add to Cart
                        </Button>
                      </Link>
                      <Link to="">
                        <Button
                          className={`rounded-pill border-0 ${styles.pord__button}`}
                        >
                          Buy It Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className="d-flex mt-2 mb-4"
                    style={{ fontSize: "14px" }}
                  >
                    <p className="me-3" style={{ cursor: "pointer" }}>
                      <i className="fa-regular fa-heart"></i> add to wishlist
                    </p>
                    <p style={{ cursor: "pointer" }}>
                      <i className="fa-solid fa-shuffle"></i> add to Compare
                    </p>
                  </div>
                  <p className="mb-3">
                    <i className="fa-solid fa-van-shuttle me-2"></i>
                    Shipping & Reurns
                  </p>
                  <hr />
                  <p className="mb-3">
                    <i className="fa-solid fa-dice-five me-2"></i> Materials
                  </p>
                  <hr />
                  <p className="mb-3">
                    <i className="fa-solid fa-ruler me-2"></i> Dimensians
                  </p>
                  <hr />
                  <a
                    href="/"
                    onClick={(e) => copyToClipboard(e.target.value)}
                    className="mb-3"npm start
                  >
                    <i className="fa-solid fa-share me-2"></i>Share
                  </a>
                </div>
                <div
                  className={`bg-black-50 text-center mt-2 rounded-1 ${styles.payment__methods}`}
                  style={{ backgroundColor: "#ececec" }}
                >
                  <p>Payment Methods</p>
                  <div className="d-flex justify-content-center gap-4 align-items-center mt-3 p-3">
                    <i className="fa-brands fa-cc-apple-pay"></i>
                    <i className="fa-brands fa-cc-paypal"></i>
                    <i className="fa-brands fa-cc-mastercard"></i>
                    <i className="fa-brands fa-cc-visa"></i>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="mt-4">
          <h5>Description</h5>
          <div className={`bg-white shadow p-4 mt-2 rounded-2 text-black-50`}>
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </div>
        </div>
        <Reviews />
        <ProductSection />
      </Container>
    </section>
  );
};

export default ProductDetailsPage;