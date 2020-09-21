import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ImageBackground,
  StyleSheet,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const RegisterScreen = ({ navigation }) => {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const registerFunction = () => {
    alert(`Username: ${username}\nPassword ${password}\nEmail ${email}`);
    setUsername('');
    setPassword('');
    setEmail('');
  }

  return (
    <>
      <ImageBackground source={require('./images/RegisterScreen.png')} style={styles.image}>
         <TextInput placeholder="Username" style={{
            fontSize: 30,
            marginTop: 247,
            marginLeft: 30,
            width: 270,
            color: 'grey',
         }} value={username} onChangeText={(text) => setUsername(text)} />
         <TextInput placeholder="Password" style={{
            fontSize: 30,
            marginTop: 1,
            marginLeft: 30,
            width: 270,
            color: 'grey',
         }} secureTextEntry={true} value={password} onChangeText={(text) => setPassword(text)} />
         <TextInput placeholder="Email" style={{
            fontSize: 30,
            marginTop: 1,
            marginLeft: 30,
            width: 270,
            color: 'grey',
         }} value={email} onChangeText={(text) => setEmail(text)} />
         <View opacity={0} style={styles.buttonView}>
          <Button title="" style={styles.button} onPress={() => navigation.navigate('Login')} />
        </View> 
        <View opacity={0} style={styles.buttonViewSecond}>
          <Button title="" onPress={registerFunction} />
        </View> 
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
     width: '100%',
     height: '100%',
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold"
  },
  buttonView: {
   marginTop: -365,
   marginLeft: 265,
   width: "33%", 
   margin: 10,
   fontSize: 20,
 },
 buttonViewSecond: {
   width: "10%",
   marginTop: 210, 
   margin: 340,
   fontSize: 20,
 }
});

export default RegisterScreen;
