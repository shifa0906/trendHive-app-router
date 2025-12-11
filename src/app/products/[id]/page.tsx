"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Product } from "@/types";
import ProductDetail from "@/components/ProductDetail";

export default function ProductDetailPage() {
  const params = useParams<{ id: string }>();
  const id = params?.id;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    async function fetchProduct() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`https://fakestoreapi.com/products/${id}`);

        if (!res.ok) {
          throw new Error(`Failed to fetch product. Status: ${res.status}`);
        }

        const data: Product = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Error loading product:", err);
        setError("Oops, we couldn't load this product. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (!id) {
    return (
      <div className="text-center py-5">
        <h2>Invalid product URL</h2>
        <p className="text-muted">No product ID provided.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="text-center py-5 text-muted">Loading product...</div>
    );
  }

  if (error || !product) {
    return (
      <div className="text-center py-5">
        <h2>Product not found</h2>
        <p className="text-muted">
          We couldn&apos;t load this product. Please go back and try again.
        </p>
      </div>
    );
  }

  return <ProductDetail product={product} />;
}
