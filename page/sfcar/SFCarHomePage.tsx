import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SFCDynamic from './SFCDynamic';
import SFCHomeDrv from './SFCHomeDrv';
import SFCHomePsg from './SFCHomePsg';


const Tab = createMaterialTopTabNavigator();

function SFCarHomePage() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="乘客" component={SFCHomePsg} />
      <Tab.Screen name="车主" component={SFCHomeDrv} />
      <Tab.Screen name="车主服务" component={SFCDynamic} />
    </Tab.Navigator>
  );
}

export default SFCarHomePage;