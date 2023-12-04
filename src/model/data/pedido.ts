import ItemPedido from "../classes/item_pedido";

export default class Pedido {
  static _itens: Array<ItemPedido> = []
  static _fornecedorLoja: string

  static add_item(itemToAdd: ItemPedido) {
    Pedido._itens.push(itemToAdd)
  }

  static remove_item(itemToRemove: ItemPedido) {
    if (Pedido._itens.includes(itemToRemove)) {
      console.log(`Removendo item ${this.return_item(itemToRemove)[0]._nome_produto} do pedido`)
      Pedido._itens = Pedido._itens.filter(i => i._id !== itemToRemove._id)
    }
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
    return Pedido._itens
  }

  static return_item(itemToRemove: ItemPedido) {
    return Pedido._itens.filter(i => i._id === itemToRemove._id)
  }

  static DEBUG_show_itens() {
    Pedido._itens.forEach((i) => {
      console.log(i)
    })
  }
}