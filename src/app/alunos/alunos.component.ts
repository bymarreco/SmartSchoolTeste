import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Aluno } from '../models/aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public modalRef: BsModalRef;
  public alunoForm:FormGroup;
  public titulo = 'Alunos';
  public alunoSelecionado: Aluno;
  public textSimple: string;

  public alunos = [
    {id:1, nome: 'Paula', sobrenome: 'Kent', telefone:332255},
    {id:2, nome: 'Marta', sobrenome: 'Isabela', telefone:322255},
    {id:3, nome: 'Laura', sobrenome: 'Antonia', telefone:342255},
    {id:4, nome: 'Luiza', sobrenome: 'Maria', telefone:335255},
    {id:5, nome: 'Lucas', sobrenome: 'Machado', telefone:362255},
    {id:6, nome: 'Pedro', sobrenome: 'Alvarez', telefone:338255},
    {id:7, nome: 'Paulo', sobrenome: 'José', telefone:332259}
  ];

 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb:FormBuilder, 
    private modalService: BsModalService) { 
    this.criarForm();
  }

  ngOnInit(): {
  }

  criarForm(){
    this.alunoForm = this.fb.group({
      nome:['',Validators.required],
      sobrenome:['',Validators.required],
      telefone:['',Validators.required]
    });
  }

  alunoSubmit(){
    console.log(this.alunoForm.value);
  }

  alunoSelect(aluno:Aluno){
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }

  voltar(){
    this.alunoSelecionado = null;
  }

}
