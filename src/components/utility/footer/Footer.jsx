import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={`pt-4 ${styles.main__footer}`} 
      style={{background: "linear-gradient(to bottom, #1b2833, #202f3c, #22303b)", color: "#fff"}}>
      <footer style={{borderBottom: "0.5px solid #8f8f8f"}}>
      <Container>
        <Row className='justify-content-between align-items-center py-5'>
          <Col md="6">
            <h2 className='fs-4 position-relative'>
              <i className="fa-regular fa-paper-plane"></i> {" "}
              Sign Up for New Letters
              </h2>
          </Col>
          <Col md="6">
            <div className='position-relative'>
              <input type="email" placeholder='your email' className={`w-100 rounded py-1 ps-2 border-0 ${styles.footer__input}`} />
              <button type="text" className={`rounded ${styles.footer__subscribe}`}>subscribe</button>
            </div>
          </Col>
        </Row>
      </Container>
      </footer>
      <footer className='py-4' style={{borderBottom: "0.5px solid #8f8f8f"}}>
        <Container>
          <Row>
            <Col sm="6" md="4" lg="3" className="">
              <h4>Contact Us</h4>
              <p className='mt-3'>Demo store <br/> No.1256 freedom, New York, 1111 <br/> United states</p>
              <p className='mt-3'>+91-987654321</p>
              <p className='mt-3'>Demo@Exapmle.com</p>
              <div className={`mt-3 pe-5 d-flex justify-content-between align-items-center ${styles.social__media}`}>
                <i className={`fa-brands fa-twitter ${styles.footer__icons}`}></i>
                <i className={`fa-brands fa-facebook-f ${styles.footer__icons}`}></i>
                <i className={`fa-brands fa-linkedin-in ${styles.footer__icons}`}></i>
                <i className={`fa-brands fa-youtube ${styles.footer__icons}`}></i>
              </div>
            </Col>
            <Col sm="6" md="4" lg="2" className="alert-danger">
              <ul>
                <h4>infromation</h4>
                <li className='mt-3'>privacy policy</li>
                <li className='mt-3'>Redund Policy</li>
                <li className='mt-3'>Shipping Policy</li>
                <li className='mt-3'>Term of Services</li>
                <li className='mt-3'>Blogs</li>
              </ul>
            </Col>
            <Col sm="6" md="4" lg="2" className=""> 
              <ul>
                <h4>Account</h4>
                <li className='mt-3'>Search</li>
                <li className='mt-3'>About Us</li>
                <li className='mt-3'>IFaq</li>
                <li className='mt-3'>Contact</li>
                <li className='mt-3'>Size chart</li>
              </ul>
            </Col>
            <Col sm="6" md="6" lg="2" className="">
              <ul className={styles.margin__top}>
                <h4>Quick Links</h4>
                <li className='mt-3'>Accessories</li>
                <li className='mt-3'>Laptops</li>
                <li className='mt-3'>Headphone</li>
                <li className='mt-3'>Smart watchs</li>
                <li className='mt-3'>Tablats</li>
              </ul>
            </Col>
            <Col sm="12" md="6" lg="3" className="">
              <div className={styles.margin__top}>
                <h4>Our App</h4>
                <p className='mt-3'>Download our app and get extra 15% Discount on your first order..!</p>
                <div className={`mt-3 d-flex ${styles.download__app}`}>
                  <div className={`d-flex justify-content-center align-items-center me-2 ${styles.footer__download}`}>
                    <i className="fa-brands fa-google-play fs-4 me-2"></i>
                    <p className='fw-bold'><span className='fw-normal'>get it on</span> <br/> Google Play</p>
                  </div>
                  <div className={`d-flex justify-content-center align-items-center ${styles.footer__download}`}>
                    <i className="fa-brands fa-apple fs-3 me-2"></i>
                    <p className='fw-bold'><span className='fw-normal'>get it on</span> <br/> App Store</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
      <footer className='py-3'>
        <Container>
          <Row className='justify-content-between align-items-center'>
            <Col sm="12" md="6">
              <p><i className="fa-regular fa-copyright"></i> 2023. Digtic Powerd by Shopify</p>
            </Col>
            <Col sm="12" md="6">
              <div className={`d-flex justify-content-end ${styles.footer__payment}`}>
                <i className="fa-brands fa-cc-visa fs-4 me-4"></i>
                <i className="fa-brands fa-cc-mastercard fs-4 me-4"></i>
                <i className="fa-brands fa-cc-paypal fs-4 me-4"></i>
                <i className="fa-brands fa-airbnb fs-4 me-4"></i>
                <i className="fa-brands fa-cc-stripe fs-4"></i>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </footer>
  )
}

export default Footer