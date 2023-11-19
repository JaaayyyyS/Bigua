import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function FiltroCardapio({ nome, selecionado, event }) {
  return (
    <TouchableOpacity
    className="bg-white h-10 w-24 justify-center items-center rounded-lg p-1 mr-1 mb-1"
    >
      <Text>{nome}</Text>
    </TouchableOpacity>
  )
}