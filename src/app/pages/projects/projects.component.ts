import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {
  exampleCards=[
    {
      img:'https://images.getmimo.com/icons/0585799f-ec2b-4c2f-9994-a89521663917',
      title:'Project 1: Your Personal HomePage',
      description:'Build and launch your first website on the web'
    },
    {
      img:'https://images.getmimo.com/icons/627cde12-688d-4a12-adbf-051dab09971f',
      title:'Project 2: Blog Post Publishing Page',
      description: 'Code a blog publishing webpage to practice your skills on links and buttons.'
    },
    {
      img:'https://images.getmimo.com/icons/ef337520-ca7f-4b61-a180-d9320bfdf8b4',
      title: 'Poject 3: User Profile',
      description: 'User profiles are an essential feature for website billions of people use. Code this feature on a webpage of you own'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
