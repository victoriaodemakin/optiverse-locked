import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import MenuLock from './Screens/MenuLock/MenuLock';
import Locked from './Screens/Locked/Locked';
import LinkAccount from './Screens/LinkAccount/LinkAccount';
import LinkAccountDetails from './Screens/LinkAccount/LinkAccountDetails';
import { COLORS } from './constants';

const Stack = createNativeStackNavigator();

interface CustomHeaderProps {
  title: string;
}

function CustomHeader({ title }: CustomHeaderProps) {
  const navigation = useNavigation();

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons
          name="keyboard-arrow-left"
          size={29}
          color="#000A1F"
        />
      </TouchableOpacity>
      <View style={{ flex: 1, borderBottomWidth: 0, borderBottomColor: 'red' }}>
        <Text style={{ fontSize: 20, color: COLORS.darkBlue, fontWeight: 'bold', marginLeft: 10 }}>
          {title}
        </Text>
      </View>
    </View>
  );
}




export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='MenuLock'
      >
        <Stack.Screen
          name="MenuLock"
          component={MenuLock}
          options={{
            headerShown: false,
          }}
        />
       <Stack.Screen
          name="Locked"
          component={Locked}
          options={{
            headerStyle: { backgroundColor: COLORS.bngColor },
            headerTitleAlign: 'left',
            headerLeft: () => <CustomHeader title="Linked Account" />,
            headerTitle: '', // Set an empty string as the header title
            headerShadowVisible: false,

          }}
        />
        <Stack.Screen
          name="LinkAccount"
          component={LinkAccount}
          options={{
            headerStyle: { backgroundColor: COLORS.bngColor, },
            headerTitleAlign: 'left',
            headerLeft: () => <CustomHeader title="Link Account" />,
            headerTitle: '', // Set an empty string as the header title
            headerShadowVisible: false,

          }}
        />
            <Stack.Screen
          name="LinkAccountDetails"
          component={LinkAccountDetails}
          options={{
            headerStyle: { backgroundColor: COLORS.bngColor, },
            headerTitleAlign: 'left',
            headerLeft: () => <CustomHeader title="Link Account" />,
            headerTitle: '', // Set an empty string as the header title
            headerShadowVisible: false,

          }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
