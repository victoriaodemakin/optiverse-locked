import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './Card.styles';

interface CardProps {
  image: any;
  text: string;
  subText: string;
  onPress?: () => void;
}

const Card: React.FC<CardProps> = ({ image, text, subText, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Image source={image} style={styles.image} />
        <View>
          <Text style={styles.text}>{text}</Text>
          <Text style={styles.subText}>{subText}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
