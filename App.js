import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import reactDom from 'react-dom';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, Alert, Button, TextInput,  Switch, ImageBackground } from 'react-native';
import { CheckBox } from 'react-native';
import styles from './estilos/styles.js';


import { useFonts } from 'expo-font';
var indice = 0;
export default function App() {

const [horoscopo, setHoroscopo] = useState([
  {nome:'AppleJack',
  dias:'22 dezembro a 20 janeiro',
  imagem:<Image source={require('./assets/Aplejack.png')} style={styles.img}/>,
  marca:<Image source={require('./assets/ApplejackMark.png')} style={styles.img2}/>,
  caracteristicas:'Ambicioso, Honesto e maduro',
  elemento:'Honestidade',
  cores:'Vermelho, Castanho, Verde, Amarelo e Laranja '},

  {nome:'Trixie Lulamoon',
  dias:'21 janeiro a 18 fevereiro',
  imagem:<Image source={require('./assets/Trixie.png')} style={styles.img}/>,
  marca:<Image source={require('./assets/TrixieMarca.png')} style={styles.img2}/>,
  caracteristicas:'Mente Aberta, Livre e Original',
  elemento:'Humildade',
  cores:'Azul e Roxo'},
  {nome:'Fluttershy',
  dias:'19 fevereiro a 20 março.',
  imagem:<Image source={require('./assets/Flutther.png')} style={styles.img}/>,
  marca:<Image source={require('./assets/FluttherMarca.png')} style={styles.img2}/>,
  caracteristicas:'Doce, Sonhador e Emotivo',
  elemento:'Bondade',
  cores:'Amarelho e Rosa'
  },
  {nome:'Rainbow Dash',
  dias:'21 março a 20 abril',
  imagem:<Image source={require('./assets/Rainbow.png')} style={styles.img}/>,
  marca:<Image source={require('./assets/RainbowMarca.png')} style={styles.img2}/>,
  caracteristicas:'Dinamico, Competitivo e Ativo',
  elemento:'Lealdade',
  cores:'Ciano, Amarelho, Verde, Laranja, Vermelho e Roxo'},
  {nome:'Big McIntosh',
  dias:'21 abril a 20 maio',
  imagem:<Image source={require('./assets/Macintosh.png')} style={styles.img}/>,
  marca:<Image source={require('./assets/BigMarca.png')} style={styles.img2}/>,
  caracteristicas:'Trabalhador, Paciente e Alegre',
  elemento:'Paciencia',
  cores:'Vermelho e Amarelo'},
  {nome:'Derpy Hooves',
  dias:'21 maio a 20 junho',
  imagem:<Image source={require('./assets/Derpy.png')} style={styles.img}/>,
  marca:<Image source={require('./assets/DerpyMarca.png')} style={styles.img2}/>,
  caracteristicas:'Curioso, Engraçado e Eclético',
  elemento:'Diversão',
  cores:'Cinza e Amarelo'},
  {nome:'Princesa Luna',
  dias:'21 junho a 22 julho',
  imagem:<Image source={require('./assets/Luna.png')} style={styles.img3}/>,
  marca:<Image source={require('./assets/LunaMarca.png')} style={styles.img2}/>,
  caracteristicas:'Protetor, Sensível e Introvertido',
  elemento:'Introversão',
  cores:'Roxo e Preto'},
  {nome:'Pricesa Celestia',
  dias:'23 julho a 22 agosto',
  imagem:<Image source={require('./assets/Celestia.png')} style={styles.img3}/>,
  marca:<Image source={require('./assets/CelestiaMarca.png')} style={styles.img2}/>,
  caracteristicas:'Lider, Generoso e Real',
  elemento:'Liderança',
  cores:'Branco, Amarelo, Azul, Verde, Roso e Rosa'},
  {nome:'Twilight Sparkle',
  dias:'23 agosto a 22 setembro',
  imagem:<Image source={require('./assets/Sparkle.png')} style={styles.img}/>,
  marca:<Image source={require('./assets/SparkleMarca.png')} style={styles.img2}/>,
  caracteristicas:'Inteligente, Racional e Prático',
  elemento:'Mágica',
  cores:'Preto, Roxo e Rosa'},
  {nome:'Rarity',
  dias:'23 setembro a 22 outubro',
  imagem:<Image source={require('./assets/Rarity.png')} style={styles.img}/>,
  marca:<Image source={require('./assets/RarityMarca.png')} style={styles.img4}/>,
  caracteristicas:'Harmonioso, Diplomático e Vaidoso',
  elemento:'Generosidade',
  cores:'Branco, Roxo e Azul'},
  {nome:'Zecora',
  dias:'23 outubro a 21 novembro',
  imagem:<Image source={require('./assets/Zecora.png')} style={styles.img}/>,
  marca:<Image source={require('./assets/ZecoraMarca.png')} style={styles.img2}/>,
  caracteristicas:'Misterioso, Apaixonado e Vingativo',
  elemento:'Misterio',
  cores:'Preto, Branco e Dourado'},
  {nome:'Pinkie Pie',
  dias:'22 novembro a 21 dezembro',
  imagem:<Image source={require('./assets/Pinkie.png')} style={styles.img}/>,
  marca:<Image source={require('./assets/PinkieMarca.png')} style={styles.img2}/>,
  caracteristicas:'Leal, Aventureiro e Sortudo',
  elemento:'Bom-humor',
  cores:'Rosa'},
  

])


const [mes, setMes] = useState("Janeiro");
const [dia, setDia] = useState("1");
const [limite, setLimite] = useState("31");
const [visivel, setVisivel] = useState(false);
const [loaded] = useFonts({
  MyLittle: require('./assets/fonts/PONY - MLP 2 - Version 2.ttf'),
  Gothic: require('./assets/fonts/pokemon-solid.ttf'),
});

if (!loaded) {
  return null;
}




function analisarDia(){
   var arr = [];

   for(let i=1; i<=limite; i++){
     arr.push(<option value={i}>dia {i}</option>)
   }
   return arr;
}
function teste(a){
  setMes(a);
  if(a=='Janeiro' || a=='Março' || a=='Maio' || a=='Julho' || a=='Agosto' || a== 'Outubro' || a=='Dezembro'){
    setLimite(31)
  }else if(a=='Abril' || a=='Junho' || a=='Setembro' || a=='Novembro') {
    setLimite(30)
  }else {
    setLimite(28)
  }
}

  

function Mesdia(mes){
  switch(mes) {
    case 'Janeiro':
      if(dia >= 1 && dia <21){
         

            indice = 0
          }
        else {

          indice = 1
        }  
      break;
    case 'Fevereiro':
      if(dia >= 1 && dia <19){
       

        indice = 1
      }
      else {
        indice = 2
      }
  break;

  case 'Março':
      if(dia >= 1 && dia <21){
       

        indice = 2
      }
      else {
        indice = 3
      }
  break;

  case 'Abril':
      if(dia >= 1 && dia <21){
       

        indice = 3
      }
      else {
        indice = 4
      }
  break;

  case 'Maio':
      if(dia >= 1 && dia <21){
       

        indice = 4
      }
      else {
        indice = 5
      }
  break;
  case 'Junho':
      if(dia >= 1 && dia <21){
       

        indice = 5
      }
      else {
        indice = 6
      }
  break;
  case 'Julho':
      if(dia >= 1 && dia <23){
       

        indice = 6
      }
      else {
        indice = 7
      }
  break;
  case 'Agosto':
      if(dia >= 1 && dia <23){
       

        indice = 7
      }
      else {
        indice = 8
      }
  break;
  case 'Setembro':
      if(dia >= 1 && dia <23){
       

        indice = 8
      }
      else {
        indice = 9
      }
  break;
  case 'Outubro':
      if(dia >= 1 && dia <23){
       

        indice = 9
      }
      else {
        indice = 10
      }
  break;
  case 'Novembro':
      if(dia >= 1 && dia <22){
       

        indice = 10
      }
      else {
        indice = 11
      }
  break;
  case 'Dezembro':
      if(dia >= 1 && dia <22){
       

        indice = 11
      }
      else {
        indice = 0
      }
  break;
  }
  
  setVisivel(true)
}
function voltar () {


  setVisivel (false)
}





    

      return (
        <View style={styles.view}>
        <ImageBackground source={require('./assets/fuirdo.png')} style={styles.buttonImageIconStyle3}>
          <View style={{flex:1,alignItems: 'center', justifyContent: 'center',marginTop: 100}}>
          
          <Text style={styles.txt}>Quem você seria do</Text>
          <Text style={styles.menu}>My Little Pony</Text>
          </View>
          
          <View style={{flex:1,alignItems: 'center', justifyContent: 'center', marginTop: 100}}>
            
              <Text style={styles.txt}>Dia</Text>
              <select

                value={dia}
                onChange={text => setDia(text.target.value)}
                style={{ height: 40, width: '70%', borderWidth: 1, borderRadius: 10, marginTop: 5, fontFamily:'MyLittle', color:'#ed3c95', alignItems: 'center',
                justifyContent: 'center',
                textAlign:'center',
                fontStyle:'italic', fontSize:15}}>

                
                {analisarDia()}
              </select>
              </View>
              
          <View style={{flex:1,alignItems: 'center', justifyContent: 'center', marginTop: 50}}>
              <Text style={styles.txt}>Mes</Text>
              <select

                value={mes}
                onChange={(text) => teste(text.target.value)}
                style={{ height: 40, width: '70%', borderWidth: 1, borderRadius: 10, marginTop: 5, fontFamily:'MyLittle', color:'#ed3c95', alignItems: 'center',
                justifyContent: 'center',
                textAlign:'center',
                fontStyle:'italic', fontSize:15}}>

                <option value="Janeiro">Janeiro</option>
                <option value="Fevereiro">Fevereiro</option>
                <option value="Março">Março</option>
                <option value="Abril">Abril</option>
                <option value="Maio">Maio</option>
                <option value="Junho">Junho</option>
                <option value="Julho">Julho</option>
                <option value="Agosto">Agosto</option>
                <option value="Setembro">Setembro</option>
                <option value="Outubro">Outubro</option>
                <option value="Novembro">Novembro </option>
                <option value="Dezembro">Dezembro</option>
              </select>
              
            </View>
            
            
          <Modal visible={visivel} animaType="fade">
            <View style={{ backgroundColor: 'pink', flex:1}}>
              
            <ImageBackground source={require('./assets/fuirdo.png')} style={styles.buttonImageIconStyle3}> 
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 50}}>
            <Text style={styles.menu}>{horoscopo[indice].nome}</Text>
            
            <Text style={styles.txt2}>Data: {horoscopo[indice].dias}</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>{horoscopo[indice].imagem}</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.txt}>Caracteristicas: {horoscopo[indice].caracteristicas}</Text>
        
            <Text style={styles.txt}>Elemento: {horoscopo[indice].elemento}</Text>
            
            
            <Text style={styles.txt}>Cores: {horoscopo[indice].cores}</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.txt}>Marca:</Text>
            <Text>{horoscopo[indice].marca}</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <TouchableOpacity style={styles.botao} onPress={()=>voltar()}>
              <View style={styles.btnArea}>
                <Text style={styles.btnTexto}>Retornar</Text>
                
              </View>
              
            </TouchableOpacity>
            </View>
            </ImageBackground>
            </View>
          </Modal>

         
          <View style={{flex:5, alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity style={styles.botao} onPress={()=>Mesdia(mes)}>
            <View style={styles.btnArea}>
              <Text style={styles.btnTexto}>Magia</Text>
            </View>
            </TouchableOpacity>
            
            
            </View>
            </ImageBackground>
        </View>
        

      );
    }
 
