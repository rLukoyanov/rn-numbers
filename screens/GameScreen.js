import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { Title } from "../components/ui/Title";
import { NumberContainer } from "../components/game/NumberContainer";
import { PramiryButton } from "../components/ui/PramiryButton";
import { Card } from "../components/ui/Card";
import { InstructionText } from "../components/ui/InstructionText";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    rndNum = Math.floor(Math.random() * (max - min)) + min;
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

export const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber]);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("dont lie", "number is wrong", [
        { text: "sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent`s Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>

      <Card>
        <InstructionText>Higher or lower?</InstructionText>
        <View>
          <PramiryButton onPress={nextGuessHandler.bind(this, "greater")}>
            +
          </PramiryButton>
          <PramiryButton onPress={nextGuessHandler.bind(this, "lower")}>
            -
          </PramiryButton>
        </View>
      </Card>
      {/* {<View>Log</View>} */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
