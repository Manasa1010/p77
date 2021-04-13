import * as React from "react";
import {View,Text,StyleSheet} from "react-native";
import SignupLoginScreen from "./screens/SignupLoginScreen"

export default class App extends React.Component{
  render(){
    return(
      <View>
        <SignupLoginScreen/>
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
  }
})