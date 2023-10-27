import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './LinkAccount.style';
import Card from '../../components/Card/Card';
import one123 from "../../assets/images/123.png"
import join from "../../assets/images/Join.png"
import edge from "../../assets/images/Edge.png"
import LinkAccountDetails from "./LinkAccountDetails"

export default function LinkAccount() {
 const navigation = useNavigation();

 // Function to handle navigation to the target screen
 const navigateToTargetScreen = () => {
  (navigation as any).navigate(LinkAccountDetails)
 };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.profileText}>
      The following accounts are registered with your BVN: Select any to link to your profile      </Text>
      <View>
      <Card image={one123} text="Sophie Ijoko" subText= "Optimus One23 2000034167"  onPress={navigateToTargetScreen} 
/>

      </View>
      <View>
      <Card image={join} text="Kelvin Ijoko & Precious Ijoko" subText= "Joint Account 100003467"  onPress={navigateToTargetScreen} 
/>

      </View>
      <View>
      <Card image={edge} text="Kelvin Ijoko" subText= "Optimus Edge 100003467"  onPress={navigateToTargetScreen} 
/>

      </View>
    </SafeAreaView>
  );
}
