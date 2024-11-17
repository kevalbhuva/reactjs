import { useEffect, useState } from "react";
import "./App.css";
import Navigation from "./component/Navigation";
import axios from "axios";
import { Link } from "react-router-dom";

function App() {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div>
      <Navigation />
      <div className="product-list">
        {products?.map((product) => (
          <div key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={product.thumbnail} alt={product.title} />
            </Link>
            <h2>{product.title}</h2>
            <p>price: ${product.price}</p>
            <div className="rating">
              {Array.from({ length: 5 }, (_, index) => (
                <span
                  key={index}
                  className={`star ${index < product.rating ? "filled" : ""}`}
                >
                  &#9733;
                </span>
              ))}
            </div>
            <Link to={`/product/${product.id}`}>
              <button>Buy Now</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
