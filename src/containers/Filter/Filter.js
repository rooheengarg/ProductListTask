import React from "react";
import "./Filter.scss";

const Filter = ({ filterArr, onchangeFilter }) => {
  const filterContainer = filterArr.map((item, i) => {
    return (
      <div className="filterContainer" key={i}>
        <input
          type="checkbox"
          onChange={() => {
            onchangeFilter(item);
          }}
        />
        <span>{item}</span>
      </div>
    );
  });

  return <div className="flexContainerFilter">{filterContainer}</div>;
};

export default Filter;
