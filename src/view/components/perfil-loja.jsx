import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function PerfilLoja({ nome, imagem, descricao, event }) {
  return (
    <TouchableOpacity onPress={event} style={{backgroundColor: "#FFFFFF"}}
    className="flex-row p-5 rounded-3xl justify-between mb-3">
      
        <Image source={imagem} className="h-32 w-32 rounded-lg flex-2"/>
        <View className="ml-3 flex-1">
          <Text className="font-bold text-lg mb-1"
          >{nome}</Text>
          <Text className="text-sm flex-wrap">{descricao}</Text>
        </View>

    </TouchableOpacity>
  )
}