import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screen/Home";
import Detail from "../Screen/Detail";


const Stack = createNativeStackNavigator();

const Router =()=> (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="Detail" component={Detail} options={{headerShown:false}}/>
    </Stack.Navigator>
);

export default Router;