import React, { useState } from "react";
import { Searchbar } from "react-native-paper";

import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import styles from "./MenuLock.style";
import { MaterialIcons } from "@expo/vector-icons";
import IconCard from "../../components/IconCard/IconCard";
import { useNavigation } from "@react-navigation/native";
import Locked from "../Locked/Locked";
import Bills from "../../assets/icons/Link.svg";
import QRScan from "../../assets/images/QR_scan.png";
import Transaction from "../../assets/images/Bills.png";
import Visa from "../../assets/images/transaction.png";
import PTA from "../../assets/images/visa.png";
import Electricity from "../../assets/icons/Electricity.svg";
import LSG from "../../assets/icons/LASG.svg";
import Remita from "../../assets/icons/Remita-Logo.svg";
import Loan from "../../assets/icons/Loan.svg";
import Investment from "../../assets/icons/Investment.svg";
import Link from "../../assets/icons/Link.svg";
import Savester from "../../assets/icons/Savster.svg";
import Analytics from "../../assets/icons/Analytics.svg";
import Elect from "../../assets/images/Edge.png";

const cardData = [
  { imageSource: require("../../assets/images/QR_scan.png"), text: "Card 1" },
  { imageSource: require("../../assets/images/Bills.png"), text: "Card 2" },
  {
    imageSource: require("../../assets/images/transaction.png"),
    text: "Card 3",
  },
  { imageSource: require("../../assets/images/visa.png"), text: "Card 4" },
  {
    imageSource: require("../../assets/images/carbon_join-inner.png"),
    text: "Card 5",
  },
  {
    imageSource: require("../../assets/images/Electricity.png"),
    text: "Card 6",
  },
  { imageSource: require("../../assets/images/remita.png"), text: "Card 7" },
];
export default function LinkedAccount() {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query: React.SetStateAction<string>) => {
    setSearchQuery(query);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <MaterialIcons
              name="keyboard-arrow-left"
              size={24}
              color="#000A1F"
            />
          </View>
          <View>
            <Text style={styles.headerText}>More</Text>
          </View>
        </View>

        {/* Searchbar component */}
        <View style={styles.searchContainer}>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={{
              borderRadius: 40, // Adjust the border radius as needed
              borderColor: searchQuery ? "green" : "#CCD6EB",
              borderWidth: 1, // Set the border width to 0 to remove the border

              backgroundColor: "white",
            }}
          />
        </View>
<ScrollView>
<View style={styles.subSection}>
          <View
            style={{ height: 0.5, backgroundColor: "#B3B3B3", width: "100%" }}
          />

          <Text style={styles.subHeaderText}>Payments</Text>
          <View style={styles.iconCardContainer}>
            <IconCard
              text="Pay with QR"
              imageSource={PTA}
              textStyle={{  width: 61}} // Customize text style here

            />
            <IconCard text="Pay Bills" imageSource={Transaction} textStyle={{  width: 64}}  />
            <IconCard text="Scheduled Transactions" imageSource={QRScan} textStyle={{  width: 92, marginLeft:-6}} cardStyle={{  marginLeft: 2}} 
 />
            <IconCard text="Visa fee" imageSource={Visa} textStyle={{  width: 57, marginLeft:-14}}cardStyle={{  marginLeft: -20}}    />
           
            
          </View>
          <View style={styles.iconCardContain}>
          
            <IconCard text="PTA" imageSource={Transaction} textStyle={{ width:50}}  />
            <IconCard text="Electricity Token" imageSource={QRScan} textStyle={{  width: 72}} // Customize text style here
 />
            <IconCard text="Remita" imageSource={Visa} textStyle={{  width: 50, marginLeft:-5}} cardStyle={{  marginLeft: -10}}   />
           
            
          </View>
        </View>

        <View style={styles.subSection}>
          <View
            style={{ height: 0.5, backgroundColor: "#B3B3B3", width: "100%" }}
          />

          <Text style={styles.subHeaderText}>Services</Text>
          <View style={styles.iconCardContainer}>
            <IconCard
              text="Loan"
              imageSource={PTA}
              textStyle={{  width: 61}} // Customize text style here

            />
            <IconCard text="Savester" imageSource={Transaction} textStyle={{  width: 64}}  />
            <IconCard text="LASG Tax Collection" imageSource={QRScan} textStyle={{  width: 92, marginLeft:-6}} cardStyle={{  marginLeft: 2}} 
 />
            <IconCard text="Investment" imageSource={Visa} textStyle={{  width: 57, marginLeft:-14}}cardStyle={{  marginLeft: -20}}    />
           
            
          </View>
     
        </View>
        
        <View style={styles.subSection}>
          <View
            style={{ height: 0.5, backgroundColor: "#B3B3B3", width: "100%" }}
          />

          <Text style={styles.subHeaderText}>Accounts</Text>
        
          <View style={styles.accountContainer}>
          
            <IconCard text="Analytics" imageSource={Transaction} textStyle={{ width:72}}  />
            <IconCard text="Linked Accounts" imageSource={QRScan}   onPress={() => (navigation as any).navigate(Locked)} textStyle={{  width: 72}} />
         
           
            
          </View>
        </View>
</ScrollView>
      
      </View>
    </SafeAreaView>
  );
}
