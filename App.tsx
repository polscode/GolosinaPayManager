import React from 'react';
import { Text, View } from 'react-native';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from './src/components/accordion/Accordion';

const App = () => {
  return (
    <View>
      <Accordion>
        <AccordionItem itemKey={0}>
          <AccordionHeader>
            <Text>
              title 1
            </Text>
          </AccordionHeader>
          <AccordionBody>
           <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis quam officia eveniet accusamus minus, impedit recusandae neque dolorem dignissimos, non porro ut unde, sed voluptate? Quod quae, blanditiis ullam sequi quia eius? Delectus, error officia. Optio dolores facere distinctio natus temporibus asperiores, iure molestiae quisquam debitis cum perferendis itaque numquam, dolorem similique minus accusantium, suscipit quae nobis quia ipsa maxime reiciendis animi minima voluptatum! Cum nulla minus accusantium odit ad officia. Consectetur quos minus, debitis ad praesentium sit vitae eum id neque ipsa, distinctio deserunt dolorem blanditiis quia aliquam voluptates quas officiis similique animi ipsam autem, magni libero sapiente?
           </Text>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem itemKey={1}>
          <AccordionHeader>
            <Text>
              title 2
            </Text>
          </AccordionHeader>
          <AccordionBody>
            <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, animi saepe explicabo reiciendis amet laboriosam iusto quam. Veniam dolor aperiam maiores alias itaque odio temporibus! At odio itaque eum voluptate?
            </Text>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem itemKey={2}>
          <AccordionHeader>
            <Text>
              title 2
            </Text>
          </AccordionHeader>
          <AccordionBody>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, velit qui labore distinctio reiciendis reprehenderit vero in debitis culpa perspiciatis cupiditate quae dignissimos corporis, ea repellat inventore doloremque quam quasi magni. Iusto, laudantium ipsam. Voluptatibus atque architecto culpa quasi illo, error quas ut soluta, rem vel quia consequuntur hic autem!
            </Text>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </View>
  );
};

export default App;
