import * as React from "react";
import {View,Text,StyleSheet,TextInput,Alert, TouchableOpacity} from "react-native"
import db from "../config";
import firebase from "firebase";

export default class SignupLoginScreen extends React.Component{
    constructor(){
        super();
        this.state={
            emailId:"",
            password:""
        }
    }
  
    userSignIn=(email,password) =>{
       firebase.auth().signInWithEmailAndPassword(email,password).then(
           ()=>{
               return Alert.alert("Successfully logged in")
           }
       )
       .catch(error=>{
           return Alert.alert(error.message)
       })
    }
    render(){
        return(
            <View style={styles.container}>
                <Text>Barter System</Text>
                <TextInput
                placeholder="Email"
                keyboardType="email-address"
                style={styles.inputBox}
                onChangeText={
                    (text)=>{
                        this.setState({
                            emailId:text
                        })
                    }
                }
                />
                <TextInput 
                placeholder="Password"
                secureTextEntry={true}
                style={styles.inputBox}
                onChangeText={
                    (text)=>{
                        this.setState({
                            password:text
                        })
                    }
                }
                />
                <TouchableOpacity style={styles.button} onPress={()=>{
                    this.userSignIn(this.state.emailId,this.state.password)
                }}>
                    <Text>login</Text>

                </TouchableOpacity>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#fff",
      alignItems:"center",
      justifyContent:"center"
    },
    inputBox:{
        width:100,
        height:30,
        borderWidth:2,
        padding:5,
        textAlign:"center"
    }
  })

