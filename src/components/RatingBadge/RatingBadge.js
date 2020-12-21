import React from "react";

const Rating = ({ rating, ratingCount }) => {
  return (
    <div>
      <span>{rating}</span>
      <span>{`(${ratingCount})`}</span>
    </div>
  );
};

export default Rating;
