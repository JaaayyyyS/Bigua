import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import PerfilLoja from '../components/perfil-loja'

import Menu from '../../../assets/Icons/menu.svg'
import Bag from '../../../assets/Icons/bag.svg'
import Slogan from '../../../assets/Bigua express.svg'

import Lojas from '../../model/data/lojas_DB'

const Lista_Lojas = Lojas.returnAll_loja()

export default function Restaurantes({ navigation }) {
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

      <View className="flex-1 p-5">

        {/* HEADER */}
        <View className="flex-row justify-between">
          <Menu/>
          <TouchableOpacity onPress={() => navigation.navigate('carrinho')}>
            <Bag/>
          </TouchableOpacity>
        </View>

        {/* Slogan */}
        <View className="mt-12">
          <Slogan/>
          <Text className="text-xl ml-1 mt-1 text-neutral-500">Faça seu pedido aqui!</Text>
        </View>

        {/* Lista de Lojas */}
        <View className="flex-1 justify-center items-center">

          {
            Lista_Lojas.map((l, i) => {
              return(
                <PerfilLoja
                key={i}
                nome={l._nome}
                imagem={l._foto_path}
                descricao={l._descricao}
                aberto={true}
                event={() => {navigation.navigate('cardapio', {
                  cardapio: l._cardapio,
                  nomeLoja: l._nome
                })}}
                />
              )
            })
          }

        </View>

      </View>

    </View>
  )
}