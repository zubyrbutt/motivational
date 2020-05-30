import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Hello extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Hello $</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center'
    }
})
