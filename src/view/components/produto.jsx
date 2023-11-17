import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function Produto({ nome, imagem, descricao, event, variantes }) {
  return (
    <TouchableOpacity onPress={event} style={{backgroundColor: "#FFFFFF"}}
    className="flex-row p-5 rounded-lg justify-between mb-3">
      
        <Image source={imagem} className="h-32 w-32 rounded-lg flex-2"/>
        <View className="ml-3 flex-1 justify-between">
          <View>
            <Text className="font-bold text-lg mb-1"
            >{nome}</Text>
            <Text className="text-sm flex-wrap">{descricao}</Text>
          </View>
          <View className="flex-row justify-between">
            {
              variantes.length < 1?
              <Text></Text>:
              <Text className="font-bold text-neutral-400 text-base">{variantes.length} variantes</Text>
            }
            <Text className="font-bold text-neutral-800 text-base">R$42,00</Text>
          </View>
        </View>

    </TouchableOpacity>
  )
}