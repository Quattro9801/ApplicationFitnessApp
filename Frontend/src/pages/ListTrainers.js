import React,{useState,useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ActivityIndicator} from 'react-native';
import {Header} from 'react-navigation-stack';

export default function ListTrainers ({ navigation: { navigate } }) {
    const[dataSource,setDataSource]=useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const Item=({ item })=> {
        return (
            <View style={styles.listItem}>
                <Image source={{uri:"https://www.bootdey.com/img/Content/avatar/avatar6.png"}}  style={{width:60, height:60,borderRadius:30}} />
                <View style={{alignItems:"center",flex:1}}>
                    <Text style={{fontWeight:"bold"}}>{item.surname}</Text>
                    <Text style={{fontWeight:"bold"}}>{item.name}</Text>
                    <Text style={{fontWeight:"bold"}}>{item.patronymic}</Text>
                    <Text style={{fontWeight:"bold"}}>Email: {item.email}</Text>
                    <Text>Телефон: {item.numberPhone}</Text>
                </View>
                <View>
                    <TouchableOpacity style={{height:50,width:50, justifyContent:"center",alignItems:"center"}}

                                     /* onPress={() =>
                                          alert("Раздел в разработке")}*/

                    >
                        <Text style={{color:"#ffffff"}}>Запись</Text>
                    </TouchableOpacity>
                </View>
            </View>

            );

    }
    const getListTrainers=()=> {
        fetch('http://sfitapp.herokuapp.com/api/person/trainers/trainer',{
            method: 'GET',
            headers: {  Accept: 'application/json',    'Content-Type': 'application/json' ,Authorization:global.token }}
        )
            .then(response => response.json())
            //If response is in json then in success
            .then(responseJson => {
                setDataSource(responseJson);
                setIsLoading(false);
                //Success
            })
            //If response is not in json then in error
            .catch(error => {
                //Error
                setIsLoading(false);
              console.log("Error")
            });
    }
    useEffect(()=>
    {
        getListTrainers()
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
                    Error fetching data... Check your network connection!
                </Text>
            </View>
        );
    }


    return (
                <FlatList
                    style={{flex:1}}
                    data={dataSource}
                    renderItem={Item}
                    keyExtractor={item => item.email}
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
        flex:1,
        alignSelf:"center",
        flexDirection:"row",
        borderRadius:5
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
        backgroundColor: "#00BFFF",
    },
});

