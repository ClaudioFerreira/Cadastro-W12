import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule, NgForm, Form, FormControl } from '@angular/forms'

import { CadastroService } from 'src/app/services/cadastro.service';
import { Cadastro } from 'src/app/models/cadastro';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  providers: [CadastroService]
})
export class CadastroComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private mensagem: ToastrService,
    private cadastroService: CadastroService,
  ) { }

  cadastro: any = [];

  @Input()
  formCadastro: FormGroup;

  createForm() {
    this.formCadastro = this.formBuilder.group({
      _id: [],
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
    if (
      this.formCadastro.value.nome == "" || this.formCadastro.value.nome == undefined ||
      this.formCadastro.value.telefone == "" || this.formCadastro.value.telefone == undefined
    ) {
      this.mensagem.error("Todos os capos são obrigatorios.", "Erro");
    } else {
      if (this.formCadastro.value._id == "" || this.formCadastro.value._id == undefined) {
        this.cadastroService.postCadastro(this.formCadastro.value);
        this.mensagem.success(" Sucesso ao adiconar novo contato! ", 'Adicionado!');
      }
      else {
        this.cadastroService.updateCadastro(this.formCadastro.value);
        this.mensagem.info(" Sucesso ao editar o contato! ", 'Editado!');
      }
      this.resetForm(this.formCadastro);
    }

    this.getCadastros();

  }

  editCadastro(item) {

    this.formCadastro.patchValue({
      _id: item._id,
      nome: item.nome,
      telefone: item.telefone
    });

  }

  deleteCadastro(id) {
    this.cadastroService.destroyCadastro(id).subscribe(res => {
      this.mensagem.warning(" Sucesso ao remover o contato! ", 'Removido!');
    });
  }

  resetForm(formCadastro) {
    if (formCadastro)
      formCadastro.reset();
    this.cadastroService.cadastroSelecionado = {
      _id: "",
      nome: "",
      telefone: "",
    }
  }

  ngOnInit() {
    this.createForm();
    this.getCadastros();
  }

}
