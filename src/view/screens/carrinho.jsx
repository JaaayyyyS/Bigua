import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import { useSafeAreaInsets } from 'react-native-safe-area-context'

import BackArrow from '../../../assets/Icons/back-arrow.svg'

export default function Carrinho({ navigation }) {
  const insets = useSafeAreaInsets()

  return (
    <View className="flex-1" 
    style={{
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
      backgroundColor: "#DFDFDF"
    }}>

      {/* Header Background */}
      <View className="absolute top-0 bg-white w-full h-28 rounded-b-3xl"/>

      <View className="flex-1">

        {/* HEADER */}
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity
          onPress={() => navigation.goBack()}
          >
            <BackArrow/>
          </TouchableOpacity>
          <Text className="font-bold text-lg">Carrinho</Text>
          <View/>
        </View>

      </View>

    </View>
  )
}