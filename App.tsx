import React from 'react';
import { Text, View } from 'react-native';
import { Tab, Tabs } from './src/components/tab/Tab';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from './src/components/Button';
import TitleIcon from './src/components/TitleIcon';
import SearchPage from './src/screens/SearchPage';
import PlanillaScreen from './src/screens/PlanillaScreen';

const App = () => {
  return (
    <Tabs>
      <Tab title={'Buscar'} icon={<MaterialCommunityIcons name="clipboard-text-search-outline"/>}>
        <SearchPage />
      </Tab>
      <Tab title={'Planilla'} icon={<MaterialCommunityIcons name="text-box"/>}>
        <PlanillaScreen />
      </Tab>
      <Tab title={'tab 3'}>
        <Text >
        contenido del tab 3
        </Text>
        <View
          className="bg-gradient-to-b from-violet-400 to-violet-600"
        >
          <Button name="click" />
        </View>


      </Tab>
      <Tab title="Title Icon">
      <TitleIcon
          icon={<MaterialCommunityIcons name="clipboard-text-search-outline" />}
          title="Title Icon"
          number={100.25}
        />
      </Tab>
      <Tab title={'tab 5'}>
        <Text className="text-white" >
        contenido del tab 5
        </Text>
      </Tab>
    </Tabs>
  );
};

export default App;
