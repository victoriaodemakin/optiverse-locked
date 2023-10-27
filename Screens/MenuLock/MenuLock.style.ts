import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../constants";

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: COLORS.bngColor,
  
},
header: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 20,
  paddingHorizontal: 10,

},
headerText: {
  fontSize: 20,
  color:COLORS.darkBlue,
  fontWeight: 'bold',
},
searchContainer: {
  marginVertical: 10,
  paddingHorizontal: 10,

},
logoImage:{
  width: 50
},
subHeaderText: {
  fontSize: 20,
  fontWeight: 'bold',
  marginVertical: 15,
  color:COLORS.darkBlue,
  paddingHorizontal: 10,

},
subSection: {
  marginBottom: 2, // Adjust as needed for spacing
},


iconCardContainer: {
  width:"99%",
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal:10
},
iconCardContain: {
  width:"75%",
  justifyContent: 'space-between',

  flexDirection: 'row',
  paddingHorizontal:10
},
accountContainer: {
  width:"50%",
  justifyContent: 'space-between',

  flexDirection: 'row',
  paddingHorizontal:10
},




  
});

export default styles;