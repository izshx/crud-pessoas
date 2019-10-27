import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { CadPessoaComponent } from './cad-pessoa/cad-pessoa.component';
import { ListaPessoaComponent } from './lista-pessoa/lista-pessoa.component';

const routes: Routes = [
    {
        path: 'cad-pessoa', component: CadPessoaComponent
    },
    {
        path: 'lista-pessoa', component: ListaPessoaComponent
    },
    {
        path: 'cad-pessoa/:id', component: CadPessoaComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule {

}