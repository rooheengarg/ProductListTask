import axios from "axios";

const fetchDataSuccess = (data) => {
  return {
    type: "FETCH_DATA_SUCCESS",
    data,
  };
};

const fetchProductData = () => {};

const fetchAfterFilter = (filterKey) => {
  return {
    type: "APPLY_FILTER",
    data: filterKey,
  };
};

export default {
  fetchProductData,
  fetchAfterFilter,
};
