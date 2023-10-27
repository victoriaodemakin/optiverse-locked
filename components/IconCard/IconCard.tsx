import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './IconCard.style';
import { useNavigation } from "@react-navigation/native";
import Locked from '../../Screens/Locked/Locked';

interface IconCardProps {
  text: string;
  imageSource: any;
  textStyle?: object;
  cardStyle?: object;
  onPress?: () => void; // Add the onPress prop

}

const IconCard: React.FC<IconCardProps> = ({ imageSource, text, textStyle, cardStyle,onPress }) => {
  const navigation = useNavigation();

  // Handle the navigation logic here
  const handlePress = () => {
    if (onPress) {
      onPress(); // Call the onPress function if it's provided
    }
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.card}>
        <View style={[styles.iconContainer, cardStyle]}>
          <View style={styles.iconCircle}>
            <Image source={imageSource} style={styles.iconImage} />
          </View>
        </View>
        <View>
          <Text style={[styles.cardText, textStyle]}>{text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default IconCard;
