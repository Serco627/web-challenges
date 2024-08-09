import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Lord Of The Ring</h1>
      <p>This is the starting Homepage for the Lord of the rings movies.</p>
      <Link href="/volumes">Go to movies overview</Link>
    </div>
  );
}
