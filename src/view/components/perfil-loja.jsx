import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function PerfilLoja({ nome, imagem, descricao, event }) {
  return (
    <TouchableOpacity onPress={event} style={{backgroundColor: "#FFFFFF"}}
    className="flex-row p-5 rounded-lg mb-3">
      
        <Image source={imagem} className="h-32 w-32 rounded-lg flex-2"/>
        <View className="flex-1 pl-3">
          <Text className="font-bold text-lg mb-1"
          >{nome}</Text>
          <Text className="text-sm flex-wrap">{descricao}</Text>
        </View>

    </TouchableOpacity>
  )
}