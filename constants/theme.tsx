const COLORS = {
 primary: "#003399",
 secondary: "#0DDE65",
 bngColor: "#E6EBF5",
 black: '#1A1A1A',
 darkBlue:"#000A1F",
 


 gray: "#CCD6EB",
 gray2: "#808080",

 white: "#FAFCFF",
 lightWhite: "#FAFAFC",
};

const FONT = {
 regular:require("../assets/fonts/Sequel-Sans-Light-Body.ttf"),
 bold: require("../assets/fonts/Sequel-Sans-Bold-Head.ttf"),
 medium: require("../assets/fonts/Sequel-Sans-Medium-Body.ttf"),
 semiBold: require("../assets/fonts/Sequel-Sans-Semi-Bold-Body.ttf"),
 light: require("../assets/fonts/Sequel-Sans-Light-Obl-Body.ttf")
}

const SIZES = {
 xSmall: 10,
 small: 12,
 medium: 14,
 large: 20,
 xLarge: 24,
 xxLarge: 32,
};

const SHADOWS = {
 small: {
   shadowColor: "#000",
   shadowOffset: {
     width: 0,
     height: 2,
   },
   shadowOpacity: 0.25,
   shadowRadius: 3.84,
   elevation: 2,
 },
 medium: {
   shadowColor: "#000",
   shadowOffset: {
     width: 0,
     height: 2,
   },
   shadowOpacity: 0.25,
   shadowRadius: 5.84,
   elevation: 5,
 },
};

export { COLORS, FONT, SIZES, SHADOWS };
