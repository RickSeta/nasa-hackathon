import React, { useState } from 'react';
import { StyleSheet,Pressable, ImageBackground, Text, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import FloatingView from '../../components/animation/FloatingView';
import Balao from '../../components/balao';

export default function Brasil() {
    
const navigation = useNavigation();
    const [isShowing, setShowing] = useState(false)

  return (
    <View style={[styles.container]}>
        
            <ImageBackground source={require('../../assets/screenBackgrounds/countries/Brasil/BrasilZ.png')} resizeMode="center" style={styles.image}>
                        <View style={[styles.balaoContainer]}> 
                          <Balao pergunta={'Brazil it is then! So much diversity! Choose our destination!'} dropletState={2}></Balao>
                        </View>
                    <ImageBackground
                        source={require('../../assets/screenBackgrounds/countries/Brasil/SouthWest/BrasilSouthWestHighlight.png')}
                        resizeMode="center" 
                        style={[styles.image,styles.container, {opacity: isShowing?1:0}]}>
                        
                        <Pressable onPress={()=>navigation.navigate('TelaDecisao', {idTela:'id1'})} style={[styles.highlight]} onPointerLeave={()=>setShowing(false)} onPointerEnter={()=>setShowing(true)} >
                            
                        </Pressable>
                    </ImageBackground>
                
                
                
            </ImageBackground>
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
    height: '100%', 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#06384D'
  },
  highlight: {
    marginLeft: '20%',
    marginTop:'2¢',
    width: '4%', 
    height: '7%',
    cursor: 'pointer'
  },
  balaoContainer:{
    alignSelf: 'center',
    position: 'absolute',
    left: "10%"
  }
  
});