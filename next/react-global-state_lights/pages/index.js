import Link from "../components/Link";
import useLightStore from "@/components/useLightStore";

export default function HomePage() {
  const lights = useLightStore((state) => state.lights);
  const lightsOnCount = lights.filter((light) => light.isOn).length;

  return (
    <div>
      <h1>Home</h1>
      <p>{lightsOnCount} light(s) are on.</p>
      <p>
        <Link href="/rooms">All Rooms →</Link>
      </p>
      <p>
        <Link href="/actions">Quick Actions →</Link>
      </p>
    </div>
  );
}
