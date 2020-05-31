import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions, StatusBar} from 'react-native';
import Swiper from 'react-native-swiper';

import NelsonMandelaQuotes from '../data/NelsonMandela'

const { width } = Dimensions.get('window');


export default class NelsonMandela extends Component {
    render() {
        return (

            <Swiper style={styles.wrapper} index={0} showsPagination={false} showsButtons={false} horizontal={false}
                    loop={false}
            >

                {
                    NelsonMandelaQuotes.NelsonMandela.map(data => {
                        return (

                            <View style={styles.container} key="{data.quotes}">
                                <StatusBar barStyle="dark-content" hidden={true}  translucent={true}/>

                                <View style={{marginTop: 10, justifyContent: 'center', alignItems: 'center'}}>
                                    <Text
                                        style={{
                                            fontSize: 100,
                                            fontWeight: 'bold',
                                            color: '#fff'
                                        }}>"</Text>
                                </View>
                                <View style={styles.PoetryBox}>
                                    <Text style={styles.PoetryText}>{data.quotes}</Text>
                                    <Text style={styles.PoetName}>― Nelson Mandela</Text>
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

        backgroundColor: '#0f0f0f'
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
