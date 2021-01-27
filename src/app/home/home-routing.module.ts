import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePage} from './home.page';

const routes: Routes = [
    {
        path: '',
        component: HomePage,
    },
    {
        path: 'cursos/:id',
        loadChildren: () => import('../cursos/cursos.module').then(m => m.CursosPageModule)
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomePageRoutingModule {
}
