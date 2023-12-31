import { Float } from "react-native/Libraries/Types/CodegenTypes";
import { Iadicional, Ivariante } from "../interfaces/produto_types";

export default class ItemPedido {
  _id: number
  _fornecedor: string
  _nome_produto: string
  _variante: Ivariante
  _adicionais: Array<Iadicional>
  _quantidade: number
  _valor_total: Float

  _observacao: string

  constructor(nomeProduto: string, variante: Ivariante, adicionais: Array<Iadicional>, quantidade: number, valorTotal: Float, observacao: string, fornecedor: string) {
    this._id = Math.floor(Math.random() * 9999999)
    this._fornecedor = fornecedor

    this._nome_produto = nomeProduto
    this._variante = variante
    this._adicionais = adicionais
    this._quantidade = quantidade
    this._valor_total = valorTotal

    this._observacao = observacao
  }
}