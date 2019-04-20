import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Cadastro } from '../models/cadastro';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  cadastroSelecionado: Cadastro;
  cadastros: Cadastro[];

  readonly URL_API = 'http://localhost:3001/api/cadastro';

  constructor(private http: HttpClient) {
    this.cadastroSelecionado = new Cadastro();
  }

  getCadastros() {
    return this.http.get(this.URL_API);
  }

  postCadastro(Cadastro: Cadastro) {
    return this.http.post(this.URL_API, Cadastro)
      .subscribe(res => {
        console.log(res);
      });
  }

}
