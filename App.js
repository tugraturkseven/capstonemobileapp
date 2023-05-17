import { View } from 'react-native'
import { Text, useTheme, Divider, ProgressBar, MD3Colors } from 'react-native-paper';
import User from './components/User';

export default function App() {
  const theme = useTheme();
  return (
    <View style={{ backgroundColor: theme.colors.secondaryContainer, display: 'flex', height: "100%" }}>
      <User />
      <Text variant="titleMedium" style={{ color: MD3Colors.primary10, display: 'flex', textAlign: 'center', marginTop: 50, }}>Smoke & Gas</Text>
      <ProgressBar animatedValue={0.35} style={{ margin: 30, }} color={MD3Colors.error50} />
      <Text variant="titleMedium" style={{ color: MD3Colors.primary10, display: 'flex', textAlign: 'center', marginTop: 50, }}>Is fire detected?</Text>
      <ProgressBar animatedValue={0.35} style={{ margin: 30, }} color={'green'} />
    </View>
  );
}

