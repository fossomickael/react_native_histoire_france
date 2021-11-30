import React, { useState, useEffect } from "react";
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";
const ModalAnswered = ({ answered, nextquestion, to_display }) => {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setModalVisible(answered);
  }, [answered]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text>{to_display}</Text>
          <Text style={styles.modalText}>
            Le coup d'État du 2 décembre 1851 est l'acte par lequel, en
            violation de la légitimité constitutionnelle, Louis-Napoléon
            Bonaparte, président de la République française depuis trois ans,
            conserve le pouvoir à quelques mois de la fin de son mandat alors
            que la Constitution de la Deuxième République lui interdisait de se
            représenter.
          </Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              setModalVisible(!modalVisible), nextquestion();
            }}
          >
            <Text style={styles.textStyle}>Prochaine question</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
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
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default ModalAnswered;
