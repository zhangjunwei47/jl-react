import React from "react";
import { Text, Button, View } from "react-native"


export default class MinePage extends React.Component {
    render(): React.ReactNode {
        const { navigation } = this.props
        return (
            <View>
                <Text>我的页面</Text>
            </View>
        )
    }
};