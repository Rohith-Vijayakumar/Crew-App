import React from 'react';
import {ScrollView, View, Text, Image, StyleSheet, Button} from 'react-native';
import CustomInput from '../components/customInput';
import CustomButton from '../components/customButton';
import {COLORS, SIZES} from '../constants/theme';
import Submit from '../components/submit';
import {useNavigation} from '@react-navigation/native';
import {useUserAuth} from '../context/useAuthContext';
import Firebase from '../services/firebaseConfig';

const Login = props => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const {logIn} = useUserAuth();

  const handleLogin = async e => {
    e.preventDefault();
    setError('');
    try {
      await logIn(email, password).then(res => {
        console.log(res);
        // var userUID = firebase
      });
      navigation.replace('homescreen');
    } catch (err) {
      setError(err.message);
    }
    setEmail('');
    setPassword('');
  };

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../Assests/Login.png')}
          resizeMode="center"
        />
        {/* {error && {error}} */}
        <Text style={styles.texttitle}>Login Screen</Text>
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput
          // name="Password"
          placeholder="password"
          value={password}
          secureTextEntry
          setValue={setPassword}
        />
        {/* <Submit title="LOG IN" color="#0148a4" onPress={handleLogin} /> */}
        {/* <Text>{password}</Text> */}
        <CustomButton title="Login" color="#0148a4" onPress={handleLogin} />

        <View style={{width: '90%'}}>
          <Text
            style={([styles.textBody], {alignSelf: 'flex-end'})}
            onPress={() => navigation.navigate('forgotpassword')}>
            Forgot Password?
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginVertical: 5}}>
          <Text style={styles.textBody}>Don't Have an account</Text>
          <Text
            style={[styles.textBody, {color: 'blue'}]}
            onPress={() => navigation.navigate('signup')}>
            {' '}
            Sign Up
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBody: {
    fontFamily: 'Foundation',
    fontSize: 16,
  },
  image: {
    width: SIZES.width,
    height: SIZES.height * 0.3,
    marginVertical: 10,
  },
  texttitle: {fontFamily: 'Foundation', fontSize: 40, marginVertical: 10},
});
