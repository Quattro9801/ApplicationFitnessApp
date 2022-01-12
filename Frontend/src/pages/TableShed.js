import React,{useState,useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ActivityIndicator} from 'react-native';
import {Header} from 'react-navigation-stack';

export default function TableShed ({ navigation: { navigate } }) {
    const[dataSource,setDataSource]=useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(null);
    const  renderSeparator=()=>{
        return(
            <View
                style={{
                    height: 0.5,
                    width: '100%',
                    backgroundColor: '#C8C8C8'
                }}
            />
        )
    }

   const Item=({ item,index })=> {
        return (
            <View style={styles.listItem}>
                <Image source={require('../screens/diet.png')} style={{width:60, height:60}} />
                <View style={{alignItems:"center",flex:1}}>
                    <Text style={{fontWeight:"bold",fontSize:22}}>Дата: {item.date}</Text>
                    <Text style={styles.textOutput}>Фамилия: {item.surname}</Text>
                    <Text style={styles.textOutput}>Имя: {item.name}</Text>
                    <Text style={styles.textOutput}>Время: {item.time}</Text>
                    <Text style={styles.textOutput}>Длительность: {item.duration}</Text>
                    <Text style={styles.textOutput}>Название: {item.disciplineName}</Text>
                    <Text style={styles.textOutput}>Адрес: {item.location}</Text>
                    <Text style={styles.textOutput}>Зал №: {item.hallNumber}</Text>
                    <Text>{item.numberPhone}</Text>

            </View>
            </View>
        );

    }
const deleteShedRow=(id)=>
    {
        fetch('http://sfitapp.herokuapp.com/api/schedule/scheduleRow/'+id,
            {
                method: 'DELETE',
                headers: {  Accept: 'application/json',    'Content-Type': 'application/json' ,Authorization:global.token }
            })
            .then(() => setStatus('Delete successful'));
                //Success
    }
            //If response is not in json then in error

    const getSchedule=()=> {
        fetch('http://sfitapp.herokuapp.com/api/schedule/trainer',{
            method: 'GET',
            headers: {  Accept: 'application/json',    'Content-Type': 'application/json' ,Authorization:global.token }}
        )
            .then(response => response.json())
            //If response is in json then in success
            .then(responseJson => {
                setDataSource(responseJson);
                setIsLoading(false)
                //Success
            })
            //If response is not in json then in error
            .catch(error => {
                //Error
                setIsLoading(false)
                console.log("Error")
            });
    }

    useEffect( ()=>
    {
        getSchedule()
    });

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#5500dc" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 18}}>
                    Ошибка соединения!Проверьте интернет соединение
                </Text>
            </View>
        );
    }

    return (
        <FlatList
            style={{flex:1}}
           // data={dataSource.sort((a, b) => a.date.localeCompare(b.date))}
            data={dataSource}
            renderItem={Item}
           // keyExtractor={item => item.id}
            keyExtractor={(item,index)=>index.toString()}
        />


    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
        marginTop:60
    },
    listItem:{
        margin:10,
        padding:10,
        backgroundColor:"#FFF",
        width:"90%",
        borderRadius:5,

    },
    textOutput:{
        fontSize:19
    },
    buttonContainer: {
        marginTop:10,
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
        backgroundColor: "#87CEFA",
    },
    body:{
        marginTop:30,
        alignItems: 'center'

    },
});

