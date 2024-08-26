/**
 *  button 样式
 * 
 * 主背景
 * 左侧icon
 * 主标题
 * 副标题
 * 
 */
import { text } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity, StyleProp, ViewStyle } from "react-native";

interface SFCButtonModel {
    icon?: string
    title?: string
    subTitle?: string
    backgroundColor?: string
    titleFontSize?: number
    subTitleFontSize?: number
    iconSize?: number
}

const SFCButton: React.FC<SFCButtonModel & { style?: StyleProp<ViewStyle>, onPress?: () => void }> = ({ icon,
    title,
    subTitle,
    backgroundColor,
    titleFontSize = 10,
    subTitleFontSize = 10,
    iconSize = 10,
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
            }
            activeOpacity={0.7}
        >
            {icon ? <Image style={[styles.image, { width: iconSize, height: iconSize }]} source={{ uri: icon }}></Image> : null}
            <View style={styles.titleContainer}>
                {title ? <Text style={[styles.titleText, { fontSize: titleFontSize }]}>{title}</Text> : null}
                {subTitle ? <Text style={[styles.subTitleText, { fontSize: subTitleFontSize }]}>{subTitle}</Text> : null}
            </View>
        </TouchableOpacity>
    );
}

SFCButton.defaultProps = {
    titleFontSize: 10,
    subTitleFontSize: 10,
    iconSize: 10,
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
        titleText: {
            fontSize: 10,
            fontWeight: 900
        },
        subTitleText: {
            fontSize: 8
        }
    }
);

export default SFCButton;

