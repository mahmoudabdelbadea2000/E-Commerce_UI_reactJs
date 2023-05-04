import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import appleWatch from "../../../images/apple-watch-serias.jpg"
import styles from "./famousProducts.module.css"

const FamousProducts = () => {
  return (
    <section style={{backgroundColor: "#f4f5f3"}}>
        <Container>
            <Row className='justify-content-between align-items-center'>
                <Col md="3" style={{height: "400px", backgroundColor: "#111111"}} className=' text-white position-relative rounded-1 py-5 px-3'>
                    <div className={`position-relative ${styles.prod__content}`}
                        style={{zIndex: "1000"}}>
                        <p style={{fontSize: "11px", textTransform: "uppercase"}}>Big Screen</p>
                        <h4>Smart Watch Series 7</h4>
                        <p style={{fontSize: "11px"}}>From $399 or $17/mo for 24 mo *</p>
                    </div>
                    <img src={appleWatch} height="80%" width="100%" alt='apple-watch' 
                    className={`position-absolute rounded-1 ${styles.prod__img}`}
                    style={{
                        bottom: "0",
                        left: "50%",
                        transform: "translateX(-50%)",
                    }}/>
                </Col>
                <Col md="3" style={{height: "400px", backgroundColor: "#111111"}} className=' text-white position-relative rounded-1 py-5 px-3'>
                    <div className={`position-relative ${styles.prod__content}`}
                        style={{zIndex: "1000"}}>
                        <p style={{fontSize: "11px", textTransform: "uppercase"}}>Big Screen</p>
                        <h4>Smart Watch Series 7</h4>
                        <p style={{fontSize: "11px"}}>From $399 or $17/mo for 24 mo *</p>
                    </div>
                    <img src={appleWatch} height="90%" width="100%" alt='apple-watch' 
                    className={`position-absolute rounded-1 ${styles.prod__img}`}
                    style={{
                        bottom: "0",
                        left: "50%",
                        transform: "translateX(-50%)",
                    }}/>
                </Col>
                <Col md="3" style={{height: "400px", backgroundColor: "#111111"}} className=' text-white position-relative rounded-1 py-5 px-3'>
                    <div className={`position-relative ${styles.prod__content}`}
                        style={{zIndex: "1000"}}>
                        <p style={{fontSize: "11px", textTransform: "uppercase"}}>Big Screen</p>
                        <h4>Smart Watch Series 7</h4>
                        <p style={{fontSize: "11px"}}>From $399 or $17/mo for 24 mo *</p>
                    </div>
                    <img src={appleWatch} height="90%" width="100%" alt='apple-watch' 
                    className={`position-absolute rounded-1 ${styles.prod__img}`}
                    style={{
                        bottom: "0",
                        left: "50%",
                        transform: "translateX(-50%)",
                    }}/>
                </Col>
                <Col md="3" style={{height: "400px", backgroundColor: "#111111"}} className=' text-white position-relative rounded-1 py-5 px-3'>
                    <div className={`position-relative ${styles.prod__content}`}
                        style={{zIndex: "1000"}}>
                        <p style={{fontSize: "11px", textTransform: "uppercase"}}>Big Screen</p>
                        <h4>Smart Watch Series 7</h4>
                        <p style={{fontSize: "11px"}}>From $399 or $17/mo for 24 mo *</p>
                    </div>
                    <img src={appleWatch} height="90%" width="100%" alt='apple-watch' 
                    className={`position-absolute rounded-1 ${styles.prod__img}`}
                    style={{
                        bottom: "0",
                        left: "50%",
                        transform: "translateX(-50%)",
                    }}/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default FamousProducts