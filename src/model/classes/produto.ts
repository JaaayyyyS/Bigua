import { Float } from "react-native/Libraries/Types/CodegenTypes";
import { IFiltro } from "../interfaces/filtros_types";


interface Ivariante {
  nome: string,
  valor: Float,
}

interface Iadicional {
  nome: string,
  valor: Float,
}

export default class Produto {
  _nome: string;
  _descricao: string;
  _foto_path: NodeRequire;

  _variantes: Array<Ivariante>;
  _adicionais: Array<Iadicional>;

  _filtro?: string;

  constructor(nome: string, descricao: string, foto_path: NodeRequire, variantes: Array<Ivariante>, adicionais: Array<Iadicional>, filtro?: string) {
    this._nome = nome;
    this._descricao = descricao;
    this._foto_path = foto_path;

    this._variantes = variantes;
    this._adicionais = adicionais;

    this._filtro = filtro
  }
}