"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types";
export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const q = (params.get("q") || "").toLowerCase().trim();
    setQuery(q);
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch("https://fakestoreapi.com/products");

        if (!res.ok) {
          throw new Error(`Failed to fetch products. Status: ${res.status}`);
        }

        const data: Product[] = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error loading products:", err);
        setError("Oops, we couldn't load products. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const filtered = query
    ? products.filter((p) => p.title.toLowerCase().includes(query))
    : products;

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="mb-0">Products</h2>
        {query && (
          <span className="text-muted small">
            Search: <strong>{query}</strong> • Showing{" "}
            <strong>{filtered.length}</strong> of{" "}
            <strong>{products.length}</strong>
          </span>
        )}
      </div>

      {loading && (
        <div className="text-center text-muted py-5">Loading products...</div>
      )}

      {!loading && error && (
        <div className="text-center text-danger py-5">{error}</div>
      )}

      {!loading && !error && (
        <div className="row">
          {filtered.length === 0 ? (
            <div className="col-12 text-center text-muted py-5">
              No products found
              {query && (
                <>
                  {" "}
                  for <strong>{query}</strong>
                </>
              )}
              .
            </div>
          ) : (
            filtered.map((p) => <ProductCard key={p.id} product={p} />)
          )}
        </div>
      )}
    </div>
  );
}
