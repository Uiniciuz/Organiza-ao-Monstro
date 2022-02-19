import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  metodos = [
    {
      metodo: 'Método 01',
      url: '/assets/metodo 01.jpg',
      pagina: '/metodo01'
    },

    {
      metodo: 'Método 02',
      url: '/assets/metodo 02.jpg',
      pagina: '/metodo02'
    },

    {
      metodo: 'Método 03',
      url: '/assets/metodo 03.jpg',
      pagina: '/metodo03'
    },

    {
      metodo: 'Método 04',
      url: '/assets/metodo 04.jpg',
      pagina: '/metodo04'
    }
  ];

  constructor() {}

}
