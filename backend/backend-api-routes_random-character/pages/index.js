import useSWR from "swr";

export default function HomePage() {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR("/api/random-character", fetcher);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Failed to load data.</div>;

  if (!data) return <div>No data found</div>;

  return (
    <div>
      <h1>Random Character</h1>
      <p>
        {data.firstName} {data.lastName} is {data.age} years old and works as a{" "}
        {data.profession}.
      </p>
      <p>Twitter Account: {data.twitter}</p>
      <p>Birthday: {data.birthday}</p>
      <p>Favourite Animal: {data.favAnimal}</p>
    </div>
  );
}
