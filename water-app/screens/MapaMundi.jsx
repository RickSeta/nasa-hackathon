import React, { useState } from 'react';
import { StyleSheet,Pressable, ImageBackground, Text, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function MapaMundi() {
    
const navigation = useNavigation();
    const [isShowing, setShowing] = useState(false)

  return (
    <View style={[styles.container, styles.floating]}>
        
        <ImageBackground source={require('../assets/screenBackgrounds/Mapa_Mundi.png')} resizeMode="center" style={styles.image}>
        
            <ImageBackground
                source={require('../assets/screenBackgrounds/countries/BrasilHighlight.png')}
                resizeMode="center" 
                style={[styles.image,styles.container, {opacity: isShowing?1:0}]}>
                
                <Pressable onPress={()=>navigation.navigate('TelaInicial')} style={[styles.highlight]} onPointerLeave={()=>setShowing(false)} onPointerEnter={()=>setShowing(true)} >
                    
                </Pressable>
            </ImageBackground>
            
        </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Make the container fill the screen
  },
  image: {
   
    width: '100%',
    height: '100%', 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#06384D'
  },
  highlight: {
    marginLeft: '5%',
    marginBottom:'7%',
    width: '10%', 
    height: '17%',
    cursor: 'pointer'
  },
  floating:{
    elevation: 10,
    transition: 'transform 0.2s ease', // Add a transform transition
    '&:hover': {
      transform: 'scale(2.05)', // Scale up on hover
    },
  }
});