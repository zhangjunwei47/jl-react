import React from "react";
import { Text, Button, View } from "react-native"


export default class DriverPage extends React.Component {
    render(): React.ReactNode {
        const { navigation } = this.props
        return (
            <View>
                <Text> 这是第一个页面</Text>
                <Button title="进入下一个页面" onPress={() => navigation.navigate("MinePage")} />
                <Button title="goBack " onPress={() => navigation.goBack()} />
            </View>
        )
    }
};