import { useState } from "react";
import { StyleSheet, TextInput, View, Alert, Text } from "react-native";

import { PramiryButton } from "../components/ui/PramiryButton";
import colors from "../constants/colors";
import { Title } from "../components/ui/Title";
import { Card } from "../components/ui/Card";
import { InstructionText } from "../components/ui/InstructionText";

export const StartGameScreen = ({ onPickedNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number",
        "Number has to be a number beetween 1 to 99",
        [
          {
            text: "Okay",
            style: "default",
            onPress: resetInputHandler,
          },
        ]
      );
      return;
    }

    onPickedNumber(chosenNumber);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Nmber</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PramiryButton onPress={resetInputHandler}>Reset</PramiryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PramiryButton onPress={confirmInputHandler}>Confirm</PramiryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: colors.accent500,
    borderBottomWidth: 2,
    color: colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
