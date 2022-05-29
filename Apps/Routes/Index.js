import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screen/Home";

const Stack = createNativeStackNavigator();

const Router = () => (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
);

export default Router;