/**
 * 起终点信息
 * 拆分 
  icon text text
  icon
  icon text text
 * 
 * icon 可动态控制大小和颜色
 * text 可控制text 文本颜色
 *  
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface RowProps {
    circleSize?: number;    // 圆形的大小
    circleColor?: string;   // 圆形的颜色
    text?: string;          // 文字内容
    textSize?: number;      // 文字大小
    textColor?: string;     //信息颜色
}

/**
 * 信息点数据,动态配置展示内容
 */
interface StartEndInfoModel {
    infos: RowProps[];
}

const InfoShowRow: React.FC<RowProps> = ({ circleSize = 50, circleColor = 'blue', text, textSize = 16 }) => {
    return (
        <View style={styles.row}>
            <View
                style={[
                    styles.circle,
                    {
                        width: circleSize,
                        height: circleSize,
                        backgroundColor: circleColor,
                        borderRadius: circleSize / 2,
                    },
                ]}
            />
            {text && <Text style={[styles.text, { fontSize: textSize }]}>{text}</Text>}
        </View>
    );
};

const ThreeRowLayout: React.FC<StartEndInfoModel> = ({ infos }) => {
    console.log(infos)
    const row = infos[0]
    const row2 = infos[1]

    return (
        <View style={styles.container}>
            < InfoShowRow
                circleSize={row.circleSize}
                circleColor={row.circleColor}
                text={row.text}
                textSize={row.textSize}
            />
            <View
                style={[styles.circle,
                    {
                        width: 2,
                        height: 10,
                        backgroundColor: 'red',
                        borderRadius: 1
                    },
                    ]} />
            < InfoShowRow
                circleSize={row2.circleSize}
                circleColor={row2.circleColor}
                text={row2.text}
                textSize={row2.textSize}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column', 
        padding: 10,
    },
    row: {
        flexDirection: 'row',    
        alignItems: 'center',    
        marginBottom: 15,       
    },
    circle: {
        marginRight: 10,    
    },
    text: {
        fontSize: 16,  
    },
});

export default ThreeRowLayout;