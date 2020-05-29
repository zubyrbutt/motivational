import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, ScrollView, StatusBar} from 'react-native';
import Swiper from 'react-native-swiper';
import JsonData from '../data/Random';


export default class QuotesScreen extends Component {
    render() {
        return (

    <Swiper style={styles.wrapper} index={0} showsPagination={false} showsButtons={false} horizontal={false}>

        {
            JsonData.RandomPoetry.map(data => {
                return (

                    <View style={styles.container} key="{data.id}">

                        <View style={{marginTop: 10, justifyContent: 'center', alignItems: 'center'}}>
                            <Text
                                style={{
                                    fontSize: 100,
                                    fontWeight: 'bold',
                                }}>"</Text>
                        </View>
                        <View style={styles.PoetryBox}>
                            <Text style={styles.PoetryText}>{data.text1}</Text>
                            <Text style={styles.PoetryText}>{data.text2}</Text>
                            <Text style={styles.PoetName}>― {data.PoetName}</Text>
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
margin: 12,
    },
    PoetryBox: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    PoetryText: {
        textAlign: 'center',
        fontSize: 40,
        color: '#000',
        fontFamily: 'Hitsmaker',
    },
    PoetName: {

        fontSize: 18,
        color: 'black',
    },
});
