export default class Produto {
  _nome: string;
  _descricao: string;
  _foto_path: NodeRequire;

  constructor(nome: string, descricao: string, foto_path: NodeRequire) {
    this._nome = nome;
    this._descricao = descricao;
    this._foto_path = foto_path;
  }
}