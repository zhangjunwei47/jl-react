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

const UserInfoLayout: React.FC<UserInfo> = ({ icon, title, titleSize = 16, subTitle, subTitleSize = 10 }) => {
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

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageContainer: {
        width: 32,
        height: 32,
        borderRadius: 16,
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
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'transparent',
        alignSelf: 'flex-start',
    },
    actionImage: {
        height: 20,
        width: 20,
    }
});

export default UserInfoLayout;

