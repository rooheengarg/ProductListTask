import React from "react";

const Pricing = ({ price, discountDisplayLabel }) => {
  return (
    <div>
      <span>{price}</span>
      <span>{discountDisplayLabel}</span>
    </div>
  );
};

export default Pricing;
