import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SFCDynamic from './SFCDynamic';
import SFCHomeDrv from './SFCHomeDrv';
import SFCHomePsg from './SFCHomePsg';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeTab = createMaterialTopTabNavigator();

function SFCarHomePage() {
    const navigation = useNavigation()
    return (
        <View style={{flex:1}}>
        
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', paddingTop:10 }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ paddingHorizontal: 10 }}
                >
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
              </View>
              <View style={{flex:1}}>

                <HomeTab.Navigator>
                    <HomeTab.Screen name="乘客" component={SFCHomePsg} />
                    <HomeTab.Screen name="车主" component={SFCHomeDrv} />
                    <HomeTab.Screen name="车主服务" component={SFCDynamic} />
                </HomeTab.Navigator>
            </View>
        </View>
    );
}

export default SFCarHomePage;