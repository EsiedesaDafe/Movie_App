import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import Trending from '../../assets/DATA/Trending';
import { TextInput } from 'react-native';
import { FlatList } from 'react-native';
import Recommendation from '../../assets/DATA/Recommendation';
import Action from '../../assets/DATA/Action';

import { useNavigation } from '@react-navigation/native';

SplashScreen.preventAutoHideAsync();


const Home = ( ) => {
    

    const [text, onChangeText] = React.useState('search movies');

    const navigation = useNavigation();

    const renderTrendingItem = ({ item })=> {
        return (
            <TouchableOpacity onPress={() => navigation.navigate(item.navigateTo)}>
                <View style={style.styleImgView}>
                    <Image source={item.img} style={style.styleImg} />     
                </View>
                <View style={style.titleViewStyle}>
                    <Text style={style.titleStyle}>{item.title}</Text>
                    <Text style={style.subTitleStyle}>{item.subTitle}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    const renderRecommendationItem = ({ item })=> {
        return (
            <TouchableOpacity onPress={() => navigation.navigate(item.navigateTo)}>
                <View style={style.styleImgView}>
                    <Image source={item.img} style={style.styleImg} />     
                </View>
                <View style={style.titleViewStyle}>
                    <Text style={style.titleStyle}>{item.title}</Text>
                    <Text style={style.subTitleStyle}>{item.subTitle}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    const renderActionItem = ({ item })=> {
        return (
            <TouchableOpacity >
                <View style={[style.styleImgView1, {marginLeft: item.selected == true ? 20 : 0}]} >
                    <Image source={item.img} style={style.SecondImg}/>     
                </View>
            </TouchableOpacity>
        );
    };


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
        <View style={style.container} onLayout={onLayoutRootView} >

            {/*heading*/}
            <SafeAreaView>
                <View style={style.headerContent}>
                    <View style={style.image}>
                        <Image source={require('../../assets/IMAGES/A.png')} style={style.Pic}/>
                    </View>
                    <View style={style.textContent}>
                        <Text style={style.titleHeader}>Hello David</Text>
                        <Text style={style.subText}>Welcome back to XD</Text>
                    </View>
                </View>
            </SafeAreaView>

            {/*search*/}
            <View style={style.searchMovies}>
                <TextInput
                    style={style.searchMoviesDetails}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder='search movies'
                    placeholderTextColor={'white'}
                />
            </View>

            {/*trending*/}
            <ScrollView >
            <View style={style.trend}>
                <Text style={style.trendContent} >Trending</Text>
            </View>
            <View>
                <FlatList data={Trending}
                renderItem={renderTrendingItem}
                keyExtractor={(item) => item.id}
                horizontal={true}
                />
            </View>

            {/*Action*/}
            <View style={style.recommendViewStyle} >
                <Text style={style.recommendStyle}>New Releases</Text>
            </View>

            <View>
                <FlatList data={Action}
                renderItem={renderActionItem}
                keyExtractor={(item) => item.id}
                horizontal={true}/>
            </View>

            {/*recommended*/}
            <View style={style.recommendViewStyle} >
                <Text style={style.recommendStyle}>Recommended</Text>
            </View>

            {/*Recommedation*/}
            <View>
                <FlatList data={Recommendation}
                renderItem={renderRecommendationItem}
                keyExtractor={(item) => item.id}
                horizontal={true}/>
            </View>
            </ScrollView>
        </View>
    );
};


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    Pic: {
        width: 55,
        height: 55,
    },
    image: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    textContent: {
        marginTop: 20
    },
    titleHeader: {
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '100',
        letterSpacing: -0.92,
        color: '#fff',
        fontFamily: 'Poppins-Medium',
    },
    subText: {
        fontSize: 16,
        fontWeight: '200',
        color: '#fff',
        opacity: 0.5,
        marginTop: 3,
        fontFamily: 'Poppins-Regular',
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
    trend: {
        paddingHorizontal: 20,
        marginTop: 20,
        justifyContent: 'center'
    },
    trendContent: {
        fontSize: 23,
        letterSpacing: -1,
        fontWeight: '200',
        color: '#fff',
        fontStyle: 'normal',
        fontFamily: 'Poppins-Medium',
    },
    styleImg: {
        width: 320,
        height: 180,
        borderRadius: 15,
        justifyContent: 'center',
        opacity: 0.8
    },
    styleImgView: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    titleStyle: {
        color: 'white',
        fontSize: 18,
        fontWeight: '200',
        fontFamily: 'Poppins-Regular',
    },
    subTitleStyle: {
        color: 'white',
        fontSize: 14,
        fontWeight: '100',
        fontFamily: 'Poppins-Light',
        opacity: 0.8,
    },
    titleViewStyle: {
        marginTop: 10,
        paddingHorizontal: 20,
    },
    recommendStyle: {
        fontSize: 23,
        letterSpacing: -1,
        fontWeight: '200',
        color: '#fff',
        fontStyle: 'normal',
        fontFamily: 'Poppins-Medium',
    },
    recommendViewStyle: {
        marginTop: 36,
        paddingHorizontal: 20,
    },
    SecondImg: {
        width: 160,
        height: 216,
        borderRadius: 5,
        opacity: 0.8,
    },
    styleImgView1: {
        marginTop: 20,
        marginRight: 15, 
    },
});

export default Home;