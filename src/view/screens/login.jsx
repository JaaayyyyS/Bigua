import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'

export default function Login({ navigation }) {
  const insets = useSafeAreaInsets()

  const [mode, setMode] = useState('login')

  const handleMode = (buttonMode) => {
    setMode(buttonMode)
  }

  return (
    <View className="flex-1" 
    style={{
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
      backgroundColor: "#DFDFDF"
    }}>

      {/* StatusBar Color */}
      <StatusBar style='dark'/>

      {/* Main Section */}
      <View className="flex-1">
        
        {/* Header */}
        <View className="flex-2 justify-center items-center pt-10">
          
          <Text className="text-4xl font-semibold text-neutral-800">Bem Vindo!</Text>
          <Text className="text-lg text-neutral-800">O seu app de delivery em Laguna.</Text>

          <View className="flex-row my-5">
            {
              mode === 'login'?
              <TouchableOpacity className="p-4 w-5/12 border-2 border-neutral-800 items-center justify-center bg-neutral-800
              rounded-l-lg"
              onPress={() => handleMode('login')}
              >
                <Text className="text-base font-semibold text-white">Entrar</Text>
              </TouchableOpacity>
              :
              <TouchableOpacity className="p-4 w-5/12 border-2 border-neutral-400 items-center justify-center bg-neutral-400
              rounded-l-lg"
              onPress={() => handleMode('login')}
              >
                <Text className="text-base font-semibold text-white">Entrar</Text>
              </TouchableOpacity>
            }

            {
              mode === 'register'?
              <TouchableOpacity className="p-4 w-5/12 border-2 border-neutral-800 items-center justify-center bg-neutral-800
            rounded-r-lg"
            onPress={() => handleMode('register')}
            >
              <Text className="text-base font-semibold text-white">Criar Conta</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity className="p-4 w-5/12 border-2 border-neutral-400 items-center justify-center bg-neutral-400
            rounded-r-lg"
            onPress={() => handleMode('register')}
            >
              <Text className="text-base font-semibold text-white">Criar Conta</Text>
            </TouchableOpacity>
            }
          </View>
        </View>

        {/* Main Form */}
        <ScrollView className="flex-1"
        contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
        >

          {
            mode === 'login'?
            <View className="w-screen">
            <View className="mx-10 mb-4">
              <Text className="mb-2">Email</Text>
              <TextInput className="p-2 pl-2 border border-neutral-800 rounded-lg"
              placeholder='exemplo@gmail.com'
              />
            </View>
            <View className="mx-10">
              <Text className="mb-2">Senha</Text>
              <TextInput className="p-2 pl-2 border border-neutral-800 rounded-lg"
              placeholder='************'
              />
            </View>
          </View>
          :
          <View className="w-screen">
             <View className="mx-10 mb-4">
              <Text className="mb-2">Nome</Text>
              <TextInput className="p-2 pl-2 border border-neutral-800 rounded-lg"
              placeholder='Seu nome completo'
              />
            </View>
            <View className="mx-10 mb-4">
              <Text className="mb-2">Email</Text>
              <TextInput className="p-2 pl-2 border border-neutral-800 rounded-lg"
              placeholder='exemplo@gmail.com'
              />
            </View>
            <View className="mx-10 mb-4">
              <Text className="mb-2">Senha</Text>
              <TextInput className="p-2 pl-2 border border-neutral-800 rounded-lg"
              placeholder='************'
              />
            </View>
            <View className="mx-10 mb-4">
              <Text className="mb-2">Confirmar Senha</Text>
              <TextInput className="p-2 pl-2 border border-neutral-800 rounded-lg"
              placeholder='************'
              />
            </View>
            <View className="mx-10">
              <Text className="mb-2">Telefone</Text>
              <TextInput className="p-2 pl-2 border border-neutral-800 rounded-lg"
              placeholder='(XX) X XXXX-XXXX'
              />
            </View>
          </View>
          }

        </ScrollView>

        {/* Action Button */}
        <View className="w-screen justify-center items-center my-8">
          <TouchableOpacity className="w-8/12 p-4 justify-center items-center rounded-lg bg-neutral-800"
          onPress={() => {
            navigation.navigate('lista-restaurantes')
          }}
          >
            {
              mode === 'login'?
              <Text className="text-lg font-bold text-white">Entrar</Text>
              :
              <Text className="text-lg font-bold text-white">Criar Conta</Text>
            }
          </TouchableOpacity>
        </View>

      </View>

    </View>
  )
}