import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../page/home/HomePage";
import DriverPage from "../page/home/DriverPage";
import DynamicPage from "../page/home/DynamicPage";
import MinePage from "../page/home/MinePage";
import SFCarHomePage from "../page/sfcar/SFCarHomePage";

const AppNavigator = createNativeStackNavigator()

const BottomNavigion = createBottomTabNavigator()


/**
 * 设置四个icon , 标题, 点击和默认颜色
 * @returns 
 */
function MyBottomTabNavigaton() {
    return (
        <BottomNavigion.Navigator screenOptions={{ tabBarActiveTintColor: 'blue' }}>
            <BottomNavigion.Screen name="首页" component={HomePage} />
            <BottomNavigion.Screen name="车主" component={DriverPage} />
            <BottomNavigion.Screen name="运营" component={DynamicPage} />
            <BottomNavigion.Screen name="我的" component={MinePage} />
        </BottomNavigion.Navigator>
    )
}


function MyStackNavigator() {
    return (
        <AppNavigator.Navigator initialRouteName="HomePage">
            <AppNavigator.Screen name="HomePage"
                component={MyBottomTabNavigaton} />
            <AppNavigator.Screen name="DriverPage"
                component={DriverPage} />
            <AppNavigator.Screen name="SFCarHomePage"
                component={SFCarHomePage} />
        </AppNavigator.Navigator>
    );
}

export default MyStackNavigator;