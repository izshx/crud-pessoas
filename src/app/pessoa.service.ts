import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PessoaService {

  constructor(private httpClient: HttpClient) { 
  }


  obterPessoas(): Observable<any> {
    return this.httpClient.get('http://localhost:8000/api/pessoas');
  }

  cadPessoa(pessoa: Object): Observable<any> {
    return this.httpClient.post('http://localhost:8000/api/pessoas', pessoa);
  }

  deletarPessoa(id): Observable<any> {
    return this.httpClient.delete(`http://localhost:8000/api/pessoas/${id}`);
  }

  obterPessoa(id): Observable<any>{
    return this.httpClient.get(`http://localhost:8000/api/pessoas/${id}`);

  }

  atualizarPessoa(pessoa) {
    return this.httpClient.put(`http://localhost:8000/api/pessoas/${pessoa.id}`, pessoa);
  }


}
