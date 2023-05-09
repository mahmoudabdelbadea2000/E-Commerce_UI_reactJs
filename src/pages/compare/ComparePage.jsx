import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HelmetComponent from "../../components/utility/Helmet";
import watch from "../../images/watch.jpg";
import styles from "./comparePage.module.css";

const ComparePage = () => {
  return (
    <section
      className={`py-5 ${styles.compare}`}
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <HelmetComponent title="Compare Products" />
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
                <p className="d-flex justify-content-between">
                  Brand:{" "}
                  <span style={{ color: "#777", fontSize: "14px" }}>
                    Howawi
                  </span>
                </p>
                <hr />
                <p className="d-flex justify-content-between">
                  Type:{" "}
                  <span style={{ color: "#777", fontSize: "14px" }}>
                    Tablat
                  </span>
                </p>
                <hr />
                <p className="d-flex justify-content-between">
                  SKU:{" "}
                  <span style={{ color: "#777", fontSize: "14px" }}>
                    SKU003
                  </span>
                </p>
                <hr />
                <p className="d-flex justify-content-between">
                  Availablity:{" "}
                  <span style={{ color: "#777", fontSize: "14px" }}>
                    in Stock
                  </span>
                </p>
                <hr />
                <p className="d-flex justify-content-between">
                  Color:{" "}
                  <div>
                    <p
                      style={{
                        width: "15px",
                        height: "15px",
                        borderRadius: "50%",
                        backgroundColor: "#17a2ac",
                        display: "inline-block",
                      }}
                    ></p>
                    <p
                      style={{
                        width: "15px",
                        height: "15px",
                        borderRadius: "50%",
                        backgroundColor: "#17a2ac",
                        display: "inline-block",
                      }}
                    ></p>
                    <p
                      style={{
                        width: "15px",
                        height: "15px",
                        borderRadius: "50%",
                        backgroundColor: "#17a2ac",
                        display: "inline-block",
                      }}
                    ></p>
                  </div>
                </p>
                <hr />
                <p className="d-flex justify-content-between">
                  Size:{" "}
                  <span style={{ color: "#777", fontSize: "14px" }}>S M L</span>
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
                <p className="d-flex justify-content-between">
                  Brand:{" "}
                  <span style={{ color: "#777", fontSize: "14px" }}>
                    Howawi
                  </span>
                </p>
                <hr />
                <p className="d-flex justify-content-between">
                  Type:{" "}
                  <span style={{ color: "#777", fontSize: "14px" }}>
                    Tablat
                  </span>
                </p>
                <hr />
                <p className="d-flex justify-content-between">
                  SKU:{" "}
                  <span style={{ color: "#777", fontSize: "14px" }}>
                    SKU003
                  </span>
                </p>
                <hr />
                <p className="d-flex justify-content-between">
                  Availablity:{" "}
                  <span style={{ color: "#777", fontSize: "14px" }}>
                    in Stock
                  </span>
                </p>
                <hr />
                <p className="d-flex justify-content-between">
                  Color:{" "}
                  <div>
                    <p
                      style={{
                        width: "15px",
                        height: "15px",
                        borderRadius: "50%",
                        backgroundColor: "#17a2ac",
                        display: "inline-block",
                      }}
                    ></p>
                    <p
                      style={{
                        width: "15px",
                        height: "15px",
                        borderRadius: "50%",
                        backgroundColor: "#17a2ac",
                        display: "inline-block",
                      }}
                    ></p>
                    <p
                      style={{
                        width: "15px",
                        height: "15px",
                        borderRadius: "50%",
                        backgroundColor: "#17a2ac",
                        display: "inline-block",
                      }}
                    ></p>
                  </div>
                </p>
                <hr />
                <p className="d-flex justify-content-between">
                  Size:{" "}
                  <span style={{ color: "#777", fontSize: "14px" }}>S M L</span>
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
                <p className="d-flex justify-content-between">
                  Brand:{" "}
                  <span style={{ color: "#777", fontSize: "14px" }}>
                    Howawi
                  </span>
                </p>
                <hr />
                <p className="d-flex justify-content-between">
                  Type:{" "}
                  <span style={{ color: "#777", fontSize: "14px" }}>
                    Tablat
                  </span>
                </p>
                <hr />
                <p className="d-flex justify-content-between">
                  SKU:{" "}
                  <span style={{ color: "#777", fontSize: "14px" }}>
                    SKU003
                  </span>
                </p>
                <hr />
                <p className="d-flex justify-content-between">
                  Availablity:{" "}
                  <span style={{ color: "#777", fontSize: "14px" }}>
                    in Stock
                  </span>
                </p>
                <hr />
                <p className="d-flex justify-content-between">
                  Color:{" "}
                  <div>
                    <p
                      style={{
                        width: "15px",
                        height: "15px",
                        borderRadius: "50%",
                        backgroundColor: "#17a2ac",
                        display: "inline-block",
                      }}
                    ></p>
                    <p
                      style={{
                        width: "15px",
                        height: "15px",
                        borderRadius: "50%",
                        backgroundColor: "#17a2ac",
                        display: "inline-block",
                      }}
                    ></p>
                    <p
                      style={{
                        width: "15px",
                        height: "15px",
                        borderRadius: "50%",
                        backgroundColor: "#17a2ac",
                        display: "inline-block",
                      }}
                    ></p>
                  </div>
                </p>
                <hr />
                <p className="d-flex justify-content-between">
                  Size:{" "}
                  <span style={{ color: "#777", fontSize: "14px" }}>S M L</span>
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
                <p className="d-flex justify-content-between">
                  Brand:{" "}
                  <span style={{ color: "#777", fontSize: "14px" }}>
                    Howawi
                  </span>
                </p>
                <hr />
                <p className="d-flex justify-content-between">
                  Type:{" "}
                  <span style={{ color: "#777", fontSize: "14px" }}>
                    Tablat
                  </span>
                </p>
                <hr />
                <p className="d-flex justify-content-between">
                  SKU:{" "}
                  <span style={{ color: "#777", fontSize: "14px" }}>
                    SKU003
                  </span>
                </p>
                <hr />
                <p className="d-flex justify-content-between">
                  Availablity:{" "}
                  <span style={{ color: "#777", fontSize: "14px" }}>
                    in Stock
                  </span>
                </p>
                <hr />
                <p className="d-flex justify-content-between">
                  Color:{" "}
                  <div>
                    <p
                      style={{
                        width: "15px",
                        height: "15px",
                        borderRadius: "50%",
                        backgroundColor: "#17a2ac",
                        display: "inline-block",
                      }}
                    ></p>
                    <p
                      style={{
                        width: "15px",
                        height: "15px",
                        borderRadius: "50%",
                        backgroundColor: "#17a2ac",
                        display: "inline-block",
                      }}
                    ></p>
                    <p
                      style={{
                        width: "15px",
                        height: "15px",
                        borderRadius: "50%",
                        backgroundColor: "#17a2ac",
                        display: "inline-block",
                      }}
                    ></p>
                  </div>
                </p>
                <hr />
                <p className="d-flex justify-content-between">
                  Size:{" "}
                  <span style={{ color: "#777", fontSize: "14px" }}>S M L</span>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ComparePage;
