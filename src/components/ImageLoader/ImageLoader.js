import React from "react";
import "./ImageLoader.scss";

const ImageLoader = ({ imagesArray }) => {
  return (
    <div>
      <img src={imagesArray[0].src} className="imgContainer" />
    </div>
  );
};

export default ImageLoader;
