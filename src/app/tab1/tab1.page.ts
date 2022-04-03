import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  metodos = [
    {
      metodo: 'Mapas mentais',
      url: '/assets/mapa_mental/metodo_01_capa.jpg',
      pagina: '/metodo01'
    },

    {
      metodo: 'Resumo',
      url: '/assets/resumo/resumo_capa.png',
      pagina: '/metodo02'
    },

    {
      metodo: 'Técnica Pomodoro',
      url: '/assets/tecnica_pomodoro/capa.webp',
      pagina: '/metodo03'
    },

    {
      metodo: 'Construção de tabelas',
      url: '/assets/construcao_tabelas/capa.png',
      pagina: '/metodo04'
    },

    {
      metodo: 'Testes prático',
      url: '/assets/testes_praticos/capa.png',
      pagina: '/metodo05'
    },

    {
      metodo: 'Autointerrogação',
      url: '/assets/autointerrogacao/capa.webp',
      pagina: '/metodo06'
    },

    {
      metodo: 'Memorização Mnemônica',
      url: '/assets/memorizacao_mnemonica/capa.png',
      pagina: '/metodo07'
    },

    {
      metodo: 'Estudo intercalado',
      url: '/assets/estudo_intercalado/capa.png',
      pagina: '/metodo08'
    }

  ];

  constructor() {}

}
