import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions, StatusBar} from 'react-native';
import Swiper from 'react-native-swiper';

import PabloPicassoQuotes from '../data/PabloPicasso'

const { width } = Dimensions.get('window');


export default class PabloPicasso extends Component {
    render() {
        return (

            <Swiper style={styles.wrapper} index={0} showsPagination={false} showsButtons={false} horizontal={false}
                    loop={false}
            >

                {
                    PabloPicassoQuotes.PabloPicasso.map(data => {
                        return (

                            <View style={styles.container} key="{data.quotes}">
                                <StatusBar barStyle="dark-content" hidden={true}  translucent={true}/>

                                <View style={{marginTop: 10, justifyContent: 'center', alignItems: 'center'}}>
                                    <Text
                                        style={{
                                            fontSize: 100,
                                            fontWeight: 'bold',
                                            color: '#FFF'
                                        }}>"</Text>
                                </View>
                                <View style={styles.PoetryBox}>
                                    <Text style={styles.PoetryText}>{data.quotes}</Text>
                                    <Text style={styles.PoetName}>― Pablo Picasso</Text>
                                </View>
                            </View>
                        );
                    })
                }
            </Swiper>



        );
    }
}

// function RPoetry({navigation}) {
//     return (
//
//     );
// }
// export default RPoetry;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#046251'
    },
    PoetryBox: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    PoetryText: {
        textAlign: 'center',
        fontSize: 25,
        color: '#fff',
        fontFamily: 'Hitsmaker',
        margin: 12

    },
    PoetName: {
        fontSize: 16,
        marginTop: 40,
        marginLeft: 100,
        color: '#fff',


    }


});
