//CustomNavigation.js

import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import MoviePage from "../StackTabs/MoviePage";

import Home from "../BottomTabs/Home";
import Download from "../BottomTabs/Download";
import Notification from "../BottomTabs/Notification";
import Settings from "../BottomTabs/Settings";
import MoviePage2 from "../StackTabs/MoviePage2";
import MoviePage3 from "../StackTabs/MoviePage3";
import MoviePage4 from "../StackTabs/MoviePage4";
import MoviePage5 from "../StackTabs/MoviePage5";
import MoviePage6 from "../StackTabs/MoviePage6";

const Stack = createStackNavigator();  // creates object for Stack Navigator

const FirstScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }} >    
       <Stack.Screen
        name="Home"
        component={Home}
      />
       <Stack.Screen
        name="MoviePage"
        component={MoviePage}
      />
       <Stack.Screen
        name="MoviePage2"
        component={MoviePage2}
      />
       <Stack.Screen
        name="MoviePage3"
        component={MoviePage3}
      />
       <Stack.Screen
        name="MoviePage4"
        component={MoviePage4}
      />
       <Stack.Screen
        name="MoviePage5"
        component={MoviePage5}
      />
       <Stack.Screen
        name="MoviePage6"
        component={MoviePage6}
      />
    </Stack.Navigator>
  );
}

export {FirstScreenNavigator}; // Stack-Navigator for Home Tab

const SecondScreenNavigator = () => {
    return (
      <Stack.Navigator screenOptions={{
        headerShown: false,
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }} >
          <Stack.Screen
            name="Download"
            component={Download}
        />
         <Stack.Screen
          name="MoviePage"
          component={MoviePage}
        />
      </Stack.Navigator>
    );
  }
  
  export {SecondScreenNavigator}; // Stack-Navigator for Download Tab

  const ThirdScreenNavigator = () => {
    return (
      <Stack.Navigator screenOptions={{
        headerShown: false,
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }} >
          <Stack.Screen
            name="Notification"
            component={Notification}
        />
         <Stack.Screen
          name="MoviePage"
          component={MoviePage}
        />
      </Stack.Navigator>
    );
  }
  
  export {ThirdScreenNavigator};

  const FourthScreenNavigator = () => {
    return (
      <Stack.Navigator screenOptions={{
        headerShown: false,
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }} >
          <Stack.Screen
            name="Settings"
            component={Settings}
        />
         <Stack.Screen
          name="MoviePage"
          component={MoviePage}
        />
      </Stack.Navigator>
    );
  }
  
  export {FourthScreenNavigator};