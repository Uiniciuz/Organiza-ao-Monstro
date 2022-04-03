import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'metodo01',
    loadChildren: () => import('./metodos/metodo01/metodo01.module').then( m => m.Metodo01PageModule)
  },
  {
    path: 'metodo02',
    loadChildren: () => import('./metodos/metodo02/metodo02.module').then( m => m.Metodo02PageModule)
  },
  {
    path: 'metodo03',
    loadChildren: () => import('./metodos/metodos03/metodos03.module').then( m => m.Metodos03PageModule)
  },
  {
    path: 'metodo04',
    loadChildren: () => import('./metodos/metodo04/metodo04.module').then( m => m.Metodo04PageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'metodo05',
    loadChildren: () => import('./metodos/metodo05/metodo05.module').then( m => m.Metodo05PageModule)
  },
  {
    path: 'metodo06',
    loadChildren: () => import('./metodos/metodo06/metodo06.module').then( m => m.Metodo06PageModule)
  },
  {
    path: 'metodo07',
    loadChildren: () => import('./metodos/metodo07/metodo07.module').then( m => m.Metodo07PageModule)
  },
  {
    path: 'metodo08',
    loadChildren: () => import('./metodos/metodo08/metodo08.module').then( m => m.Metodo08PageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
