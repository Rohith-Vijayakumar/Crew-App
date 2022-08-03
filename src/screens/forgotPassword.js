import React from 'react';
import {ScrollView, View, Text, Image, StyleSheet} from 'react-native';
import Inputs from '../components/input';
import {COLORS, SIZES} from '../constants/theme';
import Submit from '../components/submit';
import {useNavigation} from '@react-navigation/native';
import CustomInput from '../components/customInput';

const ForgotPassword = props => {
  const navigation = useNavigation();
  const [error, setError] = React.useState('');
  const [email, setEmail] = React.useState('');

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../Assests/forgotpassword.png')}
          resizeMode="center"
        />
        <Text style={styles.textTitle}>ForgotPassword</Text>
        {/* <Text style={styles.textBody}> Enter Email</Text> */}
        <CustomInput
          placeholder="Enter Email"
          value={email}
          setValue={setEmail}
        />
        <Submit title="Reset Password" color="#0148a4" />
      </View>
    </ScrollView>
  );
};

export default ForgotPassword;

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
  textTitle: {fontFamily: 'Foundation', fontSize: 40, marginVertical: 10},
});
