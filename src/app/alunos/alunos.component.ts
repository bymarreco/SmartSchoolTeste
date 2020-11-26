import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public titulo = 'Alunos';

  public alunos = [
    {id:1, nome: 'Paula', sobrenome: 'Kent', telefone:332255},
    {id:2, nome: 'Marta', sobrenome: 'Isabela', telefone:322255},
    {id:3, nome: 'Laura', sobrenome: 'Antonia', telefone:342255},
    {id:4, nome: 'Luiza', sobrenome: 'Maria', telefone:335255},
    {id:5, nome: 'Lucas', sobrenome: 'Machado', telefone:362255},
    {id:6, nome: 'Pedro', sobrenome: 'Alvarez', telefone:338255},
    {id:7, nome: 'Paulo', sobrenome: 'José', telefone:332259}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
