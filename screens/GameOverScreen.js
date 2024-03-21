import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import { Title } from "../components/ui/Title";
import { PramiryButton } from "../components/ui/PramiryButton";
import colors from "../constants/colors";

export const GameOverScreen = ({
  roundsNumber,
  userNumber,
  onStartNewGame,
}) => {
  return (
    <View style={styles.screenContainer}>
      <Title>GAME OVER</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/background.jpg")}
        />
      </View>
      <Text style={styles.text}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PramiryButton onPress={onStartNewGame}>Start new Game</PramiryButton>
    </View>
  );
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: deviceWidth < 380 ? 75 : 150,
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderWidth: 3,
    borderColor: colors.primary800,
    overflow: "hidden",
    margin: 36,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  screenContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 16,
  },
  highlight: {
    color: colors.primary500,
    fontWeight: 500,
  },
});
