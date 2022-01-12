<NavigationContainer>
    <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen
            name="FirstPage"
            component={FirstPage}
            options={{
                title: 'First Page', //Set Header Title
                headerStyle: {
                    backgroundColor: '#f4511e', //Set Header color
                },
                headerTintColor: '#fff', //Set Header text color
                headerTitleStyle: {
                    fontWeight: 'bold', //Set Header text style
                },
            }}
        />
        <Stack.Screen name="SecondPage" component={SecondPage}/>
        <Stack.Screen name="ThirdPage" component={ThirdPage}/>
    </Stack.Navigator>
</NavigationContainer>
