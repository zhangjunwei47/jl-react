import React from "react";
import { Text, Button, View } from "react-native"


export default class HomePage extends React.Component {
    render(): React.ReactNode {
        const { navigation } = this.props;
        return (
            <View>
                <Text> 我是首页</Text>
                <Button title="进入下一个页面" onPress={() => navigation.navigate("Page1")} />
                <Button title="进入第二个页面" onPress={() => navigation.navigate("Page2")} />
                <Button title="进入第三个页面" onPress={() => navigation.navigate("Page3")} />
            </View>
        )
    }
};