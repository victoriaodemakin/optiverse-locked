import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bngColor,
    
    
  },

  profileText: {
    fontSize: SIZES.medium,
    paddingHorizontal: 20,
    marginTop:10,
    fontWeight: '400',
   
    textAlign: 'left',
    color:"#808080"
  },
  Btncontainer:{
    flex: 1,
    marginVertical:55,
    alignItems: 'center',

  },
  addButton: {
    width: 199,
    height: 36,
  alignContent: "center",
    padding: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
   
  },
  
});

export default styles;