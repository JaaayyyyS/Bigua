import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Login({ navigation }) {
  return (
    <View className="flex-1 justify-center">
      {/* Inputs Section */}
      <View className="flex-col">
        <TextInput
        style={{backgroundColor: "#DFDFDF"}}
        className="h-12 mx-16 pl-3 rounded-lg mb-3 text-lg"
        placeholder='Usuário'
        />

        <TextInput
        style={{backgroundColor: "#DFDFDF"}}
        className="h-12 mx-16 pl-3 rounded-lg text-lg"
        placeholder='Senha'
        />
      </View>

      <View>
        <TouchableOpacity 
        onPress={() => navigation.navigate("lista-restaurantes")}
        style={{backgroundColor: "#1A1A1A"}}
        className="mx-32 p-3 justify-center items-center rounded-lg mt-5">
          <Text className="text-white font-bold text-lg">Login</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={{borderBlockColor: "#1A1A1A"}}
        className="mx-32 p-3 justify-center items-center rounded-lg mt-2 border">
          <Text className="text-black font-bold text-lg">Cadastrar</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}