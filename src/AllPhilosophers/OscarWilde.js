import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions, StatusBar, Image, ImageBackground} from 'react-native';
import Swiper from 'react-native-swiper';

import OscarWildeQuotes from '../data/OscarWilde'

const { width } = Dimensions.get('window');


export default class OscarWilde extends Component {
    render() {
        return (

            <Swiper style={styles.wrapper} index={0} showsPagination={false} showsButtons={false} horizontal={false}
                    loop={false}
            >

                {
                    OscarWildeQuotes.OscarWilde.map(data => {
                        return (

                            <View style={styles.container} key="{data.quotes}">
                                <StatusBar barStyle="dark-content" hidden={true}  translucent={true}/>
                                <ImageBackground source={require('../images/bg-1.jpg')} style={{width: '100%', height: '100%'}}>
                                    <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                                        <View style={{marginTop:-100}}>
                                            <Text
                                                style={{
                                                    fontSize: 100,
                                                    fontWeight: 'bold',
                                                }}>"</Text>
                                        </View>
                                        <View style={styles.PoetryBox}>
                                            <Text style={styles.PoetryText}>{data.quotes}</Text>

                                        </View>
                                    </View>

                                </ImageBackground>
                                <Text style={styles.PoetName}>― Oscar Wilde</Text>
                            </View>
                        );
                    })
                }
            </Swiper>



        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',

    },

    PoetryBox: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    PoetryText: {
        textAlign: 'center',
        fontSize: 27,
        color: '#fff',
        fontFamily: 'Hitsmaker',

    },
    PoetName: {
        fontSize: 16,
        bottom: 100,
        color: 'black',
        position: 'absolute',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },


});
