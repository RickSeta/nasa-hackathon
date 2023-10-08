import React, { useState } from 'react';
import { StyleSheet,Pressable, ImageBackground, Text, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import FloatingView from '../components/animation/FloatingView';

export default function MapaMundi() {
    
const navigation = useNavigation();
    const [isShowing, setShowing] = useState(false)

  return (
    <View style={[styles.container]}>
        
        <FloatingView>
            <ImageBackground source={require('../assets/screenBackgrounds/Mapa_Mundi.png')} resizeMode="center" style={styles.image}>
                    <ImageBackground
                        source={require('../assets/screenBackgrounds/countries/BrasilHighlight.png')}
                        resizeMode="center" 
                        style={[styles.image,styles.container, {opacity: isShowing?1:0}]}>
                        
                        <Pressable onPress={()=>navigation.navigate('TelaDecisao')} style={[styles.highlight]} onPointerLeave={()=>setShowing(false)} onPointerEnter={()=>setShowing(true)} >
                            
                        </Pressable>
                    </ImageBackground>
                
                
                
            </ImageBackground>

        </FloatingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Make the container fill the screen
    overflow: 'hidden',
  },
  image: {
   
    width: '100%',
    height: '110%', 
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
  
});