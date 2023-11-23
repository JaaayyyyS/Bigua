import ItemPedido from "../classes/item_pedido";

export default class Pedido {
  static _itens: Array<ItemPedido> = []

  static add_item(itemToAdd: ItemPedido) {
    Pedido._itens.push(itemToAdd)
  }

  static remove_item(itemToRemove: ItemPedido) {
    Pedido._itens.filter(i => i !== itemToRemove)
  }

  static clear_itens() {
    Pedido._itens.splice(0, Pedido._itens.length)
  }

  static return_valor_total(): number {
    let soma: number = 0

    Pedido._itens.forEach(i => {
      soma += i._valor_total
    })

    return soma
  }

  static return_all_itens(): Array<ItemPedido> {
    console.log(Pedido._itens)
    return Pedido._itens
  }

  static DEBUG_show_itens() {
    Pedido._itens.forEach((i) => {
      console.log(i)
    })
  }
}