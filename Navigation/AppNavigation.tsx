import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import MenuLock from '../Screens/MenuLock/MenuLock';
import Locked from '../Screens/Locked/Locked';

const Stack = createNativeStackNavigator();

export default function AppNaviagation() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='MenuLock'
      >
        <Stack.Screen
          name="MenuLock"
          component={MenuLock}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Locked"
          component={Locked}
          options={{
            headerShown: false
          }}
        />
     
      </Stack.Navigator>
    </NavigationContainer>
  );
}