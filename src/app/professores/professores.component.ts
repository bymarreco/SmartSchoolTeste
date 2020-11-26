import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.scss']
})
export class ProfessoresComponent implements OnInit {

  titulo = 'Professores';

  public professores = [
    {nome: 'Lauro'},
    {nome: 'Roberto'},
    {nome: 'Ronaldo'},
    {nome: 'Rodrigo'},
    {nome: 'Alexandre'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
