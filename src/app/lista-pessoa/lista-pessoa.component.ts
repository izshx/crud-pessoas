import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.component.html',
  styleUrls: ['./lista-pessoa.component.css']
})
export class ListaPessoaComponent implements OnInit {
  public pessoas$: Observable<any>;

  constructor(private pessoaService: PessoaService,
    private router: Router) {
   
  }

  ngOnInit() {
    this.pessoas$ = this.pessoaService.obterPessoas()
    .pipe(map(response => response))
    
  }

  deletar(id) {
    this.pessoaService.deletarPessoa(id).subscribe()
  }

  editar(id){
    this.router.navigate([`cad-pessoa/${id}`]);
  }
}
