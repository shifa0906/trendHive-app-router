import { Product } from "@/types";
import ProductCard from "@/components/ProductCard";

async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

type ProductsPageProps = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const products = await getProducts();

  const sp = await searchParams;
  const query = (sp?.q || "").toLowerCase().trim();

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

      <div className="row">
        {filtered.length === 0 && (
          <div className="col-12 text-center text-muted py-5">
            No products found for <strong>{query}</strong>.
          </div>
        )}

        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
