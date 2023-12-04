import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

import { useSafeAreaInsets } from 'react-native-safe-area-context'

import BackArrow from '../../../assets/Icons/back-arrow.svg'
import Pedido from '../../model/data/pedido'

export default function Carrinho({ navigation }) {
  const insets = useSafeAreaInsets()

  const [valorTotal, setValorTotal] = useState(0)
  const [pedidoCarrinho, setPedidoCarrinho] = useState(Pedido.return_all_itens())

  useEffect(() => {
    setValorTotal(Pedido.return_valor_total)
  },)

  const removeItem = (itemToRemove) => {
    Pedido.remove_item(itemToRemove)
    setPedidoCarrinho(Pedido.return_all_itens())
    console.log(Pedido._itens)
  }

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
        <ScrollView className="flex-1 mt-8 mx-3 border-r-2 max-h-fit border-neutral-500 pr-2">
          {
            pedidoCarrinho.map((item, i) => {
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
                      <View className="flex-row justify-between items-center">
                        <Text className="text-neutral-800 text-lg font-semibold">R${item._valor_total.toFixed(2)}</Text>
                        <TouchableOpacity className="p-1 border-2 border-red-500 rounded-lg justify-center items-center mt-2"
                        onPress={() => {removeItem(item)}}
                        >
                          <Text className="text-red-500 text-base font-semibold">Remover Item</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>

                </View>
              )
            })
          }
        </ScrollView>

        {/* Valor Total e Botão de finalizar compra */}
        <View className="flex-2 justify-between">

          {/* Valor Total */}
          <View className="bg-white ml-4 w-8/12 mr-32 mt-4 rounded-lg p-3 mb-5">
            <Text className="text-base text-neutral-400">Taxa de entrega: R${(valorTotal * 0.04).toFixed(2)}</Text>
            <Text className="text-lg font-semibold text-neutral-800">Total: R${(valorTotal + (valorTotal * 0.04)).toFixed(2)}</Text>
          </View>

          {/* Botão Confirmar Pedido */}
          <View className="justify-between items-center gap-y-2 mb-3">
            <TouchableOpacity className="border-2 border-neutral-800 p-3 rounded-lg items-center w-11/12"
            onPress={() => navigation.goBack()}
            >
              <Text className="font-semibold text-base text-neutral-800">Continuar Comprando</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-green-500 p-5 rounded-lg items-center w-11/12"
            onPress={() => navigation.navigate('confirmar-entrega', {valorTotal: valorTotal})}
            >
              <Text className="font-semibold text-lg text-white">Confirmar Pedido</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>

    </View>
  )
}