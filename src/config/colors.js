/**
 * @providesModule Colors
 */

colorPlatte = {
  black: "#000000",
  smoke: "#EEEEEE",
  white: "#FFFFFF",
  night: "#333333",
  charcoal: "#474747",
  gray: "#7D7D7D",
  lightishgray: "#9D9D9D",
  lightgray: "#908d87",
  disableGrey: "#a9a69f",
  orange: "#fc8704", //  dark left #e96b00
  blue: "#1669b2",
  red: "#ff0101",
  redError: "#ff4444",
  green: "#43a10f",
  black_10: "#0000001a",
  offBlack: "#585651"
};

const colors = {
  black: "#000000",
  smoke: "#EEEEEE",
  white: "#FFFFFF",
  primary: colorPlatte.orange,
  accent: colorPlatte.blue,

  activeButton: colorPlatte.orange,
  activeButtonBorderColor: colorPlatte.orange,
  activeButtonTextColor: colorPlatte.white,
  
  inActiveButton: colorPlatte.disableGrey,
  inActiveButtonBorderColor: colorPlatte.disableGrey,
  inActiveButtonTextColor: colorPlatte.lightgray,

  error: colorPlatte.redError,
  success: colorPlatte.green,
  shadow: colorPlatte.black_10,
  hintColor: colorPlatte.lightgray,
  textColor: colorPlatte.offBlack
};

export default colors;
