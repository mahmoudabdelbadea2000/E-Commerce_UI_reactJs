import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const Review = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div>
      <hr />
      <ReactStars
        count={5}
        size={16}
        onChange={ratingChanged}
        isHalf={true}
        emptyIcon={<i className="fa-regular fa-star"></i>}
        halfIcon={<i className="fa-solid fa-star-half"></i>}
        fullIcon={<i className="fa-solid fa-star"></i>}
        activeColor="#ffd700"
        edit={false}
        value={4.5}
      />
      <h6>Good</h6>
      <p className="fw-bold">
        maaaaaaaaa <span className="text-black-50">on</span> Aug29,2023
      </p>
      <p className="text-black-50">this is the good review</p>
      <Link to="" className="text-black-50">
        <p
          style={{
            textAlign: "right",
            textDecoration: "underline",
            fontSize: "14px",
          }}
        >
          Report as inappropriate
        </p>
      </Link>
    </div>
  );
};

export default Review;
