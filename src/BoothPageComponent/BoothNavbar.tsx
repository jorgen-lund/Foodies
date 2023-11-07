import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const BoothNavbar = () => {
    return(
        <View style={[styles.container]}>
        <TouchableOpacity>
            <Text style={[styles.text]}>Italiensk</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={[styles.text]}>Indisk</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={[styles.text]}>Meksikansk</Text>
        </TouchableOpacity>
      </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: "#ED6232",
        height: 90,
        alignContent: "center",
        alignItems: "center",
    },
    text: {
        fontFamily: "Suwannaphum-Bold",
        fontSize: 17,
    }
})
export default BoothNavbar