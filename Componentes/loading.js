import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import LottieView from  'lottie-react-native'

export default function Loading(){
    return(
        <View style={[StyleSheet.absoluteFillObject, styles.container]}>
            <LottieView source={require('../img/loading.json')} autoPlay loop/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        zIndex: 1,
    }
})