import React from "react";
import { Text, Button, View, Alert } from "react-native"
import ThreeRowLayout from "../component/SFCStartEndInfoView"
import UserInfoLayout from "../component/SFCUserInfoView";
import SFCButton from "../component/SFCButton";
import ActionInfoLayout from "../component/SFCActionView";
import DegreeInfoView from "../component/SFCDegreeAndTimeView";

export default class SFCInvitePsgPage extends React.Component {
  render(): React.ReactNode {
    const rowData = [
      { circleSize: 10, circleColor: 'red', text: '北京海淀区新城海大厦 3km', textSize: 16, textColor: 'black' },
      { circleSize: 10, circleColor: 'blue', text: '北京海淀区西站 4km', textSize: 16, textColor: 'black' },
    ];

    const userInfo = {
      icon: "https://dpubstatic.udache.com/static/dpubimg/5iP-VaSTXiHQHHfaETR7K.png",
      title: "尾号8888",
      titleSize: 16,
      subTitle: "接单20次",
      subTitleSize: 12,
    }

    const actionInfoPhone = {
      icon: "https://dpubstatic.udache.com/static/dpubimg/vgBWEAc-w6nVG5IYzvW6W.png",
      message: "电话",
      messageFontSize: 14,
      backgroundColor: "#75E67B"
    }

    const actionInfoIm = {
      icon: "https://dpubstatic.udache.com/static/dpubimg/QjU7Ji9mjrwGz28bQtUCD.png",
      messageFontSize: 10
    }

    const button = {
      title: "出发接乘客",
      backgroundColor: "#75E67B",
      titleFontSize: 20
    }
    const degreeInfo = {
      degree: "95% 顺路度",
      time: "今天 10:00",
      backgroundIcon: "https://dpubstatic.udache.com/static/dpubimg/a0B8UZvB2rJLoBN92rBAZ.png"
    }

    return <View style={{ flex: 1, justifyContent: "flex-end", flexDirection: "column", backgroundColor: "#dee2e6" }}>

      <View style={{ backgroundColor: "#fff", marginLeft: 20, marginRight: 20, borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
        <DegreeInfoView
          degree={degreeInfo.degree} time={degreeInfo.time} backgroundIcon={degreeInfo.backgroundIcon}
          style={{ marginRight: 10, marginBottom: 20 }}
        />
        <ThreeRowLayout infos={rowData} style={{ marginLeft: 10, marginRight: 10, marginBottom: 20 }} />
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <View style={{ marginLeft: 10 }}>
            <UserInfoLayout
              icon={userInfo.icon}
              title={userInfo.title}
              titleSize={userInfo.titleSize}
              subTitle={userInfo.subTitle}
              subTitleSize={userInfo.subTitleSize} />
          </View>

          <View style={{ marginRight: 10, flexDirection: "row" }}>
            <ActionInfoLayout
              icon={actionInfoPhone.icon}
              message={actionInfoPhone.message}
              messageFontSize={actionInfoPhone.messageFontSize}
              backgroundColor={actionInfoPhone.backgroundColor}
            />
            <ActionInfoLayout
              style={{ marginLeft: 10 }}
              icon={actionInfoIm.icon}
            />
          </View>
        </View>

        <SFCButton
          title={button.title}
          titleFontSize={button.titleFontSize}
          backgroundColor={button.backgroundColor}
          style={{ height: 60, marginRight: 10, marginLeft: 10, marginTop: 20, marginBottom: 20 }}
          onPress={() => {
            Alert.alert("点击了哈哈哈")
          }}
        />
      </View>
    </View>
  }
};
