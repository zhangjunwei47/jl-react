/**
 *  button 样式
 * 
 * 
 * 主背景
 * 左侧icon
 * 主标题
 * 副标题
 * 
 * 
 */
import { text } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

interface SFCButtonModel {
    icon?: string
    title?: string
    subTitle?: string
    backgroundColor?: string
    titleFontSize?: number
    subTitleFontSize?: number
}


const SFCButton: React.FC<SFCButtonModel> = ({ icon,
    title,
    subTitle,
    backgroundColor,
    titleFontSize = 10,
    subTitleFontSize= 10 }) => {
    return (
        <View style={
            [
                styles.container,
                backgroundColor ? { backgroundColor, borderWidth: 0 } : { borderWidth: 2, borderColor: '#fff' }
            ]
        }>
            {icon && <Image style={styles.image} source={{ uri: icon }}></Image>}
            <View style={styles.titleContainer}>
                {title && <Text style={{fontSize: titleFontSize }}>{title}</Text>}
                {subTitle && <Text style={{ fontSize: subTitleFontSize }}>{subTitle}</Text>}
            </View>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            flexDirection: 'row',   // 布局方式
            alignItems: 'center',   // 居中对齐
            padding: 10,            // 内边距
            borderRadius: 10,       // 圆角
            borderWidth: 2,         // 默认边框宽度 (只有在没有设置 backgroundColor 时生效)
            borderColor: 'transparent', // 默认边框颜色为透明
            justifyContent:'center'
        },
        titleContainer: {
            flexDirection: 'column',
            alignItems: 'center'
        },
        image: {
            width: 10,
            height: 10
        },
        text: {
            fontSize:10
        }
    }
);

export default SFCButton;

