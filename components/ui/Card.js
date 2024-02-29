import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../../constants/colors";

export const Card = ({ children }) => {
  return <View style={styles.cardContainer}>{children}</View>;
};

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: "center",
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    backgroundColor: colors.primary800,
    borderRadius: 9,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
});
