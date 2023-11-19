import { Float } from "react-native/Libraries/Types/CodegenTypes";
import { Iadicional, Ivariante } from "../interfaces/produto_types";

export default class ItemPedido {
  _nome_produto: string
  _variante: Ivariante
  _adicionais: Array<Iadicional>
  _quantidade: number
  _valor_total: Float

  _observacao: string

  constructor(nomeProduto: string, variante: Ivariante, adicionais: Array<Iadicional>, quantidade: number, observacao: string) {
    this._nome_produto = nomeProduto
    this._variante = variante
    this._adicionais = adicionais
    this._quantidade = quantidade
    this._valor_total = this.calcular_valor_total()

    this._observacao = observacao
  }

  calcular_valor_total(): Float {
    let soma: Float = 0.00

    soma += this._variante.valor

    this._adicionais.forEach(a => {
      soma += a.valor
    })

    soma * this._quantidade

    return soma
  }
}