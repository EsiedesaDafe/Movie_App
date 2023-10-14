import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet} from 'react-native';
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

SplashScreen.preventAutoHideAsync();

const Splash = () => {

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
        <ImageBackground source={require('../../assets/IMAGES/Z.png')} onLayout={onLayoutRootView}>

            <View style={style.FirstTextView}>
                <Text style={style.FirstHeadStyle}>Movie XD</Text>
                <Text style={style.SecondHeadStyle}>HELP</Text>
            </View>

            <View style={style.UnlimitedViewStyle}>
                <Text style={style.UnlimitedViewStyle}>Unlimited Movies, Tv Shows and More.</Text>
            </View>

            <View style={style.DownloadViewStyle}>
                <Text style={style.DownloadTextStyle}>Download and watch your favorite movies where ever you are</Text>
            </View>

            <View style={style.LoginTextStyle}>
                <TouchableOpacity>
                    <Text style={style.LoginViewStyle}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={style.SignupViewStyle}>
                <TouchableOpacity>
                    <Text style={style.SignupTextStyle}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    ) 
};

const style = StyleSheet.create({
    container: {

    },
    FirstTextView: {
        marginTop: 20,
        paddingHorizontal: 20,
        flexDirection: 'column',
    },
    FirstHeadStyle: {
        color: '#FFF',
        fontSize: 24,
        letterSpacing: -0.96,
        fontWeight: '500',
        fontStyle: 'normal',
    },
    SecondHeadStyle: {
        color: '#FFF',
        fontSize: 20,
        letterSpacing: -0.8,
        fontWeight: '300',
        fontStyle: 'normal',
    },
    UnlimitedTextStyle: {
        textAlign: 'center',
        fontSize: 30,
        fontStyle: 'normal',
        letterSpacing: -1.28,
        color: 'white',
        fontWeight: '400'
    },
    UnlimitedViewStyle: {
        marginTop: 60,
        paddingHorizontal: 35,
    },
    DownloadTextStyle: {
        textAlign: 'center',
        fontSize: 20,
        fontStyle: 'normal',
        letterSpacing: -0.8,
        color: 'white',
        fontWeight: '200'
    },
    DownloadViewStyle: {
        marginTop: 60,
        paddingHorizontal: 35,
    },
    LoginTextStyle: {
        fontSize: 20,
        fontWeight: '400',
        color: 'white',
        lineHeight: 'normal',
    },
    LoginViewStyle: {
        marginHorizontal: 10,
        paddingHorizontal: 15,
        marginTop: 50,
        width: 388,
        height: 52,
        justifyContent: 'center',
        display: 'flex',
        color: 'white',
        backgroundColor: 'red',
    },
    SignupTextStyle: {
        fontSize: 20,
        fontWeight: '400',
        color: 'white',
        lineHeight: 'normal',
    },
    SignupViewStyle: {
        marginHorizontal: 10,
        paddingHorizontal: 15,
        marginTop: 10,
        width: 388,
        height: 52,
        justifyContent: 'center',
        display: 'flex',
        borderColor: 'red'
    }
});

export default Splash;