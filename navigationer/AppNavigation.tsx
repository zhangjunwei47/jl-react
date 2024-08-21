import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../page/home/HomePage";
import DriverPage from "../page/home/DriverPage";
import DynamicPage from "../page/home/DynamicPage";
import MinePage from "../page/home/MinePage";
import SFCarHomePage from "../page/sfcar/SFCarHomePage";
import Ionicons from 'react-native-vector-icons/Ionicons';
import SFCInvitePsgPage from "../page/sfcar/SFCInvitePsgPage";

const AppNavigator = createNativeStackNavigator()

const BottomNavigion = createBottomTabNavigator()


function MyBottomTabNavigaton() {
    return (
        <BottomNavigion.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                // 根据不同的 route.name 设置不同的图标
                if (route.name === '首页') {
                    iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === '车主') {
                    iconName = focused ? 'car' : 'car-outline';
                } else if (route.name === '运营') {
                    iconName = focused ? 'briefcase' : 'briefcase-outline';
                } else if (route.name === '我的') {
                    iconName = focused ? 'person' : 'person-outline';
                }

                // 返回图标组件
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'blue',  // 活跃状态的颜色
            tabBarInactiveTintColor: 'gray',  // 非活跃状态的颜色
        })}>
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
            <AppNavigator.Screen
                name="HomePage"
                component={MyBottomTabNavigaton}
                options={{ headerShown: false }}
            />
            <AppNavigator.Screen
                name="SFCarHomePage"
                component={SFCarHomePage}
                options={{ headerShown: false }}
            />
            <AppNavigator.Screen
                name="SFCInvitePsgPage"
                component={SFCInvitePsgPage}
            />
        </AppNavigator.Navigator>
    );
}

export default MyStackNavigator;