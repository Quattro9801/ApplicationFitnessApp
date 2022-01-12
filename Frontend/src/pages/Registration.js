import {StatusBar} from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,Alert
} from 'react-native';
import TextInjection from 'react-native/Libraries/Text/TextInjection';
import Snackbar from 'react-native-paper/src/components/Snackbar';
import {getBackgroundColor} from 'react-native/Libraries/LogBox/UI/LogBoxStyle';

export default function  Registration({ navigation }) {
    const [email, setEmail] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [dataSource,setDataSource]=useState([]);
    const [id,setId]=useState('');
    const [visible, setVisible] = React.useState(false);
    const onToggleSnackBar = () => setVisible(true);
    const onDismissSnackBar = () => setVisible(false);
    const[message,setMessage]=useState([])

    const Registration=()=> {
         fetch('http://sfitapp.herokuapp.com/api/auth/signup', {
            method: 'POST',
            headers: {Accept: 'application/json', 'Content-Type': 'application/json',},

            body: JSON.stringify({
                    email: email,
                    username: username,
                    password: password
                }
            )
        })
            .then(response => response.json())
            //If response is in json then in success
            .then(responseJson => {
                setDataSource(responseJson);
                setMessage(responseJson)
                //Success
            })
            //If response is not in json then in error
            .catch(error => {
                //Error
                console.log('Error')
        });
    }

        const checkRow=()=>
        {
            setMessage([])
            if (username ==='' || password ==='' || email ==='' || username.length<3 || username.length>20  || password.length < 6 || password.length > 40 || email.includes('@') == false || email.includes('.') == false )

            {
               onToggleSnackBar()

            }
                else {
                Registration();


            }
        }

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../screens/registration.png')} />
            <Text style={styles.textOutput}>Регистрация пользователя</Text>
            <StatusBar style="auto"/>
            <View style={styles.inputView}>
                <TextInput maxLength={20}

                    style={styles.TextInput}
                    placeholder="Email"
                    placeholderTextColor="#808080"
                    onChangeText={email => setEmail(email)}
                />

            </View>
            <View style={styles.inputView}>
                <TextInput maxLength={40}
                    style={styles.TextInput}
                    placeholder="Пароль"
                    placeholderTextColor="#808080"
                    secureTextEntry={true}
                    onChangeText={password => setPassword(password)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput maxLength={20}

                    style={styles.TextInput}
                    placeholder="Логин"
                    placeholderTextColor="#808080"
                    onChangeText={username => setUserName(username)}
                />

            </View>
            <TouchableOpacity
                style={styles.loginBtn}
                onPress={() =>checkRow()
                }>
                <Text style={styles.loginText}>Зарегестрироваться</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.message}>
                <Text style={styles.loginText}>{JSON.stringify(message.message)}</Text>
            </TouchableOpacity>

            <Snackbar style={styles.snack}
                visible={visible}
                onDismiss={onDismissSnackBar}
                duration={4000}
            >
                <Text styles={styles.snack}>Проверьте корректность введенных данных (Пароль (6-40 сиволов), Логин(3-20 символов), почта вводится через @ и .) </Text>
            </Snackbar>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    image: {
        marginBottom: 40,

    },

    inputView: {
        backgroundColor: '#87CEFA',
        borderRadius: 30,
        width: '70%',
        height: 45,
        marginBottom: 20,

        alignItems: 'center',
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },

    forgot_button: {
        height: 30,
        marginBottom: 30,
    },
    registration_button: {
        height: 20,
        marginBottom: 0,
    },

    loginBtn: {
        width: '80%',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        backgroundColor: '#87CEFA',
    },
    textOutput:{
        fontWeight:"bold",
        fontSize:22,
        marginBottom:30
    },
    snack:{
        backgroundColor:'#8B0000',

    },message:
        {
            backgroundColor: '#fff'
        }
});
