import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Animated,
  AsyncStorage 
}
from 'react-native';

import { 
CheckBox}
 from 'react-native-elements';


class App extends React.Component {

  constructor(props){
    super(props)
    this.state =
      {opcaoUm: false,
      
      subtotal : 0,
      mostre : 'none',
      'nome': "", 
      p: 0}

      this.pedidos = [
        {
          titulo: 'Frango Atropelado',
          preco1: 9.00
        }
      ];
    }

    componente = () => {
      AsyncStorage.setItem('nome').then((valor) => this.setState({'nome': 9})
      )
   
      AsyncStorage.setItem('nome').then(
       (valor) => this.setState({
         'p': valor
       })
     )
   }
//Finalizando o pedido escolhido
  Finalizar = (valor)=>{
  
      AsyncStorage.setItem('nome', 9);
      
      this.setState({ 'nome': 9});
		
    }

  
//metodo somando os pedidos 
  

  render(){
    return(
    <>
    
<View style={styles.aplicativo}>
    <Image
        style={styles.imglogo}
        source={require('./assets/logo.png')}/>
    <Text>{'\n'}</Text>
    <View style={styles.aplicativo}>
    <View style={styles.conteudo}>
   
    <Text style={styles.estiloBemVindo}>Bem vindo!!!Faça seu pedido!</Text>
      <CheckBox
      checked= {this.state.opcaoUm}
      onPress={() => this.setState({opcaoUm: !this.state.opcaoUm})}
      />
      <Text style={styles.estilosTextos}>Frango Atropelado - 9,00</Text>


      
      <Text>R${this.pedidos[0].preco}</Text>


          <TouchableOpacity onPress={this.Finalizar} style={styles.botao}>
            <Text style={styles.textoBotao}>Finalizar</Text>
          </TouchableOpacity>
          <Text>{'\n'}</Text>        
          
          
          <Text style={styles.textoSubtotal}>Subtotal:</Text> 
          <Text style={styles.textoValor}>R${this.state.subtotal}</Text>

          <Text>
					<Text style={styles.textoSubtotal}>Nome do pedido:</Text> 
          <Text style={styles.textoValor}>{this.state.nome}</Text>
					<Text>{'\n'}</Text>
					<Text style={styles.textoSubtotal}>Preço:</Text> 
          <Text style={styles.textoValor}>{this.state.p}</Text>
					</Text>
         
        </View>
        </View>
        </View>
        
      </>
    )
  }
}

const styles = StyleSheet.create({

  
  aplicativo: {
    flex:1,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#42426F'
  },

  conteudo: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    

  },

  imglogo:{
    resizeMode: 'cover',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%'
  },

  CheckBox:{
  width: 25,
  height: 25,
  borderWidth: 2,
  justifyContent: "center",
  alignItems: "center"
  },

  estiloBemVindo:{
    color: "#B8860B",
    fontWeight:"bold",
    fontSize: 15,
    

  },
  estilosTextos: {
  color: "white",
  fontWeight: "bold",
  fontSize: 15,
  borderColor: "#B0E0E6",
  borderWidth: 2

  },

  botao: {
    alignItems: "center",
    backgroundColor: "#836FFF",
    padding: 10,
    borderRadius: 5,
  },

  textoBotao: {
    color: '#fff0e6',
    fontWeight: 'bold'
  },

  textoSubtotal: {
    color: '#B8860B',
    fontWeight: 'bold'

  },
  
  textoValor: {
    color: '#B8860B',
    textShadowRadius: 5,
    fontWeight: 'bold'

    }

})

export default App;
