import React from "react";
import ReactDOM from "react-dom";
import ProductList from "./containers/ProductList/ProductList";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./store/reducer";

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <h1>This is a product app</h1>
      <ProductList></ProductList>
    </Provider>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
