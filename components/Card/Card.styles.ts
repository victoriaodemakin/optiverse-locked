import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../constants";

const styles = StyleSheet.create({
 card: {
  flexDirection: 'row',
  justifyContent:"flex-start",
  alignContent:"center",
  backgroundColor: 'white',
  marginVertical:7,
  paddingVertical:10,
  paddingHorizontal:10,
  borderRadius: 10,
  height: 56,
  marginHorizontal: 20,
},
image: {
  height: '45%', // To make the image cover the entire height
  borderRadius: 10,
  marginTop:5,
},
textContainer:{
 flex:1,
 flexDirection: "column",
 justifyContent:"flex-start"
},
text: {
 fontWeight:"700",
 fontSize:SIZES.medium,
  paddingLeft: 10, 
  color : COLORS.darkBlue
},
subText:{
 fontWeight:"400",
 fontSize:SIZES.small,
  paddingLeft: 10, 
  color : COLORS.gray2
}
  
});

export default styles;