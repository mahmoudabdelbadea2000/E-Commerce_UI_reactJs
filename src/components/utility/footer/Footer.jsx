import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <Footer style={{backgroundColor: "var(--third-color)"}}>
      <Container>
        <Row className='justify-content-between align-items-center'>
          <Col md="6">
            <h2><i className="fa-regular fa-paper-plane"></i> Sign Up for New Letters</h2>
          </Col>
          <Col md="6" className='position-relative'>
            <input type="email" placeholder='your email' />
            <button type="text">subscribe</button>
          </Col>
        </Row>
        <Row>
          <Col md="3" className="" >
            <h3>Contact Us</h3>
            <p>Demo store <br/> No.1256 freedom, New York, 1111 <br/> United states</p>
            <p>+91-987654321</p>
            <p>Demo@Exapmle.com</p>
            <div className={styles.social__media}>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-linkedin-in"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </Col>
          <Col md="2" className="" >
            <ul>
              <li>infromation</li>
              <li>privacy policy</li>
              <li>Redund Policy</li>
              <li>Shipping Policy</li>
              <li>Term of Services</li>
              <li>Blogs</li>
            </ul>
          </Col>
          <Col md="2" className="" >
            <ul>
              <li>Account</li>
              <li>Search</li>
              <li>About Us</li>
              <li>IFaq</li>
              <li>Contact</li>
              <li>Size chart</li>
            </ul>
          </Col>
          <Col md="2" className="" >
            <ul>
              <li>Quick Links</li>
              <li>Accessories</li>
              <li>Laptops</li>
              <li>Headphone</li>
              <li>Smart watchs</li>
              <li>Tablats</li>
            </ul>
          </Col>
          <Col md="3" className="" >
            <h3>Pur App</h3>
            <p>Download our app and get extra 15% Discount on your first order..!</p>
            <div className={styles.download__app}>
              <div>
                <i className="fa-brands fa-google-play"></i>
                <p>get iit on <br/> Google Play</p>
              </div>
              <div>
                <i className="fa-brands fa-apple"></i>
                <p>get iit on <br/> App Store</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Footer>
  )
}

export default Footer