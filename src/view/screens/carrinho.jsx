import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'

import { useSafeAreaInsets } from 'react-native-safe-area-context'

import BackArrow from '../../../assets/Icons/back-arrow.svg'
import Pedido from '../../model/data/pedido'

export default function Carrinho({ navigation }) {
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
          <Text className="font-bold text-lg">Carrinho</Text>
          <View/>
        </View>

        {/* Lista de pedidos */}
        <ScrollView className="flex-1 mt-8 mx-3 rounded-lg">
          {
            Pedido.return_all_itens().map((item, i) => {
              return (
                <View key={i}
                className="bg-white h-fit p-3 rounded-lg mb-2">
                  
                  <View className="flex-row">
                    <Image source={require('../../../assets/Images/pizza.jpg')}
                    className="h-24 w-24 rounded-lg flex-2"
                    />
                    <View className="flex-1 pl-5">
                      <Text className="text-base font-semibold mb-1"
                      >{item._quantidade}x {item._nome_produto} {item._variante.nome}</Text>
                      <View className="flex-row flex-wrap">
                        <Text className="text-neutral-500 mb-1">Adicionais: {
                          item._adicionais.map((a, i) => {
                            return (
                              <Text className="text-neutral-500" key={i}>{a.nome}, </Text>
                            )
                          })
                        }</Text>
                      </View>
                      <Text className="text-neutral-500 mb-1">Observação: {item._observacao}</Text>
                      <View className="items-end">
                        <Text className="text-neutral-800 text-base font-semibold">R${item._valor_total.toFixed(2)}</Text>
                      </View>
                    </View>
                  </View>

                </View>
              )
            })
          }
        </ScrollView>

      </View>

    </View>
  )
}