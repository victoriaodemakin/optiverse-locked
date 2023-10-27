import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './Button.style';

interface BlueButtonProps {
  iconName: any;
  text: string;
  onPress: () => void;
  buttonStyle: object; // Add a buttonStyle prop to accept additional styles
}

const BlueButton: React.FC<BlueButtonProps> = ({ iconName, text, onPress, buttonStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <View style={styles.buttonContainer}>
        <MaterialIcons name={iconName} size={14} color="white" style={styles.icon} />
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};



export default BlueButton;
