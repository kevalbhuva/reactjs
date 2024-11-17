import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../ProductDetail.css";
import "../App.css";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setSelectedImage(response.data.images[0]);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);
  if (loading) {
    return (
      <div className="loading-background">
        <div className="loading-spinner"></div>
      </div>
    );
  }
  if (!product) {
    return <div className="error">Product not found.</div>;
  }
  return (
    <div className="product-detail-container">
      <div className="left-column">
        <div className="image-gallery">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`product-thumbnail-${index}`}
              onClick={() => setSelectedImage(image)}
              className={`thumbnail ${
                selectedImage === image ? "selected" : ""
              }`}
            />
          ))}
        </div>
        <img
          src={selectedImage}
          alt="selected-product"
          className="main-image"
        />
      </div>
      <div className="right-column">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>Category: {product.category}</p>
        <p>Price: ${product.price.toFixed(2)}</p>
        <p>Discount: {product.discountPercentage}%</p>
        <p>Rating: {product.rating}</p>
        <p>Stock: {product.stock}</p>
        <p>Brand: {product.brand}</p>
        <p>SKU: {product.sku}</p>
        <p>Weight: {product.weight}g</p>
        <p>
          Dimensions: {product.dimensions.width} x {product.dimensions.height} x{" "}
          {product.dimensions.depth} mm
        </p>
        <p>Warranty: {product.warrantyInformation}</p>
        <p>Shipping: {product.shippingInformation}</p>
        <p>Availability: {product.availabilityStatus}</p>
        <p>Return Policy: {product.returnPolicy}</p>
        <p>Minimum Order Quantity: {product.minimumOrderQuantity}</p>
        <div className="reviews">
          <h2>Reviews:</h2>
          {product.reviews.map((review, index) => (
            <div key={index} className="review">
              <p>Rating: {review.rating}</p>
              <p>Comment: {review.comment}</p>
              <p>Reviewer: {review.reviewerName}</p>
              <p>Date: {new Date(review.date).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
        <button>Buy Now</button>
      </div>
    </div>
  );
}

export default ProductDetail;
