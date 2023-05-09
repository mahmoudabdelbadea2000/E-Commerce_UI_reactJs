import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HelmetComponent from "../../components/utility/Helmet";
import watch from "../../images/watch.jpg";
import styles from "../compare/comparePage.module.css";

const WishListPage = () => {
  return (
    <section
      className={`py-5`}
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <HelmetComponent title="WishList" />
      <Container>
        <Row>
          <Col xs="6" sm="6" md="3">
            <div className={`bg-white ${styles.card}`}>
              <div className="position-relative">
                <i
                  className="fa-solid fa-x position-absolute"
                  style={{
                    top: "10px",
                    right: "10px",
                    fontSize: "20px",
                    cursor: "pointer",
                  }}
                ></i>
                <img src={watch} className="img-fluid" alt="product img" />
              </div>
              <div className={`px-2 py-2 ${styles.content}`}>
                <h6>Honor T1 707 RAM 16GB , storage 64GB</h6>
                <p
                  style={{
                    color: "#777",
                    fontSize: "14px",
                  }}
                >
                  $100.00
                </p>
              </div>
            </div>
          </Col>
          <Col xs="6" sm="6" md="3">
            <div className={`bg-white ${styles.card}`}>
              <div className="position-relative">
                <i
                  className="fa-solid fa-x position-absolute"
                  style={{
                    top: "10px",
                    right: "10px",
                    fontSize: "20px",
                    cursor: "pointer",
                  }}
                ></i>
                <img src={watch} className="img-fluid" alt="product img" />
              </div>
              <div className={`px-2 py-2 ${styles.content}`}>
                <h6>Honor T1 707 RAM 16GB , storage 64GB</h6>
                <p
                  style={{
                    color: "#777",
                    fontSize: "14px",
                  }}
                >
                  $100.00
                </p>
              </div>
            </div>
          </Col>
          <Col xs="6" sm="6" md="3">
            <div className={`bg-white ${styles.card}`}>
              <div className="position-relative">
                <i
                  className="fa-solid fa-x position-absolute"
                  style={{
                    top: "10px",
                    right: "10px",
                    fontSize: "20px",
                    cursor: "pointer",
                  }}
                ></i>
                <img src={watch} className="img-fluid" alt="product img" />
              </div>
              <div className={`px-2 py-2 ${styles.content}`}>
                <h6>Honor T1 707 RAM 16GB , storage 64GB</h6>
                <p
                  style={{
                    color: "#777",
                    fontSize: "14px",
                  }}
                >
                  $100.00
                </p>
              </div>
            </div>
          </Col>
          <Col xs="6" sm="6" md="3">
            <div className={`bg-white ${styles.card}`}>
              <div className="position-relative">
                <i
                  className="fa-solid fa-x position-absolute"
                  style={{
                    top: "10px",
                    right: "10px",
                    fontSize: "20px",
                    cursor: "pointer",
                  }}
                ></i>
                <img src={watch} className="img-fluid" alt="product img" />
              </div>
              <div className={`px-2 py-2 ${styles.content}`}>
                <h6>Honor T1 707 RAM 16GB , storage 64GB</h6>
                <p
                  style={{
                    color: "#777",
                    fontSize: "14px",
                  }}
                >
                  $100.00
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WishListPage;
