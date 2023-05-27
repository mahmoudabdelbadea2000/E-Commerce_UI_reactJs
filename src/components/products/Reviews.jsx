import React from "react";
import { Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import styles from "../../pages/product/product.module.css";
import Review from "./Review";

const Reviews = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className="my-4">
      <h5>Reviews</h5>
      <div className={`bg-white shadow px-3 py-4 mt-2 rounded-2 `}>
        <h6>Customer Reviews</h6>
        <div>
          <div className="d-flex align-items-center">
            <ReactStars
              count={5}
              onChange={ratingChanged}
              isHalf={true}
              emptyIcon={<i className="fa-regular fa-star"></i>}
              halfIcon={<i className="fa-solid fa-star-half"></i>}
              fullIcon={<i className="fa-solid fa-star"></i>}
              activeColor="#ffd700"
              edit={false}
              value={4.5}
            />
            <p className="text-black-50 ms-2" style={{ fontSize: "12px" }}>
              Based on 2 Reviews
            </p>
          </div>
          <Link to="" className="text-black-50">
            <p style={{ textAlign: "right", textDecoration: "underline" }}>
              wirte a reviews
            </p>
          </Link>
          <hr />
          <h6 className="text-black-50">wirte a review</h6>
          <form action="" className="d-flex flex-column">
            <label
              htmlFor="userName"
              className="mt-2 text-black-50"
              style={{
                fontSize: "12px",
              }}
            >
              Name
            </label>
            <input
              type="text"
              id="userName"
              placeholder="Enter your name"
              className="ps-2"
            />
            <label
              htmlFor="email"
              className="mt-2 text-black-50"
              style={{
                fontSize: "12px",
              }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Jhon.smith@example.com"
              className="ps-2"
            />
            <label
              htmlFor="rating"
              className="mt-2 text-black-50"
              style={{
                fontSize: "12px",
              }}
            >
              Rating
            </label>
            <ReactStars
              count={5}
              size={20}
              onChange={ratingChanged}
              isHalf={true}
              emptyIcon={<i className="fa-regular fa-star"></i>}
              halfIcon={<i className="fa-solid fa-star-half"></i>}
              fullIcon={<i className="fa-solid fa-star"></i>}
              activeColor="#ffd700"
              edit={true}
            />
            <label
              htmlFor="reviewTitle"
              className="mt-2 text-black-50"
              style={{
                fontSize: "12px",
              }}
            >
              Review Title
            </label>
            <input
              type="text"
              id="reviewTitle"
              placeholder="Give your review a title"
              className="ps-2"
            />
            <label
              htmlFor="reviewBody"
              className="mt-2 text-black-50"
              style={{
                fontSize: "12px",
              }}
            >
              body of Review (1500)
            </label>
            <textarea
              id="reviewBody"
              cols="30"
              rows="5"
              placeholder="write your comment here"
              className="p-2"
            ></textarea>
            <Button
              type="submit"
              className={`mt-2 mb-3 rounded-pill border-0 ${styles.pord__button}`}
            >
              Send your review
            </Button>
          </form>
          <Review />
          <Review />
          <Review />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
