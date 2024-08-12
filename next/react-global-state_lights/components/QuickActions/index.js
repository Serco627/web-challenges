import styled from "styled-components";
import Button from "../Button";
import useLightStore from "../useLightStore";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions() {
  const { lights, toggleLight } = useLightStore((state) => ({
    lights: state.lights,
    toggleLight: state.toggleLight,
  }));

  function turnAllLightsOn() {
    lights.forEach((light) => {
      if (!light.isOn) {
        toggleLight(light.id);
      }
    });
  }

  function turnAllLightsOff() {
    lights.forEach((light) => {
      if (light.isOn) {
        toggleLight(light.id);
      }
    });
  }

  return (
    <StyledQuickActions>
      <Button type="button" onClick={turnAllLightsOff}>
        Turn all lights off
      </Button>
      <Button type="button" onClick={turnAllLightsOn}>
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
