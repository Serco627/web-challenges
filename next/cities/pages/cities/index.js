import { cities } from "@/lib/data";
import { useRouter } from "next/router";
import Link from "next/link";

export default function CitiesList() {
  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.push("/")}>⬅️Back to HomePage</button>
      <ul>
        {cities.map((city) => {
          return (
            <li key={city.id}>
              <Link href={`/cities/${city.slug}`}>
                {city.name} ({city.country})
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
