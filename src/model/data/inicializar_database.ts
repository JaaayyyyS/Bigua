import Loja from "../classes/loja";
import Produto from "../classes/produto";
import Lojas from "./lojas_DB";

export default function inicializar_database() {
  const cardapio_piazza_pizzeria: Array<Produto> = [
    new Produto(
      'Calabrese',
      'Pizza de calabresa, queijo, azeitona e pestro',
      require("../../../assets/Images/pizza.jpg"),
      [],
      [],
    ),
    new Produto(
      'Calabrese',
      'Pizza de calabresa, queijo, azeitona e pestro',
      require("../../../assets/Images/pizza.jpg"),
      [],
      [],
    ),
    new Produto(
      'Calabrese',
      'Pizza de calabresa, queijo, azeitona e pestro',
      require("../../../assets/Images/pizza.jpg"),
      [],
      [],
    ),
    new Produto(
      'Calabrese',
      'Pizza de calabresa, queijo, azeitona e pestro',
      require("../../../assets/Images/pizza.jpg"),
      [],
      [],
    ),
    new Produto(
      'Calabrese',
      'Pizza de calabresa, queijo, azeitona e pestro',
      require("../../../assets/Images/pizza.jpg"),
      [],
      [],
    ),
    new Produto(
      'Calabrese',
      'Pizza de calabresa, queijo, azeitona e pestro',
      require("../../../assets/Images/pizza.jpg"),
      [],
      [],
    ),
  ]

  const cardapio_cafe_tupy: Array<Produto> = [
    new Produto(
      'Café',
      'Cafézin gostoso expresso leite de boi',
      require("../../../assets/Images/cafe.jpg"),
      [],
      [],
    ),
    new Produto(
      'Café',
      'Cafézin gostoso expresso leite de boi',
      require("../../../assets/Images/cafe.jpg"),
      [],
      [],
    ),
    new Produto(
      'Café',
      'Cafézin gostoso expresso leite de boi',
      require("../../../assets/Images/cafe.jpg"),
      [],
      [],
    ),
    new Produto(
      'Café',
      'Cafézin gostoso expresso leite de boi',
      require("../../../assets/Images/cafe.jpg"),
      [],
      [],
    ),
    new Produto(
      'Café',
      'Cafézin gostoso expresso leite de boi',
      require("../../../assets/Images/cafe.jpg"),
      [],
      [],
    ),
    new Produto(
      'Café',
      'Cafézin gostoso expresso leite de boi',
      require("../../../assets/Images/cafe.jpg"),
      [],
      [],
    ),
    new Produto(
      'Café',
      'Cafézin gostoso expresso leite de boi',
      require("../../../assets/Images/cafe.jpg"),
      [],
      [],
    ),
  ]

  const cardapio_conves: Array<Produto> = [
    new Produto(
      'Frutos do mar',
      'Lula molusco, bob esponja, patrick estrela e o seu sirigueijo',
      require("../../../assets/Images/prato.jpg"),
      [],
      [],
    ),
    new Produto(
      'Frutos do mar',
      'Lula molusco, bob esponja, patrick estrela e o seu sirigueijo',
      require("../../../assets/Images/prato.jpg"),
      [],
      [],
    ),
    new Produto(
      'Frutos do mar',
      'Lula molusco, bob esponja, patrick estrela e o seu sirigueijo',
      require("../../../assets/Images/prato.jpg"),
      [],
      [],
    ),
    new Produto(
      'Frutos do mar',
      'Lula molusco, bob esponja, patrick estrela e o seu sirigueijo',
      require("../../../assets/Images/prato.jpg"),
      [],
      [],
    ),
    new Produto(
      'Frutos do mar',
      'Lula molusco, bob esponja, patrick estrela e o seu sirigueijo',
      require("../../../assets/Images/prato.jpg"),
      [],
      [],
    ),
    new Produto(
      'Frutos do mar',
      'Lula molusco, bob esponja, patrick estrela e o seu sirigueijo',
      require("../../../assets/Images/prato.jpg"),
      [],
      [],
    ),
    new Produto(
      'Frutos do mar',
      'Lula molusco, bob esponja, patrick estrela e o seu sirigueijo',
      require("../../../assets/Images/prato.jpg"),
      [],
      [],
    ),
  ]


  Lojas.add_loja(new Loja(
    'Piazza Pizzeria', 
    'Descrição longa do estabelecimento',
    require('../../../assets/Images/PiazzaPizzeriaFoto.png')
  ))

  Lojas.add_loja(new Loja(
    'Café Tupy', 
    'Descrição longa do estabelecimento',
    require('../../../assets/Images/PiazzaPizzeriaFoto.png')
  ))

  Lojas.add_loja(new Loja(
    'Convés', 
    'Descrição longa do estabelecimento',
    require('../../../assets/Images/PiazzaPizzeriaFoto.png')
  ))

  cardapio_piazza_pizzeria.forEach(p => {
    Lojas.return_loja("Piazza Pizzeria").add_produto(p)
  })
  cardapio_cafe_tupy.forEach(p => {
    Lojas.return_loja("Café Tupy").add_produto(p)
  })
  cardapio_conves.forEach(p => {
    Lojas.return_loja("Convés").add_produto(p)
  })
}