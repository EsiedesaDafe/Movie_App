import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Settings = () => {

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
        <View style={style.container} onLayout={onLayoutRootView}>

            {/*Heading*/}
            <View style={style.SettingsViewStyle}> 
                <Text style={style.SettingsTextStyle}>Settings</Text>
            </View>
            
            <View style={style.MainHeader}>
                <View style={style.ImageViewStyle}>
                    <Image source={require('../../assets/IMAGES/A.png')} style={style.ImagePic}/>
                </View>
                <View style={style.HeaderViewStyle}>
                    <Text style={style.HeaderText}>David Mccall</Text>
                    <Text style={style.subHeaderText}>DavidMccall@gmail.com</Text>
                </View>
            </View>
            
            {/*Setting Content*/}
            <TouchableOpacity style={style.ContentMainView}>
                <View>
                    <Text style={style.ContentText}  > Edit Profile</Text>
                </View>
                <View>
                    <MaterialIcons name='keyboard-arrow-right' color={'#fff'} opacity={'0.7'} size={25}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={style.ContentMainView1}>
                <View>
                    <Text style={style.ContentText}> Billing & Payment</Text>
                </View>
                <View>
                    <MaterialIcons name='keyboard-arrow-right' color={'#fff'} opacity={'0.7'} size={25}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={style.ContentMainView1}>
                <View>
                    <Text style={style.ContentText}> Language</Text>
                </View>
                <View>
                    <MaterialIcons name='keyboard-arrow-right' color={'#fff'} opacity={'0.7'} size={25}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={style.ContentMainView1}>
                <View>
                    <Text style={style.ContentText}>Help</Text>
                </View>
                <View>
                    <MaterialIcons name='keyboard-arrow-right' color={'#fff'} opacity={'0.7'} size={25}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={style.ContentMainView1}>
                <View>
                    <Text style={style.ContentText}> Password & Security</Text>
                </View>
                <View>
                    <MaterialIcons name='keyboard-arrow-right' color={'#fff'} opacity={'0.7'} size={25}/>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={style.ContentMainView2}>
                <View>
                    <MaterialIcons name='logout' color={'red'} size={25}/>
                </View>
                <View>
                    <Text style={style.LogoutText}>logout</Text>
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
    SettingsViewStyle: {
        marginTop: 70,
        paddingHorizontal: 20,
    },
    SettingsTextStyle: {
        fontSize: 32,
        letterSpacing: -1.28,
        fontWeight: '600',
        color: '#fff',
        fontFamily: 'Poppins-Medium'
    },
    ImagePic: {
        width: 120,
        height: 120,
    },
    HeaderText: {
        fontSize: 20,
        fontWeight: '400',
        letterSpacing: -0.88,
        color: '#fff',
        fontFamily: 'Poppins-Regular'
    },
    subHeaderText: {
        fontSize: 14,
        fontWeight: '300',
        letterSpacing: -0.8,
        color: '#fff',
        marginTop: 5,
        opacity: 0.7,
        fontFamily: 'Poppins-Regular'
    },
    HeaderViewStyle: {
        alignItems: 'center',
        marginTop: 8
    },
    ImageViewStyle: {
        alignItems: 'center',
        marginTop: 8
    },
    MainHeader: {
        gap: 17,
        alignItems: 'center',
        marginTop: 26,
    },
    ContentText: {
        fontSize: 17,
        fontWeight: '300',
        letterSpacing: -0.8,
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'Poppins-Regular'
    },
    
    ContentMainView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        borderColor: 'white',
        borderWidth: StyleSheet.hairlineWidth,
        height: 53,
        width: 375,
        marginTop: 40,
        opacity: 0.5,
        marginHorizontal: 20,
        marginRight: 20,

    },
    ContentMainView1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        borderColor: 'white',
        borderWidth: StyleSheet.hairlineWidth,
        height: 53,
        width: 375,
        marginTop: 20,
        opacity: 0.5,
        marginHorizontal: 20,
        marginRight: 20,
    },
    LogoutText: {
        color: '#FFF',
        fontSize: 17,
        fontWeight: '300',
        fontFamily: 'Poppins-Regular'
    },
    ContentMainView2: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 20,
        opacity: 0.8,
    },
    
});

export default Settings;