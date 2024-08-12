import useLightStore from "@/components/useLightStore";
import { LightButton, Icon, Text, Name, State } from "./Light.styled";

export default function Light({ name, id }) {
  const isOn = useLightStore(
    (state) => state.lights.find((light) => light.id === id)?.isOn
  );
  const toggleLight = useLightStore((state) => state.toggleLight);

  return (
    <LightButton type="button" onClick={() => toggleLight(id)} $isOn={isOn}>
      <Icon $isOn={isOn}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
