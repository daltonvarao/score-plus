import React, { useState, useEffect } from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  Container,
  ScoreText,
  NameInput,
  PaletteContainer,
  LockContainer,
  ColorSelector,
  Title,
  ColorSelectorContainer,
  ColorSelectorBox,
  ColorBox,
  ColorsRow,
  CloseButton,
  CloseButtonText,
} from "./styles";

const colors = [
  ["#4FA2EF", "#F86C6C", "#FFEF5E"],
  ["#715AEF", "#FA43A5", "#93DF6F"],
  ["#D8345F", "#FFAD87", "#4BAEA0"],
];

const ScoreBox = (props) => {
  const [score, setScore] = useState(0);
  const [name, setName] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [color, setColor] = useState(props.color);
  const [editable, setEditable] = useState(true);

  const increaseScore = () => {
    setScore(score + 1);
  };

  const decreaseScore = () => {
    if (score === 0) return;
    setScore(score - 1);
  };

  useEffect(() => {
    setName((name) => name.toUpperCase());
  }, [name]);

  useEffect(() => {
    setScore(0);
  }, [props.restore]);

  const selectColor = (color) => {
    setColor(color);
  };

  const renderItem = (item, index) => (
    <ColorBox
      onPress={() => selectColor(item)}
      selected={color.toUpperCase() === item.toUpperCase()}
      key={index.toString()}
      color={item}
    />
  );

  const renderRow = (row, index) => (
    <ColorsRow key={index.toString()}>{row.map(renderItem)}</ColorsRow>
  );

  return (
    <Container
      onLongPress={decreaseScore}
      onPress={increaseScore}
      activeOpacity={0.7}
      color={color}
    >
      <PaletteContainer
        disabled={!editable}
        onPress={() => setModalVisible(true)}
      >
        <MaterialCommunityIcons name="palette" size={32} color="#fff" />
      </PaletteContainer>

      <LockContainer onPress={() => setEditable(!editable)}>
        <MaterialCommunityIcons
          name={editable ? "lock-open" : "lock"}
          size={32}
          color="#fff"
        />
      </LockContainer>
      <ScoreText>{score}</ScoreText>
      <NameInput
        placeholder="JOGADOR"
        placeholderTextColor="#fff6"
        autoCapitalize="characters"
        autoCorrect={false}
        autoCompleteType="off"
        onChangeText={setName}
        value={name}
        editable={editable}
      />

      <ColorSelector animationType="fade" transparent visible={modalVisible}>
        <ColorSelectorContainer>
          <ColorSelectorBox>
            <Title>Selecione uma cor</Title>
            {colors.map(renderRow)}
            <CloseButton onPress={() => setModalVisible(false)}>
              <CloseButtonText>Fechar</CloseButtonText>
            </CloseButton>
          </ColorSelectorBox>
        </ColorSelectorContainer>
      </ColorSelector>
    </Container>
  );
};

export default ScoreBox;
