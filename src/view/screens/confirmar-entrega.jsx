import { View, Text, TouchableOpacity, TextInput, ScrollView, Linking} from 'react-native'
import React, { useEffect, useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'

import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useForm, Controller } from 'react-hook-form'

import BackArrow from '../../../assets/Icons/back-arrow.svg'
import Pedido from '../../model/data/pedido'

export default function ConfirmarEntrega({ navigation, route }) {
  const insets = useSafeAreaInsets()
  const {valorTotal} = route.params

  // DropDownPicker Props
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Crédito', value: 'credito'},
    {label: 'Débito', value: 'debito'},
    {label: 'Pix', value: 'pix'},
    {label: 'Dinheiro', value: 'dinheiro'}
  ]);

  // Mandar mensagem para o whatsapp
  const sendWhatsApp = () => {
    let msg = "LOG DO PEDIDO (DEBUG)\n\n\n";

    Pedido.return_all_itens().forEach(item => {
      msg += `*${item._quantidade}x ${item._nome_produto} ${item._variante.nome}*\nAdicionais: `
      item._adicionais.forEach(adicional => {
        msg += `${adicional.nome} `
      })
      msg += `\nObservação: *${item._observacao}*\n\n`
      value === 'dinheiro'?
      msg += `Forma de pagamento: ${value} Troco para: R$VALOR`
      :
      msg += `Forma de pagamento: ${value}`

      msg += `\nValor total do pedido: ${Pedido.return_valor_total()}\n\n\n`
    })

    let phoneWithCountryCode = "555182634199";
  
    let mobile =
      Platform.OS == "ios" ? phoneWithCountryCode : "+" + phoneWithCountryCode;
    if (mobile) {
      if (msg) {
        let url = "whatsapp://send?text=" + msg + "&phone=" + mobile;
        Linking.openURL(url)
          .then(data => {
            console.log("WhatsApp Abriu");
          })
          .catch(() => {
            alert("Verifique se o aplicativo Whatsapp está instalado em seu dispositivo");
          });
      } else {
        alert("Por favor insira uma mensagem para ser enviada");
      }
    } else {
      alert("Por favor insira um número de telefone válido");
    }
  };


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
      <View className="absolute top-0 bg-white w-full h-28 rounded-b-3xl"/>

      <View className="flex-1">

        {/* HEADER */}
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity
          onPress={() => navigation.goBack()}
          >
            <BackArrow/>
          </TouchableOpacity>
          <Text className="font-bold text-lg">Carrinho</Text>
          <View/>
        </View>

        {/* Formulário Endereço de Entrega */}

        {/* Forma de pagamento */}
        <Text className="mx-5 text-base font-semibold text-neutral-800 mt-5">Forma de pagamento:</Text>
        <Text className="mx-5 text-sm font-semibold text-neutral-400 mt-1">O pagamento é realizado com o entregador quando ele entregar o seu pedido!</Text>

          <View className="flex-2 mx-5">
            <DropDownPicker className="mt-2"
            placeholder='Selecione a forma de pagamento'
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            />
            {
              value === 'dinheiro'?
              <View className="flex-row itens-center mt-2">
                <Text className="py-3 mr-2 font-semibold text-neutral-400">Troco para:</Text>
                <TextInput placeholder='Informe o valor' className="bg-white rounded-lg p-2 text-base w-40"/>
              </View>:
              null
            }
          </View>


        <ScrollView className="flex-1 mt-2">

          <Text className="mx-5 text-base font-semibold text-neutral-800">Seu endereço de entrega:</Text>

          <View className="mt-5">

            <TextInput placeholder='Nome da rua' className="border bg-white mx-5 rounded-lg p-2 text-base mb-3"/>
            <View className="flex-row mx-5 mb-3">
              <TextInput placeholder='Número da casa' className="border bg-white rounded-lg p-2 text-base"/>
              <TextInput placeholder='Bairro' className="border bg-white rounded-lg p-2 text-base flex-1 ml-2"/>
            </View>
            <TextInput style={{textAlignVertical: 'top'}}
            placeholder='Complemento' className="border bg-white rounded-lg p-2 text-base mx-5 h-32"/>

          </View>

          {/* Valor Total e Botão de finalizar compra */}

          {/* Valor Total */}
          <View className="bg-white ml-4 w-8/12 mr-32 rounded-lg p-3 mb-5 mt-16">
            <Text className="text-base text-neutral-400">Taxa de entrega: R${(valorTotal * 0.04).toFixed(2)}</Text>
            <Text className="text-lg font-semibold text-neutral-800">Total: R${(valorTotal + (valorTotal * 0.04)).toFixed(2)}</Text>
          </View>

          <View className="flex-2 justify-between">

            {/* Botão Confirmar Pedido */}
            <View className="justify-between items-center gap-y-2">
              <TouchableOpacity className="border-2 border-neutral-800 p-3 rounded-lg items-center w-11/12"
              onPress={() => navigation.navigate('lista-restaurantes')}
              >
                <Text className="font-semibold text-base text-neutral-800">Continuar Comprando</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-green-500 p-5 rounded-lg items-center w-11/12"
              onPress={() => sendWhatsApp()}
              >
                <Text className="font-semibold text-lg text-white">Confirmar Entrega</Text>
              </TouchableOpacity>
            </View>

          </View>

        </ScrollView>

      </View>

    </View>
  )
}