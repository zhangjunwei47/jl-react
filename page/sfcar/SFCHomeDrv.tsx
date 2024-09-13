import React from "react";
import { Text, Button, View } from "react-native"
import SFCInvitePsgPage from "./SFCInvitePsgPage";


export default class SFCHomeDrv extends React.Component {
  render(): React.ReactNode {
    const { navigation } = this.props
    return (
      <SFCInvitePsgPage/>
    )
  }
};