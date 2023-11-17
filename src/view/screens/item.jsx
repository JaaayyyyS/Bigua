import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import BackArrow from '../../../assets/Icons/back-arrow.svg'

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

          

      </View>

    </View>
  )
}