import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity} from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';


SplashScreen.preventAutoHideAsync();




const Download = () => {

    const [text, onChangeText] = React.useState('search');

    const [fontsLoaded] = useFonts({
        'Poppins-SemiBold': require('../../assets/fonts/Poppins/Poppins-SemiBold.ttf'),
        'Poppins-Medium': require('../../assets/fonts/Poppins/Poppins-Medium.ttf'),
        'Poppins-Regular': require('../../assets/fonts/Poppins/Poppins-Regular.ttf'),
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
        <View style={style.container}  onLayout={onLayoutRootView}> 

            {/*Heading*/}
            <View style={style.downloadViewStyle}>
                <Text style={style.downloadTextStyle}>Downloads</Text>
            </View>

            {/*search*/}
            <View style={style.searchMovies}>
                <TextInput
                    style={style.searchMoviesDetails}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder='search'
                    placeholderTextColor={'white'}
                />
            </View>

            {/*Download contents */}
                <ScrollView>
                    <TouchableOpacity style={style.ScrollViewStyle}>
                        <View style={style.ImgViewStyle}>
                            <Image source={require('../../assets/IMAGES/K.png')} style={style.ImgStyle} />
                        </View>
                        <View style={style.TextViewStyle}>
                            <Text style={style.TitleStyle}>Man of Steel</Text>
                            <Text style={style.subTitleStyle}>Movie</Text>
                            <Text style={style.subTitle1Style}>1.7gb</Text>
                        </View>
                        
                    </TouchableOpacity>

                    <TouchableOpacity style={style.ScrollViewStyle}>
                        <View style={style.ImgViewStyle}>
                            <Image source={require('../../assets/IMAGES/L.png')} style={style.ImgStyle} />
                        </View>
                        <View style={style.TextViewStyle}>
                            <Text style={style.TitleStyle}>Red Notice</Text>
                            <Text style={style.subTitleStyle}>Movie</Text>
                            <Text style={style.subTitle1Style}>1.2gb</Text>
                        </View>
                        
                    </TouchableOpacity>

                    <TouchableOpacity style={style.ScrollViewStyle}>
                        <View style={style.ImgViewStyle}>
                            <Image source={require('../../assets/IMAGES/M.png')} style={style.ImgStyle} />
                        </View>
                        <View style={style.TextViewStyle}>
                            <Text style={style.TitleStyle}>Wonder Woman</Text>
                            <Text style={style.subTitleStyle}>Movie</Text>
                            <Text style={style.subTitle1Style}>2.1gb</Text>
                        </View>
                        
                    </TouchableOpacity>

                    <TouchableOpacity style={style.ScrollViewStyle}>
                        <View style={style.ImgViewStyle}>
                            <Image source={require('../../assets/IMAGES/N.png')} style={style.ImgStyle} />
                        </View>
                        <View style={style.TextViewStyle}>
                            <Text style={style.TitleStyle}>12 Strong</Text>
                            <Text style={style.subTitleStyle}>Movie</Text>
                            <Text style={style.subTitle1Style}>1.9gb</Text>
                        </View>
                        
                    </TouchableOpacity>

                    <TouchableOpacity style={style.ScrollViewStyle}>
                        <View style={style.ImgViewStyle}>
                            <Image source={require('../../assets/IMAGES/O.png')} style={style.ImgStyle} />
                        </View>
                        <View style={style.TextViewStyle}>
                            <Text style={style.TitleStyle}>The Boy</Text>
                            <Text style={style.subTitleStyle}>Movie</Text>
                            <Text style={style.subTitle1Style}>1.3gb</Text>
                        </View>
                        
                    </TouchableOpacity>

                </ScrollView>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    ScrollViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    downloadViewStyle: {
        marginTop: 70,
        paddingHorizontal: 20,
    },
    downloadTextStyle: {
        fontSize: 32,
        letterSpacing: -1.28,
        fontWeight: '600',
        color: '#fff',
        fontFamily: 'Poppins-Medium',
    },
    searchMovies: {
        marginTop: 37,
        paddingHorizontal: 20,
    },
    searchMoviesDetails: {
        width: 390,
        height: 40,
        
        borderRadius: 20,
        paddingHorizontal: 30,
        fontSize: 18,
        opacity: 0.4,
        borderColor: '#D9D9D9',
        borderWidth: StyleSheet.hairlineWidth,
        color: '#fff',
        
    },
    ImgViewStyle: {
        marginTop: 30,
        paddingHorizontal: 20,
    },
    ImgStyle: {
        width: 184,
        height: 114,
    },
    TitleStyle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '400',
        letterSpacing: -0.88,
        fontFamily: 'Poppins-Medium',
    },
    subTitleStyle: {
        marginTop: 3,
        color: '#fff',
        fontSize: 16,
        fontWeight: '200',
        letterSpacing: -0.76,
        opacity: 0.7,
        fontFamily: 'Poppins-Regular',
    },
    subTitle1Style: {
        marginTop: 23,
        color: '#fff',
        fontSize: 14,
        fontWeight: '300',
        letterSpacing: -0.64,
        opacity: 0.5,
        fontFamily: 'Poppins-Regular',
    },
    TextViewStyle: {
        marginTop: 30,
        paddingHorizontal: 20,
    },
    
});

export default Download;