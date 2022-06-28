import React, {useState, useEffect} from "react";
import {View, StyleSheet, Image, TouchableOpacity, SafeAreaView, StatusBar} from 'react-native';

import RNShake from 'react-native-shake';
import Torch from 'react-native-torch';

const App = () => {

  const [toggle, setToggle] = useState(false);
  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle);

  useEffect(() => {
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      setToggle(oldToggle => !oldToggle);
    });

    return () => subscription.remove();
  }, []);

  return  (
    <SafeAreaView style= {toggle ? style.containerLight : style.containerOff}>
      <StatusBar backgroundColor={toggle ? 'white' : 'black'} barStyle={toggle ? "dark-content" : "light-content"}/>

      <View style = {toggle ? style.containerLight : style.containerOff}>

      <TouchableOpacity onPress={handleChangeToggle}>  
        
        <Image
          style={toggle ? style.lightOn : style.lightOff}
          source={
            toggle ? require('./assets/icons/eco-light.png') : require('./assets/icons/eco-light-off.png')}
        />

        <Image
          style= {style.dioLogo} 
          source= {toggle ? require('./assets/icons/logo-dio.png') : require('./assets/icons/logo-dio-white.png')}
        />
        
        </TouchableOpacity>

      </View> 
      </SafeAreaView>
    );
    
};

export default App;

const style = StyleSheet.create({
  containerOff:{
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight:{
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightOn:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  lightOff:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
    tintColor: 'white',
  },
  dioLogo:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  },
});