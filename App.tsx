import React from 'react';
import { Text } from 'react-native';
import { Tab, Tabs } from './src/components/tab/Tab';

const App = () => {
  return (
    <Tabs>
      <Tab title={'tab 1'}>
        <Text >
          contenido del tab 1
        </Text>
      </Tab>
      <Tab title={'tab 2'}>
        <Text >
        contenido del tab 2
        </Text>
      </Tab>
      <Tab title={'tab 3'}>
        <Text >
        contenido del tab 3
        </Text>
      </Tab>
    </Tabs>
  );
};

export default App;
