import React, { ReactNode, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

interface TabProps {
  children: ReactNode;
  title: string;
}

export const Tab: React.FC<TabProps> = ({children}) => {
  return (
    <View>
      {children}
    </View>
  );
};

interface TabsProps {
  children: ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({children}) => {

  const [activeTab, setActiveTab] = useState<number>(0);

  const changeTab = (index: number) => {
    setActiveTab(index);
  };

  return (
    <View className="flex flex-col bg-slate-600 flex-1">
      <ScrollView>
        {React.Children.map(children, (tab, index) => (
          <View
            key={index}
            className={`${activeTab !== index && 'hidden'} pb-[100px]`}
          >
            {tab}
          </View>
        ))}
      </ScrollView>
      <View className=" flex flex-row bg-red-500 justify-between p-[14px] absolute w-full bottom-0">
        {
          React.Children.map(children, (tab, index)=>(
            <TouchableOpacity
              className="w-16 h-16 bg-slate-900 flex-col justify-between"
              key={index}
              onPress={() => changeTab(index)}
            >
              <Text className={`${index === activeTab && 'font-bold text-orange-500'}  text-gray-300 text-center bg-blue-400 h-12`}>
                $
                {React.isValidElement(tab) && tab.props.icon}
              </Text>
              <Text className={`${index === activeTab ? 'font-bold text-orange-500' : 'text-gray-300' } text-center bg-purple-400`}>
                {React.isValidElement(tab) && tab.props.title}
              </Text>
            </TouchableOpacity>
          ))
        }
      </View>
    </View>
  );
};

// const styles = StyleSheet.create({
//   tabsContainer: {
//     position: 'absolute',
//     bottom: 0,
//   },
// });
