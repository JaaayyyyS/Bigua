import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function PerfilLoja({ nome, imagem, descricao, aberto, event }) {
  return (
    <TouchableOpacity onPress={event} style={{backgroundColor: "#FFFFFF"}}
    className="flex-row p-5 rounded-3xl justify-center mb-3">
      <View className="flex-row">
        <Image source={imagem} className="h-32 w-32"/>
        <View className="ml-3">
          <Text className="font-bold text-lg mb-1"
          >{nome}</Text>
          <Text className="text-sm flex-wrap w-32">{descricao}</Text>
        </View>
      </View>
      <View className="ml-3 justify-end">
      { 
      aberto? 
      <Text className="text-green-400 text-lg font-bold">Aberto   </Text> 
      : 
      <Text className="text-red-400 text-lg font-bold">Fechado</Text> 
      }
      </View>
    </TouchableOpacity>
  )
}