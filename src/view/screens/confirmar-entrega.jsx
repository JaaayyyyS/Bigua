import { View, Text, TouchableOpacity, TextInput} from 'react-native'
import React, { useEffect, useState } from 'react'

import { useSafeAreaInsets } from 'react-native-safe-area-context'

import BackArrow from '../../../assets/Icons/back-arrow.svg'
import Pedido from '../../model/data/pedido'

export default function ConfirmarEntrega({ navigation, route }) {
  const insets = useSafeAreaInsets()
  const {valorTotal} = route.params

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

        {/* Formulário Endereço de Entrega */}
        <View className="flex-1 mt-8">

          <Text className="mx-5 text-base font-semibold text-neutral-800">Seu endereço de entrega:</Text>

          <View className="mt-5">

            <TextInput placeholder='Nome da rua' className="bg-neutral-300 mx-5 rounded-lg p-2 text-base mb-3"/>
            <View className="flex-row mx-5 mb-3">
              <TextInput placeholder='Número da casa' className="bg-neutral-300 rounded-lg p-2 text-base"/>
              <TextInput placeholder='Bairro' className="bg-neutral-300 rounded-lg p-2 text-base flex-1 ml-2"/>
            </View>
            <TextInput style={{textAlignVertical: 'top'}}
            placeholder='Complemento' className="bg-neutral-300 rounded-lg p-2 text-base mx-5 h-32"/>

          </View>

          {/* Forma de pagamento */}
          <Text className="mx-5 text-base font-semibold text-neutral-800 mt-5">Forma de pagamento:</Text>
          <Text className="mx-5 text-sm font-semibold text-neutral-400 mt-1">O pagamento é realizado com o entregador quando ele entregar o seu pedido!</Text>

          <View>
            <View className="flex-row itens-center mx-3 mt-2">
              <Text className="p-3 font-semibold text-neutral-800">Escolha o método de pagamento: </Text>
              <View className="p-3 w-32 bg-neutral-300 rounded-lg">
                <Text className="font-semibold text-neutral-800">Dinheiro</Text>
              </View>
            </View>
            <View className="flex-row itens-center mx-3">
              <Text className="p-3 font-semibold text-neutral-400">Troco para: </Text>
              <View className="p-3 w-32 bg-neutral-300 rounded-lg">
                <Text className="font-semibold text-neutral-400">R$500</Text>
              </View>
            </View>
          </View>

        </View>

        {/* Valor Total e Botão de finalizar compra */}

        {/* Valor Total */}
        <View className="bg-white ml-4 w-8/12 mr-32 mt-4 rounded-lg p-3 mb-5">
            <Text className="text-base text-neutral-400">Taxa de entrega: R${(valorTotal * 0.04).toFixed(2)}</Text>
            <Text className="text-lg font-semibold text-neutral-800">Total: R${(valorTotal + (valorTotal * 0.04)).toFixed(2)}</Text>
          </View>

        <View className="flex-2 justify-between">

          {/* Botão Confirmar Pedido */}
          <View className="justify-between items-center gap-y-2 mb-3">
            <TouchableOpacity className="border-2 border-neutral-400 p-3 rounded-lg items-center w-11/12"
            onPress={() => navigation.navigate('lista-restaurantes')}
            >
              <Text className="font-semibold text-base text-neutral-500">Continuar Comprando</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-green-500 p-5 rounded-lg items-center w-11/12"
            onPress={() => navigation.navigate('confirmar-entrega')}
            >
              <Text className="font-semibold text-lg text-white">Confirmar Entrega</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>

    </View>
  )
}