import { StyleSheet } from "react-native";
import fonts from "./fonts";

// default font style used in project
export const styleFontType = StyleSheet.create({
  light: {
    fontFamily: fonts.robotoLight
  },
  regular: {
    fontFamily: fonts.robotoRegular
  },
  medium: {
    fontFamily: fonts.robotoMedium
  },
  bold: {
    fontFamily: fonts.robotoBold
  }
});

// available text size for project
export const styleFontSize = StyleSheet.create({
  small: {
    fontSize: 12
  },
  medium: {
    fontSize: 14
  },
  large: {
    fontSize: 16
  },
  xLarge: {
    fontSize: 18
  }
});
