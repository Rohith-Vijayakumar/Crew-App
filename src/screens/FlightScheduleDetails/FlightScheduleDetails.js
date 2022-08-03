import React from 'react';
import {View, Text} from 'react-native';

const FlightScheduleDetails = ({route}) => {
  const [details, setDetails] = React.useState('');

  React.useEffect(() => {
    const {details} = route.params;
    setDetails(details);
  }, []);

  return (
    <View>
      {/* <Text>{details.id}</Text> */}
      <Text>Flight Depature: {details.from}</Text>
      <Text>Flight Arrival: {details.to}</Text>
      <Text> Flight Depature Time: {details.depaturetime}</Text>
      <Text> Flight Arrival Time:{details.arrivaltime}</Text>
      <Text>Flight Number{details.flightnumber}</Text>
    </View>
  );
};

export default FlightScheduleDetails;
