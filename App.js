import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Onboardingscreen from './SRC/onboardScreens/onboardingscreen';
import Custom from './SRC/BottomTabs/Custom';
import { withAuthenticator, useAuthenticator } from '@aws-amplify/ui-react-native'
import { Amplify } from 'aws-amplify';
import awsmobile from './SRC/aws-exports';

Amplify.configure(awsmobile);

const Stack = createStackNavigator();


const App = () => {

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
        headerShown: false,
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }}>
          <Stack.Screen name="Onboardingscreen" component={Onboardingscreen}></Stack.Screen>
          <Stack.Screen name="Custom" component={Custom}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};


export default App;


