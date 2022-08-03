import React, {useState} from 'react';
import {ScrollView, View, Text, Image, StyleSheet} from 'react-native';
import CustomInput from '../components/customInput';
import CustomButton from '../components/customButton';
import {COLORS, SIZES} from '../constants/theme';
import {useNavigation} from '@react-navigation/native';
import {useUserAuth} from '../context/useAuthContext';

const Signup = props => {
  const navigation = useNavigation();
  const [firstname, setFirstname] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmpassword, setConfirmpassword] = React.useState('');
  const [error, setError] = React.useState('');
  const {signUp, addUsers} = useUserAuth();
  const [getUserID, setGetUserID] = useState('');

  const handleSignup = async e => {
    e.preventDefault();
    setError('');

    try {
      await signUp(email, password)
        .then(res => {
          var userId = res.user.uid;
          console.log('The Response is', userId);
          addUsers(firstname, lastname, email, password, userId);
        })
        .catch(err => {
          alert(err);
        });

      navigation.replace('login');
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
          source={require('../Assests/signup.png')}
          resizeMode="center"
          style={styles.image}
        />
        <Text style={styles.textTitle}>Signup</Text>

        <View style={{marginTop: 20}} />
        <CustomInput
          placeholder="First Name"
          value={firstname}
          setValue={setFirstname}
        />
        <CustomInput
          placeholder="Last Name"
          value={lastname}
          setValue={setLastname}
        />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput
          placeholder="password"
          value={password}
          secureTextEntry
          setValue={setPassword}
        />
        <CustomInput
          placeholder="Confirm Password"
          value={confirmpassword}
          secureTextEntry
          setValue={setConfirmpassword}
        />

        <CustomButton title="Sign Up" color="#0148a4" onPress={handleSignup} />

        <View style={{flexDirection: 'row', marginVertical: 5}}>
          <Text style={styles.textBody}>Already Have an account?</Text>
          <Text
            style={[styles.textBody, {color: 'blue'}]}
            onPress={() => navigation.navigate('login')}>
            {' '}
            Login
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signup;

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
    height: SIZES.height * 0.2,
    marginVertical: 10,
  },
  textTitle: {fontFamily: 'Foundation', fontSize: 40, marginVertical: 10},
});
