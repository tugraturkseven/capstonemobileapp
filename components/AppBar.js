import * as React from 'react'
import { Appbar } from 'react-native-paper';
import { useTheme } from 'react-native-paper';
const AppBar = () => {
    const theme = useTheme();

    return (
        <Appbar.Header style={{ backgroundColor: theme.colors.primary, display: 'flex' }}>
            <Appbar.Content title="Fire Detector" mode='large' mode="center-aligned" />
        </Appbar.Header>
    )
}

export default AppBar