import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useState } from 'react'

import BackArrow from '../../../assets/Icons/back-arrow.svg'
import SingleSelectSection from '../components/singleselect-section'
import MultiSelectSection from '../components/multiselect-section'

export default function Item({ route, navigation }) {
  const insets = useSafeAreaInsets()

  const { nome, descricao, foto, variantes, adicionais } = route.params

  const [quantidade, setQuantidade] = useState(1)

  const handleQuantidadeItem = (operacao) => {
    if(quantidade === 1) {
      operacao === 'somar'? setQuantidade(quantidade + 1) : null
    } else {
      operacao === 'somar'? setQuantidade(quantidade + 1) : setQuantidade(quantidade - 1)
    }
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

      {/* Background */}
      <View className="absolute bottom-0 bg-white w-full h-5/6 rounded-t-3xl"/>

      {/* Main */}
      <View className="flex-1">

          {/* Back Arrow */}
          <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="ml-5 mt-8"
          >
            <BackArrow/>
          </TouchableOpacity>

          {/* Container */}
          <View className="flex-1 p-5 mt-20 justify-between">

            {/* Informação do item */}
            <View className="flex-row">
              <Image className="flex-2 h-24 w-24 rounded-lg"
              source={foto}
              />
              <View className="flex-1 ml-3">
                <Text className="text-lg font-semibold mb-1">{nome}</Text>
                <Text className="text-base text-neutral-500">{descricao}</Text>
              </View>
            </View>

            {/* Variantes e adicionais */}
            <ScrollView className="my-3"
            contentContainerStyle={{
              gap: 10,
            }}
            >
              <View>
                <Text className="text-lg font-semibold text-neutral-400 mb-2">Opções</Text>
                <SingleSelectSection selections={variantes}/>
              </View>
              <View>
                <Text className="text-lg font-semibold text-neutral-400 mb-2">Adicionais</Text>
                <MultiSelectSection selections={adicionais}/>
              </View>
              <View>
                <Text className="text-lg font-semibold text-neutral-400 mb-2">Observações</Text>
                <TextInput
                style={{
                  textAlignVertical: 'top',
                  
                }}
                placeholder='Exemplo: Sem cebola e com azeitona na metade da pizza.'
                placeholderTextColor="#939596"
                multiline={true}
                className="bg-neutral-200 h-40 rounded-lg align-text-top p-3 text-neutral-800 text-lg"
                />
              </View>

            </ScrollView>

          </View>

          {/* Finalizar Compra */}
          <View className="flex-row h-28 justify-between p-3 border-t-2 border-neutral-400">
            
            {/* Botao de quantidade */}
            <View className="flex-row flex-1 items-center">
              <TouchableOpacity onPress={() => handleQuantidadeItem('subtrair')}
              className="py-2 rounded-lg px-5 border-2 border-neutral-400"
              >
                <Text className="text-3xl font-semibold text-neutral-400">-</Text>
              </TouchableOpacity>
              <View className="py-2 px-5 mx-1 bg-neutral-200 rounded-lg">
                <Text className="text-3xl font-semibold text-neutral-800">{quantidade}</Text>
              </View>
              <TouchableOpacity onPress={() => handleQuantidadeItem('somar')}
              className="py-2 rounded-lg px-5 border-2 border-neutral-400"
              >
                <Text className="text-3xl font-semibold text-neutral-400">+</Text>
              </TouchableOpacity>
            </View>

            {/* Botão de finalizar a compra */}
            <TouchableOpacity className="flex-2 justify-center bg-green-500 rounded-lg p-3 px-5"
            onPress={() => navigation.navigate('carrinho')}
            >
              <Text className="text-lg font-semibold text-neutral-100">Adicionar R$60,00</Text>
            </TouchableOpacity>

          </View>

      </View>

    </View>
  )
}