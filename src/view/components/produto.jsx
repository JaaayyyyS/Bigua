import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function Produto({ nome, imagem, descricao, event, variantes }) {
  return (
    <TouchableOpacity onPress={event}
    className="flex-row rounded-lg justify-between mb-3 mx-2">
      
        <Image source={imagem} className="h-32 w-32 rounded-l-lg flex-2"/>
        <View className="px-3 pb-2 pt-1 h-32 flex-1 justify-between bg-white rounded-r-lg">
          <View>
            <Text className="font-bold text-base mb-1"
            >{nome}</Text>
            <Text className="text-sm flex-wrap">{descricao}</Text>
          </View>
          <View className="flex-row justify-between">
            {
              variantes.length < 1?
              <Text></Text>:
              <Text className="font-bold text-neutral-400 text-base">{variantes.length} opções</Text>
            }
          </View>
        </View>

    </TouchableOpacity>
  )
}