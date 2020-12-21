import React, { useEffect, useState } from "react";
import axios from "axios";
import Filter from "../Filter/Filter";
import ProductCard from "../../widgets/ProductCard/ProductCard";
import "./ProductList.scss";

const initialFilterState = {};

const ProductList = () => {
  const [filter, updateFilter] = useState(initialFilterState);
  const [filterArray, updateFilterArray] = useState([]);
  const [productData, updateProductData] = useState([]);
  const [dataShown, updatedataShown] = useState([]);

  useEffect(() => {
    fetchProductData();
  }, []);

  const fetchProductData = () => {
    const apiUrl = "https://demo7242716.mockable.io/products";
    axios.get(apiUrl).then((products) => {
      console.log("products", products);
      if (products && products.data && products.data.products) {
        updateProductData(products.data.products);
        updatedataShown(products.data.products);
        getFilterArray(products.data.products);
      }
    });
  };

  const getFilterArray = (data) => {
    const arr = [];
    const hashMap = {};
    data.forEach((element) => {
      if (!hashMap[element.category]) {
        arr.push(element.category);
        hashMap[element.category] = 1;
        initialFilterState[element.category] = 0;
      }
    });
    updateFilterArray(arr);
  };

  const onFilterChange = (key) => {
    var clonedObj = { ...filter };
    clonedObj[key] = !clonedObj[key];

    updateFilter(clonedObj);

    const keys = Object.keys(clonedObj);

    const filterOn = keys.filter((item) => clonedObj[item]);

    if (filterOn.length === 0) {
      updatedataShown(productData);
      return;
    }

    const clonedPdtData = [...productData];

    const filteredData = clonedPdtData.filter((item) =>
      filterOn.includes(item.category)
    );

    updatedataShown(filteredData);
  };

  const createProductList = () => {
    return dataShown.map((elem, index) => {
      return <ProductCard key={index} productData={elem} />;
    });
  };

  return (
    <div>
      <div>
        <Filter filterArr={filterArray} onchangeFilter={onFilterChange} />
      </div>
      <div className="flexContainer">{createProductList()}</div>
    </div>
  );
};

export default ProductList;
