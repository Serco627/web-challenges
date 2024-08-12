import { useRouter } from "next/router";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import Link from "next/link";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Character() {
  const router = useRouter();
  const id = router.query.id;
  // const {id} = router.query; ginge auch
  const { data, error, isLoading } = useSWR(
    `https://swapi.dev/api/people/${id}`,
    fetcher
  );
  if (error)
    return <Layout>failed to load the data...Character not found</Layout>;
  if (isLoading) return <Layout>Character is loading...wait</Layout>;
  if (!data) return <Layout>no data available</Layout>;

  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}
