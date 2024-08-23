import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

interface ActionInfo {
    icon?: string,
    message?: string,
    messageFontSize?: number,
    backgroundColor?: string,
}

export const ActionInfoLayout: React.FC<ActionInfo & { style?: object, onPress?: () => void }> = ({ icon, message, messageFontSize = 20, backgroundColor, style: customStyle, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                style.container,
                backgroundColor ? { backgroundColor, borderWidth: 0 } : { padding: 8, borderColor: '#000', borderWidth: 1 },
                customStyle
            ]}>
            {icon && <Image style={style.image} source={{ uri: icon }}></Image>}
            {message && <Text style={[style.text, { fontSize: messageFontSize }]}>{message}</Text>}
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "flex-start",
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10,
        borderWidth: 2,
        borderColor: 'transparent'
    },
    text: {
        paddingLeft: 5
    },
    image: {
        height: 20,
        width: 20,
    }
});
export default ActionInfoLayout;