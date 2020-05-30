import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LaoTzuQuote from './src/AllPhilosophers/LaoTzu'
import AlbertEinsteinQuotes from './src/AllPhilosophers/AlbertEinstein'

function MenuScreen({ navigation }){
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Read & Learn</Text>
            <ScrollView>

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
                            <Text style={styles.itemTextSubtitle}>"The best fighter is never angry"</Text>

                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('AlbertEinstein')}>

                    <View style={styles.listContainer}>
                        <View style={styles.imageCircle}>
                            <Image
                                style={styles.listImage}
                                source={require('./src/images/AlbertEinstein.jpg')}/>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.itemTextTitle}>Albert Einstein</Text>
                            <Text style={styles.itemTextSubtitle}>"The best way to cheer yourself is to{"\n"}  cheer somebody else up."</Text>

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

    },
    headerText: {
        color: '#040303',
        fontSize: 60,
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
