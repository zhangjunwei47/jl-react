import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Page1 from "../page/Page1";
import Page2 from "../page/Page2";
import Page3 from "../page/Page3";
import HomePage from "../page/HomePage";

const AppNavigator = createNativeStackNavigator()

function MyStackNavigator() {
    return (
        <AppNavigator.Navigator initialRouteName="HomePage">
            <AppNavigator.Screen name="HomePage"
                component={HomePage}
                options={{ title: '首页' }}
            />
            <AppNavigator.Screen name="Page1"
                component={Page1}
                options={{ title: 'Page1' }} />

            <AppNavigator.Screen name="Page2"
                component={Page2}
                options={{ title: 'Page2' }} />

            <AppNavigator.Screen name="Page3"
                component={Page3}
                options={{ title: 'Page3' }} />
        </AppNavigator.Navigator>
    );
}

export default MyStackNavigator;