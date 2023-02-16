import { Alert, Button, Modal, Pressable, View } from "react-native";
import { Player } from "./types";
import { useState } from "react";
import Input from "./Input";
import Title from "./components/shared/Title";
import NormalText from "./NormalText";

interface PlayersProps {
  players: Array<Player>
  setPlayers: (players: Array<Player>) => void
}

export default function Players(props: PlayersProps) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Title> Players </Title>

      <Button
        title="Show Modal"
        onPress={() => setModalVisible(true)}
      />

      {/*<PlayersModal open={modalVisible} onClose={() => setModalVisible(false)}/>*/}
    </>
  );
}

const styles = {
  fontSize: 32,
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  }
};