import { StyleSheet, TextInput, View } from "react-native";
import { PramiryButton } from "../components/PramiryButton";

export const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput />
      <PramiryButton>Reset</PramiryButton>
      <PramiryButton>Confirm</PramiryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: "#72063c",
    borderRadius: 9,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
});
