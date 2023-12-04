import Loja from "../classes/loja";

export default class Lojas {
  private static _lojas: Array<Loja> = [];


  static add_loja(loja: Loja) {
    Lojas._lojas.push(loja);
  }

  static remove_loja(lojaToRemove: Loja) {
    Lojas._lojas.filter(l => l._nome !== lojaToRemove._nome)
  }

  static return_loja(nome_loja: string) {
    console.log(`Retornando loja: ${nome_loja}`)
    return Lojas._lojas.filter(l => l._nome === nome_loja)[0]
  }

  static returnAll_loja() {
    return Lojas._lojas
  }

  static DEBUG_mostrar_lojas() {
    Lojas._lojas.forEach(l => {
      console.log(l);
    })
  }
}