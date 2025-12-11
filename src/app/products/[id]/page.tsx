import { Product } from "@/types";
import ProductDetail from "@/components/ProductDetail";

async function getProduct(id: string): Promise<Product | null> {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Failed to fetch product", id, "status:", res.status);
      return null;
    }

    return res.json();
  } catch (err) {
    console.error("Error fetching product", id, err);
    return null;
  }
}

type ProductDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
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
