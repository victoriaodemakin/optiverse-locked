import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../constants";

const styles = StyleSheet.create({
 button: {
  backgroundColor: COLORS.primary,
  borderRadius: 10,
  paddingHorizontal: 10,
  paddingVertical: 10,
},
buttonContainer: {
  flexDirection: 'row',
  alignItems: 'center',
},
icon: {
  marginRight: 5,
},
buttonText: {
  color: 'white',
},
  
});

export default styles;