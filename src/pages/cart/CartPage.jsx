import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartItem from "../../components/cart/CartItem";
import HelmetComponant from "../../components/utility/Helmet";
import styles from "./cart.module.css";

const CartPage = () => {
  return (
    <section
      className="py-5"
      style={{ backgroundColor: "#ededed", minHeight: "660px" }}
    >
      <HelmetComponant title="cart Page" />
      <Container>
        <Row className={`px-3 ${styles.cart__sidebar}`}>
          <Col
            xs="4"
            sm="6"
            md="6"
            className="text-black-50 text-uppercase fw-bold"
          >
            product
          </Col>
          <Col
            xs="2"
            sm="2"
            md="2"
            className="text-black-50 text-uppercase fw-bold"
          >
            price
          </Col>
          <Col
            xs="2"
            sm="2"
            md="2"
            className="text-black-50 text-uppercase fw-bold"
          >
            quantity
          </Col>
          <Col
            md="2"
            sm="2"
            xs="2"
            className="text-black-50 text-uppercase fw-bold"
            style={{ textAlign: "right" }}
          >
            totel
          </Col>
        </Row>
        <div className={styles.unperline}></div>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <div
          className={`pt-3 d-flex justify-content-between ${styles.checkOut}`}
        >
          <Link to="/">
            <Button
              className={`rounded-pill border-0 mt-3 ${styles.pord__button}`}
            >
              Continue Shopping
            </Button>
          </Link>
          <div className="text-black-50 fw-bold">
            <p style={{ textAlign: "right" }}>Subtotal $100 </p>
            <p className="mt-2">Taxes and shipping calculated at checkout</p>
            <Link to="/check-out">
              <Button
                className={`rounded-pill border-0 ${styles.pord__button}`}
                style={{ width: "100%" }}
              >
                Check Out
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CartPage;
