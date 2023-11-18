import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function SelectButton({text, isSlected, event}) {
  return (
    !isSlected?
    <TouchableOpacity
    onPress={event}
    className="border-neutral-500 border-2 p-3 w-44 justify-center items-center rounded-lg"
    >
      <Text className="text-lg font-semibold text-neutral-500">{text}</Text>
    </TouchableOpacity>
    :
    <TouchableOpacity
    onPress={event}
    className="border-neutral-800 border-2 p-3 w-44 justify-center items-center rounded-lg bg-neutral-800"
    >
      <Text className="text-lg font-semibold text-neutral-100">{text}</Text>
    </TouchableOpacity>
  )
}