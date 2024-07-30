import React from 'react';
import { FlatList, Text, View } from 'react-native';
import InputSearch from '../components/InputSearch';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';



const SearchPage = () => {

  const data = [
    {serial:'004-16253' , date: '2024-05-25'},
    {serial:'004-45826' , date: '2024-06-17'},
    {serial:'008-35642' , date: '2024-07-08'},
    {serial:'008-356d2' , date: '2024-07-08'},
    {serial:'008-356f2' , date: '2024-07-08'},
    {serial:'008-356h2' , date: '2024-07-08'},
    {serial:'008-356g2' , date: '2024-07-08'},
    {serial:'008-35682' , date: '2024-07-08'},
    {serial:'008-35662' , date: '2024-07-08'},
    {serial:'008-35672' , date: '2024-07-08'},
    {serial:'008-35602' , date: '2024-07-08'},
    {serial:'008-356z2' , date: '2024-07-08'},
    {serial:'008-356q2' , date: '2024-07-08'},
    {serial:'008-35er2' , date: '2024-07-08'},
  ];

  const searchPlanila = () => {
    console.log('Buscando...');
  };


  return (
    <View>
      <View className="mt-6">
        <InputSearch onPress={searchPlanila} label="Ingrese el Nro de Planilla" />
      </View>
      <Text className="text-white text-center text-xl font-bold my-4">
        Planillas
      </Text>
      <View>
        <FlatList
          className="h-[470]"
          data={data}
          renderItem={({item}) => <ItemList serial={item.serial} date={item.date} />}
          keyExtractor={item => item.serial}
          ItemSeparatorComponent={ItemSeparator}
        />
      </View>
    </View>
  );
};

export default SearchPage;

interface ItemProps {
  serial: string;
  date: string;
}

const ItemSeparator = () => (
  <View className="h-2" />
);


const ItemList = ({ serial, date }: ItemProps ) => {
  return (
    <View className="bg-neutral-900 rounded-lg p-2 border-1 border-orange-light flex-row justify-between">
      <LinearGradient
      colors={['#f56f03', '#ff3000']}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      className="rounded-md w-2"
      />
      <View>
        <Text className="text-white font-semibold text-base">
          Nro: {serial}
        </Text>
        <Text className="text-gray-500">
          Fecha: {date}
        </Text>
      </View>
      <View>
      <TouchableOpacity >
        <LinearGradient
          colors={['#f56f03', '#ff3000']}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="items-center justify-center w-10 h-10 rounded-lg"
        >
          <MaterialCommunityIcons name="clipboard-edit" color={'#fff'} size={24}/>
        </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

