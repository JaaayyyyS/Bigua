import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Filtro({ route, navigation, image_PATH, name, quantidade, event }) {
  return (
    <TouchableOpacity className="h-52 w-44 bg-white mb-3 flex-col rounded-lg justify-between items-center py-5"
    onPress={event}
    >
      <Image className="w-28 h-28 rounded-full"
      source={image_PATH}/>
      <View className="items-center">
        <Text className="text-base font-semibold text-neutral-800">{name}</Text>
        {
          quantidade > 1?
          <Text className="text-base font-semibold text-neutral-400">{quantidade} opções</Text>
          :
          <Text className="text-base font-semibold text-neutral-400">{quantidade} opção</Text>
        }
      </View>
    </TouchableOpacity>
  )
}