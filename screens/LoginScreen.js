import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ImageBackground,
  StyleSheet,
} from 'react-native';

const LoginScreen = ({ navigation }) => {

   const [username, setUsername] = useState();
   const [password, setPassword] = useState();

   const loginFunction = () => {
      alert(`Username: ${username}\nPassword ${password}`);
      setUsername('');
      setPassword('');
   }

  return (
    <>
      <ImageBackground source={require('./images/LoginScreen.png')} style={styles.image}>
         <TextInput placeholder="Username" style={{
            fontSize: 30,
            marginTop: 265,
            marginLeft: 30,
            width: 270,
            color: 'grey',
         }} value = {username} onChangeText={(text) => setUsername(text)} />
         <TextInput placeholder="Password" style={{
            fontSize: 30,
            marginTop: 5,
            marginLeft: 30,
            width: 270,
            color: 'grey',
         }} secureTextEntry={true} value={password} onChangeText={(text) => setPassword(text)} />
         <View opacity={0} style={styles.buttonView}>
          <Button title="" style={styles.button} onPress={loginFunction} />
        </View> 
        <View opacity={0} style={styles.buttonViewSecond}>
          <Button title="" onPress={() => navigation.navigate('Register')} />
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
    marginTop: -80,
    marginLeft: 345,
    width: "10%", 
    margin: 10,
    fontSize: 20,
  },
  buttonViewSecond: {
    width: "33%",
    marginTop: 155, 
    margin: 10,
    fontSize: 20,
  }
 });

export default LoginScreen;
