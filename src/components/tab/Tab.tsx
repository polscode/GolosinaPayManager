import React, { ReactNode, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

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
    <View className="justify-between flex flex-col">
      <View className=" flex flex-row">
        {
          React.Children.map(children, (tab, index)=>(
            <TouchableOpacity
              className="w-24 h-16 bg-slate-900"
              key={index}
              onPress={() => changeTab(index)}
            >
              <Text className={`${index === activeTab && 'font-bold text-orange-500'}  flex flex-col justify-between text-gray-300`}>

                {React.isValidElement(tab) && tab.props.icon}
              <Text className={`${index === activeTab ? 'font-bold text-orange-500' : 'text-gray-300' } text-xl text-center pb-2 `}>
                {React.isValidElement(tab) && tab.props.title}
              </Text>
              </Text>
            </TouchableOpacity>
          ))
        }
      </View>
      <View>
        {React.Children.map(children, (tab, index) => (
          <View
            key={index}
            className={`${activeTab !== index && 'hidden'}`}
          >
            {tab}
          </View>
        ))}
      </View>
    </View>
  );
};
