import React, { ReactElement } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface TitleIconProps {
  title: String,
  icon: ReactElement,
  number: number | string,
  onPress?: () => void,
  style?: string,
}

const TitleIcon: React.FC<TitleIconProps> = ({icon, title, number, onPress, style}) => {

  return (
    <TouchableOpacity onPress={onPress}>
      <View className={`bg-[#2b2b2b] rounded-xl flex-row items-center justify-between ${style}`}>
        <View className="gap-3 flex-row items-center p-2">
          <LinearGradient
            colors={['#f56f03', '#ff3000']}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            className="w-14 h-14 rounded-xl items-center justify-center">
            {icon && React.cloneElement(icon,{ size: 30, color: '#fff' })}
          </LinearGradient>
          <Text className="text-lg text-white font-semibold">
            {title}
          </Text>
        </View>
        <LinearGradient
          colors={['#101010','#1c1c1c', '#3f3f3f','#1c1c1c','#101010']}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="w-36 border-2 border-orange-light px-3 py-2 m-4 rounded-lg"
        >
          <Text className="text-white text-xl font-semibold  border-orange-light text-right ">
            {number}
          </Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
};

export default TitleIcon;
