import React from "react";
import { Col, Row } from "react-bootstrap";
import headPhone from "../../images/watch.jpg";
import styles from "../../pages/cart/cart.module.css";

const CartItem = () => {
  return (
    <>
      <Row className={`align-items-center px-3 mt-4 ${styles.cart__prod}`}>
        <Col xs="12" sm="6" md="6">
          <div className={`d-flex align-items-center ${styles.pord__info}`}>
            <img
              src={headPhone}
              className="rounded-2"
              alt="prod_img"
              width="100px"
            />
            <div className="ms-2 text-black-50">
              <h6
                style={{
                  maxWidth: "300px",
                }}
              >
                Kids headphones bulk IO pack multi colored for students
              </h6>
              <p>Size: S</p>
              <p>Color: #A85A5A</p>
            </div>
          </div>
        </Col>
        <Col xs="4" sm="2" md="2">
          <p className="fw-bold">$100.00</p>
        </Col>
        <Col xs="4" sm="3" md="2">
          <div>
            <input type="number" style={{ width: "50px" }} />
            <i
              className={`fa-solid fa-trash-can ms-2 rounded-pill ${styles.delete__icon}`}
            ></i>
          </div>
        </Col>
        <Col xs="4" sm="1" md="2">
          <p className="fw-bold" style={{ textAlign: "right" }}>
            $100.00
          </p>
        </Col>
      </Row>
      <div className={styles.unperline}></div>
    </>
  );
};

export default CartItem;
