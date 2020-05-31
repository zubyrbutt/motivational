import React, {Component} from 'react';
import {Text, View, StyleSheet,SafeAreaView, Image, ScrollView, TouchableOpacity, StatusBar} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LaoTzuQuote from './src/AllPhilosophers/LaoTzu'
import AlbertEinsteinQuotes from './src/AllPhilosophers/AlbertEinstein'
import OscarWildeQuotes from './src/AllPhilosophers/OscarWilde'
import RumiQuotes from './src/AllPhilosophers/Rumi'
import MahatmaGandhiQuotes from './src/AllPhilosophers/MahatmaGandhi'
import NelsonMandelaQuotes from './src/AllPhilosophers/NelsonMandela'
import PabloPicassoQuotes from './src/AllPhilosophers/PabloPicasso'
import AbrahamLincolnQuotes from './src/AllPhilosophers/AbrahamLincoln'
import JohnLennonQuotes from './src/AllPhilosophers/JohnLennon'




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


                    {/*Rumi*/}
                <TouchableOpacity onPress={() => navigation.navigate('Rumi')}>
                <View style={styles.listContainer}>
                    <View style={styles.imageCircle}>
                        <Image
                            style={styles.listImage}
                            source={require('./src/images/rumi.jpg')}/>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.itemTextTitle}>Rumi</Text>
                        <Text style={styles.itemTextSubtitle}>1207 - 1273  {"\n"}Sufi poetry, Hanafi, Muslim</Text>

                    </View>
                </View>
                    </TouchableOpacity>



                {/*MahatmaGandhi*/}
                <TouchableOpacity onPress={() => navigation.navigate('MahatmaGandhi')}>

                <View style={styles.listContainer}>
                    <View style={styles.imageCircle}>
                        <Image
                            style={styles.listImage}
                            source={require('./src/images/MahatmaGandhi.jpg')}/>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.itemTextTitle}>Mahatma Gandhi</Text>
                        <Text style={styles.itemTextSubtitle}>1869 - 1948 {"\n"} Lawyer, Politician, Activist, Writer</Text>

                    </View>
                </View>
                </TouchableOpacity>



                {/*Nelson Mandela*/}
                <TouchableOpacity onPress={() => navigation.navigate('NelsonMandela')}>

                <View style={styles.listContainer}>
                    <View style={styles.imageCircle}>
                        <Image
                            style={styles.listImage}
                            source={require('./src/images/NelsonMandela.jpg')}/>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.itemTextTitle}>Nelson Mandela</Text>
                        <Text style={styles.itemTextSubtitle}>1918 - 2013 {"\n"} Activist, Politician, Philanthropist</Text>

                    </View>
                </View>
                </TouchableOpacity>


                {/*Pablo Picasso*/}
                <TouchableOpacity onPress={() => navigation.navigate('PabloPicasso')}>

                <View style={styles.listContainer}>
                    <View style={styles.imageCircle}>
                        <Image
                            style={styles.listImage}
                            source={require('./src/images/Picasso.jpg')}/>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.itemTextTitle}>Pablo Picasso </Text>
                        <Text style={styles.itemTextSubtitle}>1908 - 1973 {"\n"}Painting, sculpture, printmaking, writing</Text>

                    </View>
                </View>
                </TouchableOpacity>


                {/*Abraham Lincoln*/}
                <TouchableOpacity onPress={() => navigation.navigate('AbrahamLincoln')}>

                <View style={styles.listContainer}>
                    <View style={styles.imageCircle}>
                        <Image
                            style={styles.listImage}
                            source={require('./src/images/AbrahamLincoln.jpg')}/>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.itemTextTitle}>Abraham Lincoln </Text>
                        <Text style={styles.itemTextSubtitle}>1809 - 1865{"\n"}16th President of the United States</Text>

                    </View>
                </View>
                </TouchableOpacity>



                {/*John Lennon*/}
                <TouchableOpacity onPress={() => navigation.navigate('JohnLennon')}>

                <View style={styles.listContainer}>
                    <View style={styles.imageCircle}>
                        <Image
                            style={styles.listImage}
                            source={require('./src/images/JohnLennon.jpg')}/>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.itemTextTitle}>John Lennon </Text>
                        <Text style={styles.itemTextSubtitle}>1969 - 1980 {"\n"}Singer, Songwriter</Text>

                    </View>
                </View>
                </TouchableOpacity>


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
                <Stack.Screen name="Rumi" component={RumiQuotes} />
                <Stack.Screen name="MahatmaGandhi" component={MahatmaGandhiQuotes} />
                <Stack.Screen name="NelsonMandela" component={NelsonMandelaQuotes} />
                <Stack.Screen name="PabloPicasso" component={PabloPicassoQuotes} />
                <Stack.Screen name="AbrahamLincoln" component={AbrahamLincolnQuotes} />
                <Stack.Screen name="JohnLennon" component={JohnLennonQuotes} />
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
        fontSize: 19,

    },
    itemTextSubtitle: {
        color: '#747674',
        fontSize: 14
    },


});
