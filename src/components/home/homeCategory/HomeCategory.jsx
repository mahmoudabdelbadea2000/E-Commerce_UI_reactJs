import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BlogCard from '../../blog/blogCard/BlogCard'
import ProductCard from "../../products/productCard/ProductCard.jsx"
import HomeBrands from '../homeBrands/HomeBrands'
import Categories from './Categories'
import styles from "./homeCategory.module.css"

const HomeCategory = () => {
  return (
    <section className={` ${styles.HomeCategories}`}>
      <Container>
        <Row className={`
          py-3 justify-content-between 
          align-items-center 
          ${styles.HomeCategories__Row}`}>
          <Col xs="6" sm="4" md="4" lg="2">
            <div className='d-flex justify-content-center align-items-center'>
              <i className="fa-solid fa-truck-fast me-3 fs-4"></i>
              <div className={styles.HomeCategories__text}>
                <p className="fw-bold" style={{fontSize: "12px", textTransform: "capitalize"}}>free shopping</p>
                <p style={{fontSize: "10px", textTransform: "capitalize"}}>from all order over $100</p>
              </div>
            </div>
          </Col>
          <Col xs="6" sm="4" md="4" lg="2" className={`mt-0 mt-sm-3`}>
            <div className='d-flex justify-content-center align-items-center'>
              <i className="fa-solid fa-gift me-3 fs-4"></i>
              <div className={styles.HomeCategories__text}>
                <p className="fw-bold" style={{fontSize: "12px", textTransform: "capitalize"}}>Daily surprise offers</p>
                <p style={{fontSize: "10px", textTransform: "capitalize", color: "#777"}}>save up to 25% off</p>
              </div>
            </div>
          </Col>
          <Col xs="6" sm="4" md="4" lg="2" className={`mt-0 mt-sm-3 ${styles.HomeCategories__Col}`}>
            <div className='d-flex justify-content-center align-items-center'>
              <i className="fa-solid fa-headset me-3 fs-4"></i>
              <div className={styles.HomeCategories__text}>
                <p className="fw-bold" style={{fontSize: "12px", textTransform: "capitalize"}}>support 24/7</p>
                <p style={{fontSize: "10px", textTransform: "capitalize", color: "#777"}}>shop is an expert</p>
              </div>
            </div>
          </Col>
          <Col xs="6" sm="4" md="4" lg="2" className={`mt-0 mt-md-3 mt-sm-3 ${styles.HomeCategories__Col}`}>
            <div className='d-flex justify-content-center align-items-center'>
              <i className="fa-solid fa-percent me-3 fs-4"></i>
              <div className={styles.HomeCategories__text}>
                <p className="fw-bold" style={{fontSize: "12px", textTransform: "capitalize"}}>affordable Prices</p>
                <p style={{fontSize: "10px", textTransform: "capitalize", color: "#777"}}>Get Factory direct price</p>
              </div>
            </div>
          </Col>
          <Col xs="6" sm="4" md="4" lg="2" className={`mt-0 mt-md-3 mt-sm-3 ${styles.HomeCategories__Col}`}>
            <div className='d-flex justify-content-center align-items-center'>
              <i className="fa-regular fa-credit-card me-3 fs-4"></i>
              <div className={styles.HomeCategories__text}>
                <p className="fw-bold" style={{fontSize: "12px", textTransform: "capitalize"}}>Secure Payments</p>
                <p style={{fontSize: "10px", textTransform: "capitalize", color: "#777"}}>100% Protected Payments</p>
              </div>
            </div>
          </Col>
        </Row>
        <Categories />
        <HomeBrands />
        <Row className='justify-content-between align-items-center'>
          <h2 className='mt-4'>Featured Collection</h2>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Row>
        <Row className='justify-content-between align-items-center'>
          <h2 className='mt-4'>Our Latest Blogs</h2>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </Row>
      </Container>
    </section>
  )
}

export default HomeCategory