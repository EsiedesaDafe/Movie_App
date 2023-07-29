import React from 'react';
import {View, Text, StyleSheet,Image, TouchableOpacity, ImageBackground} from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import * as Progress from 'react-native-progress';



SplashScreen.preventAutoHideAsync();

const MoviePage6 = () => {
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


      return (
        <View style={style.container} onLayout={onLayoutRootView}>

            <ImageBackground source={require('../../assets/IMAGES/U.jpg')} style={style.ImgStyle} >
                <View style={style.iconStyle}>
                    <Ionicons name='ios-play-circle' size={50} color={'white'} opacity={1}/>
                </View>
                <View style={style.PreviewStyle}>
                    <Text style={style.TextStyle2}>
                        Preview
                    </Text>
                    <Text style={style.TextStyle3} >
                        0:12
                    </Text>
                </View>
                <View style={style.ProgressBar}>
                    <Progress.Bar progress={0.4} width={350} color='red'/>
                </View>
            </ImageBackground>

            <View style={style.HeadViewStyle}>
                <View>
                    <Text style={style.seriesText}>Movie</Text>
                    <Text style={style.pBText}>Black Adam</Text>
                    <Text style={style.subText}>Action, Adventure</Text>
                </View>
                <View style={style.IconStyle}>
                <Fontisto name='favorite' size={20} color={'red'}/>
                </View>
            </View>

            <View style={style.SecondTextViewStyle}>
                <Text numberOfLines={3} style={style.FirstText}> After being granted with the divine power of the Egyptian Gods and spending almost 5000 years in a guardhouse, Black Adam is freed and he decides to unloose his own style of justice to the world.</Text>
                <Text numberOfLines={2} style={style.SecondText}>Cast ;  Dwayne Johnson · Black Adam ; Aldis Hodge · Hawkman ; Pierce Brosnan · Dr. Fate ; Noah Centineo · Atom Smasher ; Sarah Shahi · Adrianna Tomaz.</Text>
            </View>

            <View style={style.ThirdTextViewStyle}>
                <Text style={style.TextStyle}> 17+</Text>
                <Text style={style.TextStyle1}> 2020</Text>
            </View>

            <TouchableOpacity style={style.ContentMainView}>
                <View>
                    <Text style={style.ContentText} > Watch Now</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    ImgStyle: {
        height: 400,
        width: 450,
        flexShrink: 0,
        opacity: 0.8,
    },
    iconStyle: {
        alignSelf: 'center',
        paddingVertical: 150,
    },
    seriesText: {
        fontSize: 14,
        color: 'red',
        fontStyle: 'normal',
        fontFamily: 'Poppins-Regular',
        letterSpacing: -0.8,
        fontWeight: '300'
    },
    pBText: {
        fontSize: 28,
        color: 'white',
        fontStyle: 'normal',
        fontFamily: 'Poppins-SemiBold',
        letterSpacing: -1.4,
        fontWeight: '500',
    },
    subText: {
        fontSize: 14,
        color: 'white',
        fontStyle: 'normal',
        fontFamily: 'Poppins-Regular',
        letterSpacing: -0.8,
        fontWeight: '100',
        opacity: 0.6,
    },
    HeadViewStyle: {
        flexDirection: 'row',
        marginTop: 45,
        paddingHorizontal: 20,
    },
    IconStyle: {
        paddingHorizontal: 180,
        paddingVertical: 35
    },
    SecondTextViewStyle: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    FirstText: {
        fontSize: 16,
        color: 'white',
        fontStyle: 'normal',
        fontFamily: 'Poppins-Regular',
        letterSpacing: -0.8,
        fontWeight: '100',
        opacity: 0.8,
        display: 'flex',
    },
    SecondText: {
        fontSize: 14,
        color: 'white',
        fontStyle: 'normal',
        fontFamily: 'Poppins-Regular',
        letterSpacing: -0.8,
        fontWeight: '200',
        opacity: 0.6,
        marginTop: 10,
    },
    ThirdTextViewStyle: {
        marginTop: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
    },
    TextStyle: {
        color: 'white',
        fontSize: 14,
        fontStyle: 'normal',
        fontFamily: 'Poppins-Regular',
        letterSpacing: -0.8,
        fontWeight: '200',
        opacity: 0.6,
        borderColor: 'white',
        borderWidth: StyleSheet.hairlineWidth,
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 10,
    },
    TextStyle1: {
        color: 'white',
        fontSize: 14,
        fontStyle: 'normal',
        fontFamily: 'Poppins-Regular',
        letterSpacing: -0.8,
        fontWeight: '200',
        opacity: 0.6,
        marginHorizontal: 10,
        borderColor: 'white',
        borderWidth: StyleSheet.hairlineWidth,
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 10,
    },
    ContentMainView: {
        flexShrink: 0,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        marginTop: 25,
        width: 375,
        height: 45,
        backgroundColor: 'red',
        borderRadius: 10,
    },
    ContentText: {
        fontSize: 18,
        fontFamily: 'Poppins-Regular',
        fontWeight: '300',
        color: 'white',
    },
    ProgressBar: {
        marginTop: 5,
        paddingHorizontal: 20,
    },
    PreviewStyle: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
    },
    TextStyle2: {
        color: 'white',
        fontSize: 16,
        fontStyle: 'normal',
        fontFamily: 'Poppins-Light',
        letterSpacing: -0.8,
        fontWeight: '200',
    },
    TextStyle3: {
        color: 'white',
        fontSize: 16,
        fontStyle: 'normal',
        fontFamily: 'Poppins-Light',
        letterSpacing: -0.8,
        fontWeight: '200',
        marginRight: 60,
    },
});


export default MoviePage6;