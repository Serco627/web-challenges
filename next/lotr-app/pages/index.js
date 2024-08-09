import Link from "next/link";
import { volumes } from "@/resources/lib/data";
import { introduction } from "@/resources/lib/data";

export default function MoviesList() {
  return (
    <>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
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
