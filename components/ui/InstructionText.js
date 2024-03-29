import React from "react";
import { StyleSheet, Text } from "react-native";
import colors from "../../constants/colors";

export const InstructionText = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: colors.accent500,
    fontSize: 24,
  },
});
