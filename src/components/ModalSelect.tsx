import React from 'react';
import { FlatList, Modal, Text, TouchableOpacity, View } from 'react-native';


interface ModalSelectProps {
  isVisilbe: boolean;
  opSelect: string;
  data: {opcion: string, text: string}[];
  setIsVisible: (isShow: boolean) => void;
  setOp: (index: string) => void;
}

const ModalSelect : React.FC<ModalSelectProps> = ({
  isVisilbe,
  data,
  setIsVisible,
  opSelect,
  setOp,
}) => {

  const handleSelect = (option: string) => {
    setOp(option);
    setIsVisible(false);
  };

  return (
    <Modal
      visible={isVisilbe}
      animationType="fade"
      transparent={true}
    >
      <View className="bg-op-dark h-full w-full">
        <View className="bg-black p-5 border-2 border-orange-light m-auto rounded-lg">
          <FlatList
            data={data}
            renderItem={({item}) => <ItemList text={item.text} opcion={item.opcion} opSelect={opSelect} handleSelect={handleSelect} />}
            keyExtractor={item => item.opcion}
          />
        </View>
      </View>
    </Modal>
  );
};

interface ItemProps {
  opSelect: string;
  opcion: string;
  text: string;
  handleSelect: (option: string) => void;
}

const ItemList = ({ opcion, opSelect, text, handleSelect } : ItemProps) => {
  return (
    <TouchableOpacity onPress={() => handleSelect(opcion) } className="flex-row items-center mb-2">
      <View className="w-6 h-6 relative mr-3 border-2 first-letter:border-orange-light rounded-full items-center justify-center">
        <View className={`absolute h-3 w-3 rounded-full ${opcion === opSelect ? 'bg-orange-light' : ''}`} />
      </View>
      <View >
        <Text className="text-white text-base">
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ModalSelect;
