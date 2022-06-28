
import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

import foto from './assets/foto.jpg';
import Card from './components/Card';



const App = () => {


  function handleRedeSocial(rede_social) {

    switch (rede_social) {

      case 'linkedin':
        Alert.alert('Meu Linkedin', 'https://www.linkedin.com/in/d%C3%A9bora-silva-4745201b0')
        break
      case 'github':
        Alert.alert('Meu Github', 'https://github.com/Delbrira')
        break
    }

  }

  return (
    <>
      <View style={style.page}>

        <View style={style.container_cabecalho}>
          <Image source={foto} style={style.foto} />
          <Text style={style.nome}>Débora Silva</Text>
          <Text style={style.funcao}>Estudante</Text>
          <View style={style.redes_sociais}>
            <TouchableOpacity onPress={() => handleRedeSocial('github')}>
              <Icon name="github" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('facebook')}>
              <Icon name="facebook" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
              <Icon name="linkedin" size={30} />
            </TouchableOpacity>

          </View>
        </View>

        <Card titulo="Formação Academica">
          <Text style={style.card_content_text} >Cursando Analise e Desenvolvimento na faculdade Senac-PE</Text>react
        </Card>

        <Card titulo="Habilidades">
          <Text style={style.card_content_text} >Microsoft Visual Studio</Text>
          <Text style={style.card_content_text} >MySql Workbench</Text>
          <Text style={style.card_content_text} >Power BI</Text>
          <Text style={style.card_content_text} >Git e GitHub</Text>
          <Text style={style.card_content_text} >Prototipagem</Text>
          <Text style={style.card_content_text} >HTML</Text>
          <Text style={style.card_content_text} >CSS</Text>
          <Text style={style.card_content_text} >JavaScript</Text>
          <Text style={style.card_content_text} >React Native</Text>
          <Text style={style.card_content_text} >C</Text>
          <Text style={style.card_content_text} >C#</Text>
          <Text style={style.card_content_text} >Java</Text>
        </Card>

      </View>
    </>
  );
};


const style = StyleSheet.create({

  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
  },
  container_cabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10
  },
  funcao: {
    color: '#939393',
    marginBottom: 10
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20
  },
  card_content_text: {
    color: '#939393',
    marginBottom: 10
  }
})


export default App;
