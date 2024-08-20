import React from "react";
import { Text, Button, View } from "react-native"


export default class Page2 extends React.Component {
    render(): React.ReactNode {
        const { navigation } = this.props
        return (
            <View>
                <Text> 这是第二个页面</Text>
                <Button title="进入下一个页面" onPress={() => navigation.navigation("Page3")} />
                <Button title="goBack " onPress={() => navigation.goBack()} />
            </View>
        )
    }
};