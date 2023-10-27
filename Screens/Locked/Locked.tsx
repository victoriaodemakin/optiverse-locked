import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button/Button';
import styles from './Locked.style';
import LinkAccount from '../LinkAccount/LinkAccount';

export default function Locked() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.profileText}>
        Your profile is not linked to any other account
      </Text>
      <View style={styles.Btncontainer}>
      <Button
        iconName="add"
        text="Link Another Account"
        onPress={() => (navigation as any).navigate(LinkAccount)}
        buttonStyle={styles.addButton} // Pass additional styles for the button
        />
      </View>
      
    </SafeAreaView>
  );
}
