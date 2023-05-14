import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HelmetComponent from "../../components/utility/Helmet";
import headphone from "../../images/headphone.jpg";
import styles from "./product.module.css";

const ProductDetailsPage = () => {
  return (
    <section className={`pt-5 pb-5`}>
      <HelmetComponent title="Product Details" />
      <Container>
        <Row className={`${styles.product__Details}`}>
          <Col md="6">
            <img src={headphone} alt="product" />
          </Col>
          <Col md="6"></Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductDetailsPage;
