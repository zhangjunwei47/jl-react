import React from "react";
import { Text, Button, View } from "react-native"


export default class SFCDynamic extends React.Component {
  render(): React.ReactNode {
    const { navigation } = this.props
    return (
      <View>
        <Text> 车主服务</Text>
      </View>
    )
  }
};