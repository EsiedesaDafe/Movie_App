import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import Custom from '../BottomTabs/Custom';
import { useNavigation } from '@react-navigation/native';

SplashScreen.preventAutoHideAsync();

const Onboardingscreen = () => {

    const navigation = useNavigation();

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
        <View onLayout={onLayoutRootView} style={style.container} onTouchStart={() => navigation.navigate(Custom)}>
            <View style={style.TextViewStyle}>
              <Text style={style.TextStyle}>MOVIE</Text>
              <Text style={style.TextStyle1}>XD</Text>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    },
    TextStyle: {
        color: 'white',
        fontSize: 40,
        fontFamily: 'Poppins-Medium',
        letterSpacing: -1.6,
    },
    TextViewStyle: {
        alignSelf: 'center',
        marginTop: 400,
        flexDirection: 'row'
    },
    TextStyle1: {
        color: 'red',
        fontSize: 40,
        fontFamily: 'Poppins-Medium',
        letterSpacing: -1.6,
        marginHorizontal: 10
    },
})

export default Onboardingscreen;