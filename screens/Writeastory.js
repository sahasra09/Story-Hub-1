import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

export default class Writeastory extends React.Component {
    render(){
      return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Story Hub',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
          <View>
          <TextInput 
              style={styles.inputBox}
              placeholder="Story title"
              />
          </View>
         <View>
         <TextInput 
              style={styles.inputBox2}
              placeholder="Author"
              /> 
         </View>
             <View>
             
              <TextInput 
              style={styles.inputBox3}
              placeholder="Yes"
              multiline={true}
              /> 
             </View>
        </View>
      )
    }
  }
  const styles = StyleSheet.create({
    inputBox:{
      width: 200,
      height: 40,
      borderWidth: 1.5,
      borderRightWidth: 1.5,
      fontSize: 20,
      color:"red",
      
      alignSelf:'center',
      fontFamily:"Arial",

    },
    inputBox2:{
      width: 200,
      height: 40,
      borderWidth: 1.5,
      borderRightWidth: 1.5,
      fontSize: 20,
      color:"red",
      marginTop:20,
      
      alignSelf:'center',
      fontFamily:"Arial",

    },
    inputBox3:{
      width: 200,
      height: 40,
      borderWidth: 1.5,
      borderRightWidth: 1.5,
      fontSize: 20,
      color:"red",
      marginTop:20,
      
      alignSelf:'center',
      fontFamily:"Arial",

    },
  });
    

  
  