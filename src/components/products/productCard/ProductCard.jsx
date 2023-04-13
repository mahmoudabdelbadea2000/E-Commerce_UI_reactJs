import React from 'react';
import { Card, Col } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import tab from "../../../images/tab.jpg";
import styles from "./productCard.module.css";

const ProductCard = () => {
  const ratingChanged = (newRating) => {
  console.log(newRating);
  };
  return (
    <Col xs="6" sm="4" md="3" lg="2">
      <Card className={`border-0 mt-4 position-relative overflow-hidden ${styles.product__hover}`} style={{
        boxShadow: "-3px 3px 10px 0 #eaeaea"
      }}>
        <i className="fa-regular fa-heart position-absolute" style={{
          top: "10px",
          right: "10px",
          cursor: "pointer"
        }}></i>
        <Card.Img variant="top" src={tab} />
        <Card.Body>
          <Card.Title>
            <p className={styles.product__title}>sony</p>
          </Card.Title>
          <Card.Text style={{  
            fontSize: "14px",
            color: "#777",
            marginBottom: "5px !important"}}>
            <div className={styles.product__body}>
              <p className='fw-bold text-black'>kids headphone Bulk 10 pack multi colored</p>
            <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                isHalf={true}
                emptyIcon={<i className="fa-regular fa-star"></i>}
                halfIcon={<i className="fa-solid fa-star-half"></i>}
                fullIcon={<i className="fa-solid fa-star"></i>}
                activeColor="#ffd700"
                edit={false}
                value={3.5}
              />
              <p className='fw-bold text-black'>$100</p>
            </div>
          </Card.Text>
          <div className={`position-absolute d-flex flex-column gap-3 ${styles.product__actionBar}`}>
            <i className="fa-solid fa-eye"></i>
            <i className="fa-solid fa-shuffle"></i>
            <i className="fa-solid fa-bag-shopping"></i>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default ProductCard
