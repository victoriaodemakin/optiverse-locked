import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface CustomCheckboxProps {
  checked: boolean;
  onPress: () => void;
}

const Checkbox: React.FC<CustomCheckboxProps> = ({ checked, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          width: 24,
          height: 24,
          borderWidth: 1,
          borderColor: 'gray',
          backgroundColor: checked ? 'blue' : 'transparent',
        }}
      >
        {checked && (
          <Text style={{ color: 'white', textAlign: 'center' }}>✓</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Checkbox;
