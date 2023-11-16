export default class Produto {
  _nome: string;
  _descricao: string;
  _foto_path: NodeRequire;

  _variantes: Array<string>;
  _adicionais: Array<string>;

  constructor(nome: string, descricao: string, foto_path: NodeRequire, variantes: Array<string>, adicionais: Array<string>) {
    this._nome = nome;
    this._descricao = descricao;
    this._foto_path = foto_path;

    this._variantes = variantes;
    this._adicionais = adicionais;
  }
}