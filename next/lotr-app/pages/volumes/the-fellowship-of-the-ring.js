import Link from "next/link";
import { volumes } from "@/resources/lib/data";
import Image from "next/image";
export default function FellowshipOfTheRing() {
  const currentVolume = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

  return (
    <div>
      <button>
        <Link href="/">Back to all volumes</Link>
      </button>{" "}
      <h1>{currentVolume.title}</h1>
      <p>{currentVolume.description}</p>
      <Image alt="cover" src={currentVolume.cover} height={400} width={400} />
      <h2>Books for this movie:</h2>
      <ul>
        {currentVolume.books.map((book, index) => (
          <li key={index}>
            <strong>{book.ordinal}:</strong> {book.title}
          </li>
        ))}
      </ul>
      <button>
        {" "}
        <Link href="/volumes/the-two-towers">Next Volume</Link>
      </button>
    </div>
  );
}
