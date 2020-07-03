import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  padding: 16px 0;
  background-color: ${(props) => props.color ?? "#fff"};
`;

export const ScoreText = styled.Text`
  font-size: 142px;
  color: #fff;
  font-family: "DsDigital-Bold";
`;

export const NameInput = styled.TextInput`
  font-size: 24px;
  color: #fff;
  text-align: center;
  padding: 12px;
  width: 100%;
  font-family: "Montserrat-Bold";
`;

export const PaletteContainer = styled.TouchableOpacity`
  position: absolute;
  top: 54px;
  left: 12px;
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
`;

export const LockContainer = styled.TouchableOpacity`
  position: absolute;
  top: 12px;
  left: 12px;
`;

export const ColorSelector = styled.Modal`
  flex: 1;
`;

export const ColorSelectorContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ColorSelectorBox = styled.View`
  background-color: #fff;
  width: 300px;
  height: 340px;
  border-radius: 8px;
  padding: 12px;
  justify-content: space-evenly;
`;

export const CloseButton = styled.TouchableOpacity``;

export const CloseButtonText = styled.Text`
  font-size: 20px;
  text-align: center;
  color: #555;
  font-family: "Montserrat-Bold";
`;

export const Title = styled.Text`
  font-size: 22px;
  text-align: center;
  color: #333;
  margin-bottom: 8px;
  font-family: "Montserrat-Bold";
`;

export const ColorBox = styled.TouchableOpacity`
  background-color: ${(props) => props.color ?? "#eee"};
  width: 64px;
  height: 64px;
  border-radius: 32px;
  border: 4px solid
    ${(props) => (props.selected ? `${props.color}5F` : "#fff0")};
`;

export const ColorsRow = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`;
