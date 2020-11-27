import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.scss']
})
export class ProfessoresComponent implements OnInit {

  public titulo = 'Professores';
  public professorSelecionado: string;


  public professores = [
    {id:1 ,nome: 'Lauro', disciplina: 'matematica'},
    {id:2 ,nome: 'Roberto', disciplina: 'fisica'},
    {id:3 ,nome: 'Ronaldo', disciplina: 'portugues'},
    {id:4 ,nome: 'Rodrigo', disciplina: 'ingles'},
    {id:5 ,nome: 'Alexandre', disciplina: 'programação'}
  ];

  professorSelect(professor:any){
    this.professorSelecionado = professor.nome;
  }

  voltar(){
    this.professorSelecionado = '';
  }

  constructor() { }

  ngOnInit() {
  }

}
