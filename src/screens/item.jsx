import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function Item() {
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

    {/* Top Background */}
    <View style={{height: 700}}
    className="absolute bottom-0 bg-white w-full rounded-t-3xl"/>

    <View className="flex-1">

      {/* Form Container */}
      <View className="flex-1 mt-52 mb-32 mx-5 justify-center">

        <TextInput
        style={{backgroundColor: "#DFDFDF", textAlignVertical: 'top'}}
        className="rounded-lg h-20 p-3 mb-3"
        placeholder='Informe o seu pedido'
        />

        <Text className="mb-5 text-lg ml-2 mt-5 text-zinc-400">Informe o seu endereço de entrega:</Text>


        <TextInput
        style={{backgroundColor: "#DFDFDF"}}
        className="rounded-lg h-10 p-3 mb-3"
        placeholder='Rua'
        />

        <View className="flex-row gap-3">
          <TextInput
          style={{backgroundColor: "#DFDFDF"}}
          className="flex-1 rounded-lg h-10 p-3 mb-3"
          placeholder='Bairro'
          />

          <TextInput
          style={{backgroundColor: "#DFDFDF"}}
          className="flex-2 rounded-lg h-10 p-3 mb-3"
          placeholder='Número da casa'
          />
        </View>

        <TextInput
        style={{backgroundColor: "#DFDFDF", textAlignVertical: 'top'}}
        className="rounded-lg h-32 p-3 mb-3"
        placeholder='Complemento'
        />

        <View className="items-center justify-center mt-5">
          <TouchableOpacity className="bg-green-500 p-5 w-52 items-center justify-center rounded-lg">
            <Text className="text-white font-bold text-xl">Confirmar</Text>
          </TouchableOpacity>
        </View>
        

      </View>

    </View>

    </View>
  )
}