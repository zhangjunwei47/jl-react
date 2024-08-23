import { counter } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

interface DegreeInfoModel {
    degree?: string,
    time?: string,
    backgroundIcon?: string
}

const DegreeInfoView: React.FC<DegreeInfoModel & { style?: object }> = ({ degree, time, backgroundIcon, style: customStyle }) => {
    return (
        <View style={[
            styles.container,
            customStyle
        ]}>
            <View style={[styles.contentContainer]}>
                {backgroundIcon && <Image style={styles.image} source={{ uri: backgroundIcon }}></Image>}
                {degree && <Text style={[styles.text]}>{degree}</Text>}
            </View>

            {time && <Text style={[{ fontSize: 16, fontWeight: "bold" }]}>{time}</Text>}
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        contentContainer: {
            position: 'relative',
            width: 120,
            height: 50,
        },

        image: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: 120,
            height: 50,
        },
        text: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: [{ translateX: -50 }, { translateY: -15 }],
            fontWeight: 'bold',
            fontSize: 17,
        },
    }
)


export default DegreeInfoView;