import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './LinkAccount.style';
import Card from '../../components/Card/Card';
import one123 from "../../assets/images/123.png";
import DatePicker from '@react-native-community/datetimepicker';
import { FontAwesome } from '@expo/vector-icons';
import { Platform } from 'react-native';
import Checkbox from '../../components/Checkbox/Checkbox';

export default function LinkAccountDetails() {
  const navigation = useNavigation();

  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isDateClicked, setIsDateClicked] = useState(false); // Track if the date area is clicked

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handleDateChange = (event: any, selectedDate: Date | undefined) => {
    if (Platform.OS === 'ios' && selectedDate !== undefined) {
      const currentDate = selectedDate || date;
      setShowDatePicker(false);
      setDate(currentDate);
      setIsDateClicked(true); // Set isDateClicked to true when the date is picked
    }
  };



  const linkAccounts = () => {
    if (agreeToTerms) {
      // Handle the linking of accounts logic here
      // You can navigate to another screen or perform any action
    }
  };

  return (
    <SafeAreaView style={styles.container}>
    
      <View style={styles.imageTextContainer}>
       <View style={styles.textContainer}>
       <Text style={styles.text}>Sophie Ijoko</Text>
       <Text style={styles.subText}>Optimus One23 2000034167</Text>

       </View>
        <Image source={one123} style={styles.image} />
      </View>
      <View style={styles.datePickerContainer}>
      <Text style={styles.dateText}>
          Date of Birth{' '}
          <Text style={styles.datesubText}>*</Text>
        </Text>
        
        <TouchableOpacity onPress={toggleDatePicker}>
          <View style={styles.datePicker}>
            <Text style={styles.datesubText}>Choose a date</Text>
            <FontAwesome
              name="calendar"
              size={24}
              color={isDateClicked ? '#0DDE65' : '#003399'} // Change the color based on isDateClicked
            />
          </View>
        </TouchableOpacity>
        {showDatePicker && (
          <DatePicker
            value={date}
            onChange={handleDateChange}
          />
        )}
      </View>
     

      <View style={styles.checkboxContainer}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Checkbox checked={agreeToTerms} onPress={() => setAgreeToTerms(!agreeToTerms)} />

          {/* Add the text label */}
          <Text style={{ marginLeft: 10 }}>I agree to all terms and conditions</Text>
        </View>
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={linkAccounts}
          disabled={!agreeToTerms}
        >
          <View style={[
            styles.linkButton,
            { backgroundColor: agreeToTerms ? 'blue' : 'grey' }
          ]}>
            <Text>Link</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
