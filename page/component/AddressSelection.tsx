import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ToastAndroid, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Address {
  address_type: number;
  address_id: number;
  address_name: string;
  address_code: string;
  son_address?: Address[];
}

interface OptionalArea {
  title: string;
  address_select: Address[];
}

interface AddressSelectionProps {
  data: OptionalArea; // 外部传入的数据
  onConfirm: (selectedAddresses: Address[]) => void; // 回传选择的数据
}

const AddressSelection: React.FC<AddressSelectionProps> = ({ data, onConfirm }) => {
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);
  const [selectedSubAddresses, setSelectedSubAddresses] = useState<Address[]>([]);

  // 选择左侧地址后，显示对应的 son_address
  const handleAddressSelect = (address: Address) => {
    setSelectedAddress(address);
  };

  // 选择/取消选择右侧子地址
  const handleSubAddressSelect = (subAddress: Address) => {
    if (selectedSubAddresses.some((item) => item.address_id === subAddress.address_id)) {
      // 已选中，取消选中
      setSelectedSubAddresses((prev) =>
        prev.filter((item) => item.address_id !== subAddress.address_id)
      );
    } else {
      if (selectedSubAddresses.length >= 6) {
        // 如果已选择 6 个城市，弹出提示
        ToastAndroid.show('最多可以选择6个城市', ToastAndroid.SHORT);
        return;
      }
      // 未选中，添加到选中列表
      setSelectedSubAddresses((prev) => [...prev, subAddress]);
    }
  };

  // 删除所有已选中的地址
  const handleClearAll = () => {
    setSelectedSubAddresses([]);
  };

  // 删除某个已选中的地址
  const handleRemoveSelected = (subAddress: Address) => {
    setSelectedSubAddresses((prev) =>
      prev.filter((item) => item.address_id !== subAddress.address_id)
    );
  };

  // 点击确定按钮时调用回调，将选中的城市传递给父组件
  const handleConfirm = () => {
    onConfirm(selectedSubAddresses);
  };

  return (
    <View style={styles.container}>
      {/* 顶部展示所有选中的子区域名称 */}
      <View style={styles.selectedSubAddressContainer}>
        {/* 左侧说明文字 */}
        <Text style={styles.selectedSubAddressTitle}>已选区域:</Text>

        {/* 右侧清空按钮 */}
        <View style={styles.clearButtonContainer}>
          <TouchableOpacity onPress={handleClearAll} style={styles.clearButton}>
            <Icon name="delete" size={20} color="red" />
            <Text style={styles.clearText}>清空</Text>
          </TouchableOpacity>
        </View>

        {/* 选中地址列表或暂无选择 */}
        <View style={styles.selectedSubAddressesWrapper}>
          {selectedSubAddresses.length === 0 ? (
            <Text style={styles.noSelectionText}>暂无选择</Text>
          ) : (
            selectedSubAddresses.map((subAddress) => (
              <View key={subAddress.address_id} style={styles.selectedSubAddressBox}>
                {/* 删除按钮覆盖在右上角 */}
                <TouchableOpacity
                  style={styles.removeIcon}
                  onPress={() => handleRemoveSelected(subAddress)}
                >
                  <Icon name="close" size={16} color="red" />
                </TouchableOpacity>
                {/* 名称，过长时显示省略号 */}
                <Text
                  style={styles.selectedSubAddressText}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {subAddress.address_name}
                </Text>
              </View>
            ))
          )}
        </View>
      </View>

      {/* 增加 "城市选择" 标题 */}
      <Text style={styles.citySelectionTitle}>城市选择</Text>

      {/* 左右列表的容器 */}
      <View style={styles.listsContainer}>
        {/* 左侧展示 address_select */}
        <FlatList
          data={data.address_select}
          keyExtractor={(item) => item.address_id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleAddressSelect(item)}>
              <View
                style={[
                  styles.addressItem,
                  selectedAddress?.address_id === item.address_id && styles.selectedItem
                ]}
              >
                <Text
                  style={[
                    styles.addressText,
                    selectedAddress?.address_id === item.address_id && styles.selectedText
                  ]}
                >
                  {item.address_name}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          style={styles.leftList}
        />

        {/* 右侧展示 son_address */}
        <FlatList
          data={selectedAddress?.son_address || []}
          keyExtractor={(item) => item.address_id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSubAddressSelect(item)}>
              <View style={[styles.subAddressItem, { backgroundColor: '#F5F7FA' }]}>
                <Text
                  style={[
                    styles.addressText,
                    selectedSubAddresses.some((sub) => sub.address_id === item.address_id) &&
                      styles.selectedText
                  ]}
                >
                  {item.address_name}
                </Text>
                <Icon
                  name={
                    selectedSubAddresses.some((sub) => sub.address_id === item.address_id)
                      ? 'check-box'
                      : 'check-box-outline-blank'
                  }
                  size={24}
                  color={
                    selectedSubAddresses.some((sub) => sub.address_id === item.address_id)
                      ? 'green'
                      : 'gray'
                  }
                />
              </View>
            </TouchableOpacity>
          )}
          style={styles.rightList}
        />
      </View>

      {/* 底部确定按钮 */}
      <TouchableOpacity onPress={handleConfirm} style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>确定</Text>
      </TouchableOpacity>
    </View>
  );
};

// 样式
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#FFFFFF', // 整个视图背景设置为白色
  },
  listsContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  leftList: {
    flex: 1,
  },
  rightList: {
    flex: 1,
    backgroundColor: '#F5F7FA', // 默认展示 F5F7FA 背景
  },
  addressItem: {
    height: 88, // 高度 88px
    justifyContent: 'center',
    paddingLeft: 15,
  },
  subAddressItem: {
    height: 88, // 高度 88px
    justifyContent: 'center',
    paddingLeft: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addressText: {
    fontSize: 16,
  },
  selectedText: {
    fontWeight: 'bold', // 加粗展示
  },
  selectedItem: {
    backgroundColor: '#F5F7FA', // 一级城市选中时背景 F5F7FA
  },
  selectedSubAddressContainer: {
    padding: 16,
    marginBottom: 16,
    position: 'relative',
  },
  selectedSubAddressesWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  selectedSubAddressBox: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    borderColor: '#4DDB60', // 绿色描边
    borderWidth: 2, // 2px 描边
    width: '30%', // 每行最多展示三个
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedSubAddressText: {
    fontSize: 16,
    color: 'green',
  },
  selectedSubAddressTitle: {
    position: 'absolute',
    top: -22,
    left: 16,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  clearButtonContainer: {
    position: 'absolute',
    top: -22,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  clearButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  clearText: {
    marginLeft: 4,
    fontSize: 14,
    color: 'red',
  },
  removeIcon: {
    position: 'absolute',
    top: -10,
    right: -10,
  },
  noSelectionText: {
    color: '#999',
  },
  citySelectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingHorizontal: 16,
  },
  confirmButton: {
    backgroundColor: '#4DDB60',
    paddingVertical: 16,
    alignItems: 'center',
  },
  confirmButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default AddressSelection;
