import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface ButtonProps {
  name: String;
}

const Button:React.FC<ButtonProps> = ({name}) => {
  return (
    <TouchableOpacity>
      <LinearGradient
      colors={['#f56f03', '#ff3000']}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      className="p-2 rounded"
      >
        <Text className="text-white">
          {name}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;
