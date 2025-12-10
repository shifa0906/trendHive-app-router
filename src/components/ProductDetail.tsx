// src/components/ProductDetail.tsx
"use client";

import { Product } from "@/types";
import { useCart } from "../context/CartContext";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const { addToCart } = useCart();

  return (
    <div className="row">
      <div className="col-md-6">
        <img
          src={product.image}
          alt={product.title}
          className="img-fluid p-3"
          style={{ maxHeight: "400px", objectFit: "contain" }}
        />
      </div>
      <div className="col-md-6">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h4>${product.price.toFixed(2)}</h4>
        <button
          className="btn btn-success"
          onClick={() =>
            addToCart({
              id: product.id,
              title: product.title,
              price: product.price,
              image: product.image,
              quantity: 1,
            })
          }
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
