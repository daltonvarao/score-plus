import React, { useState, useEffect } from "react";

import {
  Modal,
  ModalContainer,
  ModalBody,
  ModalTitle,
  CloseButton,
  CloseButtonText,
} from "./styles";

export default function ({ title, onClose, children, ...props }) {
  return (
    <Modal animationType="fade" transparent visible={props.visible}>
      <ModalContainer>
        <ModalBody>
          <ModalTitle>{title}</ModalTitle>
          {children}
          <CloseButton onPress={onClose}>
            <CloseButtonText>Fechar</CloseButtonText>
          </CloseButton>
        </ModalBody>
      </ModalContainer>
    </Modal>
  );
}
