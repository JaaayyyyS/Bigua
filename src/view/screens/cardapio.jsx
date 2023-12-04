import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import DropDownPicker from 'react-native-dropdown-picker'

import BackArrow from '../../../assets/Icons/back-arrow.svg'
import Bag from '../../../assets/Icons/bag.svg'

import Produto from '../components/produto'


const filtros = [
  {label: 'Pizzas', value: 'pizzas'},
  {label: 'Doces', value: 'doces'},
  {label: 'Empanadas', value: 'empanadas'},
  {label: 'Pães', value: 'paes'},
  {label: 'Bebidas', value: 'bebidas'},
  {label: 'Vinhos', value: 'vinhos'},
]

export default function Cardapio({ route, navigation }) {
  const insets = useSafeAreaInsets()
  const { cardapio, nomeLoja, filtro } = route.params

  if (filtro) {
    cardapioFiltrado = cardapio.filter(p => p._filtro === filtro)
  } else {
    cardapioFiltrado = cardapio
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

      {/* Header Background */}
      <View className="absolute top-0 bg-white w-full h-28"/>
      
      <View className="flex-1">

        {/* HEADER */}
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity
          onPress={() => navigation.goBack()}
          >
            <BackArrow/>
          </TouchableOpacity>
          <Text className="font-bold text-lg">{filtro? filtro : nomeLoja}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('carrinho')}>
            <Bag/>
          </TouchableOpacity>
        </View>

        {/* Cardápio */}
        <ScrollView className="mx-1 mt-6 flex-1">
          {
            cardapioFiltrado.map((p, i) => {
              return(
                <Produto
                key={i}
                nome={p._nome}
                descricao={p._descricao}
                imagem={p._foto_path}
                event={() => navigation.navigate("item", {
                  nome: p._nome,
                  descricao: p._descricao,
                  foto: p._foto_path,
                  variantes: p._variantes,
                  adicionais: p._adicionais,
                  fornecedorLoja: nomeLoja
                })}
                variantes={p._variantes}
                />
              )
            })
          }
        </ScrollView>

      </View>

    </View>
  )
}