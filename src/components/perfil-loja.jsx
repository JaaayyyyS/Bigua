import { View, Text, Image } from 'react-native'
import React from 'react'

export default function PerfilLoja({ nome, imagem, descricao, aberto }) {
  return (
    <View style={{backgroundColor: "#FFFFFF"}}
    className="flex-row p-5 rounded-3xl justify-center mb-3">
      <View className="flex-row">
        <Image source={imagem}/>
        <View className="ml-3">
          <Text className="font-bold text-lg"
          >{nome}</Text>
          <Text className="text-sm">{descricao}</Text>
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
    </View>
  )
}