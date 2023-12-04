import { View, Text, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import BackArrow from '../../../assets/Icons/back-arrow.svg'
import Bag from '../../../assets/Icons/bag.svg'

import Filtro from '../components/filtro-card'
import Lojas from '../../model/data/lojas_DB'

export default function Filtros({ route, navigation }) {
  const insets = useSafeAreaInsets()
  const { cardapio, nomeLoja, filtrosLoja } = route.params

  const calcularFiltroQuantidade = (filtro) => {
    let soma = 0

    cardapio.forEach(p => {
      if (p._filtro === filtro) {
        soma++
      }
    });

    return soma
  }

  console.log(`Loja ${nomeLoja} aberta. Seu cardápio:\n${cardapio}\nFiltros:${filtrosLoja.length}`)

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
      <View className="absolute top-0 bg-white w-full h-28"/>
      
      <View className="flex-1">

        {/* HEADER */}
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity
          onPress={() => navigation.goBack()}
          >
            <BackArrow/>
          </TouchableOpacity>
          <Text className="font-bold text-lg">{nomeLoja}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('carrinho')}>
            <Bag/>
          </TouchableOpacity>
        </View>

        {/* Filtros */}
            <View className=" justify-center items-center mt-8 mb-2">
              <Text className="text-base font-semibold text-neutral-800"
              > Selecione o tipo de produto que deseja</Text>
            </View>
            <FlatList className="mx-1 mt-5 flex-1"
            columnWrapperStyle={{justifyContent: 'space-around'}}

            data={filtrosLoja}
            renderItem={({item}) => <Filtro
              name={item}
              image_PATH={require('../../../assets/Images/pizza.jpg')}
              quantidade={calcularFiltroQuantidade(item)}
              event={() => {
                navigation.navigate('cardapio', {cardapio: cardapio, nomeLoja: item.label, filtro: item})
              }}
              />
            }
            keyExtractor={item => item}
            numColumns={2}
            />

      </View>

    </View>
  )
}