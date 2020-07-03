import styled from "styled-components/native";

export const Modal = styled.Modal`
  flex: 1;
`;

export const ModalContainer = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.View`
  width: ${(props) => props.width ?? 320}px;
  /* height: ${(props) => props.height ?? 360}px; */
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
`;

export const ModalTitle = styled.Text`
  font-size: 22px;
  text-align: center;
  color: #333;
  margin-bottom: 16px;
  font-family: "Montserrat-Bold";
`;

export const CloseButton = styled.TouchableOpacity`
  margin-top: 16px;
  align-self: center;
`;

export const CloseButtonText = styled.Text`
  font-size: 20px;
  text-align: center;
  color: #555;
  font-family: "Montserrat-Bold";
`;
