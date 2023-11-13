import { View, Text, Image } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import PerfilLoja from '../components/perfil-loja'

import Menu from '../../assets/Icons/menu.svg'
import Bag from '../../assets/Icons/bag.svg'

export default function Restaurantes() {
  const insets = useSafeAreaInsets()

  return (
    <View className="flex-1" 
    style={{
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right
    }}>

      {/* HEADER */}
      <View>
        <Menu/>
        <Bag/>
      </View>

    </View>
  )
}