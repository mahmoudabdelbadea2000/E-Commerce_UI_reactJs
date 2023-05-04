import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../../components/products/productCard/ProductCard";
import HelmetComponent from "../../components/utility/Helmet";
import prod from "../../images/tab.jpg";
import styles from "./ourStore.module.css";

const OurStorePage = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <section className={`pt-5 pb-5 ${styles.ourstore}`}>
      <HelmetComponent title="Our Store" />
      <Container>
        <Row>
          <Col md="3">
            <div className={`mb-2 ${styles.ourstore__filter}`}>
              <h3 className="fw-bold" style={{ fontSize: "16px" }}>
                Shop By Categories
              </h3>
              <div>
                <ul>
                  <li>Home</li>
                  <li>our store</li>
                  <li>Blogs</li>
                  <li>Content</li>
                </ul>
              </div>
            </div>
            <div className={`mb-2 ${styles.ourstore__filter}`}>
              <h3 className="fw-bold" style={{ fontSize: "16px" }}>
                Filter By
              </h3>
              <div>
                <h5 style={{ fontSize: "13px" }}>Available</h5>
                <div>
                  <Form.Check type="checkbox" id="check-api-in">
                    <Form.Check.Input type="checkbox" />
                    <Form.Check.Label>In Stock (15)</Form.Check.Label>
                  </Form.Check>
                  <Form.Check type="checkbox" id="check-api-Out">
                    <Form.Check.Input type="checkbox" />
                    <Form.Check.Label>Out of Stock (0)</Form.Check.Label>
                  </Form.Check>
                </div>
                <h5 style={{ fontSize: "13px" }}>Price</h5>
                <div className="d-flex justify-content-between w-100">
                  <input
                    className="w-100 ps-1 rounded-1 me-2"
                    type="number"
                    placeholder="from"
                  />
                  <input
                    className="w-100 ps-1 rounded-1"
                    type="number"
                    placeholder="to"
                  />
                </div>
                <h5 style={{ fontSize: "13px", margin: "10px 0" }}>Colors</h5>
                <ul className={`d-flex flex-wrap gap-2 ${styles.colors}`}>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <h5 style={{ fontSize: "13px", margin: "10px 0" }}>Size</h5>
                <div>
                  <Form.Check type="checkbox" id="check-api-Sm">
                    <Form.Check.Input type="checkbox" />
                    <Form.Check.Label>Sm</Form.Check.Label>
                  </Form.Check>
                  <Form.Check type="checkbox" id="check-api-md">
                    <Form.Check.Input type="checkbox" />
                    <Form.Check.Label>Md</Form.Check.Label>
                  </Form.Check>
                  <Form.Check type="checkbox" id="check-api-Xl">
                    <Form.Check.Input type="checkbox" />
                    <Form.Check.Label>Xl</Form.Check.Label>
                  </Form.Check>
                  <Form.Check type="checkbox" id="check-api-XXl">
                    <Form.Check.Input type="checkbox" />
                    <Form.Check.Label>XXL</Form.Check.Label>
                  </Form.Check>
                </div>
              </div>
            </div>
            <div className={`mb-2 ${styles.ourstore__filter}`}>
              <h3 className="fw-bold" style={{ fontSize: "16px" }}>
                Product Tags
              </h3>
              <div
                className={`d-flex flex-wrap align-items-center ${styles.product__tags}`}
              >
                <span className="badge text-bg-light">HeadPhone</span>
                <span className="badge text-bg-light">Laptops</span>
                <span className="badge text-bg-light">Wire</span>
                <span className="badge text-bg-light">T-shirts</span>
              </div>
            </div>
            <div className={`mb-2 ${styles.ourstore__filter}`}>
              <h3 className="fw-bold" style={{ fontSize: "16px" }}>
                Rondom Product
              </h3>
              <div className="d-flex">
                <img width="50%" src={prod} alt="product" />
                <div className="w-50">
                  <h5 style={{ fontSize: "14px", margin: "0" }}>
                    kids headphone Bulk 10 pack multi colored
                  </h5>
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
                  <p className="fw-bold text-black">$100</p>
                </div>
              </div>
              <hr />
              <div className="d-flex">
                <img width="50%" src={prod} alt="product" />
                <div className="w-50">
                  <h5 style={{ fontSize: "14px", margin: "0" }}>
                    kids headphone Bulk 10 pack multi colored
                  </h5>
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
                  <p className="fw-bold text-black">$100</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md="9">
            <div
              className={`d-flex justify-content-between bg-white py-1 px-2 rounded-1 ${styles.ourstore__sorting}`}
            >
              <div className="d-flex align-items-center">
                <p>sort By: </p>
                <select
                  className={`ms-3 rounded-1 form-control form-select ${styles.sorting}`}
                >
                  <option value="">Best Saller</option>
                  <option value="">Price up</option>
                  <option value="">Price down</option>
                </select>
              </div>
              <div>
                <span className="me-3">312 Products</span>
                <i
                  className={`fa-solid fa-bars rounded-2 me-2 ${styles.icanbar} ${styles.icanbar__her}`}
                ></i>
                <i
                  className={`fa-solid fa-bars rounded-2 me-2 ${styles.icanbar}`}
                ></i>
              </div>
            </div>
            <Row>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </Row>
            <div></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurStorePage;
