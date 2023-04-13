import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import blog1 from "../../../images/blog-1.jpg"
import styles from "./blogCard.module.css"

const BlogCard = () => {
  return (
    <Col sm="6" md="6" lg="4">
      <Card className='border-0 mt-4'>
        <Card.Img variant="top" src={blog1} />
        <Card.Body>
          <Card.Title>
            <div className={styles.blog__head}>
              <p>1Dec. 2023</p>
              <h3>A Beautifal sunday morning rianstanse</h3>
            </div>
          </Card.Title>
          <Card.Text style={{  
            fontSize: "14px",
            color: "#777",
            marginBottom: "5px !important"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Tellus id interdum velit laoreet.
          </Card.Text>
          <Button variant="primary" className={`rounded-pill border-0 mt-2 ${styles.blog__button}`}>Read More</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default BlogCard