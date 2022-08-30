import React from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
  Pressable,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = React.useState("");
  const [test, setTest] = React.useState(false);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoalText) {
      props.onAddGoal(enteredGoalText);
      setEnteredGoalText("");
    }
  }

  return (
    <>
      <Modal visible={props.visible} animationType="slide">
        <StatusBar
          style="light"
          hideTransitionAnimation="fade"
          animated={true}
          hidden={test}
        />
        <View style={styles.touchableContainer}>
          <Pressable onPress={Keyboard.dismiss}>
            <View style={styles.inputContainer}>
              <Image
                style={styles.image}
                source={require("../assets/images/goal.png")}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Your course goal!!"
                onChangeText={goalInputHandler}
                value={enteredGoalText}
              />
              <View style={styles.buttonContainer}>
                <View style={styles.button1}>
                  <Button
                    title="Add Goal"
                    onPress={addGoalHandler}
                    color="#b180f0"
                  />
                </View>
                <View style={styles.button2}>
                  <Button
                    title="Cancel"
                    onPress={props.onCancel}
                    color="#f31282"
                  />
                </View>
              </View>
            </View>
          </Pressable>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  touchableContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
  },
  inputContainer: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#311b6b",
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
    justifyContent: "center",
    width: "70%",
  },
  button1: {
    width: 100,
    marginHorizontal: 8,
    // backgroundColor: "#b180f0",
    borderRadius: 6,
  },
  button2: {
    width: 100,
    marginHorizontal: 8,
    // backgroundColor: "#f31282",
    borderRadius: 6,
  },
});
