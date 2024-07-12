import React, { createContext, ReactNode, useContext, useEffect, useRef, useState } from 'react';
import { Animated, LayoutChangeEvent, StyleSheet, TouchableOpacity, View } from 'react-native';

interface AccordionContextType {
  currentKey : number | null;
  setCurrentKey: (key: number | null) => void;
}

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

interface AccordionProps {
  children: ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({ children }) => {
  const [currentKey, setCurrentKey] = useState<number | null>(null);
  return (
    <AccordionContext.Provider value={{ currentKey, setCurrentKey}}>
      {children}
    </AccordionContext.Provider>
  );
};

export const useAccordion = (): AccordionContextType => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('useAccordion must be used within an AccordionProvider');
  }
  return context;
};

interface AccordionItemProps {
  children: ReactNode;
  itemKey: number
}

export const AccordionItem: React.FC<AccordionItemProps> = ({children, itemKey}) => {

  const { currentKey, setCurrentKey} = useAccordion();

  const assignKey = () => {
    setCurrentKey( currentKey === itemKey ? null : itemKey);
  };

  let header: ReactNode = null;
  let body: ReactNode = null;

  React.Children.forEach(children, child => {
    if ( React.isValidElement(child) ) {

      if ( child.type === AccordionHeader) {
        header = child;
      } else if ( child.type === AccordionBody) {
        body = child;
      }
    }

  });

  return (
    <View>
      {header && React.cloneElement(header as React.ReactElement<any>, { assignKey })}
      {body && React.cloneElement(body as React.ReactElement<any>, { isOpen: currentKey === itemKey })}
  </View>
  );
};

interface AccordionHeaderProps {
  children: ReactNode;
  assignKey?: () => void;
}

export const AccordionHeader: React.FC<AccordionHeaderProps> = ({  children, assignKey }) => {
  return (
    <View>
      <TouchableOpacity onPress={assignKey}>
        {children}
      </TouchableOpacity>
    </View>
  );
};

interface AccordionBodyProps {
  children: ReactNode;
  isOpen?: boolean;
}

export const AccordionBody: React.FC<AccordionBodyProps> = ({children, isOpen}) => {

  const animatedHeight = useRef(new Animated.Value(0)).current;
  const [bodyHeight, setBodyHeight] = useState(0);
  const handleLayout = (e: LayoutChangeEvent) => {
    const { height } = e.nativeEvent.layout;
    setBodyHeight(height);
    return height;
  };

  useEffect(() => {

    Animated.timing(animatedHeight, {
      toValue: isOpen ? bodyHeight : 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [isOpen, bodyHeight, animatedHeight]);


  const styles = StyleSheet.create({
    container: {
      height: animatedHeight,
    },
  });

  return (
    <Animated.View
    style={styles.container}
    className={`overflow-hidden h-[${animatedHeight}]`}
    >
      <View
        className="absolute"
        onLayout={handleLayout}
      >
        {children}
      </View>
    </Animated.View>
  );
};
