import Link from "next/link";
import Image from "next/image";
import { volumes } from "@/resources/lib/data";
export default function FellowshipOfTheRing() {
  const currentVolume = volumes.find(({ slug }) => slug === "the-two-towers");

  return (
    <div>
      <Link href="/">Back to all volumes</Link>
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
        <Link href="/volumes/the-fellowship-of-the-ring">Previous Volume</Link>
      </button>
      <button>
        {" "}
        <Link href="/volumes/the-return-of-the-king">Next Volume</Link>
      </button>
    </div>
  );
}
