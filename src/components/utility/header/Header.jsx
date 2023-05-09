import React from "react";
import { Button, Col, Container, Dropdown, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.header__top}>
        <Container>
          <Row
            className={`justify-content-between align-items-center py-2 ${styles.header__top}`}
          >
            <Col xs="12" sm="12" md="6">
              <p className={styles.free__shop}>
                free Shoping Over $100 & Free Returns
              </p>
            </Col>
            <Col xs="12" sm="12" md="6">
              <div
                className={`${styles.nav__setting} d-flex justify-content-between align-items-center`}
              >
                <p>Hoteline: 4344 6000-(888)1334 8193</p>
                <p>
                  English <i className="fa-solid fa-chevron-down"></i>
                </p>
                <p>
                  USD $ <i className="fa-solid fa-chevron-down"></i>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
      <header className={styles.header__center}>
        <Container>
          <Row className="align-items-center pb-2">
            <Col xs="4" sm="4" md="2">
              <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                <p className={`fw-bold fs-2 mb-0 ${styles.logo}`}>Digitic.</p>
              </Link>
            </Col>
            <Col xs="12" sm="12" md="5">
              <Form className={`d-flex position-relative`}>
                <Form.Control
                  type="search"
                  placeholder="Search Product name..."
                  aria-label="Search"
                  className={styles.search__form}
                />
                <Button className={styles.header__search__icon}>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </Button>
              </Form>
            </Col>
            <Col xs="12" sm="12" md="5">
              <ul
                className={`d-flex justify-content-between align-items-center mb-0 ${styles.nav__links}`}
              >
                <Link
                  to="compare-products"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <li className="d-flex justify-content-between align-items-center gap-2 me-3">
                    <i className="fa-solid fa-rotate fs-4"></i>{" "}
                    <span
                      className={styles.nav__icons}
                      style={{ fontSize: "12px" }}
                    >
                      Compare Products.
                    </span>
                  </li>
                </Link>
                <Link
                  to="wishlist"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <li className="d-flex justify-content-between align-items-center gap-2 me-3">
                    <i className="fa-regular fa-heart fs-4"></i>{" "}
                    <span
                      className={styles.nav__icons}
                      style={{ fontSize: "12px" }}
                    >
                      Favourite WishList
                    </span>
                  </li>
                </Link>
                <Link
                  to="login"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <li className="d-flex justify-content-between align-items-center gap-2 me-3">
                    <i className="fa-regular fa-user fs-4"></i>{" "}
                    <span
                      className={styles.nav__icons}
                      style={{ fontSize: "12px" }}
                    >
                      Login My Account
                    </span>
                  </li>
                </Link>
                <Link to="" style={{ textDecoration: "none", color: "#fff" }}>
                  <li style={{ color: "#febd69" }}>
                    <i className="fa-solid fa-cart-plus fs-4"></i>
                  </li>
                </Link>
              </ul>
            </Col>
          </Row>
        </Container>
      </header>
      <header
        className={` py-2 ${styles.header__bottom}`}
        style={{ backgroundColor: "var(--third-color)" }}
      >
        <Container>
          <Row style={{ backgroundColor: "var(--third-color)" }}>
            <Col>
              <div
                className={`d-flex justify-content-start align-items-center ${styles.manu__links}`}
              >
                <Dropdown>
                  <Dropdown.Toggle
                    className="bg-transparent border-0"
                    id="dropdown-basic"
                  >
                    <span className={styles.cat__dropdown}>
                      <i className="fa-solid fa-bars"></i> SHOP CATEGORY
                    </span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Link style={{ color: "#fff" }} to="" className="ms-4">
                  Home
                </Link>
                <Link
                  style={{ color: "#fff" }}
                  to="/collections/our-store"
                  className="ms-4"
                >
                  Our Store
                </Link>
                <Link style={{ color: "#fff" }} to="our-blogs" className="ms-4">
                  Blogs
                </Link>
                <Link style={{ color: "#fff" }} to="contact" className="ms-4">
                  Contact
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default Header;
