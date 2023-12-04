import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function PerfilLoja({ nome, imagem, descricao, event }) {
  return (
    <TouchableOpacity onPress={event}
    className="flex-row px-1 py-2">
      
        <Image source={imagem} className="h-32 w-32 rounded-l-lg flex-2"/>
        <View className="flex-1 px-3 py-3 bg-white rounded-r-lg">
          <Text className="font-bold text-lg mb-1"
          >{nome}</Text>
          <Text className="text-sm flex-wrap">{descricao}</Text>
        </View>

    </TouchableOpacity>
  )
}