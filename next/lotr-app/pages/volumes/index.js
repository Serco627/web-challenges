import Link from "next/link";
import { volumes } from "@/resources/lib/data";
import { introduction } from "@/resources/lib/data";
import { useRouter } from "next/router";

export default function MoviesList() {
  const router = useRouter();
  function getRandomVolume() {
    return volumes[Math.floor(Math.random() * volumes.length)];
  }

  return (
    <>
      <h1>Lord Of The Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <button
        onClick={() => {
          const randomVolume = getRandomVolume();
          if (confirm("You want to go to a random volume?")) {
            router.push(`/volumes/${randomVolume.slug}`);
          }
        }}
      >
        Go to a Random Volume
      </button>

      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
