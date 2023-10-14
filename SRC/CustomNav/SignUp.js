import React from "react";
import { View, Text, ImageBackground,TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

SplashScreen.preventAutoHideAsync();

const SignUp = () => {

    const [text, onChangeText] = React.useState('Useless Text');

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
                <Text style={style.FirstText}>SignUp</Text>
            </View>

            <View style={style.FirstInputView}>
                <Text style={style.NameText}>Enter Name</Text>
                <TextInput 
                value={text}
                placeholder="name"
                onChangeText={onChangeText}
                style={style.FirstInput}/>
            </View>

            <View style={style.SecondInputView}>
                <Text style={style.NameText}>Enter phone Number</Text>
                <TextInput 
                value={text}
                placeholder="Phone Number"
                onChangeText={onChangeText}
                style={style.FirstInput}/>
            </View>

            <View style={style.SecondInputView}>
                <Text style={style.NameText}>Enter Password</Text>
                <TextInput 
                value={text}
                placeholder="Enter Password"
                onChangeText={onChangeText}
                style={style.FirstInput}/>
            </View>

            <View style={style.LoginTextStyle}>
                <TouchableOpacity>
                    <Text style={style.LoginViewStyle}>
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
    FirstText: {
        color: 'red',
        fontSize: 33,
        fontWeight: '500',
    },
    FirstTextView: {
        marginTop: 20,
        paddingHorizontal: 25,
    },
    NameText: {
        fontSize: 18,
        color: 'red',
        fontWeight: '300',
        lineHeight: 16,
        fontStyle: 'normal',
    },
    FirstInput: {
        display: 'flex',
        borderRadius: 4,
        backgroundColor: '#272A2F',
        height: 48,
        width: 370,
        alignSelf: 'center',
        marginTop: 5,
    },
    FirstInputView: {
        marginHorizontal: 25,
        marginTop: 50,
    },
    SecondInputView: {
        marginHorizontal: 25,
        marginTop: 15,
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
        marginTop: 15,
        width: 388,
        height: 52,
        justifyContent: 'center',
        display: 'flex',
        color: 'white',
        backgroundColor: 'red',
    },
});

export default SignUp;