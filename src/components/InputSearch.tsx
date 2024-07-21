import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface InputSearchProps {
  label: string;
  onPress?: () => void;
}


const InputSearch: React.FC<InputSearchProps> = ({label, onPress}) => {

  const [input, setInput] = useState('');

  return (
    <View className="bg-[#2b2b2b]  flex-row justify-between rounded-full border-2 border-orange-light">
      <TouchableOpacity
        onPress={onPress}
      >
        <LinearGradient
          colors={['#f56f03', '#ff3000']}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="items-center justify-center w-10 h-10 rounded-full m-2"
        >
          <MaterialCommunityIcons name="calendar-search" color={'#fff'}size={24} />
        </LinearGradient>
      </TouchableOpacity>
      <TextInput
        className=" text-white w-[250]"
        keyboardType="numeric"
        value={input}
        onChangeText={setInput}
        placeholder={label}
        placeholderTextColor="#ccc"
      />
      <TouchableOpacity
        onPress={onPress}
      >
        <LinearGradient
          colors={['#f56f03', '#ff3000']}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="items-center justify-center w-10 h-10 rounded-full m-2"
        >
          <FontAwesome5 name="search" color={'#fff'}size={24} />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};
//calendar-search MaterialCommunityIcons
export default InputSearch;
