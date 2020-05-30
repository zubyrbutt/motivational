import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';

import AllQuotes from '../data/AllQuotes'

const { width } = Dimensions.get('window');


export default class LaoTzu extends Component {
    render() {
        return (

            <Swiper style={styles.wrapper} index={0} showsPagination={false} showsButtons={false} horizontal={false}
                    loop={false}
            >

                {
                    AllQuotes.AllQuotes.map(data => {
                        return (

                            <View style={styles.container} key="{data.quotes}">

                                <View style={{marginTop: 10, justifyContent: 'center', alignItems: 'center'}}>
                                    <Text
                                        style={{
                                            fontSize: 100,
                                            fontWeight: 'bold',
                                        }}>"</Text>
                                </View>
                                <View style={styles.PoetryBox}>
                                    <Text style={styles.PoetryText}>{data.quotes}</Text>

                                    <Text style={styles.PoetName}>― {data.name}</Text>
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
        fontSize: 27,
        color: '#000',
        fontFamily: 'Hitsmaker',
    },
    PoetName: {

        fontSize: 16,
        marginTop: 40,
        marginLeft: 100,
        color: 'black',

    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    image: {
        width,
        flex: 1
    },
    paginationStyle: {
        position: 'absolute',
        bottom: 10,
        right: 10
    },
    paginationText: {
        color: 'white',
        fontSize: 20
    }

});
