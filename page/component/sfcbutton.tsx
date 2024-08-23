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
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

interface SFCButtonModel {
    icon?: string
    title?: string
    subTitle?: string
    backgroundColor?: string
    titleFontSize?: number
    subTitleFontSize?: number
}


const SFCButton: React.FC<SFCButtonModel & { style?: object, onPress?: () => void }> = ({ icon,
    title,
    subTitle,
    backgroundColor,
    titleFontSize = 10,
    subTitleFontSize = 10,
    style: customStyle,
    onPress
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={
                [
                    styles.container,
                    backgroundColor ? { backgroundColor, borderWidth: 0 } : { borderWidth: 2, borderColor: '#fff' },
                    customStyle
                ]
            }>
            {icon && <Image style={styles.image} source={{ uri: icon }}></Image>}
            <View style={styles.titleContainer}>
                {title && <Text style={[styles.text, { fontSize: titleFontSize }]}>{title}</Text>}
                {subTitle && <Text style={{ fontSize: subTitleFontSize }}>{subTitle}</Text>}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 10,
            borderWidth: 2,
            borderColor: 'transparent',
            justifyContent: 'center'
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
            fontSize: 10,
            fontWeight: 900
        }
    }
);

export default SFCButton;

