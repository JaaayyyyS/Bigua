import { View, Text, TouchableOpacity, Image, ScrollView, TextInput, Alert } from 'react-native'
import React, { useEffect } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useState } from 'react'

import BackArrow from '../../../assets/Icons/back-arrow.svg'
import SingleSelectSection from '../components/singleselect-section'
import MultiSelectSection from '../components/multiselect-section'
import Pedido from '../../model/data/pedido'
import ItemPedido from '../../model/classes/item_pedido'

export default function Item({ route, navigation }) {
  const insets = useSafeAreaInsets()

  const { nome, descricao, foto, variantes, adicionais, fornecedorLoja } = route.params

  const [quantidade, setQuantidade] = useState(1)
  const [selecionadosVariantes, setSelecionadosVariantes] = useState([])
  const [selecionadosAdicionais, setSelecionadosAdicionais] = useState([])
  const [valorTotal, setValorTotal] = useState(0.00)

  const [alertOption, setAlertOption] = useState(false)

  const handleAddPedido = () => {
    if (selecionadosVariantes.length > 0) {
      Pedido.add_item(new ItemPedido(
        nomeProduto = nome,
        selecionadosVariantes[0],
        selecionadosAdicionais,
        quantidade,
        valorTotal,
        'Teste de pedido longa descrição testando espaçamento no carrinho',
        fornecedor = fornecedorLoja
      ))
        
      navigation.navigate('carrinho')
    } else {
      Alert.alert('Pedido inválido', 'Selecione uma opção do produto para realizar o seu pedido')
      setAlertOption(true)
    }
  }

  const handleQuantidadeItem = (operacao) => {
    if(quantidade === 1) {
      operacao === 'somar'? setQuantidade(quantidade + 1) : null
    } else {
      operacao === 'somar'? setQuantidade(quantidade + 1) : setQuantidade(quantidade - 1)
    }
  }

  const handleChildToParent = (childData, tipo) => {
    tipo === 'variantes'? setSelecionadosVariantes(childData) : setSelecionadosAdicionais(childData)
  }

  useEffect(() => {
    let soma = 0
    selecionadosVariantes.forEach(v => {
      soma += v.valor
    })
    selecionadosAdicionais.forEach(a => {
      soma += a.valor
    })
    
    setValorTotal(soma * quantidade)
    console.log(selecionadosVariantes, selecionadosAdicionais)
  }, [selecionadosVariantes, selecionadosAdicionais, quantidade])

  return (
    <View className="flex-1" 
    style={{
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
      backgroundColor: "white"
    }}>

      {/* Main */}
      <View className="flex-1">

          {/* Back Arrow */}
          <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="ml-5 mt-8 w-10"
          >
            <BackArrow/>
          </TouchableOpacity>

          {/* Container */}
          <View className="flex-1 p-5 mt-5 justify-between">

            {/* Variantes e adicionais */}
            <ScrollView className=""
            contentContainerStyle={{
              gap: 10,
            }}
            >
              {/* Informação do item */}
              <View className="flex-row">
                <Image className="flex-2 h-24 w-24 rounded-lg"
                source={foto}
                />
                <View className="flex-1 ml-3">
                  <Text className="text-lg font-semibold mb-1">{nome}</Text>
                  <Text className="text-base text-neutral-500">{descricao}</Text>
                </View>
              </View>

              <View>
                {
                  alertOption?
                    <Text className="text-lg font-bold text-orange-500 mb-2 border-l-2 p-1 pl-4 border-orange-500 bg-orange-100 w-8/12">Selecione uma opção abaixo!</Text>
                  :
                    <Text className="text-lg font-semibold text-neutral-400 mb-2">Opções</Text>
                }
                {
                  variantes.length > 0?
                  <SingleSelectSection selections={variantes} childToParent={handleChildToParent}/>:
                  <Text className="text-neutral-400 text-base ml-1">Nenhuma opção</Text>
                }
              </View>
              <View>
                <Text className="text-lg font-semibold text-neutral-400 mb-2">Adicionais</Text>
                {
                  adicionais.length > 0?
                  <MultiSelectSection selections={adicionais} childToParent={handleChildToParent}/>:
                  <Text className="text-neutral-400 text-base ml-1">Nenhum adicional</Text>
                }
              </View>
              <View>
                <Text className="text-lg font-semibold text-neutral-400 mb-2">Observações</Text>
                <TextInput
                style={{
                  textAlignVertical: 'top',
                  
                }}
                placeholder='Adicione uma observação ao seu pedido.'
                placeholderTextColor="#939596"
                multiline={true}
                className="bg-neutral-200 h-40 rounded-lg align-text-top p-3 text-neutral-800 text-lg"
                />
              </View>

            </ScrollView>

          </View>

          {/* Finalizar Compra */}
          <View className="flex-row h-28 justify-between p-2 border-t-2 border-neutral-400">
            
            {/* Botao de quantidade */}
            <View className="flex-row items-center w-52">
              <TouchableOpacity onPress={() => handleQuantidadeItem('subtrair')}
              className="py-2 rounded-lg px-5 border-2 border-neutral-400"
              >
                <Text className="text-3xl font-semibold text-neutral-400">-</Text>
              </TouchableOpacity>
              <View className="py-2 px-5 mx-1 bg-neutral-200 rounded-lg w-20 items-center">
                <Text className="text-3xl font-semibold text-neutral-800">{quantidade}</Text>
              </View>
              <TouchableOpacity onPress={() => handleQuantidadeItem('somar')}
              className="py-2 rounded-lg px-5 border-2 border-neutral-400"
              >
                <Text className="text-3xl font-semibold text-neutral-400">+</Text>
              </TouchableOpacity>
            </View>

            {/* Botão de finalizar a compra */}
            <TouchableOpacity className="justify-center bg-green-500 rounded-lg p-3 w-44 items-center"
            onPress={() => {
              handleAddPedido()
            }}
            >
              <Text className="text-lg font-semibold text-neutral-100">Adicionar R${valorTotal.toFixed(2)}</Text>
            </TouchableOpacity>

          </View>

      </View>

    </View>
  )
}