import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity, Alert, Keyboard,
} from 'react-native';

import Snackbar from 'react-native-paper/src/components/Snackbar';

export default function  Authorization({ navigation: { navigate } }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [dataSource,setDataSource]=useState([]);
    const [accessToken,setAccessToken]=useState([]);
    const [Id, setId] = useState(null);
    const [dataSourceUsername, setDataSourceUsername] = useState("");
    const [dataSourceError, setDataSourceError] = useState([]);
    const [visible, setVisible] = React.useState(false);
    const onToggleSnackBar = () => setVisible(true);
    const onDismissSnackBar = () => setVisible(false);
    global.token='Bearer '+ dataSource.accessToken;
    global.userId=dataSource.id;

   const fetchData=()=> {
        fetch('http://sfitapp.herokuapp.com/api/auth/signin',{
            method: 'POST',
            headers: {  Accept: 'application/json',    'Content-Type': 'application/json' ,
                Authorization: global.token} ,

            body: JSON.stringify({
                username: username,
                password: password
            }
        )})
            .then(response => response.json())
            //If response is in json then in success
            .then(responseJson => {
                setDataSource(responseJson);
            })
            //If response is not in json then in error
            .catch(error => {
                //Error

         });
    }
    const simpleAlertHandler = () => {
           Alert.alert("Сообщение", "Проверьте введенные данные", [
               { text: "OK", onPress: () => console.log("ok Pressed") },

             ])
       }

    const postData=()=>
    {
    fetchData()
    checkAuthFields()
    }

    const TimerClick=()=>{

         setTimeout(function(){

    }, 6000);


  }

const checkAuthFields=()=> {
    if (dataSource.tokenType==='Bearer' && username===dataSource.username ) {
        TimerClick()
         navigate('UserProfile')
    }
    else if (dataSource.tokenType!='Bearer') {
          onToggleSnackBar()
    }

  }
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../screens/fitness2.png')} />
            <Text style={styles.textOutput}>SfitApp</Text>
            <StatusBar style="auto"
            />
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder='Логин'
                    placeholderTextColor="#808080"
                    onChangeText={(username) => setUsername(username)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Пароль"
                    placeholderTextColor="#808080"

                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}


                />
            </View>
            <TouchableOpacity
                onPress={() =>
                    navigate('Registration')
                }
            >
                <Text style={styles.registration_button}>Регистрация</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.loginBtn}
                onPress={() =>postData()
                }
                >
                <Text style={styles.loginText}>Войти</Text>
            </TouchableOpacity>
            <Snackbar style={styles.snack}
                visible={visible}
                onDismiss={onDismissSnackBar}
                duration={1000}
            >
               <Text styles={styles.snack}>Проверьте введенные данные</Text>

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
        marginBottom: 20,
    },
    registration_button: {
        height: 20,
        marginBottom: 20,


    },
    snack:{
        backgroundColor:'#8B0000',

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
    }



});
