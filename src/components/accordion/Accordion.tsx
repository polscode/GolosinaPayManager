import React, { createContext, ReactNode, useContext, useEffect, useRef, useState } from 'react';
import { LayoutChangeEvent, TouchableOpacity, View } from 'react-native';

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

  const bodyRef = useRef<View>(null);

  const handleLayout = (e: LayoutChangeEvent) => {
    const { height } = e.nativeEvent.layout;
    return height;
  };

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.setNativeProps({
        style: { maxHeight: isOpen ? handleLayout : 0 },
      });
    }
  }, [isOpen]);


  return (
    <View
      ref={bodyRef}
      onLayout={handleLayout}
      pointerEvents="none" // Evita la interacción con el contenido invisible
      className="transition-[max-height] ease-in-out duration-500 overflow-hidden"
    >
      {children}
    </View>
  );
};

