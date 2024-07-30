import React from 'react';
import { FlatList, Text, View } from 'react-native';


interface SelectProps {
  data: {id:string; option: string} [];
}

const Select: React.FC<SelectProps> = ({ data }) => {

  return (
    <FlatList
      data={data}
      renderItem={({item}) => <Item option={item.option} />}
      keyExtractor={item => item.id}
    />
  );
};

type ItemProps = {
  option: string
};

const Item = ({option}: ItemProps ) => (
  <View>
    <Text>
      {option}
    </Text>
  </View>
);


export default Select;
