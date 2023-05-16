import { View } from 'react-native'
import { Text, useTheme, Divider, ProgressBar, MD3Colors } from 'react-native-paper';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default function App() {
  const theme = useTheme();
  return (
    <View style={{ backgroundColor: theme.colors.onSecondaryContainer, display: 'flex', height: "100%" }}>
      <Text variant="headlineMedium" style={{ color: theme.colors.onPrimary, display: 'flex', textAlign: 'center', marginTop: 50, }}>🔥 Fire Detector 🔥</Text>
      <Divider style={{ marginTop: 10 }} />
      <Text variant="titleMedium" style={{ color: theme.colors.onPrimary, display: 'flex', textAlign: 'center', marginTop: 50, }}></Text>
      <AnimatedCircularProgress
        size={150}
        width={10}
        fill={80}
        tintColor="#D3010D"
        padding={10}
        backgroundColor="#3d587550" style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', }}>
        {
          (fill) => (
            <Text style={{ color: theme.colors.onPrimary }} >
              {"Smoke & Gas"}
            </Text>
          )
        }
      </AnimatedCircularProgress>
    </View>
  );
}

