import React from 'react';
import {View, Text} from 'react-native';
import {Checkbox, RadioButton} from 'react-native-paper';
import {ref, onValue, getDatabase} from 'firebase/database';
// import { Checkbox } from 'react-native-paper';

const ProcessCompliance = () => {
  const [value, setValue] = React.useState('');
  const [checked, setChecked] = React.useState(true);
  const [compliance, setCompliance] = React.useState('');

  const getcompliance = () => {
    const db = getDatabase();
    const id = 'compliance';
    return onValue(ref(db, '/process/' + id), snapshot => {
      // console.log(snapshot.val());
      const comp = snapshot.val();
      setCompliance(comp);
      console.log('The compliance from Dashboard', compliance);
    });
  };

  React.useEffect(() => {
    getcompliance();
  }, []);

  return (
    <View>
      {/* <Text>Process Compliance</Text> */}
      <Text>Post flight de-brief conducted </Text>

      <RadioButton.Group
        onValueChange={newValue => setValue(newValue)}
        value={value}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RadioButton value="Yes" />
          <Text>Yes</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RadioButton value="No" />
          <Text>No</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RadioButton value="N/A" />
          <Text>N/A</Text>
        </View>
      </RadioButton.Group>
      <Text>Any Deviation</Text>
      <RadioButton.Group
        onValueChange={newValue => setValue(newValue)}
        value={value}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RadioButton value="Yes" />
          <Text>Yes</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RadioButton value="No" />
          <Text>No</Text>
        </View>
      </RadioButton.Group>
      <Text>Lead asked for cockpit meal on the ground</Text>
      <RadioButton.Group
        onValueChange={newValue => setValue(newValue)}
        value={value}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RadioButton value="Yes" />
          <Text>Yes</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RadioButton value="No" />
          <Text>No</Text>
        </View>
      </RadioButton.Group>
      <Text>Customer Experience Champion</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Checkbox.Item
          onPress={() => {
            if (checked === true) {
              setChecked(false);
            } else {
              setChecked(true);
            }
          }}
          status={checked ? 'checked' : 'unchecked'}
        />
        <Text>L2</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Checkbox
          onPress={() => {
            if (checked === true) {
              setChecked(false);
            } else {
              setChecked(true);
            }
          }}
          status={checked ? 'checked' : 'unchecked'}
        />
        <Text>R1</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Checkbox
          onPress={() => {
            if (checked === true) {
              setChecked(false);
            } else {
              setChecked(true);
            }
          }}
          status={checked ? 'checked' : 'unchecked'}
        />
        <Text>R2</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Checkbox
          onPress={() => {
            if (checked === true) {
              setChecked(false);
            } else {
              setChecked(true);
            }
          }}
          status={checked ? 'checked' : 'unchecked'}
        />
        <Text>N/A</Text>
      </View>
    </View>
  );
};

export default ProcessCompliance;
