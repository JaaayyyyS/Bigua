import Produto from "./produto";

export default class Loja{
  _nome: string;
  _descricao: string;
  _foto_path: NodeRequire;
  _loja_Aberta: boolean;
  
  _cardapio: Array<Produto> = [];

  constructor(nome: string, descricao: string, foto_path: NodeRequire) {
    this._nome = nome;
    this._descricao = descricao;
    this._foto_path = foto_path;
    this._loja_Aberta = true;
  }

  add_produto(produto: Produto) {
    this._cardapio.push(produto);
  }

  remove_produto(produtoToRemove: Produto) {
    this._cardapio.filter(p => p._nome !== produtoToRemove._nome);
  }
}