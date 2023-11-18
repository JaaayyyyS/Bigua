import { View, Text, TouchableOpacity } from 'react-native'
import { useState } from "react"
import React from 'react'
import SelectButton from './select-button'

export default function SingleSelectSection({ selections }) {
  const [ selectedButtons, setSelectedButtons ] = useState([])

  const handleSingleSelection = (selected) => {
    if (selectedButtons.includes(selected)) {
      setSelectedButtons([])
    } else {
      setSelectedButtons([selected])
    }
  }

  return (
    <View className="flex-row flex-wrap justify-between">
      {
        selections.map((s, i) => {
          return(
            selectedButtons.includes(s)?
            <View className="mb-2" key={i}>
              <SelectButton
              text={s}
              isSlected={true}
              event={() => handleSingleSelection(s)}
              />
            </View>:
            <View className="mb-2" key={i}>
              <SelectButton
              text={s}
              isSlected={false}
              event={() => handleSingleSelection(s)}
              />
            </View>
          )
        })
      }
    </View>
  )
}