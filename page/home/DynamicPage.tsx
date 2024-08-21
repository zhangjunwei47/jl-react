import React from "react";
import { Text, Button, View } from "react-native"


export default class DynamicPage extends React.Component {
    render(): React.ReactNode {
        const { navigation } = this.props
        return (
            <View>
                <Text>配置页面</Text>
            </View>
        )
    }
};