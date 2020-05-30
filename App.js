import React, {Component} from 'react';
import {Text, View, StyleSheet,SafeAreaView, Image, ScrollView, TouchableOpacity, StatusBar} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LaoTzuQuote from './src/AllPhilosophers/LaoTzu'
import AlbertEinsteinQuotes from './src/AllPhilosophers/AlbertEinstein'
import OscarWildeQuotes from './src/AllPhilosophers/OscarWilde'


function MenuScreen({ navigation }){
    return (

        <View style={styles.container}>
            <SafeAreaView>
            <StatusBar barStyle="dark-content"  backgroundColor="#fff" translucent={true}/>

            <ScrollView showsVerticalScrollIndicator={false}>

                {/*Lao Tzu List*/}
                <TouchableOpacity onPress={() => navigation.navigate('LaoTzu')}>

                    <View style={styles.listContainer}>
                        <View style={styles.imageCircle}>
                            <Image
                                style={styles.listImage}
                                source={require('./src/images/laotzu.jpg')}/>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.itemTextTitle}>Lao Tzu </Text>
                            <Text style={styles.itemTextSubtitle}>6th century – 4th century BC {"\n"}Chinese philosopher</Text>

                        </View>
                    </View>
                </TouchableOpacity>



                {/*Albert Einstein*/}
                <TouchableOpacity onPress={() => navigation.navigate('AlbertEinstein')}>

                <View style={styles.listContainer}>
                    <View style={styles.imageCircle}>
                        <Image
                            style={styles.listImage}
                            source={require('./src/images/AlbertEinstein.jpg')}/>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.itemTextTitle}>Albert Einstein</Text>
                        <Text style={styles.itemTextSubtitle}>1879 - 1955{"\n"}Physics, philosophy</Text>

                    </View>
                </View>

            </TouchableOpacity>


                {/*Oscar Wilde*/}
                <TouchableOpacity onPress={() => navigation.navigate('OscarWilde')}>

                    <View style={styles.listContainer}>
                        <View style={styles.imageCircle}>
                            <Image
                                style={styles.listImage}
                                source={require('./src/images/OscarWildel.jpg')}/>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.itemTextTitle}>Oscar Wilde</Text>
                            <Text style={styles.itemTextSubtitle}>1854 - 1900{"\n"} Author, poet, play writer</Text>

                        </View>
                    </View>

                </TouchableOpacity>


                <View style={styles.listContainer}>
                    <View style={styles.imageCircle}>
                        <Image
                            style={styles.listImage}
                            source={require('./src/images/laotzu.jpg')}/>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.itemTextTitle}>Lao Tzu </Text>
                        <Text style={styles.itemTextSubtitle}>"The best fighter is never angry"</Text>

                    </View>
                </View>

                <View style={styles.listContainer}>
                    <View style={styles.imageCircle}>
                        <Image
                            style={styles.listImage}
                            source={require('./src/images/laotzu.jpg')}/>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.itemTextTitle}>Lao Tzu </Text>
                        <Text style={styles.itemTextSubtitle}>"The best fighter is never angry"</Text>

                    </View>
                </View>

                <View style={styles.listContainer}>
                    <View style={styles.imageCircle}>
                        <Image
                            style={styles.listImage}
                            source={require('./src/images/laotzu.jpg')}/>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.itemTextTitle}>Lao Tzu </Text>
                        <Text style={styles.itemTextSubtitle}>"The best fighter is never angry"</Text>

                    </View>
                </View>

                <View style={styles.listContainer}>
                    <View style={styles.imageCircle}>
                        <Image
                            style={styles.listImage}
                            source={require('./src/images/laotzu.jpg')}/>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.itemTextTitle}>Lao Tzu </Text>
                        <Text style={styles.itemTextSubtitle}>"The best fighter is never angry"</Text>

                    </View>
                </View>

                <View style={styles.listContainer}>
                    <View style={styles.imageCircle}>
                        <Image
                            style={styles.listImage}
                            source={require('./src/images/laotzu.jpg')}/>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.itemTextTitle}>Lao Tzu </Text>
                        <Text style={styles.itemTextSubtitle}>"The best fighter is never angry"</Text>

                    </View>
                </View>

                <View style={styles.listContainer}>
                    <View style={styles.imageCircle}>
                        <Image
                            style={styles.listImage}
                            source={require('./src/images/laotzu.jpg')}/>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.itemTextTitle}>Lao Tzu </Text>
                        <Text style={styles.itemTextSubtitle}>"The best fighter is never angry"</Text>

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
        </View>


    );

}

const Stack = createStackNavigator();

function AllPhilosophers() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
                <Stack.Screen name='menu' component={MenuScreen}/>
                <Stack.Screen name="LaoTzu" component={LaoTzuQuote} />
                <Stack.Screen name="AlbertEinstein" component={AlbertEinsteinQuotes} />
                <Stack.Screen name="OscarWilde" component={OscarWildeQuotes} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AllPhilosophers;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 20

    },
    headerText: {
        color: '#040303',
        fontSize: 40,
        margin: 10,
    },
    listContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',

        marginTop: 20,


    },
    imageCircle: {
        width: 65,
        height: 65,
        borderRadius: 35,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,


    },
    listImage: {
        width: 65,
        height: 65,
        borderRadius: 30,

    },
    textContainer: {
        marginLeft: 15,
        marginTop: 5,
    },
    itemTextTitle: {
        flexDirection: 'row',
        fontSize: 20,
        fontWeight: 'bold',
    },
    itemTextSubtitle: {},


});
