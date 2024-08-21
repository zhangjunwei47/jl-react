import React from "react";
import { Text, Button, View } from "react-native"
import ThreeRowLayout from "../component/startendinformation"

export default class SFCInvitePsgPage extends React.Component {
  render(): React.ReactNode {

    const rowData = [
      { circleSize: 10, circleColor: 'red', text: '北京海淀区新城海大厦 3km', textSize: 20, textColor: 'black' }, 
      { circleSize: 10, circleColor: 'blue', text: '北京海淀区西站 4km', textSize: 20, textColor: 'black' },
    ];

    return (<ThreeRowLayout infos={rowData} />)
  }
};
