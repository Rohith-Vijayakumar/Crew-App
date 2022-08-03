import React from 'react';
import {Text, Pressable, StyleSheet, TouchableOpacity} from 'react-native';

const customButton = ({onPress, title, color}) => {
  return (
    // <Pressable onPress={onPress} style={styles.container}>
    //   <Text style={styles.submitText}>{text}</Text>
    // </Pressable>
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {backgroundColor: color}]}>
      <Text style={styles.submitText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default customButton;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 50,
    borderColor: 'blue',
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: 0,
  },
  submitText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    marginVertical: 10,
  },
});
