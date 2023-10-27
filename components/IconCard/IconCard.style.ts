import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  card: {
    width: "100%",
  
  },
  iconContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    width: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 1,
    marginBottom:5,
  },
  iconCircle: {
      width: 40,
      height: 40,
       backgroundColor: COLORS.gray,
       borderRadius: 30,
       alignItems: 'center',
       justifyContent: 'center',
  },

  iconImage: {
    width: '100%',
    height: '100%',
  },
  cardText: {
    fontSize: SIZES.small,
    color:COLORS.darkBlue,
    marginTop:5,
    marginBottom:15,
    textAlign:'center',
    // fontFamily:FONT.bold,
    fontWeight: "900",
  },
  
});

export default styles;