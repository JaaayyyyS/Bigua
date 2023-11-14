import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import PerfilLoja from '../components/perfil-loja'

import BackArrow from '../../assets/Icons/back-arrow.svg'
import Bag from '../../assets/Icons/bag.svg'

import FiltroCardapio from '../components/filtro-cardapio'


const filtros = ['Pizzas', 'Doces', 'Empanadas', 'Bebidas', 'Pães', 'vinhos']

export default function Cardapio({ navigation }) {
  const insets = useSafeAreaInsets()

  return (
    <View className="flex-1" 
    style={{
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
      backgroundColor: "#DFDFDF"
    }}>

      {/* Header Background */}
      <View className="absolute top-0 bg-white w-full h-28 rounded-b-3xl"/>
      <View className="flex-1">

        {/* HEADER */}
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity
          onPress={() => navigation.goBack()}
          >
            <BackArrow/>
          </TouchableOpacity>
          <Text className="font-bold text-lg">Piazza Pizzeria</Text>
          <Bag/>
        </View>

        {/* Top Filters */}
        <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        className="mt-5 max-h-10 mx-2"
        >
          {
            filtros.map((f, i) => {
              return (
                <FiltroCardapio key={i} nome={f}/>
              )
            })
          }
        </ScrollView>

        {/* Cardápio */}
        <ScrollView className="mx-2 mt-3 flex-1">
          <TouchableOpacity onPress={() => navigation.navigate("item")} className="bg-white h-32 rounded-lg mb-3"/>
          <TouchableOpacity onPress={() => navigation.navigate("item")} className="bg-white h-32 rounded-lg mb-3"/>
          <TouchableOpacity onPress={() => navigation.navigate("item")} className="bg-white h-32 rounded-lg mb-3"/>
          <TouchableOpacity onPress={() => navigation.navigate("item")} className="bg-white h-32 rounded-lg mb-3"/>
          <TouchableOpacity onPress={() => navigation.navigate("item")} className="bg-white h-32 rounded-lg mb-3"/>
          <TouchableOpacity onPress={() => navigation.navigate("item")} className="bg-white h-32 rounded-lg mb-3"/>
          <TouchableOpacity onPress={() => navigation.navigate("item")} className="bg-white h-32 rounded-lg mb-3"/>
          <TouchableOpacity onPress={() => navigation.navigate("item")} className="bg-white h-32 rounded-lg mb-3"/>
        </ScrollView>

      </View>

    </View>
  )
}