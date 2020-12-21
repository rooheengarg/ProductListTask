const initialState = {
  productListData: {},
  sortOptions: [],
  isFetching: false,
  isFetched: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_SUCCESS": {
      console.log("hereeeee");
      return {
        ...state,
        productListData: action.data,
      };
    }

    default:
      return state;
  }
};

export default reducer;
