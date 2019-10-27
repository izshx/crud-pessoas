import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PessoaService } from '../pessoa.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cad-pessoa',
  templateUrl: './cad-pessoa.component.html',
  styleUrls: ['./cad-pessoa.component.css']
})
export class CadPessoaComponent implements OnInit {
  public cadForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private pessoaService: PessoaService,
    private route: ActivatedRoute) {
    this.cadForm = this.formBuilder.group({
      nome: '',
      idade: '',
      profissao: ''
    });
   }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    if(id){
      this.pessoaService.obterPessoa(id).subscribe(r => {
        this.cadForm.controls.nome.setValue(r.nome);
        this.cadForm.controls.idade.setValue(r.idade);
        this.cadForm.controls.profissao.setValue(r.profissao);
      })
    }

  }

  cadastrar(){
    let id = this.route.snapshot.params.id;
    let pessoa = {
      nome: this.cadForm.value.nome,
      idade: this.cadForm.value.idade,
      profissao: this.cadForm.value.profissao
    };

    if(id){
      this.pessoaService.atualizarPessoa({...pessoa, id}).subscribe();
    }else {
      this.pessoaService.cadPessoa(pessoa).subscribe();
    }
  }

}
