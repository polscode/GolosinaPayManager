import React, { ReactElement, ReactNode, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

interface TabProps {
  children: ReactNode;
  title: string;
  icon?: ReactElement;
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
    <View className="flex flex-col bg-[#070707] flex-1">
      <ScrollView className="mt-2">
        {React.Children.map(children, (tab, index) => (
          <View
            key={index}
            className={`${activeTab !== index && 'hidden'} pb-[100px] px-2`}
          >
            {tab}
          </View>
        ))}
      </ScrollView>
      <View className=" flex flex-row bg-[#070707] justify-between p-[14px] absolute w-full bottom-0">
        {
          React.Children.map(children, (tab, index)=> {
            if (!React.isValidElement(tab)) {
              return null;
            }

            const {title, icon} = tab.props;
            return (
              <TouchableOpacity
                className="w-16 h-16 flex-col justify-between"
                key={index}
                onPress={() => changeTab(index)}
              >
                <View className={`${index === activeTab && 'font-bold text-orange-500 '} justify-center items-center text-gray-300 h-10`}>
                  {icon && React.cloneElement(icon, { size: 30, color: index === activeTab ? '#FF5733' : '#fff' })}
                </View>
                <Text className={`${index === activeTab ? 'font-bold text-orange-500' : 'text-gray-300 '}  pb-[5px] text-center`}>
                  {title}
                </Text>
              </TouchableOpacity>
            );
          })
        }
      </View>
    </View>
  );
};

