import { TextInput, View } from "react-native";
import { PramiryButton } from "../components/PramiryButton";

export const StartGameScreen = () => {
  return (
    <View>
      <TextInput />
      <PramiryButton>Reset</PramiryButton>
      <PramiryButton>Confirm</PramiryButton>
    </View>
  );
};
