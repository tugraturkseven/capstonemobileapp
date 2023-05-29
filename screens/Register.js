import { View, Image, StyleSheet } from 'react-native'
import { Text, TextInput, Avatar, Button, MD3Colors } from 'react-native-paper';
import React, { useState } from 'react';
import axios from 'axios';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

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


async function insertUser(username, password) {
    const data = JSON.stringify({
        "collection": "login-info",
        "database": "fire-detection",
        "dataSource": "Cluster0",
        "document": {
            "username": username,
            "password": password
        }
    });

    const config = {
        method: 'post',
        url: 'https://eu-central-1.aws.data.mongodb-api.com/app/data-wcsbx/endpoint/data/v1/action/insertOne',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key': '7oS0Hwej21ixLROcwecd92caCtcyF35MXQbcARLCRaAbPrfy8QElPSTRT7Xp5WiE',
        },
        data: data
    };

    try {
        const response = await axios(config);
        console.log(response.data)

    } catch (error) {
        console.log(error)
        throw error;
    }
}


export default function Register({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secureText, setSecureText] = useState(true);

    const createUser = () => insertUser(email, password);

    return (
        <KeyboardAwareScrollView style={{ backgroundColor: 'black', height: '100%' }} >
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
                <Button icon="account-check" mode="contained" style={{ width: 150, marginLeft: 'auto', marginRight: 'auto', backgroundColor: MD3Colors.neutralVariant20 }} rippleColor={MD3Colors.neutralVariant40} onPress={createUser} >
                    Kayıt ol
                </Button>
                <Button icon="keyboard-backspace" mode="text" textColor='white' style={{ width: 150, marginLeft: 'auto', marginRight: 'auto', marginTop: 10 }} rippleColor={MD3Colors.neutralVariant40} onPress={() => navigation.navigate('Login')} >
                    Geri Dön
                </Button>
            </View>
            <Image source={require('../assets/smoke-background.jpg')} style={styles.smoke} />
        </KeyboardAwareScrollView >
    )
}
