"use client";

import { useCart } from "../context/CartContext";

export default function ProductDetail({ product }: { product: any }) {
  const { addToCart } = useCart();

  return (
    <div className="row">
      <div className="col-md-6">
        <img src={product.image} className="img-fluid p-3" style={{ maxHeight: "400px", objectFit: "contain" }} />
      </div>
      <div className="col-md-6">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h4>${product.price}</h4>
        <button
          className="btn btn-success"
          onClick={() => addToCart({ ...product, quantity: 1 })}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

  