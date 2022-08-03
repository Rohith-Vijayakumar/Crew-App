// import React, {Component} from 'react';
// import {View, StyleSheet, ScrollView, TextInput} from 'react-native';
// // import Icon from 'react-native-vector-icons/FontAwesome';
// // import {Input} from 'react-native-elements';

// class Inputs extends Component {
//   state = {isFocused: false};

//   onFocusChange = () => {
//     this.setState({isFocused: true});
//   };

//   render() {
//     return (
//       <View
//         style={[
//           styles.container,
//           {borderColor: this.state.isFocused ? '#0779ef' : '#eee'},
//         ]}>
//         <TextInput
//           placeholder={this.props.name}
//           onFocus={this.onFocusChange}
//           inputContainerStyle={styles.inputContainer}
//           inputStyle={styles.inputText}
//           secureTextEntry={this.props.pass}
//           // value={this.props.value}
//         />
//       </View>
//     );
//   }
// }

// // const styles = StyleSheet.create({
// //   container: {
// //     width: '90%',
// //     height: 50,
// //     borderRadius: 100,
// //     marginVertical: 10,
// //     borderWidth: 3.5,
// //   },
// //   inputContainer: {
// //     borderBottomWidth: 0,
// //   },
// //   inputText: {
// //     color: '#0779e4',
// //     fontWeight: 'bold',
// //     marginLeft: 5,
// //   },
// // });

// export default Inputs;

import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
// import styles from './style.js';

const customInput = ({value, setValue, placeholder, secureTextEntry}) => {
  // const [isFocused, setisFocused] = React.useState(false);
  // onFocusChange = () => {
  //   setisFocused(true);
  // };

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry} //for secure typing
        style={styles.input}
        // onFocus={{onFocusChange}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 50,
    borderRadius: 100,
    marginVertical: 10,
    borderWidth: 3.5,
  },
  inputContainer: {
    borderBottomWidth: 0,
  },
  inputText: {
    color: '#0779e4',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
export default customInput;
