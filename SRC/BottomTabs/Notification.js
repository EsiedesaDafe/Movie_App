import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity} from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import Ionic from 'react-native-vector-icons/Ionicons';


SplashScreen.preventAutoHideAsync();

const Notification = () => {

    const [fontsLoaded] = useFonts({
        'Poppins-SemiBold': require('../../assets/fonts/Poppins/Poppins-SemiBold.ttf'),
        'Poppins-Medium': require('../../assets/fonts/Poppins/Poppins-Medium.ttf'),
        'Poppins-Regular': require('../../assets/fonts/Poppins/Poppins-Regular.ttf'),
        'Poppins-Light': require('../../assets/fonts/Poppins/Poppins-Light.ttf'),
    });

      
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded]);
    
      if (!fontsLoaded) {
        return null;
      }

    return(
        <View style={style.container} onLayout={onLayoutRootView}>

            <View style={style.NotificationViewStyle}>
                <Text style={style.NotificationTextStyle}>Notification</Text>
            </View>

            <View style={style.NewTextView}>
                <Text style={style.NewText}>New</Text>
            </View>

            <View style={style.FirstTextView}>
                <Ionic name="ios-notifications" color={'red'} size={30} />
                <Text numberOfLines={2} style={style.FirstText}> Heart of Stone coming on 11 August</Text>
            </View>

            <View style={style.FirstTextView}>
                <Ionic name="ios-notifications" color={'red'} size={30} />
                <Text numberOfLines={2} style={style.FirstText}> Your download 'Man of Steel' has been completed!</Text>
            </View>

            <View style={style.FirstTextView}>
                <Ionic name="ios-notifications" color={'red'} size={30} />
                <Text numberOfLines={2} style={style.FirstText}> Your download 'Wonder Woman' has been completed!</Text>
            </View>

            <View style={style.NewTextView}>
                <Text style={style.SeenText}>Seen</Text>
            </View>

            <View style={style.FirstTextView}>
                <Ionic name="ios-notifications" color={'white'} size={30} />
                <Text numberOfLines={2} style={style.FirstText}> Welcome to Movie XD</Text>
            </View>

            <View style={style.FirstTextView}>
                <Ionic name="ios-notifications" color={'white'} size={30} />
                <Text numberOfLines={2} style={style.FirstText}> Your e-mail daviddafe4@gmail.com has been verified</Text>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    NotificationViewStyle: {
        marginTop: 70,
        paddingHorizontal: 20,
    },
    NotificationTextStyle: {
        fontSize: 32,
        letterSpacing: -1.28,
        fontWeight: '600',
        color: '#fff',
        fontFamily: 'Poppins-Medium',
    },
    NewText: {
        color: 'red',
        fontSize: 19,
        fontFamily: 'Poppins-Medium'
    },
    NewTextView: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    FirstText: {
        color: 'white',
        fontSize: 17,
        fontFamily: 'Poppins-Light',
        paddingHorizontal: 20,
    },
    FirstTextView: {
        marginHorizontal: 20,
        marginTop: 10,
        paddingVertical: 10,
        borderBottomWidth: 0.3,
        borderColor: 'grey',
        flexDirection: 'row'
    },
    SeenText: {
        color: 'white',
        fontSize: 19,
        fontFamily: 'Poppins-Medium'
    },
})

export default Notification;