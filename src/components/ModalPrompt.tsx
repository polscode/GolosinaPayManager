import React, { ReactNode, useState } from 'react';
import { Modal, Text, TextInput, View } from 'react-native';
import Button from './Button';

interface ModalPromptProps {
  children: ReactNode;
  isVisible: boolean;
  value: string | number;
  setIsVisible: (isShow:boolean) => void;
  setValue: (text: string | number ) => void;
}

const ModalPrompt: React.FC<ModalPromptProps> = ({
  children,
  isVisible,
  setValue,
  setIsVisible,
}) => {

  const [input, setInput] = useState<string>('');

  const handleConfirm = () => {
    setValue(input);
    setIsVisible(false);
    setInput('');
  };

  const handleCancel = () => {
    setInput('');
    setIsVisible(false);
  };

  const handleChange = (text: string) => {
    setInput(text);
  };

  return (
    <Modal visible={isVisible} animationType="fade" transparent={true}>
        <View className="bg-op-dark h-full w-full ">
          <View className=" bg-black p-5 border-2 border-orange-light m-auto rounded-lg w-64">
            <Text className="text-white mb-4 text-center">
              {children}
            </Text>
            <TextInput
              className="bg-neutral-800 rounded-md mb-4 text-white px-3 text-base font-bold"
              keyboardType="numeric"
              value={input}
              onChangeText={handleChange}
            />
            <View className="h-[85] justify-between">
              <Button title={'Confirmar'} onPress={handleConfirm} />
              <Button title={'Cancelar'} onPress={handleCancel} />
            </View>
          </View>
        </View>
      </Modal>
  );
};

export default ModalPrompt;
