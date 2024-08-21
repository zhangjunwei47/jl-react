import React from "react";
import { Text, Button, View } from "react-native"
import SFCarHomePage from "../sfcar/SFCarHomePage";

export default class HomePage extends React.Component {
    render(): React.ReactNode {
        const { navigation } = this.props;
        return (
            <View>
                <Text style={{ padding: 20, fontSize: 20 }} onPress={() => navigation.navigate('DriverPage')}>打车</Text>
                <Text style={{ padding: 20, fontSize: 20 }} onPress={() => navigation.navigate('SFCarHomePage')}>顺风车</Text>
            </View>
        )
    }
};