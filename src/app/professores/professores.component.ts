import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Professor } from '../models/professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.scss']
})
export class ProfessoresComponent implements OnInit {

  public professorForm:FormGroup;
  public titulo = 'Professores';
  public professorSelecionado: Professor;


  public professores = [
    {id:1 ,nome: 'Lauro', disciplina: 'matematica'},
    {id:2 ,nome: 'Roberto', disciplina: 'fisica'},
    {id:3 ,nome: 'Ronaldo', disciplina: 'portugues'},
    {id:4 ,nome: 'Rodrigo', disciplina: 'ingles'},
    {id:5 ,nome: 'Alexandre', disciplina: 'programação'}
  ];

  constructor(private fb:FormBuilder) {
    this.criarForm();
   }

  ngOnInit() {
  }

  criarForm(){
    this.professorForm = this.fb.group({
      nome:['',Validators.required],
      disciplina:['',Validators.required]
    });
  }

  professorSubmit(){
    console.log(this.professorForm.value);
  }

  professorSelect(professor:Professor){
    this.professorSelecionado = professor;
    this.professorForm.patchValue(professor);
  }

  voltar(){
    this.professorSelecionado = null;
  }
  
}
