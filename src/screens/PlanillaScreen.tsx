import React, { useState } from 'react';
import { Text, View } from 'react-native';
import TitleIcon from '../components/TitleIcon';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ModalPrompt from '../components/ModalPrompt';
import Entypo from 'react-native-vector-icons/Entypo';
import getDate from '../helper/getDate';
import ModalSelect from '../components/ModalSelect';
import { refactorName } from '../helper/refactorName';

const PlanillaScreen = () => {

  const [isVisiblePlanilla, setIsVisiblePlanilla] = useState<boolean>(false);
  const [isVisiblePlate, setIsVisiblePlate] = useState<boolean>(false);
  const [isVisibleTotal, setIsVisibleTotal] = useState<boolean>(false);
  const [isVisibleDrivers, setIsVisibleDrivers] = useState<boolean>(false);

  const [serialPlanilla, setSerialPlanilla] = useState<number | string>('');
  const [total, setTotal] = useState<number | string>('');
  const [opPlate, setOpPlate] = useState<string>('0');
  const [opDriver, setOpDriver] = useState<string>('0');

  const date = getDate();

  const showModalPlanilla = () => {
    setIsVisiblePlanilla(true);
  };

  const showModalTotal = () => {
    setIsVisibleTotal(true);
  };

  const showModalSelectPlate = () => {
    setIsVisiblePlate(true);
  };

  const showModalSelectDriver = () => {
    setIsVisibleDrivers(true);
  };

  const data: {opcion :string, text:string}[] = [
    { opcion: '0', text: 'VIH-771' },
    { opcion: '1', text: 'JKL-345' },
    { opcion: '2', text: 'MNO-899' },
    { opcion: '3', text: 'PQS-456' },
    { opcion: '4', text: 'RST-123' },
    { opcion: '5', text: 'XYZ-789' },
    { opcion: '6', text: 'ABC-654' },
  ];

  const drivers: { opcion: string, text: string }[] = [
    { opcion: '0', text: 'Ana González Martínez' },
    { opcion: '1', text: 'Luis Pérez Rodríguez' },
    { opcion: '2', text: 'María Fernández López' },
    { opcion: '3', text: 'Jorge Morales Gómez' },
    { opcion: '4', text: 'Carla Sánchez Ruiz' },
    { opcion: '5', text: 'Pedro García Herrera' },
    { opcion: '6', text: 'Laura Martínez Torres' },
];

  return (
    <View>
      <Text className="text-white text-center text-xl font-bold my-4">
        Información de la Planilla
      </Text>
      <View className="flex h-full">
        <TitleIcon
          onPress={showModalTotal}
          icon={<FontAwesome name="dollar" />}
          title="Total Planilla"
          number={total}
          style={'mb-2'}
        />

        <TitleIcon
          onPress={showModalPlanilla}
          icon={<FontAwesome5 name="hashtag" />}
          title="N° Planilla"
          number={serialPlanilla}
          style={'mb-2'}
        />

        <TitleIcon
          // onPress={showModalTotal}
          icon={<Entypo name="calendar" />}
          title="Fecha"
          number={date}
          style={'mb-2'}
        />

        <TitleIcon
          onPress={showModalSelectPlate}
          icon={<FontAwesome5 name="car" />}
          title="Placa"
          number={data[Number(opPlate)].text}
          style={'mb-2'}
        />

      <TitleIcon
          onPress={showModalSelectDriver}
          icon={<FontAwesome5 name="id-card" />}
          title="Chofer"
          number={refactorName(drivers[Number(opDriver)].text)}
          style={'mb-2'}
        />
      </View>

      {/* Modal ingresar el total de la planilla */}
      <ModalPrompt setIsVisible={setIsVisibleTotal} isVisible={isVisibleTotal} value={total} setValue={setTotal} >
        Ingrese Total en Planilla
      </ModalPrompt>

      {/* Modal ingresar el numero de planilla */}
      <ModalPrompt setIsVisible={setIsVisiblePlanilla} isVisible={isVisiblePlanilla} value={serialPlanilla} setValue={setSerialPlanilla} >
        Ingrese Serial de la Planilla
      </ModalPrompt>

      {/* Modal seleccion de placa */}
      <ModalSelect setIsVisible={setIsVisiblePlate} isVisilbe={isVisiblePlate} opSelect={opPlate} setOp={setOpPlate} data={data}/>

      {/* Modal seleccion de chofer */}
      <ModalSelect setIsVisible={setIsVisibleDrivers} isVisilbe={isVisibleDrivers} opSelect={opDriver} setOp={setOpDriver} data={drivers}/>

    </View>
  );
};

export default PlanillaScreen;
