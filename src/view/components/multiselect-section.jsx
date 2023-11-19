import { View, Text, TouchableOpacity } from 'react-native'
import { useState, useEffect } from "react"
import React from 'react'
import SelectButton from './select-button'

export default function MultiSelectSection({ selections, childToParent }) {
  const [ selectedButtons, setSelectedButtons ] = useState([])

  const handleSingleSelection = (selected) => {
    if (selectedButtons.includes(selected)) {
      setSelectedButtons(selectedButtons.filter(s => s !== selected))
    } else {
      setSelectedButtons([...selectedButtons, selected])
    }
  }

  useEffect(() => {
    childToParent(selectedButtons, 'adicionais')
  }, [selectedButtons])

  return (
    <View className="flex-row flex-wrap justify-between">
      {
        selections.map((s, i) => {
          return(
            selectedButtons.includes(s)?
            <View className="mb-2" key={i}>
              <SelectButton
              text={s.nome + ' R$' + s.valor.toFixed(2)}
              isSlected={true}
              event={() => handleSingleSelection(s)}
              />
            </View>:
            <View className="mb-2" key={i}>
              <SelectButton
              text={s.nome + ' R$' + s.valor.toFixed(2)}
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