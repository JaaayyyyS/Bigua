import Loja from "../classes/loja";
import Produto from "../classes/produto";
import Lojas from "./lojas_DB";

export default function inicializar_database() {

  Lojas.add_loja(new Loja(
    'Piazza Pizzeria', 
    'Descrição longa do estabelecimento',
    require('../../../assets/Images/pizza.jpg'),
    [
      new Produto(
        'Pão Italianinho',
        'Descrição informativa do produto',
        require("../../../assets/Images/pizza.jpg"),
        [
          {nome: "Italianinho", valor: 15.00},
        ],
        [],
        'Pães'
      ),
      new Produto(
        'Pão Sourdough',
        'Descrição informativa do produto',
        require("../../../assets/Images/pizza.jpg"),
        [
          {nome: "Sourdough", valor: 20.00},
        ],
        [],
        'Pães'
      ),
      new Produto(
        'Calabrese',
        'Descrição informativa do produto',
        require("../../../assets/Images/pizza.jpg"),
        [
          {nome: "4 Fatias", valor: 32.00},
          {nome: "6 Fatias", valor: 52.00},
        ],
        [
          {nome: "Mussarela", valor: 8.00},
          {nome: "Calabresa", valor: 8.00},
          {nome: "Peperoni", valor: 10.00},
          {nome: "Gorgonzola", valor: 8.00},
        ],
        'Pizzas'
      ),
    ]
  ))

  Lojas.add_loja(new Loja(
    'Café Tupy', 
    'Descrição longa do estabelecimento',
    require('../../../assets/Images/cafe.jpg'),
    [
      new Produto(
        'Café',
        'Descrição informativa do produto',
        require("../../../assets/Images/pizza.jpg"),
        [
          {nome: "Café", valor: 8.00},
        ],
        [],
        
      ),
    ]
  ))

  Lojas.add_loja(new Loja(
    'Convés', 
    'Descrição longa do estabelecimento',
    require('../../../assets/Images/prato.jpg')
  ))

  Lojas.add_loja(new Loja(
    'Hamburgueria', 
    'Descrição longa do estabelecimento',
    require('../../../assets/Images/pizza.jpg')
  ))
}