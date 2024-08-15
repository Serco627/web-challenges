import Link from "next/link";
import { useRouter } from "next/router";
import { cities } from "../../lib/data";

export default function City() {
  const router = useRouter();
  const { slug } = router.query;

  const currentCity = cities.find((city) => city.slug === slug);

  if (!currentCity) {
    return null;
  }

  return (
    <>
      <h1>
        {" "}
        {currentCity.name}, based in {currentCity.country}
      </h1>
      <p>Population: {currentCity.population}</p>
      <p>Description: {currentCity.description}</p>

      <Link href="/cities">⬅️ Back to all cities</Link>
    </>
  );
}
