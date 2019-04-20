import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule, NgForm } from '@angular/forms'

import { CadastroService } from 'src/app/services/cadastro.service';
import { Cadastro } from 'src/app/models/cadastro';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  providers: [CadastroService]
})
export class CadastroComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private cadastroService: CadastroService,
  ) { }

  cadastro: any = [];

  @Input()
  formCadastro: FormGroup;

  createForm() {
    this.formCadastro = this.formBuilder.group({
      nome: [],
      telefone: [],
    });
  }

  getCadastros() {
    this.cadastroService.getCadastros()
      .subscribe(res => {
        this.cadastroService.cadastros = res as Cadastro[];
      })
  }

  salvarCadastro() {
    this.cadastroService.postCadastro(this.formCadastro.value);
    this.getCadastros();
   }

  

  ngOnInit() {
    this.createForm();
    this.getCadastros();
  }

}
