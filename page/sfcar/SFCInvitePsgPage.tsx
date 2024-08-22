import React from "react";
import { Text, Button, View } from "react-native"
import ThreeRowLayout from "../component/startendinformation"
import UserInfoLayout from "../component/userinformation";
import { ActionInfoLayout } from "../component/userinformation";
import SFCButton from "../component/sfcbutton";
export default class SFCInvitePsgPage extends React.Component {
  render(): React.ReactNode {
    const rowData = [
      { circleSize: 10, circleColor: 'red', text: '北京海淀区新城海大厦 3km', textSize: 20, textColor: 'black' },
      { circleSize: 10, circleColor: 'blue', text: '北京海淀区西站 4km', textSize: 20, textColor: 'black' },
    ];



    return <View>
      <ThreeRowLayout infos={rowData} />
      <UserInfoLayout
        icon="https://dpubstatic.udache.com/static/dpubimg/5iP-VaSTXiHQHHfaETR7K.png"
        title="咯咯"
        titleSize={20}
        subTitle="接客5次"
        subTitleSize={15}
      />

      <UserInfoLayout
        icon="https://dpubstatic.udache.com/static/dpubimg/5iP-VaSTXiHQHHfaETR7K.png"
        title="森仔牛逼"
        titleSize={20}
        subTitleSize={15}
      />

      <ActionInfoLayout
        icon="https://ut-static.udache.com/webx/sfc-pm/0Iw5ArBbufzq1s2llYtUi.png"
        message="信息" />

      <ActionInfoLayout
        icon="https://ut-static.udache.com/webx/sfc-pm/0Iw5ArBbufzq1s2llYtUi.png"
        message="电话"
        backgroundColor="#0d6efd" />
      <SFCButton
        icon="https://ut-static.udache.com/webx/sfc-pm/0Iw5ArBbufzq1s2llYtUi.png"
        title="主标题"
        subTitle="副标题" />

      <SFCButton
        icon="https://ut-static.udache.com/webx/sfc-pm/0Iw5ArBbufzq1s2llYtUi.png"
        title="主标题"
        subTitle="副标题"
        backgroundColor="#17a2b8" />



    </View>
  }
};
