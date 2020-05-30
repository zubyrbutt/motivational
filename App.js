import * as React from 'react';
import {Button, View, Text, Image, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import QuotesScreen from './src/Components/Quotes';


function HomeScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <StatusBar barStyle="dark-content" hidden={true} backgroundColor="#00BCD4" translucent={true}/>
            <Text style={{fontSize: 120, fontWeight: 'bold'}}>"</Text>
            <Text style={{fontSize: 80, fontWeight: 'bold', marginBottom: -10}}>Status</Text>
            <Text style={{fontSize: 80, fontWeight: 'bold'}}>Quotes</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Quotes')}>
                <View style={styles.ReadQuran}>

                    <Text style={{
                        textAlign: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 20,
                    }}>Go</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
                <Stack.Screen name='home' component={HomeScreen}/>
                <Stack.Screen name="Quotes" component={QuotesScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
const styles = StyleSheet.create({
    ImageLogo: {
        width: 120,
        height: 120,
    },
    ReadQuran: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#038105',
        marginTop: 60,
        shadowColor: '#009432',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 5,
    },

});
