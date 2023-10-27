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
    lineHeight:23,
   marginBottom:25,
    textAlign: 'left',
    color:"#808080"
  },
  imageTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop:30,
   marginBottom:35,
  },
  image: {
    height: '45%', // To make the image cover the entire height
    borderRadius: 10,
    marginTop:5,
  },
  
  datePicker: {
    backgroundColor:COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'space-between',
  },
  calendarIcon: {
    width: 24,
    height: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: "flex-end",
    alignContent:"center",
    marginVertical: 16,
  },
  textContainer:{
    flex:1,
    flexDirection: "column",
    justifyContent:"flex-start"

   },
   datePickerContainer:{
    paddingHorizontal: 20,
   marginBottom:35,
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
   },
  linkButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  dateText:{
    fontWeight:"700",
    fontSize:SIZES.medium,
     paddingLeft: 10, 
     color : COLORS.darkBlue,
     marginBottom:5,
  },
  datesubText: {
    fontWeight:"900",
    fontSize:SIZES.xSmall,
    paddingLeft: 2, 
    color : COLORS.primary,
    marginBottom:10,

  },
  checkboxContainer:{

  }
  

  
});

export default styles;