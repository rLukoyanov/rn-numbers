import { Image, StyleSheet, Text, View } from "react-native";
import { Title } from "../components/ui/Title";
import colors from "../constants/colors";

export const GameOverScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Title>GAME OVER</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/background.jpg")}
        />
      </View>
      <Text>Your phone needed X rounds to guess the number Y.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  
  image: {
    width: `100%`,
  },

  screenContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
