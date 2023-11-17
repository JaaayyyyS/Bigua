import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import BackArrow from '../../../assets/Icons/back-arrow.svg'
import SingleSelectSection from '../components/singleselect-section'

export default function Item({ route, navigation }) {
  const insets = useSafeAreaInsets()

  const { nome, descricao, foto, variantes, adicionais } = route.params

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
                <Text className="text-lg font-bold mb-1">{nome}</Text>
                <Text className="text-base text-neutral-500">{descricao}</Text>
              </View>
            </View>

            {/* Variantes e adicionais */}
            <ScrollView className="my-10"
            contentContainerStyle={{
              gap: 30
            }}
            >
              <Text className="text-lg font-bold text-neutral-400">Variantes</Text>
              <SingleSelectSection selections={variantes}/>
              <Text className="text-lg font-bold text-neutral-400">Adicionais</Text>
              <SingleSelectSection selections={adicionais}/>

            </ScrollView>
            <Text>DEBUG SECTION: Aqui vai estar o botao de adicionar ao carrinho e o valor total do item com adicionais e variantes</Text>
          </View>

      </View>

    </View>
  )
}