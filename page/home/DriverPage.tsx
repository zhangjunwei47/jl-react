import React from "react";
import { Text, Button, View } from "react-native"


export default class DriverPage extends React.Component {
    render(): React.ReactNode {
        const { navigation } = this.props
        return (
            <View>
                <Text>车主页面</Text>
            </View>
        )
    }
};