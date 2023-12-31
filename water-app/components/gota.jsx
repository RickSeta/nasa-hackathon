import React, { useState } from 'react';
import { StyleSheet, Pressable, Image, Text, View } from 'react-native';

export default function Gota({texto}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{texto}</Text>
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
        width: 100, // Largura da imagem
        height: 100, // Altura da imagem
        right: -25,
        top: 5
    },
    text: {
        fontSize: 16, // Tamanho da fonte do texto
        position: 'absolute',
        color: 'white',
        fontStyle: 'Bold'
    },
});