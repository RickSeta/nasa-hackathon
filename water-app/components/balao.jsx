import React, { useState } from 'react';
import { StyleSheet, Pressable, Image, Text, View } from 'react-native';

export default function Balao() {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/balloonDropletStates/state1.png')} resizeMode="center" style={styles.image} />
            <Text style={styles.text}>Seu texto aqui</Text>
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
        width: 200, // Largura da imagem
        height: 200, // Altura da imagem
        position: 'relative'
    },
    text: {
        fontSize: 16, // Tamanho da fonte do texto
        width:150,
        position: 'absolute',
        top: '105px',
        left: '65px'
    },
});