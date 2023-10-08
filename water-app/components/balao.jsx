import React, { useState } from 'react';
import { StyleSheet, Pressable, Image, Text, View } from 'react-native';

export default function Balao() {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/balloonDropletStates/state1.png')} resizeMode="center" style={styles.image} />
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
    },
});