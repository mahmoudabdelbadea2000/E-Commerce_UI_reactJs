import React from 'react'
import { Col, Row } from 'react-bootstrap'
import camera from "../../../images/camera.jpg"
import headphone from "../../../images/headphone.jpg"
import laptop from "../../../images/laptop.jpg"
import tv from "../../../images/tv.jpg"
import watch from "../../../images/watch.jpg"
import styles from "./homeCategory.module.css"

const Categories = () => {
  return (
    <div className='w-100 bg-white py-3 px-4 rounded-2 mb-4' style={{boxShadow: "-2px 2px 10px 0px #f1f1f1"}}>
      <Row>
        <Col xs="6" md="3" className={`d-flex justify-content-between align-items-center ${styles.cat__content}`} 
        style={{borderRight: "0.5px solid rgb(119 119 119 / 30%)", borderBottom: "0.5px solid rgb(119 119 119 / 30%)"}}>
          <div className={styles.cat__text}>
            <p style={{ fontSize: "12px"}}>Computers & Laptops</p>
            <span style={{color: "#777", fontSize: "10px"}}>8 items</span>
          </div>
          <img src={laptop} alt='cat-img'  style={{width: "80px"}} />
        </Col>
        <Col xs="6" md="3" className={`d-flex justify-content-between align-items-center ${styles.cat__content}`} 
        style={{borderRight: "0.5px solid rgb(119 119 119 / 30%)", borderBottom: "0.5px solid rgb(119 119 119 / 30%)"}}>
          <div className={styles.cat__text}>
            <p style={{ fontSize: "12px"}}>Camera & Videos</p>
            <span style={{color: "#777", fontSize: "10px"}}>8 items</span>
          </div>
          <img src={camera} alt='cat-img'  style={{width: "80px"}} />
        </Col>
        <Col xs="6" md="3" className={`d-flex justify-content-between align-items-center ${styles.cat__content}`} 
        style={{borderRight: "0.5px solid rgb(119 119 119 / 30%)", borderBottom: "0.5px solid rgb(119 119 119 / 30%)"}}>
          <div className={styles.cat__text}>
            <p style={{ fontSize: "12px"}}>Smart Televsion</p>
            <span style={{color: "#777", fontSize: "10px"}}>8 items</span>
          </div>
          <img src={tv} alt='cat-img'  style={{width: "80px"}} />
        </Col>
        <Col xs="6" md="3" className={`d-flex justify-content-between align-items-center ${styles.cat__content}`} 
        style={{ borderBottom: "0.5px solid rgb(119 119 119 / 30%)"}}>
          <div className={styles.cat__text}>
            <p style={{ fontSize: "12px"}}>Smartwatches</p>
            <span style={{color: "#777", fontSize: "10px"}}>8 items</span>
          </div>
          <img src={watch} alt='cat-img'  style={{width: "80px"}} />
        </Col>
        <Col xs="6" md="3" className={`d-flex justify-content-between align-items-center ${styles.cat__content}`} 
        style={{borderRight: "0.5px solid rgb(119 119 119 / 30%)"}}>
          <div className={styles.cat__text}>
            <p style={{ fontSize: "12px"}}>Headphones</p>
            <span style={{color: "#777", fontSize: "10px"}}>8 items</span>
          </div>
          <img src={headphone} alt='cat-img'  style={{width: "80px"}} />
        </Col>
        <Col xs="6" md="3" className={`d-flex justify-content-between align-items-center ${styles.cat__content}`} 
        style={{borderRight: "0.5px solid rgb(119 119 119 / 30%)"}}>
          <div className={styles.cat__text}>
            <p style={{ fontSize: "12px"}}>Computers & Laptops</p>
            <span style={{color: "#777", fontSize: "10px"}}>8 items</span>
          </div>
          <img src={laptop} alt='cat-img'  style={{width: "80px"}} />
        </Col>
        <Col xs="6" md="3" className={`d-flex justify-content-between align-items-center ${styles.cat__content}`} 
        style={{borderRight: "0.5px solid rgb(119 119 119 / 30%)"}}>
          <div className={styles.cat__text}>
            <p style={{ fontSize: "12px"}}>Camera & Videos</p>
            <span style={{color: "#777", fontSize: "10px"}}>8 items</span>
          </div>
          <img src={camera} alt='cat-img'  style={{width: "80px"}} />
        </Col>
        <Col xs="6" md="3" className={`d-flex justify-content-between align-items-center ${styles.cat__content}`} >
          <div className={styles.cat__text}>
            <p style={{ fontSize: "12px"}}>Smart Televsion</p>
            <span style={{color: "#777", fontSize: "10px"}}>8 items</span>
          </div>
          <img src={tv} alt='cat-img'  style={{width: "80px"}} />
        </Col>
      </Row>
    </div>
  )
}

export default Categories