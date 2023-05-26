import { View, Image, SafeAreaView, StyleSheet } from 'react-native'
import { Text, TextInput, Avatar, Button, MD3Colors } from 'react-native-paper';
import React, { useState } from 'react';

const styles = StyleSheet.create({
    fire: {
        zIndex: -1,
        transform: 'rotate(180deg)',
    },
    roboto: {
        fontFamily: 'Roboto',
        fontWeight: 300,
        color: 'white',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    smoke: {
        zIndex: -1,
        height: '30%'
    }
});

export default function Register({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secureText, setSecureText] = useState(true);

    return (
        <SafeAreaView style={{ backgroundColor: 'black', height: '100%' }} >
            <Image source={require('../assets/fire-background.jpg')} style={styles.fire} />
            <View>
                <Avatar.Icon size={136} icon="account-circle" style={{ backgroundColor: 'black', marginLeft: 'auto', marginRight: 'auto', marginTop: -200, }} />
                <Text style={styles.roboto} variant='titleMedium'>Kullanıcı Adı</Text>
                <TextInput value={email} onChangeText={x => setEmail(x)} outlineColor='white' mode='outlined' style={{ width: 300, height: 40, marginLeft: 'auto', marginRight: 'auto', borderColor: 'white', marginBottom: 10 }} />
                <Text style={styles.roboto} variant='titleMedium'>Şifre</Text>
                <TextInput
                    secureTextEntry={secureText}
                    value={password} onChangeText={x => setPassword(x)} outlineColor='white' mode='outlined' style={{ width: 300, height: 40, marginLeft: 'auto', marginRight: 'auto', borderColor: 'white', marginBottom: 10 }}
                    right={<TextInput.Icon icon="eye" style={{ marginTop: 'auto', marginBottom: 'auto', marginLeft: 'auto', marginRight: 'auto' }} size={18} onPress={() => setSecureText(!secureText)} />}
                />
                <Button icon="account-check" mode="contained" style={{ width: 150, marginLeft: 'auto', marginRight: 'auto', backgroundColor: MD3Colors.neutralVariant20 }} rippleColor={MD3Colors.neutralVariant40} onPress={() => navigation.navigate('Main')} >
                    Kayıt ol
                </Button>
                <Button icon="keyboard-backspace" mode="text" textColor='white' style={{ width: 150, marginLeft: 'auto', marginRight: 'auto', marginTop: 10 }} rippleColor={MD3Colors.neutralVariant40} onPress={() => navigation.navigate('Login')} >
                    Geri Dön
                </Button>
            </View>
            <Image source={require('../assets/smoke-background.jpg')} style={styles.smoke} />
        </SafeAreaView >
    )
}
