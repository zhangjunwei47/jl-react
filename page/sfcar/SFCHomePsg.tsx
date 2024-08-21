import React from "react";
import { Text, Button, View } from "react-native"


export default class SFCHomePsg extends React.Component {
  render(): React.ReactNode {
    const { navigation } = this.props
    return (
      <View>
        <Button title="发单" onPress={() => navigation.navigate("SFCInvitePsgPage")} />
      </View>
    )
  }
};