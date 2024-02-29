import React from "react";
import { StyleSheet, Text } from "react-native";
import colors from "../../constants/colors";

export const InstructionText = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: colors.accent500,
    fontSize: 24,
  },
});
