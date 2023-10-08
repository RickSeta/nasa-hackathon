import React, { useState } from 'react';
import { StyleSheet,ImageBackground, Pressable, Image, Text, View } from 'react-native';

export default function Balao() {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/balloonDropletStates/state1.png')} resizeMode="center" style={styles.image} >
                
                <View style={[styles.textContainer]}>   
                    <Text style={styles.text}>Seu texto aqui</Text>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 400, // Largura da imagem
        height: 400, // Altura da imagem
        position: 'relative',
        justifyContent: 'center'
    },
    text: {
        fontSize: 16, // Tamanho da fonte do texto
        width:'100%',
        alignSelf: 'center',
        position: 'relative',
    },
    textContainer:{
        width: '70%',
        bottom: 35,
        alignSelf: 'center',
        left: '10%'
    }
});