import React, { useState } from "react";
import {
  Button,
  Modal,
  StyleSheet,
  TextInput,
  View,
  Image,
} from "react-native";

const GoalInput = ({ addGoalHandler, isVisible, endAddGoalHandler }) => {
  const [input, setInput] = useState("");

  function goalInputHandler(enteredValue) {
    setInput(enteredValue);
  }

  function addHandler() {
    addGoalHandler(input);
    setInput("");
  }

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/goal.png")} />
        <TextInput
          onChangeText={goalInputHandler}
          value={input}
          style={styles.textInput}
          placeholder="Your course goal!"
        />
        <View style={styles.btns}>
          <View style={styles.btn}>
            <Button color="#b180f0" onPress={addHandler} title="Add Goal" />
          </View>
          <View style={styles.btn}>
            <Button
              color="#f31282"
              title="Cancel"
              onPress={() => endAddGoalHandler()}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "80%",
    padding: 8,
  },
  btns: {
    flexDirection: "row",
    gap: 8,
    marginTop: 8,
  },
  btn: {
    width: "30%",
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
});
