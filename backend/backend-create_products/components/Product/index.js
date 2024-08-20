import { useRouter } from "next/router";
import useSWR from "swr";
import { StyledLink } from "../Link/Link.styled";
const productCardStyle = {
  padding: "20px",
  margin: "20px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  backgroundColor: "#fff",
};

const reviewListStyle = {
  listStyleType: "none",
  padding: "0",
  margin: "0",
};

const reviewItemStyle = {
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "10px",
  marginBottom: "10px",
  backgroundColor: "#f9f9f9",
};

const reviewTitleStyle = {
  margin: "0",
  color: "#333",
};

const reviewTextStyle = {
  margin: "5px 0",
  color: "#555",
};

const reviewRatingStyle = {
  margin: "0",
  fontWeight: "bold",
  color: "#f39c12",
};

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(id ? `/api/products/${id}` : null);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return <h1>Product not found</h1>;
  }

  return (
    <div style={productCardStyle}>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>

      {data.reviews && data.reviews.length > 0 ? (
        <>
          <h3>Reviews:</h3>
          <ul style={reviewListStyle}>
            {data.reviews.map((review) => (
              <li key={review._id} style={reviewItemStyle}>
                <h4 style={reviewTitleStyle}>{review.title}</h4>
                <p style={reviewTextStyle}>{review.text}</p>
                <p style={reviewRatingStyle}>Rating: {review.rating}</p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>No reviews available</p>
      )}

      <StyledLink href="/">Back to all</StyledLink>
    </div>
  );
}
