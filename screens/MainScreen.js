import { View, Image } from 'react-native'
import { Text, Button, Avatar } from 'react-native-paper';
import { useState, useEffect } from 'react';

import axios from 'axios';

async function fetchData() {
  const data = JSON.stringify({
    "collection": "fire-status",
    "database": "fire-detection",
    "dataSource": "Cluster0",
  });

  const config = {
    method: 'post',
    url: 'https://eu-central-1.aws.data.mongodb-api.com/app/data-wcsbx/endpoint/data/v1/action/find',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': '7oS0Hwej21ixLROcwecd92caCtcyF35MXQbcARLCRaAbPrfy8QElPSTRT7Xp5WiE',
    },
    data: data
  };

  try {
    const response = await axios(config);
    return (response.data.documents)
  } catch (error) {
    console.log(error)
    throw error;
  }
}


export default function MainScreen({ navigation }) {
  const [gasValue, setGasValue] = useState(100);
  const [fireSts, setFireSts] = useState('Ates tespit edildi.')

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData().then(result => {
        const gas = result[0].gazDeger;
        const ates = result[0].atesTespit;
        setGasValue(gas);
        setFireSts(ates);
      });
    }, 1000);

    // Cleanup function to clear the interval when the component is unmounted
    return () => {
      clearInterval(interval);
    };
  }, []);


  return (
    <View style={{ backgroundColor: 'black', display: 'flex', height: "100%" }}>
      <Button icon='logout' textColor='white' onPress={() => navigation.navigate('Login')} style={{ marginLeft: 'auto', marginTop: 30, display: 'flex' }} />
      <Text variant="displayMedium" style={{ color: 'white', display: 'flex', textAlign: 'center', marginTop: 10, fontWeight: '300' }}>Status</Text>
      <Avatar.Image size={72} style={{ backgroundColor: 'black', marginLeft: 'auto', marginRight: 'auto', marginTop: 30 }} source={require('../assets/co2.png')} />
      <Text variant='titleLarge' style={{ color: 'white', fontWeight: 100, textAlign: 'center' }}>{gasValue}</Text>
      <Avatar.Image size={72} style={{ backgroundColor: 'black', marginLeft: 'auto', marginRight: 'auto', marginTop: 125 }} source={require('../assets/fire.png')} />
      <Text variant='titleLarge' style={{ color: 'white', fontWeight: 100, textAlign: 'center', marginTop: 30 }}>{fireSts}</Text>

      <Image source={require('../assets/smoke-background.jpg')} style={{ marginTop: -40, zIndex: -1 }} />
    </View>
  );
}

