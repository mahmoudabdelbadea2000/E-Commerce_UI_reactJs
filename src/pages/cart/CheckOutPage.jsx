import React from "react";
import { Breadcrumb, Button, Col, Container, Row } from "react-bootstrap";
import HelmetComponent from "../../components/utility/Helmet";
import watch from "../../images/camera.jpg";
import styles from "./cart.module.css";

const CheckOutPage = () => {
  return (
    <section
      className={`py-5 ${styles.complate__checkout}`}
      style={{
        background:
          "linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(242,242,242,1) 50%)",
      }}
    >
      <HelmetComponent title="check out" />
      <Container>
        <Row>
          <Col md="6">
            <div className={`${styles.check__out}`}>
              <h3>Digitic</h3>
              <Breadcrumb>
                <Breadcrumb.Item
                  href="/cart"
                  className={styles.breadcrumb__item}
                >
                  cart
                </Breadcrumb.Item>
                <Breadcrumb.Item active className={styles.breadcrumb__item}>
                  information
                </Breadcrumb.Item>
                <Breadcrumb.Item href="" className={styles.breadcrumb__item}>
                  shipping
                </Breadcrumb.Item>
                <Breadcrumb.Item active className={styles.breadcrumb__item}>
                  payment
                </Breadcrumb.Item>
              </Breadcrumb>
              <div className={`${styles.contact__info}`}>
                <div>
                  <p className="mb-2">Contact information</p>
                  <p className="text-black-50">
                    navdeep Dahiya (mahmoudkamal@gmail.com)
                  </p>
                  <p style={{ cursor: "pointer" }}>log out</p>
                  <div className="d-flex">
                    <input type="checkbox" id="sendinfo" />
                    <label htmlFor="sendinfo" className="ms-2 text-black-50">
                      email me with news and offers
                    </label>
                  </div>
                </div>
                <div className="mt-4">
                  <h4>Shipping Address</h4>
                  <form action="" className="d-flex flex-column gap-2 w-100">
                    <select
                      id=""
                      className={`${styles.form__control} .form-control form-select`}
                    >
                      <option value="" disabled>
                        select the address
                      </option>
                      <option value="">option one</option>
                      <option value="">option Two</option>
                    </select>
                    <select
                      id=""
                      className={`${styles.form__control} .form-control form-select`}
                    >
                      <option value="" disabled>
                        select the address
                      </option>
                      <option value="">option one</option>
                      <option value="">option Two</option>
                    </select>
                    <div className="d-flex justify-content-between gap-2">
                      <input
                        type="text"
                        placeholder="first name (optional)"
                        className={`w-50 ${styles.inputs}`}
                      />
                      <input
                        type="text"
                        placeholder="last name (optional)"
                        className={`w-50 ${styles.inputs}`}
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Address"
                      className={styles.inputs}
                    />
                    <input
                      type="text"
                      placeholder="Apartment, suite, etc. (optional)"
                      className={styles.inputs}
                    />
                    <div
                      className={`d-flex justify-content-between gap-2 ${styles.inputs__flex}`}
                    >
                      <input
                        type="text"
                        placeholder="City"
                        className={styles.inputs}
                      />
                      <select
                        className={`${styles.form__control} .form-control form-select`}
                      >
                        <option value="" disabled>
                          select the address
                        </option>
                        <option value="">option one</option>
                        <option value="">option Two</option>
                      </select>
                      <input
                        type="text"
                        placeholder="ZIP code"
                        className={styles.inputs}
                      />
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <p style={{ cursor: "pointer" }}>
                        <i className="fa-solid fa-angle-left"></i> return to
                        cart
                      </p>
                      <Button className={`rounded-2 py-2`} variant="danger">
                        Continue Shipping
                      </Button>
                    </div>
                  </form>
                </div>
                <hr />
                <p className="text-black-50 mb-3">All Right reseved Digitic.</p>
              </div>
            </div>
          </Col>
          <Col md="6">
            <div
              className={`d-flex justify-content-between align-items-center mb-3 gap-3 position-relative ${styles.pord__count}`}
            >
              <img
                src={watch}
                alt="prod__cart_name"
                style={{ border: "1px solid #b1b1b1", width: "90px" }}
              />
              <div>
                <h6 className="w-75">
                  Kids headphones bulk 10 pack multi colored for students
                </h6>
                <span className="text-black-50">S / #A85A5A</span>
              </div>
              <p>$100</p>
            </div>
            <div
              className={`
                d-flex 
                justify-content-between 
                align-items-center 
                gap-3 
                position-relative 
                ${styles.pord__count}`}
            >
              <img
                src={watch}
                alt="prod__cart_name"
                style={{ border: "1px solid #b1b1b1", width: "90px" }}
              />
              <div>
                <h6 className="w-75">
                  Kids headphones bulk 10 pack multi colored for students
                </h6>
                <span className="text-black-50">S / #A85A5A</span>
              </div>
              <p>$100</p>
            </div>
            <hr />
            <div>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <p className="text-black-50">Subtotal </p>
                <p className="fw-bold">$200</p>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <p className="text-black-50">Shiping</p>
                <p className="fw-bold">$19.65</p>
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <p className="fw-bold">Total</p>
              <div>
                <p
                  className="text-black-50"
                  style={{ fontSize: "12px", display: "inline-block" }}
                >
                  USD
                </p>{" "}
                <span style={{ fontSize: "20px" }}>$219.65</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CheckOutPage;
