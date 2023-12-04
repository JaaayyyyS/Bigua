import ItemPedido from "../classes/item_pedido";

export default class Pedido {
  static _itens: Array<ItemPedido> = []
  static _fornecedorLoja: string | undefined = undefined

  static add_item(itemToAdd: ItemPedido) {
    if(this._fornecedorLoja) {
      if (itemToAdd._fornecedor === this._fornecedorLoja) {
        Pedido._itens.push(itemToAdd)
      } else {
        alert('Não é possível realizar pedidos de diferentes estabelecimentos, apenas pedidos de um único estabelecimento')
      }
    } else {
      this._fornecedorLoja = itemToAdd._fornecedor
      Pedido._itens.push(itemToAdd)
    }
  }

  static remove_item(itemToRemove: ItemPedido) {
    if (Pedido._itens.includes(itemToRemove)) {
      console.log(`Removendo item ${this.return_item(itemToRemove)[0]._nome_produto} do pedido`)
      Pedido._itens = Pedido._itens.filter(i => i._id !== itemToRemove._id)
    }

    if (this._itens.length === 0) {
      this._fornecedorLoja = undefined
      alert('Carrinho vazio')
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