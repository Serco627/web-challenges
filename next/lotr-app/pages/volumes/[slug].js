import Link from "next/link";
import { volumes } from "@/resources/lib/data";
import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const currentVolumeIndex = volumes.findIndex(
    (volume) => volume.slug === slug
  );
  const currentVolume = volumes[currentVolumeIndex];

  if (!currentVolume) {
    return null;
  }

  const previousVolume = volumes[currentVolumeIndex - 1];
  const nextVolume = volumes[currentVolumeIndex + 1];

  return (
    <div>
      <Head>
        <title>{currentVolume.title}</title>
      </Head>
      <button>
        <Link href="/volumes">Back to all volumes</Link>
      </button>
      <h1>{currentVolume.title}</h1>
      <p>{currentVolume.description}</p>
      <Image alt="cover" src={currentVolume.cover} height={400} width={400} />
      <h2>Books for this volume:</h2>
      <ul>
        {currentVolume.books.map((book, index) => (
          <li key={index}>
            <strong>{book.ordinal}:</strong> {book.title}
          </li>
        ))}
      </ul>
      <div>
        {previousVolume && (
          <button>
            <Link href={`/volumes/${previousVolume.slug}`}>
              Previous Volume
            </Link>
          </button>
        )}
        {nextVolume && (
          <button>
            <Link href={`/volumes/${nextVolume.slug}`}>Next Volume</Link>
          </button>
        )}
      </div>
    </div>
  );
}
