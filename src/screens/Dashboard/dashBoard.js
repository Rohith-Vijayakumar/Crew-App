import React from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useUserAuth} from '../../context/useAuthContext';
import {SIZES} from '../../constants/theme';

import {getDatabase, ref, onValue, set} from 'firebase/database';
import {useNavigation} from '@react-navigation/native';
import {schedule} from '../../constants/dummyData/dummy';

const DashBoard = () => {
  const {user, loggedInUserDetails} = useUserAuth();
  const [data, setData] = React.useState({});
  const navigation = useNavigation();
  const [schedules, setSchedules] = React.useState(schedule);
  const [flightDetails, setFlightDetails] = React.useState('');
  const isMounted = React.useRef();
  let [isLoading, setIsLoading] = React.useState(true);
  let [error, setError] = React.useState();

  const getdatabases = async () => {
    const db = await getDatabase();
    return onValue(ref(db, '/users/' + user.uid), snapshot => {
      console.log(snapshot.val());
      const username = snapshot.val();
      // setIsLoading(false);
      setData(username);
      setIsLoading(false);
      console.log('The username from Dashboard', data.email);
    });
  };

  const getContent = () => {
    if (isLoading) {
      return <ActivityIndicator size="large" />;
    }

    if (error) {
      return <Text>{error}</Text>;
    }

    console.log('HI');
    return <View>{renderHeader()}</View>;
  };

  function renderHeader() {
    const renderItem = ({item, index}) => {
      return (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Process Compliance');
          }}
          style={{
            width: 180,
            paddingVertical: SIZES.padding,
            paddingHorizontal: SIZES.padding,
            marginLeft: index == 0 ? SIZES.padding : 10,
            marginRight: SIZES.radius,
            borderRadius: 10,
            backgroundColor: '#FFFEFA',
          }}>
          <View style={{flexDirection: 'column'}}>
            <View>
              <Text>{item.fromcode}</Text>
              <Text>{item.from}</Text>
              <Text>{item.depaturetime}</Text>
              <Text>{item.depaturedate}</Text>
              <Text>{item.flightnumber}</Text>
            </View>
            <View style={{marginLeft: 10}}>
              <Text>{item.tocode}</Text>
              <Text>{item.to}</Text>
              <Text>{item.arrivaltime}</Text>
              <Text>{item.arrivaldate}</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Schedule Details', {details: item});
            }}>
            <View style={{flexDirection: 'row-reverse'}}>
              <Text style={{color: 'blue'}}>Details</Text>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      );
    };

    return (
      <View style={{width: '100%', height: 290}}>
        <ImageBackground
          source={require('../../Assests/White.jpg')}
          style={{
            flex: 1,
            alignItems: 'center',
            height: 150,
            shadowColor: 'black',
          }}>
          <View
            style={{
              marginTop: SIZES.padding,
              width: '100%',
              alignItems: 'flex-end',
              paddingHorizontal: SIZES.padding,
            }}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                height: 20,
                width: 20,
                justifyContent: 'center',
              }}
              onPress={() => navigation.navigate('notifications')}>
              <Image
                resizeMode="contain"
                source={require('../../Assests/notifications.png')}
                style={{flex: 1}}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{fontWeight: '800', fontSize: 30}}>
              {' '}
              FLIGHT SCHEDULE
            </Text>
            <Text style={{fontWeight: '600', fontSize: 30, padding: 20}}>
              Welcome {data.firstnam}
            </Text>
          </View>
          <View style={{position: 'absolute', bottom: '-30%'}}>
            <Text style={{fontSize: 20}}>Flight Scheduled</Text>
            <FlatList
              contentContainerStyle={{marginTop: SIZES.base}}
              data={schedules}
              renderItem={renderItem}
              keyExtractor={item => `${item.id}`}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }

  React.useEffect(() => {
    getdatabases();
  }, []);

  return (
    <ScrollView>
      <View style={{flex: 1, paddingBottom: 130}}>{getContent()}</View>
    </ScrollView>
  );
};

export default DashBoard;
