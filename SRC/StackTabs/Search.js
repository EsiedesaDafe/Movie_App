import React from 'react';
import {View, Text} from 'react-native';

const Search = ({ navigation }) => {
    return (
        <View>
            <Text>Hiii</Text>
        </View>
    );
};

export default Search;


function TabNavigator() {
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
          name="StackNavigator"
          component={StackNavigator}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionic name="ios-home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Download"
          component={Download}
          options={{
            tabBarLabel: 'Download',
            tabBarIcon: ({ color, size }) => (
              <Ionic name="ios-cloud-download" color={color} size={size} />
            ),
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            tabBarLabel: 'Notification',
            tabBarIcon: ({ color, size }) => (
              <Ionic name="ios-notifications" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <Ionic name="ios-settings" color={color} size={size} />
            ),
          }}
          />
      </Tab.Navigator>
    )
  };
  
  function StackNavigator() {
    return(
      <Stack.Navigator
      initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'tomato' },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Hii"
          component={Hii}
          options={{
            title: 'My profile',
          }}
        />
        
        
      </Stack.Navigator>
    );
  };