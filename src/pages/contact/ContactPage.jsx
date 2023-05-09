import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import HelmetComponent from "../../components/utility/Helmet";
import styles from "./contact.module.css";

const ContactPage = () => {
  return (
    <section className={`pt-5 pb-5`}>
      <HelmetComponent title="Contact" />
      <Container>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27353.899779879503!2d33.02852370391125!3d31.01963274322787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f94beac2636b55%3A0xa6aee8a89fabc051!2z2KjYptixINin2YTYudio2K_YjCDZgtiz2YUg2KjYptixINin2YTYudio2K_YjCDYtNmF2KfZhCDYs9mK2YbYp9ih!5e0!3m2!1sar!2seg!4v1683213935135!5m2!1sar!2seg"
            title="my map"
            height="450"
            className="border-0 w-100"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <Row
          style={{
            boxShadow: "-1px 0px 10px 0 #e0e0e0",
          }}
          className="justify-content-between bg-white p-4 mt-3"
        >
          <Col md="6">
            <h5>Contact</h5>
            <form>
              <input
                className={`w-100 mb-2 ps-2 border-0 ${styles.inputs}`}
                type="text"
                placeholder="Name"
              />
              <input
                className={`w-100 mb-2 ps-2 border-0 ${styles.inputs}`}
                type="email"
                placeholder="Email"
              />
              <input
                className={`w-100 mb-2 ps-2 border-0 ${styles.inputs}`}
                type="number"
                placeholder="Phone Number"
              />
              <input
                className={`w-100 mb-2 ps-2 border-0 ${styles.inputs}`}
                type="text"
                placeholder="Name"
              />
              <textarea
                className={`w-100 mb-2 ps-2 border-0 ${styles.inputs}`}
                cols="30"
                rows="5"
                placeholder="Comment"
              ></textarea>
              <Button
                variant="dark"
                className={`rounded-pill border-0 px-5 mt-2`}
              >
                Send
              </Button>
            </form>
          </Col>
          <Col md="6" className={`d-flex flex-column ${styles.address}`}>
            <h5>Get in Youch With Us</h5>
            <span>
              <i className="fa-solid fa-house-chimney me-2 mb-4"></i>23 street,
              bir Elabd
            </span>
            <span>
              <i className="fa-solid fa-phone me-2 mb-4"></i>+01019154123
            </span>
            <span>
              <i className="fa-solid fa-envelope me-2 mb-4"></i>
              mahmoud.kamal1382000@gmail.com
            </span>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactPage;
