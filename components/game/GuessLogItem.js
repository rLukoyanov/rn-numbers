import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../constants/colors";

export const GuessLogItem = ({ roundNumber, guess }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponents`s Guess: {guess}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderColor: colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 20,
    marginVertical: 8,
    backgroundColor: colors.accent500,
    flexDirection: "row",
    justifyContent: "space-bettewn",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },

  itemText: {
    fontFamily: "open-sans",
  },
});
