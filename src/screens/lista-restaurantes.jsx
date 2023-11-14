import { View, Text, Image } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import PerfilLoja from '../components/perfil-loja'

import Menu from '../../assets/Icons/menu.svg'
import Bag from '../../assets/Icons/bag.svg'

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
          <Bag/>
        </View>

        {/* Lista de Lojas */}
        <View className="flex-1 justify-center items-center">
          <PerfilLoja
          nome={'Piazza Pizzeria'}
          imagem={require('../../assets/Images/PiazzaPizzeriaFoto.png')}
          descricao={"Descrição longa do estabelecimento"}
          aberto={true}
          event={() => {navigation.navigate('cardapio')}}
          />

          <PerfilLoja
          nome={'Café Tupy'}
          imagem={require('../../assets/Images/PiazzaPizzeriaFoto.png')}
          descricao={"Descrição longa do estabelecimento"}
          aberto={false}
          event={() => {navigation.navigate('cardapio')}}
          />

          <PerfilLoja
          nome={'Convés'}
          imagem={require('../../assets/Images/PiazzaPizzeriaFoto.png')}
          descricao={"Descrição longa do estabelecimento"}
          aberto={false}
          event={() => {navigation.navigate('cardapio')}}
          />
        </View>

      </View>

    </View>
  )
}