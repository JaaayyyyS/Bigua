import { IFiltro } from "../interfaces/filtros_types";
import Produto from "./produto";

export default class Loja{
  _nome: string;
  _descricao: string;
  _foto_path: NodeRequire;
  _loja_Aberta: boolean;
  
  _cardapio: Array<Produto>
  _filtros: Array<string> = []

  constructor(nome: string, descricao: string, foto_path: NodeRequire, cardapio?: Array<Produto>, filtros?: Array<IFiltro>) {
    this._nome = nome;
    this._descricao = descricao;
    this._foto_path = foto_path;
    this._loja_Aberta = true;

    cardapio? this._cardapio = cardapio : this._cardapio = []
    this.calcular_filtros()
  }

  add_produto(produto: Produto) {
    this._cardapio.push(produto);
  }

  remove_produto(produtoToRemove: Produto) {
    this._cardapio.filter(p => p._nome !== produtoToRemove._nome);
  }

  calcular_filtros() {
    this._filtros.splice(0, this._filtros.length)

    this._cardapio.forEach(p => {
      if (p._filtro) {
        if (!this._filtros.includes(p._filtro)) {
          console.log(`Adicioando filtro (${p._filtro}) a loja: ${this._nome}`)
          this._filtros.push(p._filtro)
        } else {
          console.log(`O filtro (${p._filtro}) já foi adicionado a loja ${this._nome}`)
        }
      }
    })
  }
}