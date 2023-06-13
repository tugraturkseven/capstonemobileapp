import { View, Image, StyleSheet } from 'react-native'
import { Text, TextInput, Avatar, Button, MD3Colors } from 'react-native-paper';
import React, { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import emailjs from '@emailjs/browser';
import axios from 'axios';
import ToastManager, { Toast } from 'toastify-react-native';

const styles = StyleSheet.create({
    fire: {
        zIndex: -1,
    },
    roboto: {
        fontWeight: 300,
        color: 'white',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    smoke: {
        zIndex: -1,
    }
});

const sendEmail = (email, password) => {
    var data = {
        service_id: 'service_ieygo1j',
        template_id: 'template_cuw0hgw',
        user_id: 'CbhhjOcb09pEJe7qB',
        template_params: {
            email: email,
            password: password
        }
    };
    emailjs.send(data.service_id, data.template_id, data.template_params, data.user_id);
}

async function fetchUsers(username) {
    const data = JSON.stringify({
        "collection": "login-info",
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
        const arr = [...response.data.documents];
        const result = arr.find(e => {
            if (e.username == username) {
                return e.password;
            } else {
                return false;
            }
        })

        if (result?.password) {
            return result.password;
        } else {
            return "user not found."
        }

    } catch (error) {
        console.log(error)
        throw error;
    }
}


export default function Forget({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const checkIdentity = () => {
        fetchUsers(email)
            .then(result => {
                if (result != "user not found.") {
                    console.log(result)
                    setPassword(result)
                    sendEmail(email, password);
                    Toast.success('Sifre maile gonderildi!', 'top');
                } else {
                    Toast.error('E posta hatali!', 'top');
                }
            })
            .catch(error => {
                Toast.error('Sifre gonderilemedi!', 'top');
            });
    }


    return (
        <KeyboardAwareScrollView style={{ backgroundColor: 'black', height: '100%' }} >
            <Image source={require('../assets/fire-background.jpg')} style={styles.fire} />
            <ToastManager />
            <View>
                <Avatar.Icon size={136} icon="account-circle" style={{ backgroundColor: 'black', marginLeft: 'auto', marginRight: 'auto', marginTop: -200, }} />
                <Text style={styles.roboto} variant='titleMedium'>Kullanıcı Adı</Text>
                <TextInput value={email} onChangeText={x => setEmail(x)} outlineColor='white' mode='outlined' style={{ width: 300, height: 40, marginLeft: 'auto', marginRight: 'auto', borderColor: 'white', marginBottom: 10 }} />
                <Button icon="send" mode="contained" style={{ width: 150, marginLeft: 'auto', marginRight: 'auto', backgroundColor: MD3Colors.neutralVariant20 }} rippleColor={MD3Colors.neutralVariant40} onPress={checkIdentity} >
                    Şifreyi gönder
                </Button>
                <Button icon="keyboard-backspace" mode="text" textColor='white' style={{ width: 150, marginLeft: 'auto', marginRight: 'auto', marginTop: 10 }} rippleColor={MD3Colors.neutralVariant40} onPress={() => navigation.navigate('Login')} >
                    Geri Dön
                </Button>
            </View>
            <Image source={require('../assets/smoke-background.jpg')} style={styles.smoke} />
        </KeyboardAwareScrollView >
    )
}
