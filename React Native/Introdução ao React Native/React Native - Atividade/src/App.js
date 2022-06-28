import React from 'react'
import {View, Text, StyleSheet, SafeAreaView, StatusBar, Pressable, Linking} from 'react-native';

const colorGitHub = '010409';
const colorFontGitHub = '#C9D1D9';
const darkColorGitHub = '#4F565E';
const imageProfileGitHub = '<Text style={style.Text}>Hello World!</Text>';

const urlGitHub = 'https://github.com/Delbrira';

const App = () =>{

    const handlePressGoGitHub = () => {
        const res = await Linking.canOpenURL(urlGitHub);
        console.log("Verificando link...");
        if (res){
            console.log("Link aprovado!");
            console.log("Abrindo link...");
            await Linking.openURL(urlGitHub);
            
        }
    }

    return (
        <SafeAreaView style= {style.container}>
            <StatusBar backgroundColor={colorGitHub} barStyle= "light-content" />
            <View style={style.content}>
                <image 
                acessibilityLabel="imagem de Débora"
                style = {style.avatar} 
                source= {{uri: imageProfileGitHub}}
                />
                <Text acessibilityLabel="Nome: Débora Silva" style = {[style.defaulText, style.name]} >Débora Silva</Text>
                <Text acessibilityLabel="Nick Name: Delbrira" style = {[style.defaulText, style.nickName]} >Delbrira</Text> 
                <Text acessibilityLabel="Descrição: ADS- Analise e desenvolvimento de sistemas" style = {[style.defaulText, style.description]} >ADS- Analise e desenvolvimento de sistemas</Text> 
            </View>
            <Pressable onPress={handlePressGoGitHub}>
                <View style = {style.button}>
                    <Text>Open in GitHub</Text>
                </View>
            </Pressable>
        </SafeAreaView>
    )  
}

export default App;

const style = StyleSheet.create({
    container:{
        backgroundColor: colorGitHub,
        flex: 1,
        justifyContent: 'center',
    },

    content:{
        alignItems: 'center',
        padding: 20
    },

    avatar:{
        height: 200,
        width: 200,
        borderRadius: 100,
    },
    defaulText:{
        color: colorFontGitHub,
    },
    name: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },
    nickName: {
        fontSize: 18,
        color: darkColorGitHub,
    },
    description: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    button:{
        marginTop: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        color: 'black',
        fontSize: 16,
    }
});

// o flex vai fazer a cor se espandir a tela inteira, sem ele, o background fica soó na linha que tem o Texto//

// o container seria onde a gente colocaria o css//

// o safe area View serve pra aqueles celulares que tem o espaço da camera junto com a tela   https://images.app.goo.gl/ExpTHxGCj9V1fM7R6  pra não atrapalhar//

// o statusbar é a parte dos icones de hora, bateria, wifi, que o aplicativo não vai alcançar. o statusbar vai fazer com que o backgound que a gnt colocou, alcance essa parte, e o barstyle seria mudando a cor dos icones//