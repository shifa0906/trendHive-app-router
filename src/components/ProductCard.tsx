// src/components/ProductCard.tsx
import Link from "next/link";
import { Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100">
        <img
          src={product.image}
          className="card-img-top"
          alt={product.title}
          style={{ height: "200px", objectFit: "contain" }}
        />
        <div className="card-body d-flex flex-column">
          <h6 className="card-title">{product.title}</h6>
          <p className="text-muted mb-2">${product.price.toFixed(2)}</p>
          <span className="badge bg-light text-dark mb-2">
            {product.category}
          </span>
          <Link
            href={`/products/${product.id}`}
            className="btn btn-primary btn-sm mt-auto"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
