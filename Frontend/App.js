import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Authorization from './src/pages/Authorization';
import Registration from './src/pages/Registration';
import UserProfile from './src/pages/UserProfile';
import UpdateUserData from './src/pages/UpdateUserData';
import ListTrainers from './src/pages/ListTrainers';
import TableShed from './src/pages/TableShed';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator  initialRouteName="Authorization"
            >
               <Stack.Screen
                    name="Авторизация"
                    component={Authorization}

                />
                <Stack.Screen
                name="Registration"
                component={Registration}
                options={{
                    title: 'Регистрация', //Set Header Title
                }}

            />
                <Stack.Screen
                    name="ListTrainers"
                    component={ListTrainers}
                    options={{
                        title: 'Тренерский состав', //Set Header Title
                    }}

                />

                <Stack.Screen
                    name="TableShed"
                    component={TableShed}
                    options={{
                        title: 'Расписание занятий', //Set Header Title
                    }}

                />



                <Stack.Screen
                    name="UpdateUserData"
                    component={UpdateUserData}
                    options={{
                        title: 'Заполнить/изменить данные', //Set Header Title
                    }}

                />

                <Stack.Screen
                    name="UserProfile"
                    component={UserProfile}
                    options={{
                        title: 'Профиль',
                        headerShown: false,//свойство отвечающее за отображение стрелки в навигации
                    }
                  }
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
