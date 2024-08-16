import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductsList() {
  const { data, error, isLoading } = useSWR("/api/products", fetcher);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Failed to load products.</div>;

  if (!data) return <div>No data found</div>;

  return (
    <div>
      <h1>All Products</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
