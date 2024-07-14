import React from 'react';
import { Text, View } from 'react-native';
import { Tab, Tabs } from './src/components/tab/Tab';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from './src/components/Button';
import TitleIcon from './src/components/TitleIcon';

const App = () => {
  return (
    
    <Tabs>
      <Tab title={'Buscar'} icon={<MaterialCommunityIcons name="clipboard-text-search-outline"/>}>
        <Text className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ratione porro et unde dolorum deleniti, earum ut veniam, aperiam repudiandae beatae totam similique in saepe optio commodi modi, temporibus vel? Impedit eius et non sapiente perspiciatis ipsum libero fuga iure! Impedit voluptatem atque quibusdam distinctio nemo sapiente! Quos minima quibusdam pariatur earum! Minima velit voluptate ea accusantium repellendus eaque ex similique labore repudiandae eius doloremque perferendis, alias illum debitis. Dolore cupiditate molestias voluptate dicta repellat molestiae fugiat ex. Aliquam nihil quibusdam maiores consequuntur? Dolores neque necessitatibus obcaecati soluta eum, tenetur enim dolorem, at error impedit exercitationem? Natus fugiat eaque consequuntur.
        </Text>
      </Tab>
      <Tab title={'tab 2'}>
        <Text className="text-white" >
        contenido del tab 2
        <Button name="click" />
        </Text>
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
