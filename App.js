import { View, Image } from 'react-native'
import { Text, useTheme, Avatar } from 'react-native-paper';
import User from './components/User';

export default function App() {
  return (
    <View style={{ backgroundColor: 'black', display: 'flex', height: "100%" }}>
      <User ></User>
      <Text variant="displayMedium" style={{ color: 'white', display: 'flex', textAlign: 'center', marginTop: 10, fontWeight: '300' }}>Status</Text>
      <Avatar.Image size={72} style={{ backgroundColor: 'black', marginLeft: 'auto', marginRight: 'auto', marginTop: 30 }} source={require('../capstonemobileapp/assets/co2.png')} />
      <Text variant='titleLarge' style={{ color: 'white', fontWeight: 100, textAlign: 'center' }}>100</Text>
      <Avatar.Image size={72} style={{ backgroundColor: 'black', marginLeft: 'auto', marginRight: 'auto', marginTop: 125 }} source={require('../capstonemobileapp/assets/fire.png')} />
      <Text variant='titleLarge' style={{ color: 'white', fontWeight: 100, textAlign: 'center', marginTop: 30 }}>No fire detected.</Text>
      <Image source={require('../capstonemobileapp/assets/smoke-background.jpg')} style={{ marginTop: -40, zIndex: -1 }} />
    </View>
  );
}

