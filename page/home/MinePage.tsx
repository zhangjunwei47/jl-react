import React from "react";
import { Text, Button, View } from "react-native"


export default class MinePage extends React.Component {
    render(): React.ReactNode {
        const { navigation } = this.props
        return (
            <View>
                <Text> 这是第三个页面</Text>
                <Button title="goBack " onPress={() => navigation.goBack()} />
            </View>
        )
    }
};