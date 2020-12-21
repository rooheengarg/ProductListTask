//Representational component to show product cards
import React from "react";
// import PropTypes from "prop-types";
import ImageLoader from "../../components/ImageLoader/ImageLoader";
import RatingBadge from "../../components/RatingBadge/RatingBadge";
import Pricing from "../../components/Pricing/Pricing";
import "./ProductCard.scss";

const ProductCard = ({ productData }) => {
  const {
    images,
    productName,
    discount,
    price,
    discountDisplayLabel,
    rating,
    brand,
    ratingCount,
  } = productData || {};

  return (
    <div className="card margin-16">
      <ImageLoader imagesArray={images} />

      {brand && <div className="brand">{brand}</div>}
      {productName && <div className="textCss">{productName}</div>}
      <RatingBadge rating={rating} ratingCount={ratingCount} />
      <Pricing
        price={price}
        discountedPrice={discount}
        discountDisplayLabel={discountDisplayLabel}
      />
    </div>
  );
};

// ProductCard.PropTypes = {
//   productData: PropTypes.object,
// };

export default ProductCard;
