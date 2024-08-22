/**
 * 用户信息
 *       text
 * image              image  text
 *       text  或者 
 * 
 * 
 * 
 *  action 
 *  背景, 非圆角背景, 
 */
import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

interface UserInfo {
    icon?: string,
    title?: string,
    titleSize?: number,
    subTitle?: string,
    subTitleSize?: number,
}

interface ActionInfo {
    icon?: string,
    message?: string,
    messageFontSize?: number,
    backgroundColor?: string
}

const UserInfoLayout: React.FC<UserInfo> = ({ icon, title, titleSize = 20, subTitle, subTitleSize = 10 }) => {
    return (
        <View style={style.container}>
            <View style={style.imageContainer} >
                {icon && <Image style={style.image} source={{ uri: icon }}></Image>}
            </View>

            <View style={style.textContainer}>
                {title && <Text style={[style.text, { fontSize: titleSize }]}>{title}</Text>}
                {subTitle && <Text style={[style.text, { fontSize: subTitleSize }]}>{subTitle}</Text>}
            </View>
        </View>
    );
}

export const ActionInfoLayout: React.FC<ActionInfo> = ({ icon, message, messageFontSize = 20, backgroundColor }) => {
    return (
        <View style={[
            style.actionLayout,
            backgroundColor ? { backgroundColor, borderWidth: 0 } : { borderColor: '#000', borderWidth: 2 }
        ]}>
            {icon && <Image style={style.image} source={{ uri: icon }}></Image>}
            {message && <Text style={[style.textContainer, { fontSize: messageFontSize }]}>{message}</Text>}
        </View>
    );
}


const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageContainer: {
        width: 34,
        height: 34,
        borderRadius: 17,
        borderWidth: 2,
        borderColor: '#fff'
    },
    image: {
        height: 30,
        width: 30,
        padding: 2,
    },
    textContainer: {
        flexDirection: 'column',
        paddingLeft: 5
    },
    text: {
        padding: 1
    },
    actionLayout: {
        flexDirection: 'row',   // 布局方式
        alignItems: 'center',   // 居中对齐
        padding: 10,            // 内边距
        borderRadius: 10,       // 圆角
        borderWidth: 2,         // 默认边框宽度 (只有在没有设置 backgroundColor 时生效)
        borderColor: 'transparent', // 默认边框颜色为透明
        alignSelf: 'flex-start',
    }
});

export default UserInfoLayout;

