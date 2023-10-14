import React from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';
import { FirstScreenNavigator } from '../CustomNav/CustomNav';
import { SecondScreenNavigator } from '../CustomNav/CustomNav';
import { ThirdScreenNavigator } from '../CustomNav/CustomNav';
import { FourthScreenNavigator } from '../CustomNav/CustomNav';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Custom = () => {
    return(
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarActiveTintColor: '#e91e63',
            headerShown: false,
            tabBarInactiveTintColor: '#fff',
            tabBarStyle: { backgroundColor: '#000'}
          }}
        >
          <Tab.Screen
            name="Screen 1"
            component={FirstScreenNavigator} 
            options={{
              headerShown: false,
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <Ionic name="ios-home" color={color} size={size} />
              ),
            }}  
          />
          <Tab.Screen
            name="Screen 2"
            component={SecondScreenNavigator} 
            options={{
              headerShown: false,
              tabBarLabel: 'Download',
              tabBarIcon: ({ color, size }) => (
                <Ionic name="ios-cloud-download" color={color} size={size} />
              ),
              tabBarBadge: 3,
            }}  
          />
          <Tab.Screen
            name="Screen 3"
            component={ThirdScreenNavigator} 
            options={{
              headerShown: false,
              tabBarLabel: 'Notification',
              tabBarIcon: ({ color, size }) => (
                <Ionic name="ios-notifications" color={color} size={size} />
              ),
            }} 
          />
          <Tab.Screen
            name="Screen 4"
            component={FourthScreenNavigator} 
            options={{
              headerShown: false,
              tabBarLabel: 'Settings',
              tabBarIcon: ({ color, size }) => (
                <Ionic name="ios-settings" color={color} size={size} />
              ),
            }} 
          />
        </Tab.Navigator>
    )
}

export default Custom;