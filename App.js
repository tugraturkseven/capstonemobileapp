import { Animated, View } from 'react-native'
import { Text, Button, useTheme } from 'react-native-paper';

export default function App() {
  const theme = useTheme();
  return (
    <View style={{ backgroundColor: theme.colors.primary, display: 'flex', height: "100%" }}>
      <Text variant="displaySmall" style={{ color: theme.colors.onPrimary, display: 'flex', textAlign: 'center', marginTop: 50, }}>Fire Detector</Text>

    </View>
  );
}

