import React from "react";
import { Text, Button, View } from "react-native"
import AddressSelection from "../component/AddressSelection";

// 示例数据
const exampleData: OptionalArea = {
  title: "区域选择",
  address_select: [
    {
      address_type: 3,
      address_id: 1,
      address_name: "北京市",
      address_code: "BEIJING",
      son_address: [
        {
          address_type: 4,
          address_id: 110108,
          address_name: "海淀区",
          address_code: "HAIDIAN"
        },
        {
          address_type: 4,
          address_id: 110101,
          address_name: "东城区",
          address_code: "DONGCHENG"
        }
      ]
    },
    {
      address_type: 3,
      address_id: 2,
      address_name: "上海市",
      address_code: "SHANGHAI",
      son_address: [
        {
          address_type: 4,
          address_id: 310101,
          address_name: "黄浦区",
          address_code: "HUANGPU"
        },
        {
          address_type: 4,
          address_id: 310104,
          address_name: "徐汇区",
          address_code: "XUHUI"
        }
      ]
    },
    {
      address_type: 4,
      address_id: 5,
      address_name: "天津市",
      address_code: "SHANGHAI",
      son_address: [
        {
          address_type: 4,
          address_id: 310101,
          address_name: "黄浦区",
          address_code: "HUANGPU"
        },
        {
          address_type: 4,
          address_id: 310104,
          address_name: "徐汇区",
          address_code: "XUHUI"
        }
      ]
    },
    {
      address_type: 3,
      address_id: 6,
      address_name: "海南",
      address_code: "SHANGHAI",
      son_address: [
        {
          address_type: 4,
          address_id: 310101,
          address_name: "黄浦区",
          address_code: "HUANGPU"
        },
        {
          address_type: 4,
          address_id: 310104,
          address_name: "徐汇区",
          address_code: "XUHUI"
        }
      ]
    },
    {
      address_type: 3,
      address_id: 7,
      address_name: "徐州",
      address_code: "SHANGHAI",
      son_address: [
        {
          address_type: 4,
          address_id: 310101,
          address_name: "黄浦区",
          address_code: "HUANGPU"
        },
        {
          address_type: 4,
          address_id: 310104,
          address_name: "徐汇区",
          address_code: "XUHUI"
        }
      ]
    },
    {
      address_type: 3,
      address_id: 10,
      address_name: "滨州",
      address_code: "SHANGHAI",
      son_address: [
        {
          address_type: 4,
          address_id: 310101,
          address_name: "黄浦区",
          address_code: "HUANGPU"
        },
        {
          address_type: 4,
          address_id: 310104,
          address_name: "徐汇区",
          address_code: "XUHUI"
        }
      ]
    },
    {
      address_type: 3,
      address_id: 9,
      address_name: "新疆",
      address_code: "SHANGHAI",
      son_address: [
        {
          address_type: 4,
          address_id: 310101,
          address_name: "黄浦区",
          address_code: "HUANGPU"
        },
        {
          address_type: 4,
          address_id: 310104,
          address_name: "徐汇区",
          address_code: "XUHUI"
        }
      ]
    },
    {
      address_type: 3,
      address_id: 10,
      address_name: "黑龙江",
      address_code: "SHANGHAI",
      son_address: [
        {
          address_type: 4,
          address_id: 310101,
          address_name: "黄浦区",
          address_code: "HUANGPU"
        },
        {
          address_type: 4,
          address_id: 310104,
          address_name: "徐汇区",
          address_code: "XUHUI"
        }
      ]
    },
    {
      address_type: 3,
      address_id: 11,
      address_name: "吉林",
      address_code: "SHANGHAI",
      son_address: [
        {
          address_type: 4,
          address_id: 310101,
          address_name: "黄浦区",
          address_code: "HUANGPU"
        },
        {
          address_type: 4,
          address_id: 310104,
          address_name: "徐汇区",
          address_code: "XUHUI"
        }
      ]
    },
    {
      address_type: 3,
      address_id: 12,
      address_name: "辽宁",
      address_code: "SHANGHAI",
      son_address: [
        {
          address_type: 4,
          address_id: 310101,
          address_name: "黄浦区",
          address_code: "HUANGPU"
        },
        {
          address_type: 4,
          address_id: 310104,
          address_name: "徐汇区",
          address_code: "XUHUI"
        }
      ]
    },
    {
      address_type: 3,
      address_id: 2,
      address_name: "上海市",
      address_code: "SHANGHAI",
      son_address: [
        {
          address_type: 4,
          address_id: 310101,
          address_name: "黄浦区",
          address_code: "HUANGPU"
        },
        {
          address_type: 4,
          address_id: 310104,
          address_name: "徐汇区",
          address_code: "XUHUI"
        }
      ]
    },
    {
      address_type: 3,
      address_id: 2,
      address_name: "上海市",
      address_code: "SHANGHAI",
      son_address: [
        {
          address_type: 4,
          address_id: 310101,
          address_name: "黄浦区",
          address_code: "HUANGPU"
        },
        {
          address_type: 4,
          address_id: 310104,
          address_name: "徐汇区",
          address_code: "XUHUI"
        }
      ]
    }
  ]
};


export default class SFCHomePsg extends React.Component {
  render(): React.ReactNode {
    const { navigation } = this.props
    const handleConfirm = (selectedAddresses) => {
      console.log('Selected Addresses:', selectedAddresses);
    };
    return (
      <AddressSelection data={exampleData} onConfirm={handleConfirm} /> 
    )
  }
};