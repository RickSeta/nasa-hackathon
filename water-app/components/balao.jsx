import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';

export default function Balao() {
    return (
        <View style={styles.container}>
            <Image source={require('water-app/assets/balao/Balão_1.png')} style={styles.image} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200, // Adjust the width as needed
        height: 200, // Adjust the height as needed
    },
});