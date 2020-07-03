import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Picker,
  Alert,
} from "react-native";

import Score from "./components/Score";
import Modal from "./components/Modal";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export const HelpModal = ({ helpModalVisible, setHelpModalVisible }) => {
  return (
    <Modal
      title="AJUDA"
      onClose={() => setHelpModalVisible(false)}
      visible={helpModalVisible}
    >
      <Text style={styles.subtitle}>Geral</Text>
      <Text style={styles.description}>
        Clique no ícone do cadeado para bloquear ou desbloquear a alteração do
        seu nome ou cor.
      </Text>
      <Text style={styles.subtitle}>Pontuação do Jogador</Text>
      <Text style={styles.description}>
        Clique em um retângulo para aumentar a sua pontuação.
      </Text>
      <Text style={styles.description}>
        Clique longo em um retângulo para diminuir a sua pontuação.
      </Text>
      <Text style={styles.subtitle}>Nome do Jogador</Text>
      <Text style={styles.description}>
        Clique no nome "JOGADOR" para alterar o seu nome.
      </Text>
      <Text style={styles.subtitle}>Cor do Jogador</Text>
      <Text style={styles.description}>
        Clique no ícone de paleta para alterar a sua cor.
      </Text>
      <Text style={styles.subtitle}>Quantidade de Jogadores</Text>
      <Text style={styles.description}>
        Clique no ícone de engrenagem para abrir as configurações e alterar a
        quantidade de jogadores.
      </Text>
    </Modal>
  );
};

export const SettingsModal = ({
  settingsModalVisible,
  setSettingsModalVisible,
  setQuantidadeJogadores,
  quantidadeJogadores,
}) => {
  return (
    <Modal
      title="Configurações"
      onClose={() => setSettingsModalVisible(false)}
      visible={settingsModalVisible}
    >
      <Text style={styles.subtitle}>Jogadores</Text>
      <Text style={styles.description}>Quantidade de Jogadores</Text>

      <Picker
        mode="dialog"
        prompt="Quantidade de jogadores"
        onValueChange={(value) => setQuantidadeJogadores(value)}
        selectedValue={quantidadeJogadores}
        style={styles.picker}
      >
        <Picker.Item label="2" value={2} />
        <Picker.Item label="4" value={4} />
        <Picker.Item label="6" value={6} />
        <Picker.Item label="8" value={8} />
      </Picker>
    </Modal>
  );
};

function _calculateNumRows(quantidadeJogadores) {
  if (quantidadeJogadores === 2) return 2;

  return quantidadeJogadores / 2;
}

function _calculateJogadoresXRows(quantidadeJogadores) {
  return quantidadeJogadores / _calculateNumRows(quantidadeJogadores);
}

const colors = [
  ["#FA6C6C", "#FFEF5E"],
  ["#4FA2EF", "#93DF6F"],
  ["#4BAEA0", "#FFAD87"],
  ["#715AEF", "#D8345F"],
];

function _mountRows(quantidadeRows, quantidadeJogadoresXRows) {
  const newRows = [];

  for (let i = 0; i < quantidadeRows; i++) {
    newRows.push(colors[i].slice(0, quantidadeJogadoresXRows));
  }

  return newRows;
}

function restoreScores(setRestore) {
  Alert.alert("Atenção", "Deseja reiniciar as pontuações dos jogadores?", [
    { text: "Não", style: "cancel" },
    { text: "Sim", onPress: () => setRestore((value) => !value) },
  ]);
}

export default function App() {
  const [helpModalVisible, setHelpModalVisible] = useState(false);
  const [settingsModalVisible, setSettingsModalVisible] = useState(false);
  const [quantidadeJogadores, setQuantidadeJogadores] = useState(4);
  const [rows, setRows] = useState([]);
  const [restore, setRestore] = useState(false);

  useEffect(() => {
    const quantidadeRows = _calculateNumRows(quantidadeJogadores);
    const quantidadeJogadoresXRows = _calculateJogadoresXRows(
      quantidadeJogadores
    );
    const colorRows = _mountRows(quantidadeRows, quantidadeJogadoresXRows);

    setRows(colorRows);
  }, [quantidadeJogadores]);

  return (
    <View style={styles.container}>
      {rows.map((row, index) => (
        <View key={index.toString()} style={styles.row}>
          {row.map((color, index) => (
            <Score restore={restore} key={index.toString()} color={color} />
          ))}
        </View>
      ))}

      <TouchableOpacity
        onPress={() => setHelpModalVisible(true)}
        style={styles.helpButton}
      >
        <MaterialCommunityIcons name="help" size={20} color="#454545" />
      </TouchableOpacity>

      <HelpModal
        setHelpModalVisible={setHelpModalVisible}
        helpModalVisible={helpModalVisible}
      />

      <SettingsModal
        setSettingsModalVisible={setSettingsModalVisible}
        settingsModalVisible={settingsModalVisible}
        setQuantidadeJogadores={setQuantidadeJogadores}
        quantidadeJogadores={quantidadeJogadores}
      />

      <TouchableOpacity
        onPress={() => setSettingsModalVisible(true)}
        style={styles.settingsButton}
      >
        <MaterialCommunityIcons name="settings" size={20} color="#454545" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => restoreScores(setRestore)}
        style={styles.resetButton}
      >
        <MaterialCommunityIcons name="restore" size={20} color="#454545" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  helpButton: {
    position: "absolute",
    top: 10,
    right: 10,
    height: 40,
    width: 40,
    backgroundColor: "#fff",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  settingsButton: {
    position: "absolute",
    top: 60,
    right: 10,
    height: 40,
    width: 40,
    backgroundColor: "#fff",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  resetButton: {
    position: "absolute",
    top: 110,
    right: 10,
    height: 40,
    width: 40,
    backgroundColor: "#fff",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  helpButtonText: {
    fontSize: 28,
    fontFamily: "Montserrat-Regular",
    color: "#676767",
  },

  subtitle: {
    fontSize: 18,
    fontFamily: "Montserrat-Bold",
    color: "#101010",
    marginVertical: 4,
  },

  description: {
    fontSize: 14,
    fontFamily: "Montserrat-Regular",
    color: "#333",
    marginBottom: 6,
    textAlign: "justify",
  },

  picker: {
    fontFamily: "Montserrat-Bold",
  },
});
